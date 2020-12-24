import React, { useEffect, useState } from "react";

import PersonalExpences from "./PersonalExpences";
import OverviewTable from "./OverviewTable";

export default function Receipt({ id, saveInfo }) {
  const [total, setTotal] = useState(0);
  const [dagOnly, setPersonalDag] = useState(0);
  const [sisOnly, setPersonalSis] = useState(0);

  const both = (total - (dagOnly + sisOnly)) / 2;

  useEffect(() => {
    saveInfo(both, dagOnly, sisOnly);
  }, [both, dagOnly, sisOnly]);

  return (
    <div className="flex flex-col space-y-4 my-4 px-4 text-center">
      <p>{`Kvitto #${id}`}</p>
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
      <OverviewTable both={both} dagOnly={dagOnly} sisOnly={sisOnly} />
    </div>
  );
}
