import React from 'react';
import { Link } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1616610269931-04d58b579ddf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3VyfGVufDB8fDB8fHww',
    title: 'Remembering the Liberation War',
    subtitle: 'The journey to independence in 1971',
  },
  {
    image: 'https://assets.telegraphindia.com/telegraph/2023/May/1683455687_labour.jpg',
    title: 'Mukti Bahini Fighters',
    subtitle: 'Courage, resilience, and unity',
  },
  {
    image: 'https://i.tribune.com.pk/media/images/1870028-download-1545190952/1870028-download-1545190952.webp',
    title: 'Stories of Sacrifice',
    subtitle: 'Honoring the martyrs and freedom fighters',
  },
];

const HeroSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: 'snap',
  });

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide relative w-full h-screen text-white flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/explore" className="archive-btn-primary">
                  Explore Archive
                </Link>
                <Link to="/contribute" className="archive-btn-outline text-white border-white hover:bg-white hover:text-black">
                  Contribute Story
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
