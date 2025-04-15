import PropTypes from "prop-types";
import '../css/Slides.css';
import { useEffect } from "react";

function Slides({ slides, slideItemWidth }) {
  const animationLength = 40; // Number of seconds it takes before the carousel loops around
  const carouselLength = slides.length; // Number of items in the carousel
  const carouselItemWidth = slideItemWidth ?? 600; // Width in px
  const speed = (carouselItemWidth * (carouselLength)) / animationLength;
  const minBuffer = carouselItemWidth / speed;
  const animationOffset = minBuffer;

  useEffect(() => {
    const carouselItems =  document.querySelectorAll( '.carousel-item' );
    carouselItems.forEach(item => {
      item.style.setProperty('--carousel-item-width', `${carouselItemWidth}px`);
      item.style.setProperty('--carousel-duration', `${animationLength}s`);
      item.style.setProperty('--carousel-length', `${carouselLength}`);
      // item.style.setProperty('--carousel-gap', `${16}%`);
    })
   }, [carouselItemWidth, carouselLength, animationLength]) 

  return (
    <div className="infinite-carousel">
      {
        slides.map((slide, index) => {
          return <div key={index} style={{animationDelay: `${animationOffset * (0 - index)}s`, backgroundImage: `url(${slide})`}} className="carousel-item"></div>
        })
      }
    </div>
  )
}

Slides.PropTypes = {
  slides: PropTypes.array.isRequired,
  slideItemWidth: PropTypes.number
}

export default Slides;