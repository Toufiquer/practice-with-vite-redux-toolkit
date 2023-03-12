import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { fetchTransactionApi } from "../../components/redux/addTransaction/addTransactionSlice";
import Card from "../../components/utils/Card";
import Form from "../../components/utils/Form";
import Summery from "../../components/utils/Summary";
const Home = () => {
  const { totalTransaction, isLoading, isError, error } = useSelector(
    (state) => state.totalTransaction
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactionApi());
  }, []);
  // Depside what to render
  let content = null;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>Error: {error}</div>;
  }
  if (!isLoading && !isError && totalTransaction.length === 0) {
    content = <div>No Transaction Found</div>;
  }
  if (!isLoading && !isError && totalTransaction.length > 0) {
    content = totalTransaction.map((curr) => (
      <Summery key={curr.id} summary={curr} />
    ));
  }
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="container">
          <Card />

          <Form />

          <p className="second_heading">Your Transactions:</p>

          <div className="conatiner_of_list_of_transactions">
            <ul>{content}</ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
