import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const defaultUser = {
  fullName: "Andrew Ainsley",
  email: "andrew_ainsley@yourdomain.com",
  phone: "+1 234 567 8900",
  address: "123 Main St, New York, NY",
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
  dateOfBirth: "1990-01-01", // ✅ renamed from dob
  gender: "Female",
  healthIssues: "None",
  meditationGoals: "Relaxation",
  experienceLevel: "Beginner",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser); // ✅ renamed from userData

  const updateUser = (updatedUser) => {
    setUser(updatedUser); // ✅ update entire user object
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
