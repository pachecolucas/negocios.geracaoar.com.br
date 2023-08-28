"use client";

import { styled } from "styled-components";
import circle from "./circle.svg";
import triangleUp from "./triangle-up.svg";
import triangleDown from "./triangle-down.svg";
import line1 from "./line1.svg";
import line2 from "./line2.svg";
import line3 from "./line3.svg";
import line4 from "./line4.svg";
import planets from "./planets.svg";
import mercury from "./mercury.svg";

import { State } from "@/state";

type Props = {
  state: State;
};

export default function Geometry({ state }: Props) {
  return (
    <Wrapper>
      {/* FASE 1 */}
      {state.f === 1 && (
        <>
          <img src={circle.src} alt="" />
          {state.s == 2 && <Text>Ideia</Text>}
        </>
      )}

      {/* FASE 2 */}
      {state.f === 2 && (
        <>
          <img src={circle.src} alt="" />
          <img src={triangleUp.src} alt="" />
          {state.s >= 2 && <Text className="mt-[34%]">Missão</Text>}
          {state.s >= 3 && (
            <Text className="mt-[-15%] ml-[-30%] rotate-[-60deg]">Equipe</Text>
          )}
          {state.s >= 4 && (
            <Text className="mt-[-15%] ml-[30%] rotate-[60deg]">Líder</Text>
          )}
          {state.s >= 5 && <Text className="mt-[-1%]">Tarefas</Text>}
        </>
      )}

      {/* FASE 3 */}
      {state.f === 3 && (
        <>
          <img src={circle.src} alt="" />
          <img src={triangleUp.src} alt="" />
          <Text className="mt-[34%]">Missão</Text>
          <Text className="mt-[-15%] ml-[-30%] rotate-[-60deg]">Equipe</Text>
          <Text className="mt-[-15%] ml-[30%] rotate-[60deg]">Líder</Text>
          <img src={line1.src} alt="" />
          <img src={line2.src} alt="" />
          <img src={line3.src} alt="" />
          <img src={line4.src} alt="" />
          {state.s >= 2 && <Text className="mt-[17%]">Fluxo de Caixa</Text>}
          {state.s >= 3 && <Text className="mt-[5.5%]">Comunicação</Text>}
          {state.s >= 4 && <Text className="mt-[-5.5%]">Sistemas</Text>}
          {state.s >= 5 && <Text className="mt-[-16.5%]">Legal</Text>}
          {state.s >= 6 && <Text className="mt-[-27.5%]">Prod.</Text>}
        </>
      )}

      {state.f === 4 && (
        <>
          {/* FASE 4 */}
          <img src={circle.src} alt="" />
          <img src={triangleUp.src} alt="" />
          <img src={line1.src} alt="" />
          {state.s < 9 && (
            <>
              <img src={line2.src} alt="" />
              <img src={line3.src} alt="" />
              <img src={line4.src} alt="" />
              <Text className="mt-[17%]">Fluxo de Caixa</Text>
              <Text className="mt-[5.5%]">Comunicação</Text>
              <Text className="mt-[-5.5%]">Sistemas</Text>
              <Text className="mt-[-16.5%]">Legal</Text>
            </>
          )}
          <Text className="mt-[-27.5%]">Prod.</Text>
          <img src={triangleDown.src} alt="" />
          <Text className="mt-[-34%] ml-[21%] rotate-[33deg]">Líder</Text>
          <Text className="mt-[-34%] ml-[-21%] rotate-[-33deg]">Equipe</Text>
          <Text className="mt-[34%] ml-[-21%] rotate-[33deg]">Missão</Text>

          {state.s >= 2 && (
            <Text className="mt-[34%] ml-[21%] rotate-[-33deg]">Valores</Text>
          )}
          {state.s >= 3 && (
            <Text className="mt-[0%] ml-[-40%] rotate-[-90deg]">Estudo</Text>
          )}
          {state.s >= 4 && (
            <Text className="mt-[0%] ml-[40%] rotate-[90deg]">Visão</Text>
          )}
          {state.s >= 5 && (
            <Text className="mt-[-13.5%] ml-[-23.5%] rotate-[-60deg]">
              Inovação
            </Text>
          )}
          {state.s >= 6 && (
            <Text className="mt-[-13.5%] ml-[23.5%] rotate-[60deg]">
              Eventos
            </Text>
          )}
          {state.s >= 7 && <Text className="mt-[27.5%]">Social</Text>}
          {state.s >= 8 && <img src={planets.src} alt="" />}
          {state.s >= 9 && <img src={mercury.src} alt="" />}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: min(100vw, 90vh);
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  img {
    left: 10px;
    right: 10px;
    top: 10px;
    position: absolute;
  }
`;

const Text = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: min(3vw, 3vh);
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  /* transform: translate(-50%, -50%); */
`;
