import React, { useState } from "react";
const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}³</p>
    <p className="exponent-result">
      2 * 2 * 2 = <span className="total">8</span>
    </p>
  </div>
);

export default ExponentThree;
