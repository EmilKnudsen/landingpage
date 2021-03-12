import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

function Testimonials() {
  return(
    <section className="testimonials">
      <TestimonialCard image="https://picsum.photos/200/200?random=1" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus nulla provident, reiciendis veritatis omnis quasi fugit! Ipsum similique dignissimos, voluptatibus sit maiores ipsam totam animi quia eaque earum placeat!"/>
      <TestimonialCard image="https://picsum.photos/200/200?random=2" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus nulla provident, reiciendis veritatis omnis quasi fugit! Ipsum similique dignissimos, voluptatibus sit maiores ipsam totam animi quia eaque earum placeat!"/>
      <TestimonialCard image="https://picsum.photos/200/200?random=3" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus nulla provident, reiciendis veritatis omnis quasi fugit! Ipsum similique dignissimos, voluptatibus sit maiores ipsam totam animi quia eaque earum placeat!"/>
    </section>
  )
}

export default Testimonials;