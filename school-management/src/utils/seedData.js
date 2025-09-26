export function seedInitialData() {
  if (!localStorage.getItem("sm_seeded")) {
    // Demo users
    const users = [
      {
        id: 1,
        name: "Super Admin",
        email: "admin@school.com",
        password: "admin123",
        role: "admin",
      },
      {
        id: 2,
        name: "Teacher One",
        email: "teacher@school.com",
        password: "teacher123",
        role: "staff",
      },
      {
        id: 3,
        name: "Student One",
        email: "student@school.com",
        password: "student123",
        role: "student",
      },
    ];

    // Sample students
    const students = [
      {
        id: 101,
        admissionNo: "A101",
        name: "Student One",
        class: "Grade 1",
        dob: "2014-05-01",
        parent: "Parent A",
      },
      {
        id: 102,
        admissionNo: "A102",
        name: "Student Two",
        class: "Grade 2",
        dob: "2013-03-12",
        parent: "Parent B",
      },
    ];

    localStorage.setItem("sm_users", JSON.stringify(users));
    localStorage.setItem("sm_students", JSON.stringify(students));
    localStorage.setItem("sm_seeded", "1");
  }
}
