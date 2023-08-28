"use client";

import Geometry from "@/components/geometry";
import Controls from "@/components/controls";
import { useEffect, useState } from "react";
import { STATES, State } from "@/state";

export default function Home() {
  const [index, setIndex] = useState(0);

  const [state, setState] = useState(STATES[0]);

  const actions = {
    setState: (fase: number, subfase: number) => {
      const indexOfState = STATES.findIndex(
        (s) => s.f === fase && s.s === subfase
      );
      setIndex(indexOfState);
    },
    next: () => {
      const newIndex = normalizeIndex(index + 1);
      setIndex(newIndex);
    },
    prev: () => {
      const newIndex = normalizeIndex(index - 1);
      setIndex(newIndex);
    },
  };

  useEffect(() => {
    setState(STATES[index]);
  }, [index]);

  return (
    <main className="min-h-screen flex justify-center">
      <Geometry state={state} />
      <Controls state={state} actions={actions} />
    </main>
  );
}

const normalizeIndex = function (index: number) {
  if (index < 0) return 0;
  if (index >= STATES.length) return STATES.length - 1;
  return index;
  // const resto = Math.abs(index % STATES.length);
  // // console.log(`${index} / ${STATES.length} = ${resto}`);
  // return resto;
};
