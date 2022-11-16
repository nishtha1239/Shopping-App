import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="about-section">
        <br />
        <hr />
        <br />
        <h1>About Us</h1>
        <br />
        <p style={{ fontSize: "20px" }}>
          Becoming India’s no. 1 fashion destination is not an easy feat.
          Sincere efforts, digital enhancements and a team of dedicated
          personnel with an equally loyal customer base have made Shopping App
          the online platform that it is today.
        </p>
        <br />
        <br />
        <p style={{ fontSize: "20px" }}>
          The original B2B venture for personalized gifts was conceived in 2007
          but transitioned into a full-fledged ecommerce giant within a span of
          just a few years. By 2012, Shopping App had introduced 350 Indian and
          international brands to its platform, and this has only growsn in
          number each passing year. Today Shopping App sits on top of the online
          fashion game with an astounding social media following, a loyalty
          program dedicated to its customers, and tempting, hard-to-say-no-to
          deals. The Shopping App shopping app came into existence in the year
          2015 to further encourage customers’ shopping sprees. Download the app
          on your Android or IOS device this very minute to experience fashion
          like never before.
        </p>
      </div>
      <br />
      <br />
      <hr />
      <br />

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <br />
      <div className="wrapper">
        <div className="rows">
          <div className="columns">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV99IJOGUBMQBy9kccOQsAyq36yzt0BRYUw&usqp=CAU"
                alt="Jane"
                style={{ width: "100%", height: "300px" }}
              />
              <div className="container">
                <h2 style={{ textAlign: "center" }}>Jane Doe</h2>
                <p style={{ textAlign: "center" }} className="title">
                  CEO & Founder
                </p>

                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                alt="Mike"
                style={{ width: "100%", height: "300px" }}
              />
              <div className="container">
                <h2 style={{ textAlign: "center" }}>Mike Ross</h2>
                <p style={{ textAlign: "center" }} className="title">
                  {" "}
                  Senior Manager
                </p>

                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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"
                alt="John"
                style={{ width: "100%", height: "300px" }}
              />
              <div className="container">
                <h2 style={{ textAlign: "center" }}>John Doe</h2>
                <p style={{ textAlign: "center" }} className="title">
                  Senior Manager
                </p>

                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
