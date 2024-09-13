import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseConfig";

function Create() {
  const navigate = useNavigate();

  const [name, setf_name] = useState("");
  const [department, setDepartment] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the required fields are filled
    if (!name || !department) {
      setFormError("Please fill in all fields");
      return;
    }

    const { data, error } = await supabase
      .from("student")
      .insert([{ name, department }]);

    if (error) {
      console.error("Error occurred:", error);
      setFormError(error.message);
    } else {
      console.log("Data inserted successfully:", data);
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setf_name(e.target.value)}
        />
        <label htmlFor="dept">Department:</label>
        <input
          type="text"
          id="dept"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">Create Student</button>
      </form>
      {formError && <p>Error in adding data: {formError}</p>}
    </div>
  );
}

export default Create;
