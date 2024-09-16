import React from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseConfig";
import { students } from "../images";
import "../index.css";

const StudentList = ({ student, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("student")
      .delete()
      .eq("id", student.id);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(student.id);
    }
    onDelete(student.id);
  };    
  return (
    <div className="bg-white mb-6 rounded shadow-lg relative">
      <img src={students} alt="student" className="object-cover" />
      <div className="p-4">
        <h1 className="font-bold">{student.f_name}</h1>
        <p className="font-semibold">{student.department}</p>
      </div>
      <div className="flex justify-between mt-6 p-6">
        <div>
          <Link to={"/" + student.id}>
            <i className="material-icons">edit</i>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>delete</button>
        </div>
      </div>
      <div className="bg-gray-500 rounded-full p-2 absolute top-0 mt-4 ml-4">
        <span className="text-white">Student</span>
      </div>
    </div>
  );
};

export default StudentList;
