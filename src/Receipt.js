import React, { useEffect, useState } from "react";

import PersonalExpences from "./PersonalExpences";

export default function Receipt() {
  const [total, setTotal] = useState(0);
  const [personalSis, setPersonalSis] = useState(0);
  const [personalDag, setPersonalDag] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ total });
  // };

  const each = (total - (personalDag + personalSis)) / 2;
  const sisPart = each + personalSis;
  const dagPart = each + personalDag;

  useEffect(() => {
    const each = (total - (personalDag + personalSis)) / 2;
    const sisPart = each + personalSis;
    const dagPart = each + personalDag;
    console.log({ total, personalSis, personalDag, sisPart, dagPart });
  }, [total, personalSis, personalDag]);

  return (
    <div>
      <label htmlFor="total">Totalt: </label>
      <input
        type="number"
        id="total"
        step="0.01"
        onChange={(e) => setTotal(parseFloat(e.target.value))}
      />
      <PersonalExpences name="Dag" setTotal={setPersonalDag} />
      <PersonalExpences name="Åsa" setTotal={setPersonalSis} />
      <p>{`Dag: ${dagPart}kr. Gemensamt ${each}kr & personligt ${personalDag}kr`}</p>
      <p>{`Sis: ${sisPart}kr. Gemensamt ${each}kr & personligt ${personalSis}kr`}</p>
    </div>
  );
}
