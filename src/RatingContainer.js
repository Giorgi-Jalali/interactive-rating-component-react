import RatingText from "./RatingText";
import RatingButtons from "./RatingButtons";
import RatingSubmit from "./RatingSubmit";

function RatingContainer(props) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div style={styles.container}>
      <RatingText />
      <RatingButtons
        setRate={props.setRate}
        rate={props.rate}
        numbers={numbers}
      />
      <RatingSubmit submit={props.submit} />
    </div>
  );
}

export default RatingContainer;

const styles = {
  container: {
    boxSizing: "border-box",
    display: "block",
    background:
      "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
    width: "327px",
    height: "360px",
    borderRadius: "15px",
    marginTop: "50px",
    padding: "24px 24px 32px 24px",
  },
};
