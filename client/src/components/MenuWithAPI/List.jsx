import React from "react";
import "./List.css";

export function List({ children }) {
  return (
    <div className="list-container">
      <ul className="menu-list">{children}</ul>
    </div>
  );
}
