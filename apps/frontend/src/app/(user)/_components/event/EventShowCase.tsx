import { EventCarousel } from "./EventCarousel"

export async function getMostHypedEventImages() {
  return ["NEED", "TO", "IMPLEMENT", "TODO"]
}

export async function EventShowCase() {
  const images = await getMostHypedEventImages();

  return <div className="h-96">
    <EventCarousel images={images} />
  </div>
}
