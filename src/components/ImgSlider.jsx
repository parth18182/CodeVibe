import React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function ImgSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const images = [
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
  ]
  return (
    <div className="w-full relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {/* CONTENT */}
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="w-full h-150 overflow-hidden rounded-xl">
                <img
                  src={img}
                  className="w-full h-100 md:h-125 object-cover"
                  alt={`slide-${index}`}
                />
              </div>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 z-50 bg-white/70 hover:bg-white shadow-md rounded-full" />
        <CarouselNext className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 z-50 bg-white/70 hover:bg-white shadow-md rounded-full" />
      </Carousel>

    </div>
  )
}

export default ImgSlider