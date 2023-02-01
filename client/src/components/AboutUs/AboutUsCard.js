// import "./AboutUsStyle.css";
// import "./AboutUsDisplay";

// import React, { Component } from "react";
// import Slider from "react-slick";
// import { useState } from "react";

// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const AboutUsCard = () => {

//   const NextArrow = ({onClick}) => {
//       return (
//           <div className="arrow next" onClick={onClick}>
//               <FaArrowRight />
//           </div>
//       );
//   };

//   const PrevArrow = ({onClick}) => {
//       return (
//           <div className="arrow prev" onClick={onClick}>
//               <FaArrowLeft />
//           </div>
//       );
//   };

//   const [ImageIndex, setImageIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     lazyload: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setImageIndex(next),
//     responsive: [
//         {
//         breakpoint: 800,
//         settings: {
//             slidesToShow: 1,
//             }
//         },
//     ]
// };

//     return (
//       <div>
//         <Slider {...settings}>
//         <div className="card" style={cardStyle}>
//           <img className="card-img-top"
//             src={process.env.PUBLIC_URL + "/images/AboutUsImages/" + props.name + ".jpg"}
//             alt="Card cap"
//           />
//             <div className="card-body">
//               <h5 className="card-title-Aubree">Name: {props.name}</h5>
//               <p className="card-text-Aubree">Description: {props.description}</p>
//                 <a href={props.GitHub} className="AubreeLink" id="GitHubText">
//                   GitHub
//                 </a>
//             </div>
//         </div>
//         </Slider>
//       </div>
//     );
//   }

// export default AboutUsCard;


import "./AboutUsStyle.css";
import React from 'react';

export default function AboutUsCard(props) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div className="card" style={cardStyle}>
      <img
        className="card-img-top"
        src={process.env.PUBLIC_URL + "/images/AboutUsImages/" + props.name + ".jpg"}
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title-Aubree">Name: {props.name}</h5>
        <p className="card-text-Aubree">Description: {props.description}</p>
        <a href={props.GitHub} className="AubreeLink" id="GitHubText">
          GitHub
        </a>
      </div>
    </div>
  );
}
