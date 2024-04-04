const Exponent = ({ count, exponent }) => {
  // Calculate the result of the exponentiation
  const result = Math.pow(count, exponent);
  let expression = "";
  for (let i = 0; i < exponent; i++) {
    if (i > 0) {
      expression += " * ";
    }
    expression += count;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {expression} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
