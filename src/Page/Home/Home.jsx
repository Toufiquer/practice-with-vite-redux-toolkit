import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Card from "../../components/utils/Card";
import Form from "../../components/utils/Form";
import Summery from "../../components/utils/Summery";
const Home = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="container">
          <Card />

          <Form />

          <p className="second_heading">Your Transactions:</p>

          <div className="conatiner_of_list_of_transactions">
            <ul>
              <Summery />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
