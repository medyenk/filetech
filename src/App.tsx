import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        API_URL,
        {
          email: email,
          listIds: 3,
        },
        {
          headers: {
            "api-key": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="App">
      <div className="content">
        <header className="header">
          <div className="header-content">
            <img src="/filetech.png" alt="Logo" className="logo" />
            <h1 className="header-text">Empowering Legal Efficiency</h1>
          </div>
        </header>
        <main className="main-content">
          <h2>Subscribe to get updates.</h2>
          <div className="subscribe-form">
            <form onSubmit={handleSubmit} className="form-inline">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="email-input"
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
            {message && <p className="form-message">{message}</p>}
          </div>
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 2024 FileTech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
