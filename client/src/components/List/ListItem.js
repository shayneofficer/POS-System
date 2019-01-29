import React from "react";
import "./List.css";

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
