import React from "react";

const Card = (items) => {
  let data = items.items;

  //sum all values within items
  function sumValues() {
    return data.reduce((temp, currValue) => temp + currValue.cost, 0);
  }

  //format date into YYYY-MM-DD
  function formatDate(string) {
    var date = new Date(string);
    let options = {
      day: "numeric",
      month: "long",
    };
    return date.toLocaleString("en-US", options);
  }

  //split string time from date
  function formatTime(string) {
    return string.slice(0, 5);
  }

  //convert num into XXX,XXX
  function convertToThousand(number) {
    return number.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }

  return (
    <div className="border m-2 shadow-md">
      <table className="border-collapse m-3 p-2">
        <thead>
          <tr>
            <th>{formatDate(data[0].created_at.split(" ")[0])}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr className="border-b border-t border-gray" key={key}>
              <td>{formatTime(item.created_at.split(" ")[1])}</td>
              <td>{item.name}</td>
              <td>Rp {convertToThousand(item.cost)}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td></td>
            <td>Total: </td>
            <td>Rp {convertToThousand(sumValues())}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card;
