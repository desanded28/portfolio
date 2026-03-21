"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -12% 0px" }
    );

    // observe all animatable elements
    document.querySelectorAll(".fade-up, .slide-left, .slide-right, .stagger-children").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
