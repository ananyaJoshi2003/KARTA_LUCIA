import React, { useState, useEffect } from "react";
import "./Heading.css"; // Ensure you create this CSS file

const FlipSection = () => {
  const words = ["Create", "Innovate", "Inspire"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flip-section">
        <div className="flip-container">
          <div className="flip-text">
            {words.map((word, index) => (
              <span
                key={index}
                className={`flip-word ${
                  index === currentWordIndex ? "active" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flip-section">
        <div className="flip-container">
          <div className="flip-text">
            {words.map((word, index) => (
              <span
                key={index}
                className={`flip-word-o ${
                  index === currentWordIndex ? "active" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flip-section">
        <div className="flip-container">
          <div className="flip-text">
            {words.map((word, index) => (
              <span
                key={index}
                className={`flip-word-p ${
                  index === currentWordIndex ? "active" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flip-section">
        <div className="flip-container">
          <div className="flip-text">
            {words.map((word, index) => (
              <span
                key={index}
                className={`flip-word-q ${
                  index === currentWordIndex ? "active" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flip-section">
        <div className="flip-container">
          <div className="flip-text">
            {words.map((word, index) => (
              <span
                key={index}
                className={`flip-word-w ${
                  index === currentWordIndex ? "active" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flip-section">
        <div className="flip-container">
          <div className="flip-text">
            {words.map((word, index) => (
              <span
                key={index}
                className={`flip-word-e ${
                  index === currentWordIndex ? "active" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FlipSection;
