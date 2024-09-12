'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

import Features from '@/components/features/Features';
import Menus from '@/components/menus/Menus';
import NewsLetter from '@/components/newsletter/NewsLetter';
import Header from '@/components/header/Header';

const Offer = dynamic(() => import('@/components/offer/Offer'));

const HomeClient = () => {
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
    <div ref={containerRef}>
      <Header />
      <Features />
      <Menus />
      <Offer />
      <NewsLetter />
    </div>
  );
};

export default HomeClient;
