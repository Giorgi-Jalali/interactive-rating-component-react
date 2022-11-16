function ThanksResult(props) {
  return (
    <div style={styles.container}>
      You selected <span>{props.rate}</span> out of 5
    </div>
  );
}

export default ThanksResult;

const styles = {
  container: {
    width: "168px",
    background: "#262E38",
    color: "#FC7614",
    borderRadius: "22.5px",
    padding: "5px 12px",
    margin: "22px 0",
  },
};
