import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sm_user"));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("sm_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("sm_user");
    }
  }, [user]);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("sm_users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser({
        id: found.id,
        name: found.name,
        role: found.role,
        email: found.email,
      });
      return { ok: true };
    }
    return { ok: false, message: "Invalid credentials" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}> 
      {children}
    </AuthContext.Provider>
  );
}
