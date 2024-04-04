const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁶</p>
    <p className="exponent-result">
      2 * 2 * 2 * 2 * 2 * 2 = <span className="total">64</span>
    </p>
  </div>
);

export default ExponentSix;
