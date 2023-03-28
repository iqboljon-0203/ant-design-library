import React from "react";
import "./style.css";

export const MiniCheckboxProject = () => {
  return (
    <div className="checkbox__mainwrapper">
      <div className="fruit-box">
        <div className="fruit-wrapper">
          <label className="fruit-label">
            <input
              className="checkbox checkbox-apple visually-hidden"
              type="checkbox"
            />
            <span className="checkbox-controller"></span>
            <span className="checkbox-text">Apple</span>
          </label>
          <label className="fruit-label">
            <input
              className="checkbox checkbox-orange visually-hidden"
              type="checkbox"
            />
            <span className="checkbox-controller"></span>
            <span className="checkbox-text">Orange</span>
          </label>
          <label className="fruit-label">
            <input
              className="checkbox checkbox-banana visually-hidden"
              type="checkbox"
            />
            <span className="checkbox-controller"></span>
            <span className="checkbox-text">Banana</span>
          </label>
          <label className="fruit-label">
            <input
              className="checkbox checkbox-pine-apple visually-hidden"
              checked
              disabled
              type="checkbox"
            />
            <span className="checkbox-controller"></span>
            <span className="checkbox-text">Pine Apple</span>
          </label>
        </div>
      </div>
    </div>
  );
};
