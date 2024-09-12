import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";
import StudentList from "./StudentList";
import "../index.css";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [students, setStudents] = useState([]);
  const [orderby, setOrderby] = useState("id ");

  const handleDelete = (id) => {
    setStudents((prevStudents) => {
      return prevStudents.filter((s) => s.id !== id);
    });
  };

  useEffect(() => {
    console.log(supabase);

    const fetchStudents = async () => {
      let { data, error } = await supabase
        .from("student")
        .select()
        .order(orderby, { ascending: false });
      if (error) {
        setFetchError("could'nt display data");
        throw error;
      }
      setStudents(data);
    };

    fetchStudents();
  }, [orderby]);

  return (
    <div className="student">
      {fetchError && <p>{fetchError}</p>}

      {students.length > 0 && (
        <div>
          <div>
            <p className="bg-gray-600">Order by:</p>
            <button onClick={() => setOrderby("id")}>Id</button>
            <button onClick={() => setOrderby("f_name")}>Name</button>
            <button
              onClick={() => {
                setOrderby("department");
              }}
            >
              Department
            </button>
            {orderby}
          </div>
          <div className="bg-gray-500 px-16 py-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
              <StudentList
                key={student.id}
                student={student}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
