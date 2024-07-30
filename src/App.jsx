import React from "react";
import Header from "./header";
import About from "./about";
import Contact from "./contact"
import style from "./app.module.css"

function App() {
 

  return (
    <div className={style.appBackground}>
     <Header />
     <About />
     <Contact />
    </div>
  );
}

export default App
