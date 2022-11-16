import ThanksImage from "./ThanksImage";
import ThanksResult from "./ThanksResult";
import ThanksText from "./ThanksText";

function ThanksContainer(props) {
  return (
    <div style={styles.container}>
      <ThanksImage />
      <ThanksResult rate={props.rate} />
      <ThanksText />
    </div>
  );
}

export default ThanksContainer;

const styles = {
  container: {
    background:
      "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
    width: "327px",
    height: "360px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    padding: "36px 24px",
  },
};
