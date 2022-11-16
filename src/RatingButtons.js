export default function RatingButtons(props) {
  function handleClick(btn) {
    props.setRate(btn);
  }

  return (
    <div style={styles.container}>
      {props.numbers.map((button) => {
        return (
          <div
            onClick={() => handleClick(button)}
            key={Math.random() * Math.random()}
            className={`button ${props.rate === button ? "activeButton" : ""}`}
          >
            {button}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "18px",
    margin: "24px 0",
  },
};
