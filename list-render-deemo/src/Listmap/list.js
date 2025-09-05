import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phn: "",
    psw: "",
  });

  const [err, setErr] = useState({
    name: "",
    email: "",
    phn: "",
    psw: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);


  const validate = (name, value) => {
    switch (name) {
      case "email":
        return /^[a-z0-9._%+-]+@gmail\.com$/.test(value)
          ? ""
          : "Please enter a valid Gmail address";

      case "phn":
        return /^[6-9]\d{9}$/.test(value)
          ? ""
          : "Your number should be 10 digits starting with 6-9";

      case "name":
        return value.trim().length >= 3
          ? ""
          : "Name must be at least 3 characters";

      case "psw":
        return /^[a-zA-Z0-9@#$%^&+=]{8,}$/.test(value)
          ? ""
          : "Password must be 8+ characters with special symbols";

      default:
        return "";
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

  
    const errorMsg = validate(name, value);
    setErr((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validate("name", data.name),
      email: validate("email", data.email),
      phn: validate("phn", data.phn),
      psw: validate("psw", data.psw),
    };

    setErr(newErrors);

    const isValid = Object.values(newErrors).every((msg) => msg === "");

    if (isValid) {
      setIsSubmit(true);
      alert("Form submitted successfully!");
    } else {
      setIsSubmit(false);
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor:"palegoldenrod", marginLeft:"300px", marginRight:"300px", marginTop:"100px", textAlign:"center", height:"480px",boxShadow:" orange,red 0 0px 10px",lineHeight:"1.5"}}>
      <h2>React Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{err.name}</div>
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{err.email}</div>
        </div>

        <div>
          <label>Phone:</label><br />
          <input
            type="text"
            name="phn"
            value={data.phn}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{err.phn}</div>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="psw"
            value={data.psw}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{err.psw}</div>
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmit && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phn}</p>
        </div>
      )}
    </div>
  );
};

export default App;