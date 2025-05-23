// filepath: /home/kim/Documents/stripe1/react-stripe-payment/frontend/src/components/carousel.jsx
import { useState } from "react";
import "./../App.css";

const offerItems = [
  { id: 1, name: "Blue Headphones", description: "20% off!", price: 40, image: "https://commons.wikimedia.org/wiki/File:IPhone_15_Pro.jpeg" },
  { id: 2, name: "Silver Watch", description: "Limited time deal", price: 120, image: "https://commons.wikimedia.org/wiki/File:IPhone_15_Pro.jpeg" },
  { id: 3, name: "Smart Speaker", description: "Buy 1 Get 1 Free", price: 60, image: "https://commons.wikimedia.org/wiki/File:IPhone_15_Pro.jpeg" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % offerItems.length);
  const prev = () => setCurrent((current - 1 + offerItems.length) % offerItems.length);

  return (
    <div className="carousel">
      <button onClick={prev}>&lt;</button>
      <div className="carousel-item">
        <img src={offerItems[current].image} alt={offerItems[current].name} />
        <h3>{offerItems[current].name}</h3>
        <p>{offerItems[current].description}</p>
        <p>ZAR {offerItems[current].price}</p>
      </div>
      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default Carousel;