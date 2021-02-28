import "./App.css";
import Home from "./components/home";
import { useState, useEffect } from "react";
import JSONData from "./db.json";
import _ from "lodash";

function App() {
  const [originalItems, setOriginalItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    group_data();
  }, []);

  function group_data() {
    //store to state for update data needs
    setOriginalItems(JSONData.items);

    //sort item data descending
    let sortedItems = JSONData.items;
    sortedItems.sort(function (a, b) {
      return new Date(b.created_at).getTime() - new Date(a.created_at);
    });

    //group items by date
    let groupedItems = _.groupBy(sortedItems, function (item) {
      return item.created_at.split(" ")[0];
    });
    setItems(groupedItems);
  }

  function updateData(data) {
    let newData = [...originalItems];
    newData.push(data);

    //store data in state again
    setOriginalItems(newData);

    //sort item data descending
    newData.sort(function (a, b) {
      return new Date(b.created_at).getTime() - new Date(a.created_at);
    });

    //group items by date
    let groupedItems = _.groupBy(newData, function (item) {
      return item.created_at.split(" ")[0];
    });
    setItems(groupedItems);
  }

  return (
    <div className="App">
      <Home items={items} receivedNewData={(data) => updateData(data)} />
    </div>
  );
}

export default App;
