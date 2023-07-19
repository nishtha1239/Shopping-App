import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div class="cont">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div class="row">
          <div class="column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuDi4mifr_3aJZVocr8b58au-uAO0cnWLEg&usqp=CAU"
              alt=""
              style={{ width: "400px", height: "400px", marginLeft: "150px" }}
            />
          </div>
          <div class="column">
            <form>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
