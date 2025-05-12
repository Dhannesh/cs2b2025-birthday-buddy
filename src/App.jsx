import { useState } from "react";
import data from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  const [isLoaded, setLoaded] = useState(true);

  const handleClick = () => {
    setLoaded(!isLoaded);
    if (isLoaded) setPeople([]);
    else setPeople(data);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <section>
                <article className="person">
                  <img src={image} />
                  <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                  </div>
                </article>
              </section>
            );
          })}
          <button className="btn btn-block" onClick={handleClick}>
            {isLoaded ? "clear all" : "load data"}
          </button>
          <p>This project is developed for CS2B 2025 Batch</p>
        </section>
      </main>
    </>
  );
};
export default App;
