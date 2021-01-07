import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function CalcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return CalcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [even, setEven] = useState(false);

  useEffect(() => setFatorial(CalcFatorial(number)), [number]);
  useEffect(() => setEven(number % 2 === 0), [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercio #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{even ? "Par" : "Ímpar"}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
