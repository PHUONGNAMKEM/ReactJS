import { ReactNode } from "react";
import "./Button.scss";
import styles from "./Button.module.css";

interface ButtonProp {
  className?: string;
  children?: ReactNode;
  secondary?: boolean;
}

function Button({ className, children, secondary }: ButtonProp) {
  //   return <button className={`button ${className || ""}`}>{children}</button>;
  return (
    <button
      className={`${styles.button} ${secondary ? styles.buttonSecondary : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
