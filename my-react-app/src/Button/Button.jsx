import styles from "./Button.module.css";

function Button() {
  const style = {
    backgroundColor: "hsl(200, 100%,50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };


  return (

    ///Modules for stylign
    // <button className={styles.button}>
    //     Click me
    // </button>

    //inline styles
    <button style={style}>Click me</button>
  );
}
export default Button;
