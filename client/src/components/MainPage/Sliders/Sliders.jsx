import React from 'react';
import './style.css';
import img1 from './Img/dungeon-companion-1920x1200.jpg';
import img2 from './Img/goblins02-1920x1200.jpg';
import img3 from './Img/wall1-1920x1200.jpg';

export default function Sliders() {
  return (
  <div className="all">
  <input checked type="radio" name="respond" id="desktop" />
      <article id="slider">
              <input checked type="radio" name="slider" id="switch1" />
              <input type="radio" name="slider" id="switch2" />
              <input type="radio" name="slider" id="switch3" />
              <input type="radio" name="slider" id="switch4" />
              <input type="radio" name="slider" id="switch5" />
          <div id="slides">
              <div id="overflow">
                  <div className="image">
                      <article><img src={img1} alt="sdf" /></article>
                      <article><img src={img2} alt="dsf" /></article>
                      <article><img src={img3} alt="sdf" /></article>
                      <article><img src="" alt="sdf" /></article>
                      <article><img src="5.jpg" alt="sdf" /></article>
                  </div>
              </div>
          </div>
          <div id="controls">
              <label htmlFor="switch1" />
              <label htmlFor="switch2" />
              <label htmlFor="switch3" />
              <label htmlFor="switch4" />
              <label htmlFor="switch5" />
          </div>
          <div id="active">
              <label htmlFor="switch1" />
              <label htmlFor="switch2" />
              <label htmlFor="switch3" />
              <label htmlFor="switch4" />
              <label htmlFor="switch5" />
          </div>
      </article>
  </div>

  );
}
