import { State } from "@/state";
import { useCallback, useEffect } from "react";
import styled from "styled-components";

type Props = {
  state: State;
  actions: {
    next: () => void;
    prev: () => void;
  };
};

export default function Index({ actions, state }: Props) {
  const handleKeypress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      switch (key) {
        case "ArrowRight":
          actions.next();
          break;
        case "ArrowLeft":
          actions.prev();
          break;
        // case "ArrowDown":
        //   console.log("V");
        //   break;
        // case "ArrowUp":
        //   console.log("A");
        //   break;
      }
    },
    [actions]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => window.removeEventListener("keydown", handleKeypress);
  }, [handleKeypress]);

  return (
    <Wrapper>
      F:{state.f} - S:{state.s}
      <Cell>
        <button onClick={() => actions.prev()}>prev</button>
      </Cell>
      <Cell>
        <button onClick={() => actions.next()}>next</button>
      </Cell>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: black;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
`;

const Cell = styled.div`
  flex: 1;
  text-align: center;
`;
