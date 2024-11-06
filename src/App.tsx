import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://eocampaign1.com/form/19ffff10-9b9f-11ef-bd02-e37b215b3002.js";
    script.async = true;
    script.setAttribute("data-form", "19ffff10-9b9f-11ef-bd02-e37b215b3002");

    const myRefNode = myRef.current;
    if (myRefNode) {
      myRefNode.appendChild(script);
    }

    return () => {
      if (myRefNode) {
        myRefNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <img src="/filetech.png" alt="Logo" className="logo" />
          <h1 className="header-text">Empowering Legal Efficiency</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="main-container">
          <div ref={myRef}></div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 FileTech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
