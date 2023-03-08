import React from "react";
import Card from "../card/Card";
import Input from "../input/Input";
import styles from "./CustomForm.module.scss";

function CustomForm(props) {
  const handleSubmission = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

  const handleInputChange = (e) => {
    props.onInputChange(e);
  };

  return (
    <Card className={styles.input_container}>
      <form className={styles.form_container} onSubmit={handleSubmission}>
        <p>Register</p>
        {props.inputs &&
          props.inputs.map((inp) => {
            return (
              <div className={styles.input_wrapper} key={inp.name}>
                <Input
                  name={inp.name}
                  type={inp.type}
                  placeholder={inp.placeholder}
                  onChange={handleInputChange}
                />
              </div>
            );
          })}
        {props.errorMsg && (
          <div className={styles.errorMsg}>
            <p>{props.errorMsg}</p>
          </div>
        )}
        <div className={styles.button_wrapper}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default CustomForm;
