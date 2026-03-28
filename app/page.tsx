"use client";

import { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import ProblemSection from "../components/ProblemSection";
import ConflictCards from "../components/ConflictCards";
import PipelineSection from "../components/PipelineSection";
import ResearchSection from "../components/ResearchSection";
import ResultsSection from "../components/ResultsSection";
import StackSection from "../components/StackSection";
import Footer from "../components/Footer";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <DashboardPreview />
      <ProblemSection />
      <ConflictCards />
      <PipelineSection />
      <ResultsSection />
      <ResearchSection />
      <StackSection />
      <Footer />
    </main>
  );
}
