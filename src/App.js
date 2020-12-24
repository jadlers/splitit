import React, { useState } from "react";

import Header from "./Header";
import Receipt from "./Receipt";
import OverviewTable from "./OverviewTable";

function App() {
  const [receipts, setReceipts] = useState({
    0: { both: 0, dag: 0, sis: 0 },
    1: { both: 0, dag: 0, sis: 0 },
  });
  const [nextIdx, setNextIdx] = useState(1);

  const bothTotal = Object.values(receipts).reduce(
    (acc, { both }) => acc + both,
    0
  );
  const dagTotal = Object.values(receipts).reduce(
    (acc, { dag }) => acc + dag,
    0
  );
  const sisTotal = Object.values(receipts).reduce(
    (acc, { sis }) => acc + sis,
    0
  );

  const createSaveInfoFn = (key) => {
    return (both, dag, sis) => {
      setReceipts({ ...receipts, [key]: { both, dag, sis } });
    };
  };

  const addReceipt = () => {
    setReceipts({ ...receipts, [nextIdx]: { both: 0, dag: 0, sis: 0 } });
    setNextIdx(nextIdx + 1);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-4 bg-yellow-100 text-center">
        {Object.keys(receipts)
          .sort()
          .map((rec) => (
            <Receipt key={rec} id={rec} saveInfo={createSaveInfoFn(rec)} />
          ))}
        <button
          onClick={addReceipt}
          className="py-2 px-4 rounded pointer bg-yellow-400 font-bold"
        >
          Nytt kvitto
        </button>
        <p>Summa summarum landade kalasen på</p>
        <p className="font-bold">{`Totalt: ${2 * bothTotal + 0 + 0}kr`}</p>
        <OverviewTable both={bothTotal} dagOnly={dagTotal} sisOnly={sisTotal} />
      </main>
    </>
  );
}

export default App;
