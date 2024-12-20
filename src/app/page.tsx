import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TypographyH1 } from '@/typography/TypographyH1';
import { TypographyH2 } from '@/typography/TypographyH2';
import { TypographyP } from '@/typography/TypographyP';

export default function Home() {
  return (
    <>
      <TypographyH1>Home</TypographyH1>
      <TypographyP>W dates!</TypographyP>
      <TypographyH2>Featured dates!</TypographyH2>
      <TypographyP>&quot;deze gaan echt hard 💯💯&quot; - iedereen</TypographyP>
      <Carousel className="w-full flex flex-row max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
