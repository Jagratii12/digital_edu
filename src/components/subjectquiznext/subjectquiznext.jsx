import React, { useEffect, useState } from "react";
import downarrow from "../../assets/downarrow.png";
import downarrow2 from "../../assets/downarrow2.png";
import "./subjectquiznext.css";

const Accordion = ({ title, options, index }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        className={`accordion-button accordion-button-${index}`}
        onClick={toggleAccordion}
      >
        {title}
        <img src={isOpen ? downarrow : downarrow2} alt="Down arrow" />
      </button>
      {isOpen && (
        <div className="accordion-content">
          <div className="radio-options">
            {options.map((option, index) => (
              <div className="radio-option" key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`option-${title}`}
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option-${index}`}>{option.label}</label>
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              console.log(`Selected option for ${title}: ${selectedOption}`)
            }
          >
            Start Exam
          </button>
        </div>
      )}
    </div>
  );
};

const Subjectquiznext = () => {
  const [accordionData, setAccordionData] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // Fetch data from an API endpoint
    const fetchData = async () => {
      // Mock data
      const dataFromApi = [
        {
          title: "Accordion 1",
          options: [
            { label: "10 questions", value: 10 },
            { label: "20 questions", value: 20 },
            { label: "30 questions", value: 30 },
            { label: "40 questions", value: 40 },
            { label: "50 questions", value: 50 },
          ],
        },
        {
          title: "Accordion 2",
          options: [
            { label: "10 questions", value: 10 },
            { label: "20 questions", value: 20 },
            { label: "30 questions", value: 30 },
            { label: "40 questions", value: 40 },
            { label: "50 questions", value: 50 },
          ],
        },
        {
          title: "Accordion 3",
          options: [
            { label: "10 questions", value: 10 },
            { label: "20 questions", value: 20 },
            { label: "30 questions", value: 30 },
            { label: "40 questions", value: 40 },
            { label: "50 questions", value: 50 },
          ],
        },
        {
          title: "Accordion 4",
          options: [
            { label: "10 questions", value: 10 },
            { label: "20 questions", value: 20 },
            { label: "30 questions", value: 30 },
            { label: "40 questions", value: 40 },
            { label: "50 questions", value: 50 },
          ],
        },
        {
          title: "Accordion 5",
          options: [
            { label: "10 questions", value: 10 },
            { label: "20 questions", value: 20 },
            { label: "30 questions", value: 30 },
            { label: "40 questions", value: 40 },
            { label: "50 questions", value: 50 },
          ],
        },
        // Add more accordion data if needed
      ];

      setAccordionData(dataFromApi);
    };

    fetchData();
  }, []);

  return (
    <div className="subjectquiz">
      <div className="quiz-section">
        <div className="heading-row">
          <h5>Subject Wise Quiz</h5>
        </div>
        <div className="radio-row">
          <p>Select difficulty level</p>

          <div className="checkboxes">
            <div className="checkbox">
              <input
                type="radio"
                id="basic"
                name="difficulty"
                value="Basic (L1)"
              />
              <label htmlFor="basic">Basic (L1)</label>
            </div>
            <div className="checkbox">
              <input
                type="radio"
                id="medium"
                name="difficulty"
                value="Medium (L2)"
              />
              <label htmlFor="medium">Medium (L2)</label>
            </div>
            <div className="checkbox">
              <input
                type="radio"
                id="high"
                name="difficulty"
                value="High (L3)"
              />
              <label htmlFor="high">High (L3)</label>
            </div>
            <div className="checkbox">
              <input
                type="radio"
                id="miscellaneous"
                name="difficulty"
                value="Miscellaneous (L4)"
              />
              <label htmlFor="miscellaneous">Miscellaneous (L4)</label>
            </div>
          </div>
          <div className="accordion">
            {accordionData.map((accordion, index) => (
              <Accordion
                key={index}
                title={accordion.title}
                options={accordion.options}
                index={index + 1} // Add 1 to make the index 1-based
              />
            ))}
          </div>
        </div>
      </div>
      <div className="quiz-section chapter-wise">
        <div className="heading-row2">
          <h5>Chapter Wise Quiz</h5>
        </div>
        <div className="radio-row2">
          <p>Select difficulty level</p>

          <div className="checkboxes2">
            <div className="checkbox23">
              <input
                type="radio"
                id="basic-chapter"
                name="difficulty-chapter"
                value="Basic (L1)"
              />
              <label htmlFor="basic-chapter">Basic (L1)</label>
            </div>
            <div className="checkbox">
              <input
                type="radio"
                id="medium-chapter"
                name="difficulty-chapter"
                value="Medium (L2)"
              />
              <label htmlFor="medium-chapter">Medium (L2)</label>
            </div>
            <div className="checkbox">
              <input
                type="radio"
                id="high-chapter"
                name="difficulty-chapter"
                value="High (L3)"
              />
              <label htmlFor="high-chapter">High (L3)</label>
            </div>
            <div className="checkbox">
              <input
                type="radio"
                id="miscellaneous-chapter"
                name="difficulty-chapter"
                value="Miscellaneous (L4)"
              />
              <label htmlFor="miscellaneous-chapter">Miscellaneous (L4)</label>
            </div>
          </div>
          <div className="accordion">
            {accordionData.map((accordion, index) => (
              <Accordion
                key={index}
                title={accordion.title}
                options={accordion.options}
                index={index + 6} // Add 6 to make the index unique
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjectquiznext;
