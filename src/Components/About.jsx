import React from "react";

function About(props) {
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <p>
          On this website’s main page you will find everything lifestyle-related
          – fashion, food, beauty, home decor, and more. But it’s the About
          section that introduces you to the team that makes this website an
          endless source of inspiration. The page introduces founder Emily
          Schuman, as well as her blog, books, and fashion collection. Want to
          stay in touch? No problem – the page also features useful links to her
          social media pages, as well as her online shop.
        </p>
      </div>
    </>
  );
}

export default About;
