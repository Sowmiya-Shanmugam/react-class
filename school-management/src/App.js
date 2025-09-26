/* import { Routes, Route } from "react-router-dom"; */
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
/* import ProtectedRoute from "./components/ProtectedRoute"; */
/* import Home from "./pages/Home";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import StudentsPage from "./pages/students/StudentsPage"; */
import { seedInitialData } from "./utils/seedData";

function App() {
  // Seed some initial users + students into localStorage
  seedInitialData();

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
       {/*  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/students"
            element={
              <ProtectedRoute roles={["admin", "staff"]}>
                <StudentsPage />
              </ProtectedRoute>
            }
          />
        </Routes> */}
      </div>
    </AuthProvider>
  );
}

export default App;
