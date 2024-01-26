/* eslint-disable react/prop-types */
import { useId } from "react";
import styles from "./Flex.module.css";


function SelectControl({ label, value, onChange, ...delegated }) {
  const id = useId();

  return (
    <div className={styles.selectControl}>
      <label htmlFor={id}>{label}</label>
      <select
        className={styles.select}
        value={value}
        onChange={onChange}
        {...delegated}
      />
    </div>
  );
}

export default SelectControl;
