import React from "react";

import deleteImg from "../../components/images/delete.svg";
import editImg from "../../components/images/edit.svg";
const Summery = () => {
  return (
    <>
      <li className="transaction income">
        <p>Earned this month</p>
        <div className="right">
          <p>৳ 100</p>
          <button className="link">
            <img className="icon" src={editImg} />
          </button>
          <button className="link">
            <img className="icon" src={deleteImg} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Summery;
