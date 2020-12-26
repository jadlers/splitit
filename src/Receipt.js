import React, { useEffect, useState } from "react";

import PersonalExpences from "./PersonalExpences";
import OverviewTable from "./OverviewTable";

export default function Receipt({ id, saveInfo, showOverview }) {
  const [total, setTotal] = useState(0);
  const [dagOnly, setPersonalDag] = useState(0);
  const [sisOnly, setPersonalSis] = useState(0);
  const [sisPaid, setSisPaid] = useState(true);

  const both = (total - (dagOnly + sisOnly)) / 2;

  useEffect(() => {
    saveInfo(both, dagOnly, sisOnly, sisPaid);
  }, [both, dagOnly, sisOnly, sisPaid]);

  return (
    <div className="flex flex-col space-y-4 my-4 px-4 text-center">
      <p className="text-xl font-semibold">{`Kvitto #${id}`}</p>
      <label>
        Kvitto totalt:
        <input
          type="number"
          step="0.01"
          onChange={(e) => setTotal(parseFloat(e.target.value))}
          className="border-b-2 border-yellow-400 ml-2"
        />
      </label>
      <PersonalExpences name="Dag" setTotal={setPersonalDag} />
      <PersonalExpences name="Åsa" setTotal={setPersonalSis} />
      <div className="flex mx-auto ">
        <label className="px-2">
          <input
            type="radio"
            name={`paid${id}`}
            checked={!sisPaid}
            onChange={() => setSisPaid(false)}
          />
          Dag
        </label>
        <label className="px-2">
          <input
            type="radio"
            name={`paid${id}`}
            checked={sisPaid}
            onChange={() => setSisPaid(true)}
          />
          Åsa
        </label>
      </div>
      {showOverview && (
        <OverviewTable both={both} dagOnly={dagOnly} sisOnly={sisOnly} />
      )}
    </div>
  );
}
