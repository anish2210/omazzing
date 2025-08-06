import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx'; // ✅ Make sure the file is named UserContext.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> {/* ✅ Wrapping with context provider */}
      <App />
    </UserProvider>
  </StrictMode>
);
