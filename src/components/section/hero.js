import * as React from 'react';
import hero_bg from '../../uploads/hero_bg.webp';

const Hero = ({ data }) => {
  return (
    <section className="section-hero">
      <figure className="figure-hero">
        <img className="img-hero" src={hero_bg}></img>
      </figure>
      <div className="content-hero">
        <div className="content-text-hero">
          <p>Together</p>
          <p>Let's do more</p>
        </div>
        <h1 className="content-title-hero">W / LESS</h1>
      </div>
    </section>
  );
};

export default Hero;
