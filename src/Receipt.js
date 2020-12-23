import React, { useState } from "react";

import PersonalExpences from "./PersonalExpences";

export default function Receipt() {
  const [total, setTotal] = useState(0);
  const [sisOnly, setPersonalSis] = useState(0);
  const [dagOnly, setPersonalDag] = useState(0);

  const both = (total - (dagOnly + sisOnly)) / 2;

  const Td = (props) => {
    const textAlign = props.left ? "text-left" : "text-right";
    return (
      <td
        className={`p-1 border border-gray-700 ${textAlign} ${props.classes}`}
      >
        {props.children}
      </td>
    );
  };

  return (
    <div className="flex flex-col space-y-4 my-4 px-4 text-center">
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
      <table className="mx-auto">
        <thead>
          <tr>
            <Td left>Person</Td>
            <Td>Gemensamt</Td>
            <Td>Personligt</Td>
            <Td>Totalt</Td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td left>Dag</Td>
            <Td>{both}</Td>
            <Td>{dagOnly}</Td>
            <Td>{both + dagOnly}</Td>
          </tr>
          <tr>
            <Td left>Åsa</Td>
            <Td>{both}</Td>
            <Td>{sisOnly}</Td>
            <Td>{both + sisOnly}</Td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
