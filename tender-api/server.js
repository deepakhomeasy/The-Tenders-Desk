import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
app.use(cors());

app.get("/bihar-tenders", async (req, res) => {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true, // 🔥 production mode (fast)
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // 👉 Open page
    await page.goto(
      "https://eproc2.bihar.gov.in/EPSV2Web/openarea/tenderListingPage.action#latestTenders",
      {
        waitUntil: "networkidle2",
        timeout: 0,
      }
    );

    // 👉 Wait for table load
    await page.waitForSelector("table tbody tr");

    let prevCount = 0;

    // 👉 Load More Loop
    while (true) {
      const currentCount = await page.$$eval(
        "table tbody tr",
        (rows) => rows.length
      );

      console.log("Rows:", currentCount);

      // 🔴 Stop conditions
      if (currentCount >= 300) break; // optional limit
      if (currentCount === prevCount) break;

      prevCount = currentCount;

      try {
        // 👉 Angular button click FIX
        const clicked = await page.evaluate(() => {
          const moreBtn = document.querySelector(
            'a[ng-click="clickForMoreTender()"]'
          );

          if (moreBtn) {
            moreBtn.dispatchEvent(
              new MouseEvent("click", { bubbles: true })
            );
            return true;
          }

          return false;
        });

        if (!clicked) {
          console.log("No More button found");
          break;
        }

        console.log("Clicked Load More...");

        // 👉 Wait for new rows to load
        await page.waitForFunction(
          (prev) =>
            document.querySelectorAll("table tbody tr").length > prev,
          { timeout: 10000 },
          prevCount
        );

        // 👉 Extra wait (important for slow site)
        await new Promise((r) => setTimeout(r, 3000));

      } catch (err) {
        console.log("Load more stopped:", err.message);
        break;
      }
    }

    // 👉 Extract data
    const tenders = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("table tbody tr"))
        .map((row) => {
          const cols = row.querySelectorAll("td");

          if (cols.length < 7) return null;

          return {
            slNo: cols[0]?.innerText.trim(),
            tenderId: cols[1]?.innerText.trim(),
            description: cols[2]?.innerText.trim(),
            referenceNo: cols[3]?.innerText.trim(),
            department: cols[4]?.innerText.trim(),
            endDate: cols[5]?.innerText.trim(),
            timeLeft: cols[6]?.innerText.trim(),
          };
        })
        .filter(Boolean);
    });

    console.log("✅ FINAL COUNT:", tenders.length);

    await browser.close();

    res.json({
      total: tenders.length,
      data: tenders,
    });

  } catch (err) {
    console.error("❌ ERROR:", err);

    if (browser) await browser.close();

    res.status(500).json({
      error: "Scraping failed",
      details: err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});