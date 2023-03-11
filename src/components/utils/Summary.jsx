import React from "react";
import { useDispatch } from "react-redux";
import { addTransactionActions } from "../redux/addTransaction/addTransactionSlice";
import deleteImg from "../../components/images/delete.svg";
import editImg from "../../components/images/edit.svg";
const Summary = ({ summary = {} }) => {
  const { id, name, amount, type } = summary;
  console.log(addTransactionActions);
  const dispatch = useDispatch();
  return (
    <>
      <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className="right">
          <p>৳ {amount}</p>
          <button
            onClick={() => dispatch(addTransactionActions.editTransaction(id))}
            className="link"
          >
            <img className="icon" src={editImg} />
          </button>
          <button
            onClick={() =>
              dispatch(addTransactionActions.deleteTransaction(id))
            }
            className="link"
          >
            <img className="icon" src={deleteImg} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Summary;
