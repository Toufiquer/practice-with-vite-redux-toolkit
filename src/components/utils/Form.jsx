import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionActions } from "../redux/addTransaction/addTransactionSlice";

const Form = () => {
  const { isEdit, edit } = useSelector((state) => state.totalTransaction);
  const [fromChecked, setFromChecked] = React.useState({
    value1: "income",
    value2: "expense",
    selectedValue: "income",
  });
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit.id && isEdit) {
      setName(edit.name);
      setAmount(edit.amount);
      setFromChecked({
        value1: "income",
        value2: "expense",
        selectedValue: edit.selectedValue,
      });
    }
  }, [isEdit, edit.id]);

  const refresh = () => {
    setName("");
    setAmount("");
  };
  const dispatchAction = (isUpdate = false) => {
    if (!isUpdate) {
      dispatch(
        addTransactionActions.addTransaction({
          type: fromChecked.selectedValue,
          name,
          amount,
        })
      );
    } else {
      dispatch(
        addTransactionActions.updateTransaction({
          type: fromChecked.selectedValue,
          name,
          amount,
        })
      );
      dispatch(addTransactionActions.cancelTransaction());
    }
    refresh();
  };
  const handleChange = (event) => {
    event.preventDefault();
    dispatchAction();
  };
  return (
    <>
      <form onSubmit={handleChange}>
        <div className="form">
          <h3>Add new transaction</h3>

          <div className="form-group">
            <label htmlFor="transaction_name">Name</label>
            <input
              type="text"
              name="transaction_name"
              placeholder="My Salary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group radio">
            <label htmlFor="transaction_type">Type</label>
            <div className="radio_group">
              <input
                type="radio"
                value={fromChecked.value1}
                name="transaction_type"
                onChange={(e) =>
                  setFromChecked({
                    ...fromChecked,
                    selectedValue: e.target.value,
                  })
                }
                checked
              />
              <label htmlFor="transaction_type">Income</label>
            </div>
            <div className="radio_group">
              <input
                type="radio"
                value={fromChecked.value2}
                onChange={(e) =>
                  setFromChecked({
                    ...fromChecked,
                    selectedValue: e.target.value,
                  })
                }
                name="transaction_type"
                placeholder="Expense"
              />
              <label htmlFor="transaction_type">Expense</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="transaction_amount">Amount</label>
            <input
              type="number"
              placeholder="300"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name="transaction_amount"
            />
          </div>

          <button className="btn">
            {isEdit ? "Update" : "Add"} Transaction
          </button>

          {isEdit && (
            <button
              onClick={() => dispatchAction(true)}
              className="btn cancel_edit"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
