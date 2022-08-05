import React from 'react';


export default function AboutUsCard(props) {
  const cardStyle = {
    width: '18rem',
  };


  return (
    

      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL+"/images/AboutUsImages/"+props.name+".jpg"}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">ID: {props.id}</p>
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
          <a href="#" className="btn btn-primary">
            LinkedIn
          </a>
      
        </div>
      </div>
  
  );
}
