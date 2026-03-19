import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Platform from "./components/Platform";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import KnowledgeHub from "./components/KnowledgeHub";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Services1 from "./Services"; 
import Tenders from "./pages/Tenders";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Platform />
      <Industries />
      <Testimonials />
      <KnowledgeHub />
      
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services1 />} />
       <Route path="/tenders" element={<Tenders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <CTA />
      <Footer />
    </div>
  );
}
