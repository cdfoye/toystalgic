import "./AboutUsStyle.css";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';



import { Navigation } from "swiper";
import AboutUsCard from './AboutUsCard';


const data = [
  {
    name: 'Catherine',
    description: 'I am a denver-based developer originally from the midwest. I wanted to get into coding professionally in order to challenge myself and potentially explore a new career.',
    GitHub: "https://github.com/cdfoye",
  },

  {
    name: 'Kelly',
    description: 'I am a Colorado Springs based developer. I am ready to start a new career and am excited to learn as well as to bring a fresh perspective.                                                    ',
    GitHub: "https://github.com/kemwalsh",
  },

  {
    name: 'Aubree',
    description: 'Hello there! I have been a nurse for 9 years and am ready to start a new career with some fun challenges.                                                        ',
    GitHub: "https://github.com/AubreeZ-G",
  },

  {
    name: 'Cynthia',
    description: 'From Interior Designer to Software Developer. I am educated in full-stack development from the University of Denver.                                                          ',
    GitHub: "https://github.com/CynthiaGodoy",
  },
]
export default function Display() {
  return (
    <div className="Aubreewrapper">
    <header className="Aubreeheader" id ="AubreePinkHeader">About Us</header>
    <aside className="Aubreesidebar" id ="AubreePurpleSidebar">Hi There! Welcome to our app Toystalgia! We are an all women based group of full stack developers just graduated from Denver University's Coding Bootcamp. Together we wanted to make an app that brought joy with equal doses wimsy and nostalgia. So enjoy shopping for your favorite vintage toys and have fun! </aside>
    <article className="Aubreecontent">
      
      
      <div className="AboutUsDisplay"> <Swiper style={{
            width: '18rem',
          }} navigation={true} modules={[Navigation]} className="mySwiper">
            {data.map(person => <SwiperSlide > <AboutUsCard name={person.name} description={person.description} GitHub={person.GitHub} /></SwiperSlide>)}
  
          </Swiper></div>
    </article>
    <footer className="Aubreefooter" id ="AubreeOrangeFooter"> </footer>
  </div>


  );

}

