import React from "react";
import "./evaluation.css"; // Import your CSS file for styling
import eval1 from "../../assets/eval1.png";
import eval2 from "../../assets/eval2.png";
import eval3 from "../../assets/eval3.png";
import arrow2 from '../../assets/arrow2.png';

const Evaluation = () => {
  return (
    <div className="eval">
      <h6>Skills and knowledge exams made easy</h6>

      <div className="eval-head">
        <h1>Evaluation Program for Personal Assessment</h1>
      </div>

      <div className="eval-cards">
        <div className="eval-quiz">
          <div className="card-content">
            <img src={eval1} alt="Quiz" className="card-image" />
            <h2>Quizzes</h2>
            <p>
              Engage your remote students or connected classrooms in a way
              that’s efficient and fun.
            </p>
            <button className="learn-more-btn">Learn more <img src={arrow2} alt="Arrow2" className="arrow-icon" /></button>
          </div>
        </div>

        <div className="eval-exam">
          <div className="card-content">
            <img src={eval2} alt="Exam" className="card-image" />
            <h2>Exams</h2>
            <p>
              Test skills and knowledge in a professional and no-distraction
              environment.
            </p>
            <button className="learn-more-btn">Learn more <img src={arrow2} alt="Arrow2" className="arrow-icon" /></button>
          </div>
        </div>

        <div className="eval-assessment">
          <div className="card-content">
            <img src={eval3} alt="Assessment" className="card-image" />
            <h2>Formative Assessment</h2>
            <p>
              Positive motivation, encouraging feedback,
              <br /> and equal opportunities with a new
              <br />
              educational approach.
            </p>
            <button className="learn-more-btn">Learn more <img src={arrow2} alt="Arrow2" className="arrow-icon" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
