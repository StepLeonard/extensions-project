import { useState } from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import data from "../data.js";

function Home() {
  const [items, setItems] = useState(data);
  const [filter, setFilter] = useState("all");

  const visibleItems =
    filter === "active"
      ? items.filter((item) => item.isActive)
      : filter === "inactive"
      ? items.filter((item) => !item.isActive)
      : items;

  const handleToggle = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleFilter = (next) => setFilter(next);

  return (
    <main className="wrap">
      <h1 className="title">Extensions List</h1>

      <div className="buttons">
        <Button
          data-active={filter === "all"}
          active={filter === "all"}
          onClick={() => handleFilter("all")}
        >
          All
        </Button>
        <Button
          data-active={filter === "active"}
          active={filter === "active"}
          onClick={() => handleFilter("active")}
        >
          Active
        </Button>
        <Button
          data-active={filter === "inactive"}
          active={filter === "inactive"}
          onClick={() => handleFilter("inactive")}
        >
          Inactive
        </Button>
      </div>

      {/* This must be a direct child so your .wrap > .grid rule makes it full width */}
      <div className="grid">
        {visibleItems.length === 0 ? (
          <p className="empty">No extensions found.</p>
        ) : (
          visibleItems.map((item) => (
            <Card
              key={item.id}
              logo={item.logo}
              title={item.name}
              info={item.description}
              isOn={item.isActive}
              handleToggle={() => handleToggle(item.id)}
              handleRemove={() => handleRemove(item.id)}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Home;
