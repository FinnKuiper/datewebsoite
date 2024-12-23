import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function DateCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={`https://admindate.finnkuiper.boo/assets/${image}`}
          alt={name}
          width={300}
          height={300}
          className="rounded-lg h-48"
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Checken</Button>
      </CardFooter>
    </Card>
  );
}
