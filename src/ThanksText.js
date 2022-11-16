function ThanksText() {
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThanksText;

const styles = {
  container: {
    textAlign: "center",
  },

  h2: {
    color: "white",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    marginBottom: "10px",
  },
};
