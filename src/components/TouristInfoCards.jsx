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
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <a href="visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <a href="visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityCards;
