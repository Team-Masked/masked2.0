import React, { useState } from "react";
import "./Form.css";
import { db } from "../firebase";

function Form() {
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("none");
  const [story, setStory] = useState("");
  const [thumbsup, setThumbsUp] = useState("0");
  const [thumbsdown, setThumbsdown] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("submissions")
      .add({
        link: link,
        category: category,
        story: story,
        thumbsdown: thumbsdown,
        thumbsup: thumbsup,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        console.log(error.message);
      });

    setLink("");
    setCategory("none");
    setStory("");
  };

  return (
    <div className="content-wrapper">
      <div>
        <div className="container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* onSubmit={sendEmail} */}
            <div className="form__element">
              <label>Link to the video</label>
              <input
                type="text"
                placeholder="Link..."
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              ></input>
            </div>
            <div className="form__element">
              <label>Story behind the video</label>
              <textarea
                type="text"
                placeholder="Your Story..."
                name="story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form__element">
              <label>Select the category of the video</label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option
                  className="custom-option"
                  value="none"
                  selected="selected"
                >
                  {" "}
                  -- choose one --
                </option>
                <option className="custom-option" value="nonconsensual">
                  Non-Consensual
                </option>
                <option className="custom-option" value="blackmail">
                  Blackmail
                </option>
                <option className="custom-option" value="leaked">
                  Leaked
                </option>
                <option className="custom-option" value="other">
                  Other
                </option>
              </select>
            </div>

            <div className="form__element not">
              <label>Thumbs Down</label>
              <input type="text" name="thumbsdown" value="0"></input>
            </div>
            <div className="form__element not">
              <label>Thumbs Up</label>
              <input type="text" name="thumbsup" value="0"></input>
            </div>
            <div className="form__btns">
              <input
                className="btns"
                type="submit"
                value="Send Message"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
