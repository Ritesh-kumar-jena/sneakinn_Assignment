import React, { useState } from "react";
import { Schema } from "./JsonSchema";
import Form from "./Form";
import Showdata from "./Showdata"; 

const MainPage = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false); 

  const totalSteps = Schema.length;

// heare we add stepper for navigation

  const handleNext = () => {
    if (page < totalSteps - 1) setPage((prev) => prev + 1);
  };

  const handleBack = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

//   submit the form

  const handleSubmit = () => {
    setSubmitted(true); 
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      {!submitted ? (
        <>
          <h2>{Schema[page].title}</h2>
          {/* send fields,formdata, setformdata to form as props */}
          <Form
            fields={Schema[page].fields}
            formData={formData}
            setFormData={setFormData}
          />
          <div style={{ marginTop: "20px" }}>
            {page > 0 && (
              <button onClick={handleBack} style={{ marginRight: "10px" }}>
                Back
              </button>
            )}
            {page < totalSteps - 1 ? (
              <button onClick={handleNext}>Next</button>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </>
      ) : (
        // show form data if the form is submit
        <Showdata formData={formData} />
      )}
    </div>
  );
};

export default MainPage;
