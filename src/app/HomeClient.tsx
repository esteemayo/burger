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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = containerRef?.current as Element;
          observer.unobserve(element);
          containerRef?.current?.onload;
        }
      });
    });

    if (containerRef?.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef?.current) {
        observer.unobserve(containerRef.current);
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
