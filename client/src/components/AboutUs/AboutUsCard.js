// import "./AboutUsStyle.css";
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
