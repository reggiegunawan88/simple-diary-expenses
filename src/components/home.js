import React, { useState } from "react";
import Card from "./card";
import Modal from "./modal";

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  var totalCost = 0;

  //sum total cost within items object
  function sumTotalCost() {
    Object.values(props.items).map((item) => sumEachCost(item));
    return totalCost;
  }

  //sum total cost in each item object
  function sumEachCost(item) {
    let totalValue = item.reduce((temp, currValue) => temp + currValue.cost, 0);
    totalCost += totalValue;
  }

  //convert num format into XXX,XXX
  function convertToThousand(number) {
    return number.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }

  return (
    <div>
      <div className="items-center">
        <h1 className="text-4xl p-4">Diari Jajan Februari 2021</h1>
        <p className="text-2xl">
          Pengeluaran bulan ini : {convertToThousand(sumTotalCost())}
        </p>
        <button
          className="mt-5 bg-purple-600 p-3 text-white font-bold rounded-md"
          onClick={() => setShowModal(true)}
        >
          TAMBAH ITEM
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4  mt-5">
        {props.items &&
          Object.values(props.items).map((item, idx) => (
            <Card items={item} key={idx} />
          ))}
      </div>
      <Modal
        showModal={showModal}
        hideModal={() => setShowModal(false)}
        receivedNewData={props.receivedNewData}
      />
    </div>
  );
};

export default Home;
