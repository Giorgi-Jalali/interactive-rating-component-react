import favicon from "./images/icon-star.svg";

function RatingText() {
  return (
    <div>
      <div style={styles.icon}>
        <img src={favicon} alt="icon" />
      </div>
      <h2 style={styles.h2}>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}

export default RatingText;

const styles = {
  icon: {
    background: "hsl(213, 19%, 18%)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    padding: "12px",
  },

  h2: {
    color: "white",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    margin: "22px 0 12px 0",
  },
};
