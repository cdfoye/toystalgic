import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { Navigation } from "swiper";
import AboutUsCard from './AboutUsCard';


const data=[
 {
  name: 'Catherine',
  description: 'Aspiring web developer interested in gaining a new skillset.',
  id: 1,
},

 {
  name: 'Kelly',
  description: 'Kelly is an inspiring front end developer located out of Colorado Springs',
  id: 2,
},

 {
  name: 'Aubree',
  description: 'nurse turned developer',
  id: 3,
},

 {
  name: 'Cynthia',
  description: 'From Interior Designer to Software Developer. Educated in full-stack development from the University of Denver.',
  id: 4,
},
]
export default function Display() {
  return (
    <Swiper style={{
      width: '18rem',
    }} navigation={true} modules={[Navigation]} className="mySwiper">
     {data.map(person=> <SwiperSlide> <AboutUsCard name={person.name} description={person.description} id={person.id} key={person.id} /></SwiperSlide>)}
    
    </Swiper>
    
     

  );
 
}
