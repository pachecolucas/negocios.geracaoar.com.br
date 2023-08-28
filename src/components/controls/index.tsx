import { State, STATES, FASES } from "@/state";
import { useCallback, useEffect } from "react";
import styled from "styled-components";

type Props = {
  state: State;
  actions: {
    setState: (s: number, f: number) => void;
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
      <Button className="px-2" onClick={() => actions.prev()}>
        {" "}
        &lt;{" "}
      </Button>
      {FASES.map((fase) => (
        <Cell key={fase.f}>
          <Button
            onClick={() => actions.setState(fase.f, fase.s)}
            active={state.f === fase.f}
            className="pt-2"
          >
            {fase.title}
          </Button>
          <Subfases>
            {STATES.filter((s_) => s_.f === fase.f).map((s) => (
              <Button
                key={s.s}
                onClick={() => actions.setState(s.f, s.s)}
                active={state.f === s.f && state.s === s.s}
                className="px-[0.5vw]"
              >
                <span className="text-lg">·</span>
              </Button>
            ))}
          </Subfases>
        </Cell>
      ))}
      <Button className="px-2" onClick={() => actions.next()}>
        {" "}
        &gt;{" "}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #292a2d;
  color: #9aa0a6;
  font-weight: bold;
`;

const Cell = styled.div`
  flex: 1;
  text-align: center;
  > button {
    flex: 1;
    width: 100%;
  }
`;

const Button = styled.button<{ active?: boolean }>`
  text-transform: uppercase;
  font-size: min(2.5vw, 12px);
  background: ${(props) => (props.active ? "none" : "none")};
  color: ${(props) => (props.active ? "white" : "inherit")};
`;

const Subfases = styled.div`
  display: flex;
  justify-content: center;
  > button {
    /* flex: 1; */
  }
`;
