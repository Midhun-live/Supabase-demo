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
    <div className="h-dvh">
      <form onSubmit={handleSubmit} className="flex gap-10 mt-10 flex-col items-center h-full">
        <span>Create New Student</span>
        <div className="relative z-0 w-72 mb-5 group">
          <input type="text" name="floating_first_name" id="f_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required value={f_name}
          onChange={(e) => setf_name(e.target.value)}/>
          <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div className="relative z-0 w-72 mb-5 group">
          <input type="text" name="floating_first_name" id="dept" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required value={department}
          onChange={(e) => setDepartment(e.target.value)}/>
          <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
        </div>
       <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
   </form>
      {formError && <p>Error in adding data: {formError}</p>}
    </div>
  );
}

export default Create;
