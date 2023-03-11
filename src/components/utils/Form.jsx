import React from "react";

const Form = () => {
  const [fromChecked, setFromChecked] = React.useState({
    value1: "income",
    value2: "expense",
    selectedValue: "income",
  });
  const handleChange = (event) => {
    event.preventDefault();
    console.log(fromChecked);
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
            <input type="number" placeholder="300" name="transaction_amount" />
          </div>

          <button className="btn">Add Transaction</button>

          <button className="btn cancel_edit">Cancel Edit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
