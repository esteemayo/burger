'use client';

import { useEffect, useRef } from 'react';

import Header from '@/components/header/Header';
import Menus from '@/components/menus/Menus';
import Features from '@/components/features/Features';
import Offer from '@/components/offer/Offer';
import NewsLetter from '@/components/newsletter/NewsLetter';

import { useCloseSidebar } from '@/hooks/useCloseSidebar';

const HomeClient = () => {
  const { closeHandler } = useCloseSidebar();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef?.current as Element;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          containerRef?.current?.onload;
        }
      });
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} onClick={closeHandler}>
      <Header />
      <Features />
      <Menus />
      <Offer />
      <NewsLetter />
    </div>
  );
};

export default HomeClient;
