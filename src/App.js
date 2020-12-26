import React, { useState } from "react";

import Header from "./Header";
import Receipt from "./Receipt";
import OverviewTable from "./OverviewTable";

function App() {
  const [receipts, setReceipts] = useState({
    1: { both: 0, dag: 0, sis: 0 },
  });
  const [nextIdx, setNextIdx] = useState(2);
  const [showOverviews, setShowOverviews] = useState(false);

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
      <main className="min-h-screen py-4 bg-yellow-50 text-center">
        {Object.keys(receipts)
          .sort()
          .map((rec) => (
            <Receipt
              key={rec}
              id={rec}
              saveInfo={createSaveInfoFn(rec)}
              showOverview={showOverviews}
            />
          ))}
        <button
          onClick={() => setShowOverviews(!showOverviews)}
          className="py-2 px-4 rounded pointer bg-yellow-200 text-gray-800 font-bold"
        >
          {showOverviews ? "Dölj översikter" : "Visa översikter"}
        </button>
        <button
          onClick={addReceipt}
          className="py-2 px-4 ml-4 rounded pointer bg-yellow-400 font-bold"
        >
          Nytt kvitto
        </button>
        <p>
          Summa summarum landade kalasen på{" "}
          <span className="font-bold">
            {`totalt ${2 * bothTotal + dagTotal + sisTotal}kr`}
          </span>
        </p>
        <OverviewTable both={bothTotal} dagOnly={dagTotal} sisOnly={sisTotal} />
      </main>
    </>
  );
}

export default App;
