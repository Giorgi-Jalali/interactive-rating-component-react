function RatingSubmit(props) {
  const onMouseOverEvent = (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "#FC7614";
  };
  const onMouseOutEvent = (event) => {
    event.target.style.backgroundColor = "#FC7614";
    event.target.style.color = "white";
  };

  const handleClick = () => {
    props.submit();
  };

  return (
    <div
      style={styles.submit}
      onMouseOver={onMouseOverEvent}
      onMouseOut={onMouseOutEvent}
      onClick={handleClick}
    >
      SUBMIT
    </div>
  );
}

export default RatingSubmit;

const styles = {
  submit: {
    background: "#FC7614",
    color: "white",
    borderRadius: "22.5px",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "1.86667px",
    padding: "12px 108px",
    cursor: "pointer",
  },
};
