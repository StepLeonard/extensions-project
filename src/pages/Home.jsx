import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

function Home({ list, filter, handleFilter, handleToggle, handleRemove }) {
  return (
    <main className="wrap">
      <h1 className="title">Extensions List</h1>

      <div className="buttons">
        <Button active={filter === "all"} onClick={() => handleFilter("all")}>
          All
        </Button>
        <Button
          active={filter === "active"}
          onClick={() => handleFilter("active")}
        >
          Active
        </Button>
        <Button
          active={filter === "inactive"}
          onClick={() => handleFilter("inactive")}
        >
          Inactive
        </Button>
      </div>

      <div className="grid">
        {list.length === 0 ? (
          <p className="empty">No extensions found.</p>
        ) : (
          list.map((item) => (
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
