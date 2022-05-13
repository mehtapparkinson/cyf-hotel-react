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
          <p>
            Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated
            along both banks of the River Clyde 20 miles (32 km) from that
            river’s mouth on the western, or Atlantic, coast. Glasgow is
            Scotland’s largest city, and it forms an independent council area
            that lies entirely within the historic county of Lanarkshire.
          </p>
          <a
            Target="_blank"
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
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
          <p>
            Manchester, city and metropolitan borough in the metropolitan county
            of Greater Manchester urban county, northwestern England. Most of
            the city, including the historic core, is in the historic county of
            Lancashire, but it includes an area south of the River Mersey in the
            historic county of Cheshire. Manchester is the nucleus of the
            largest metropolitan area in the north of England.
          </p>
          <a
            Target="_blank"
            href="https://www.visitmanchester.com"
            className="btn btn-primary"
          >
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
          <h1>London</h1>
          <p>
            London is the capital city of the United Kingdom. It is the U.K.’s
            largest metropolis and its economic, transportation, and cultural
            centre. London is also among the oldest of the world’s great cities,
            with its history spanning nearly two millennia.
          </p>
          <a
            Target="_blank"
            href="https://www.visitlondon.com"
            className="btn btn-primary"
          >
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityCards;
