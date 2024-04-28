import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Root from "./Root";

function App() {

  return (
    <div className="h-screen w-full bg-white"> {/* Using TailwindCSS classes */}
      <Root />
    </div>
  );
}

export default App;
