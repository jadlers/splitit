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
      <form onSubmit={handleSubmit}>
        <label>
          {`Endast ${name}:`}
          <input
            type="number"
            value={next}
            step="0.01"
            onChange={(e) => setNext(e.target.value)}
            className="ml-2 border-b-2 border-yellow-400"
          />
        </label>
      </form>
      <ul className="list-inside list-disc">
        {expences.map((e, i) => (
          <li key={e.id}>{e.val}kr</li>
        ))}
      </ul>
    </div>
  );
}
