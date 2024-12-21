'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { TypographyP } from '@/typography/TypographyP';
import DateCard from '../dateCard';

interface Date {
  id: React.Key | null | undefined;
  date_name: string;
  date_description: string;
  cover_image: string;
}

interface DateCarouselProps {
  dates: Date[];
}

export default function DateCarousel({ dates }: DateCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Carousel setApi={setApi} className="w-full flex flex-row max-w-xs">
          <CarouselContent>
            {dates.map(
              (date: {
                id: React.Key | null | undefined;
                date_name: string;
                date_description: string;
                cover_image: string;
              }) => (
                <CarouselItem key={date.id}>
                  <DateCard
                    name={date.date_name}
                    description={date.date_description}
                    image={date.cover_image}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
        <div>
          <TypographyP>
            {current} / {count}
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
