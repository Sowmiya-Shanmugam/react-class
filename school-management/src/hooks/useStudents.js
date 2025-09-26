import { useState, useEffect } from "react";

export default function useStudents() {
  const [students, setStudents] = useState(
    () => JSON.parse(localStorage.getItem("sm_students")) || []
  );

  // Save changes to localStorage whenever students array changes
  useEffect(() => {
    localStorage.setItem("sm_students", JSON.stringify(students));
  }, [students]);

  // Add new student
  const add = (student) => {
    const nextId = Math.max(0, ...students.map((s) => s.id)) + 1;
    setStudents((prev) => [...prev, { ...student, id: nextId }]);
  };

  // Update existing student
  const update = (id, updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedStudent } : s))
    );
  };

  // Delete student
  const remove = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return { students, add, update, remove };
}
