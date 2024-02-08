"use client";

import { Card, CardContent, Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@ems/ui";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay"

interface Props {
  images: string[];
}

export function EventCarousel({ images }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full h-96" plugins={[
      Autoplay({
        delay: 5000,
      })
    ]}>
      <CarouselContent className="h-96">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-96">
            <Card className="h-96">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))
        }
      </CarouselContent >
    </Carousel >
  )
}
