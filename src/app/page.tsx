import { TypographyH1 } from '@/typography/TypographyH1';
import { TypographyH2 } from '@/typography/TypographyH2';
import { TypographyP } from '@/typography/TypographyP';
import DateCarousel from '@/components/home/dateCarousel';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

interface Date {
  id: string;
  date_name: string;
  date_description: string;
  cover_image: string;
}

async function getDates(): Promise<Date[]> {
  const response = await directus.request(readItems('date'));
  console.log(response);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response.map((item: Record<string, any>) => ({
    id: item.id,
    date_name: item.date_name,
    date_description: item.date_description,
    cover_image: item.cover_image,
  }));
}

export default async function Home() {
  const dates = await getDates();
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
        <DateCarousel dates={dates} />
      </div>
    </>
  );
}
