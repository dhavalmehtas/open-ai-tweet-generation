import React from "react";
import "./styles.css";

function Send() {
  return (
    <form className="container">
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Type your message here"
      />
      <button type="submit">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
          alt="Send Icon"
        />
      </button>
    </form>
  );
}

export default Send;
