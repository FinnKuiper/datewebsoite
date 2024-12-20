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
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { TypographyH1 } from '@/typography/TypographyH1';
import { TypographyH2 } from '@/typography/TypographyH2';
import { TypographyP } from '@/typography/TypographyP';
import Image from 'next/image';

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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
