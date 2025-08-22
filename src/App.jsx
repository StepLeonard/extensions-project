import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import data from "./data.js";
import "./App.css";

function App() {
  const [items, setItems] = useState(data);
  const [filter, setFilter] = useState("all");

  const visibleItems =
    filter === "active"
      ? items.filter((item) => item.isActive)
      : filter === "inactive"
      ? items.filter((item) => !item.isActive)
      : items;

  const handleToggle = (id) => {
    setItems((itemsOne) =>
      itemsOne.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((itemsOne) => itemsOne.filter((item) => item.id !== id));
  };

  const handleFilter = (nextFilter) => {
    setFilter(nextFilter);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            list={visibleItems}
            filter={filter}
            handleFilter={handleFilter}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
          />
        }
      />
    </Routes>
  );
}

export default App;
