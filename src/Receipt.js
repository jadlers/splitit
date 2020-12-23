import React, { useState } from "react";

import PersonalExpences from "./PersonalExpences";

export default function Receipt() {
  const [total, setTotal] = useState(0);
  const [personalSis, setPersonalSis] = useState(0);
  const [personalDag, setPersonalDag] = useState(0);

  const bothPart = (total - (personalDag + personalSis)) / 2;
  const sisPart = bothPart + personalSis;
  const dagPart = bothPart + personalDag;

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
      <table>
        <thead>
          <tr>
            <td>Person</td>
            <td>Gemensamt</td>
            <td>Personligt</td>
            <td>Totalt</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dag</td>
            <td>{bothPart}</td>
            <td>{dagPart}</td>
            <td>{bothPart + dagPart}</td>
          </tr>
          <tr>
            <td>Åsa</td>
            <td>{bothPart}</td>
            <td>{sisPart}</td>
            <td>{bothPart + sisPart}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
