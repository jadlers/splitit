import React from "react";

export default function OverviewTable({ both, dagOnly, sisOnly }) {
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
  );
}
