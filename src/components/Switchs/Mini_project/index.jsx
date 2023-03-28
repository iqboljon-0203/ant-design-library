import React from "react";
import "./style.css";

export const SwichMiniProject = () => {
  const swichMode = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "dark-mode"
    );
    e.target.children[1].children[0].classList.toggle("move");
    if (e.target.children[0].textContent === "Dark mode") {
      e.target.children[0].textContent = "Light mode";
    } else {
      e.target.children[0].textContent = "Dark mode";
    }
  };

  return (
    <div className="swich__minproject__wrapper">
      <div className="min__body">
        <header className="site-header">
          <div className="container header-container">
            <span className="site-logo">Demo</span>
            <div onClick={swichMode} className="dark-mode-toggle">
              <div className="header-text">Dark mode</div>
              <span className="toggle">
                <span className="circle" />
              </span>
            </div>
          </div>
        </header>
        <div className="main-content">
          <div className="container">
            <h3 className="site-heading">Try to light/dark modes</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
