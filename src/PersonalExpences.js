import React, { useState } from "react";

export default function PersonalExpences({ name, setTotal }) {
  const [idx, setIdx] = useState(0);
  const [expences, setExpences] = useState([]);
  const [next, setNext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const asNum = parseFloat(next);
    if (!asNum) {
      return;
    }
    const newExpences = [...expences, { id: idx, val: asNum }];
    setExpences(newExpences);
    setIdx(idx + 1);
    setNext("");
    setTotal(newExpences.reduce((acc, cur) => acc + cur.val, 0));
  };

  return (
    <div>
      <p>{`Endast ${name}:`}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={next}
          step="0.01"
          onChange={(e) => setNext(e.target.value)}
          className="border-2 border-gray-400"
        />
      </form>
      <ul>
        {expences.map((e, i) => (
          <li key={e.id}>{e.val}</li>
        ))}
      </ul>
    </div>
  );
}
