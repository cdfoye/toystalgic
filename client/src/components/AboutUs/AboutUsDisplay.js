import "./AboutUsStyle.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import 'swiper/components/navigation/navigation.min.css';

import {Pagination, Navigation} from "swiper";
import AboutUsCard from "./AboutUsCard";




const data = [
  {
    name: "Aubree",
    description:
      "Hello there! I have been a nurse for 9 years and am ready to start a new career with some fun challenges.",
    GitHub: "https://github.com/AubreeZ-G",
  },

  {
    name: "Cynthia",
    description:
      "From Interior Designer to Software Developer. Educated in full-stack development from the University of Denver.",
    GitHub: "https://github.com/CynthiaGodoy",
  },

  {
    name: "Catherine",
    description:
      "Service Engineer that enjoys the challenge of programming. Open to exploring the potential of changing careers.",
    GitHub: "https://github.com/cdfoye",
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
      <aside className="Aubreesidebar" id="AubreePurpleSidebar">
        We are an all women-based group of full stack developers who just graduated from Denver University's
        Coding Bootcamp. Together we wanted to make an app that brought joy with
        equal doses whimsy and nostalgia. So, enjoy shopping for your favorite
        vintage toys and have fun!{" "}
      </aside>
      <article className="Aubreecontent">
        <div className="AboutUsDisplay">
          {" "}
          <Swiper
            style={{width: "50rem",}}
            slidesPerView={3}
            spaceBetween={100}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{clickable: true,}}
            navigation={true}
            modules={[Pagination, Navigation]}

          // spaceBetween={100}
          // slidesPerView={3}
          // centeredSlides={true}
          // centeredSlidesBounds={true}
          // 
          // loopedSlides={4}
          // loop={true}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          // navigation={true}
          // modules={[Navigation]}
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
      <footer className="Aubreefooter" id="AubreeOrangeFooter">
        {" "}
      </footer>
    </div>
  );
}
