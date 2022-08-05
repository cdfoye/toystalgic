import "./AboutUsStyle.css";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';



import { Navigation } from "swiper";
import AboutUsCard from './AboutUsCard';


const data = [
  {
    name: 'Catherine',
    description: 'Aspiring web developer interested in gaining a new skillset.',
    GitHub: "https://github.com/cdfoye",
  },

  {
    name: 'Kelly',
    description: 'Kelly is an inspiring front end developer located out of Colorado Springs',
    GitHub: "https://github.com/kemwalsh",
  },

  {
    name: 'Aubree',
    description: 'nurse turned developer',
    GitHub: "https://github.com/AubreeZ-G",
  },

  {
    name: 'Cynthia',
    description: 'From Interior Designer to Software Developer. Educated in full-stack development from the University of Denver.',
    GitHub: "https://github.com/CynthiaGodoy",
  },
]
export default function Display() {
  return (

    <div class="Aubreewrapper">
      <header class="Aubreeheader">My header</header>
      <aside class="Aubreesidebar">Sidebar</aside>
      <article class="Aubreecontent">
        <div className="AboutUsDisplay"> <Swiper style={{
          width: '18rem',
        }} navigation={true} modules={[Navigation]} className="mySwiper">
          {data.map(person => <SwiperSlide > <AboutUsCard name={person.name} description={person.description} GitHub={person.GitHub} /></SwiperSlide>)}

        </Swiper></div>

      </article>
      <footer class="Aubreefooter">My footer</footer>
    </div>

  );

}

{
  <div class="Aubreewrapper">
  <header class="Aubreeheader">My header</header>
  <aside class="Aubreesidebar">Sidebar</aside>
  <article class="Aubreecontent">
    <h1>2 column, header and footer</h1>
    <p>This example uses line-based positioning, to position the header and footer, stretching them across the grid.</p>
  </article>
  <footer class="Aubreefooter">My footer</footer>
</div>
}