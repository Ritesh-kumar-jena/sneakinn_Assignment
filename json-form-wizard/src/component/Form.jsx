import React from "react";

// creating a dynamic form so 1st create a form function which is take "fields, formData, setFormData" as parameters


const Form = ({ fields, formData, setFormData }) => {
  const handleChange = (e, name) => {

    // cheack the type of input is cheack box or not becuse cheack box return a boolean value

    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
// use HOF map and map over virous input fields
  return (
    <div className="box">
      {fields.map((field, index) => {
        if (field.type === "text" || field.type === "number") {
          return (
            <div key={index}>
                {/* use "*" to show it require:true */}
              <label>{field.label}{field.required && "*"}</label><br />
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field.name)}
              /><br />
            </div>
          );
        }

        if (field.type === "radio") {
          return (
            <div key={index}>
              <label>{field.label}{field.required && "*"}</label><br />
              {field.options.map((option, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name={field.name}
                    value={option}
                    checked={formData[field.name] === option}
                    onChange={(e) => handleChange(e, field.name)}
                  />
                  {option}
                </label>
              ))}
              <br />
            </div>
          );
        }

        if (field.type === "select") {
          return (
            <div key={index}>
              <label>{field.label}{field.required && "*"}</label><br />
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field.name)}
              >
                <option value="">Select</option>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select><br />
            </div>
          );
        }

        if (field.type === "checkbox") {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  name={field.name}
                  checked={formData[field.name] || false}
                  onChange={(e) => handleChange(e, field.name)}
                />
                {field.label}
              </label><br />
            </div>
          );
        }
        // use "repeatable" to add multiple entries for this section
        if (field.type === "repeatable") {
            const entries = formData[field.name] || [];
          
            const handleNestedChange = (e, idx, nestedFieldName) => {
              const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
              const updated = [...entries];
              updated[idx] = { ...updated[idx], [nestedFieldName]: value };
              setFormData(prev => ({ ...prev, [field.name]: updated }));
            };
        //   addEntry create a similar repetable form show previous input and new input 
            const addEntry = () => {
              setFormData(prev => ({
                ...prev,
                [field.name]: [...entries, {}]
              }));
            };
        //   removeEntry remove the particular repetable form 
            const removeEntry = (idx) => {
              const updated = [...entries];
              updated.splice(idx, 1);
              setFormData(prev => ({ ...prev, [field.name]: updated }));
            };
          
            return (
              <div   key={index}>
                <h4>{field.label}</h4>
                {entries.map((entry, idx) => (
                  <div key={idx} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    {field.fields.map((nestedField, nfIndex) => (
                      <div key={nfIndex}>
                        <label>{nestedField.label}{nestedField.required && "*"}</label><br />
                        <input
                          type={nestedField.type}
                          name={nestedField.name}
                          required={nestedField.required}
                          value={entry[nestedField.name] || ""}
                          onChange={(e) => handleNestedChange(e, idx, nestedField.name)}
                        /><br />
                      </div>
                    ))}
                    <button type="button" onClick={() => removeEntry(idx)}>Remove</button>
                  </div>
                ))}
                <button type="button" onClick={addEntry}>Add {field.label}</button>
              </div>
            );
          }

        //  here we return null becuse we don’t render anything if type doesn't match

        return null;
      })}
    </div>
  );
};

export default Form;
