import React from "react";

const CityCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/1c/9d/university-of-glasgow.jpg?w=600&h=400&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/1c/9d/university-of-glasgow.jpg?w=600&h=400&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/1c/9d/university-of-glasgow.jpg?w=600&h=400&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityCards;
