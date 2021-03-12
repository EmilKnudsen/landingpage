import Carousel from "react-grid-carousel";
import CarouselItem from "./CarouselItem";

function Gallery() {
  return (
    <Carousel 
    cols={1} 
    rows={1} 
    gap={0} 
    autoplay={3000}
    loop> 
      <Carousel.Item>
      <CarouselItem image="https://picsum.photos/1920/1080?random=1" copy="Velkommen til!" ctaLink="/founders" ctaCopy="Klik her" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselItem image="https://picsum.photos/1920/1080?random=2" copy="Vær med fra starten!" ctaLink="/founders" ctaCopy="Klik her" />
      </Carousel.Item>
      <Carousel.Item>
      <CarouselItem image="https://picsum.photos/1920/1080?random=3" copy="Få gratis nyheder!" ctaLink="/founders" ctaCopy="Klik her" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;