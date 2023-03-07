import React from "react";
import styles from "./Input.module.scss";

function Input(props) {
  const className = `${styles.wrapper} ${props.className}`;
  return (
    <input
      className={className}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
    />
  );
}

export default Input;
