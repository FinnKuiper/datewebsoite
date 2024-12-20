'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { TypographyH1 } from '@/typography/TypographyH1';
import { TypographyH2 } from '@/typography/TypographyH2';
import { TypographyP } from '@/typography/TypographyP';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
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
    <>
      <header>
        <TypographyH1>Home</TypographyH1>
        <TypographyP>W dates!</TypographyP>
      </header>
      <div className="flex flex-col gap-4">
        <div>
          <TypographyH2>Featured dates!</TypographyH2>
          <TypographyP>
            &quot;deze gaan echt hard 💯💯&quot; - iedereen
          </TypographyP>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Carousel setApi={setApi} className="w-full flex flex-row max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Dino Date</CardTitle>
                      <CardDescription>Gaat echt fk hard</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/dino-date.jpeg"
                        alt="Dino Date"
                        className="rounded-lg"
                        width={300}
                        height={200}
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Checken</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div>
            <TypographyP>
              {current} / {count}
            </TypographyP>
          </div>
        </div>
      </div>
    </>
  );
}
