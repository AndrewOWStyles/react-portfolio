import React from "react";
import '../styles/home.css'

function Home() {
  return (
    <div className="homeGrid">
      <div className="homeHeader row">
        <div className="column">
          <h1>My Portfolio</h1>
          <p className="intro">
            welcome to my React based portfolio, this is my first attempt at using class based React. Here you will find all of my previous projects that i have worked and practiced on as well as any of my social links so that you can contact/follow my work.
          </p>
          </div>
      </div>
      <div className="profilePic row">
        <div className="column img">
          <img src="https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg" alt="placeholder picture" />
        </div>
      </div>
    </div>
  );
}


export default Home;
