import React from "react";
import style from "./RegisterOperator.module.scss";
import { registerOperatorInputs as inputs } from "../InputsPlaceholder";
import CustomForm from "../../../UI/form/CustomForm";

function RegisterOperator() {
  return (
    <div className={style.wrapper}>
      <CustomForm inputs={inputs} />
    </div>
  );
}

export default RegisterOperator;
