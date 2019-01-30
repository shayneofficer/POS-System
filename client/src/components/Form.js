import React from "react";

export function Input(props) {
  // console.log(props);
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  // console.log(props);
  return (
    <button {...props}
      // style={{ float: "right", marginBottom: 10 }}
      className="btn btn-warning">
      {props.children}
    </button>
  );
}
