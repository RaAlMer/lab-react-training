import "./NumbersTable.css";

export function NumbersTable({ limit }) {
  let arrayNum = [];
  const loopNum = () => {
    for (let i = 1; i <= limit; i++) {
      arrayNum.push(i);
    }
  };

  return (
    <div className="number_container">
      {loopNum()}
      {arrayNum.map((elem) =>
        elem % 2 === 0 ? (
          <div key={elem} className="number_cell" style={{ backgroundColor: "red" }}>
            {elem}
          </div>
        ) : (
          <div key={elem} className="number_cell" style={{ backgroundColor: "white" }}>
            {elem}
          </div>
        )
      )}
    </div>
  );
}
