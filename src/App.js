import React, { useState } from "react";

import Header from "./Header";
import Receipt from "./Receipt";
import OverviewTable from "./OverviewTable";

function App() {
  const [recipts, setRecipts] = useState({
    0: { both: 0, dag: 0, sis: 0 },
    1: { both: 0, dag: 0, sis: 0 },
  });
  // const [nextIdx, setNextIdx] = useState(2); // TODO: Update

  const bothTotal = Object.values(recipts).reduce(
    (acc, { both }) => acc + both,
    0
  );
  const dagTotal = Object.values(recipts).reduce(
    (acc, { dag }) => acc + dag,
    0
  );
  const sisTotal = Object.values(recipts).reduce(
    (acc, { sis }) => acc + sis,
    0
  );

  const createSaveInfoFn = (key) => {
    return (both, dag, sis) => {
      setRecipts({ ...recipts, [key]: { both, dag, sis } });
    };
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-4 bg-yellow-100 text-center">
        {Object.keys(recipts)
          .sort()
          .map((rec) => (
            <Receipt key={rec} id={rec} saveInfo={createSaveInfoFn(rec)} />
          ))}
        <p>Summa summarum landade kalasen på</p>
        <p className="font-bold">{`Totalt: ${2 * bothTotal + 0 + 0}kr`}</p>
        <OverviewTable both={bothTotal} dagOnly={dagTotal} sisOnly={sisTotal} />
      </main>
    </>
  );
}

export default App;
