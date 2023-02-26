import "./AboutUsStyle.css";
import AboutUsCard from "./AboutUsCard";
import React from "react";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const data = [
  {
    name: "Catherine",
    description:
      "Service Engineer that enjoys the challenge of programming. Open to exploring the potential of changing careers.",
    GitHub: "https://github.com/cdfoye",
  },

  {
    name: "Cynthia",
    description:
      "From Interior Designer to Software Developer. Educated in full-stack development from the University of Denver.",
    GitHub: "https://github.com/CynthiaGodoy",
  },

  {
    name: "Aubree",
    description:
      "Hello there! I have been a nurse for 9 years and am ready to start a new career with some fun challenges.",
    GitHub: "https://github.com/AubreeZ-G",
  },

  {
    name: "Kelly",
    description:
      "Colorado Springs based developer ready to start a new career and bring a fresh perspective to programming.",
    GitHub: "https://github.com/kemwalsh",
  },


];
export default function Display() {
  return (
    <div className="Aubreewrapper">
      <header className="Aubreeheader" id="AubreePinkHeader">
        About Us
      </header>
      <div className="columns" id="grid">
      <aside className="Aubreesidebar" id="AubreePurpleSidebar">
        <p>We are an all women-based group of full stack developers & together we wanted to make an app that brought joy with
        equal doses whimsy and nostalgia.</p>
        
        <p>So, enjoy shopping for your favorite
        vintage toys and have fun!{" "} </p>
      </aside>
      <article className="Aubreecontent" id="AubreeGreenContent">
        <div className="AboutUsDisplay">
          {" "}
          <Swiper
            modules={[ Navigation, Pagination ]}
            slidesPerView={3}
            spaceBetween={10}
            // slidesPerGroup={3}
            // loopedSlides={4}
            loop={true}
            centeredSlides={true}

            loopFillGroupWithBlank={true}
            navigation={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{200: {slidesPerView: 1, spaceBetween: 20, centeredSlides: false,},
                          300: {slidesPerView: 1, spaceBetween: 10, centeredSlides: false,},
                          595: {slidesPerView: 3, spaceBetween: 10, centeredSlides: false,},
                          768: {slidesPerView: 3, spaceBetween: 10, centeredSlides: false,},
                          1200: {slidesPerView: 3, spaceBetween: 10, centeredSlides: false,},
                        }}

            className="mySwiper"
          >
            {data.map((person) => (
              <SwiperSlide>
                {" "}
                <AboutUsCard
                  name={person.name}
                  description={person.description}
                  GitHub={person.GitHub}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
      </div>
      <footer className="Aubreefooter" id="AubreeOrangeFooter">
        {" "}
      </footer>
    </div>
  );
}
