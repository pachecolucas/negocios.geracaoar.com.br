export type State = {
    f: 1
    s: 1 | 2
} | {
    f: 2
    s: 1 | 2 | 3 | 4 | 5
} | {
    f: 3
    s: 1 | 2 | 3 | 4 | 5 | 6
} | {
    f: 4
    s: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export const FASES = [
    {title: "Ideia", f: 1, s: 2 },
    {title: "Projeto", f:2, s: 5 },
    {title: "Negócio", f: 3, s: 6 },
    {title: "Movimento", f: 4, s: 7 },
]

export const STATES: State[] = [
    {f:1, s:1},
    {f:1, s:2},
    {f:2, s:1},
    {f:2, s:2},
    {f:2, s:3},
    {f:2, s:4},
    {f:2, s:5},
    {f:3, s:1},
    {f:3, s:2},
    {f:3, s:3},
    {f:3, s:4},
    {f:3, s:5},
    {f:3, s:6},
    {f:4, s:1},
    {f:4, s:2},
    {f:4, s:3},
    {f:4, s:4},
    {f:4, s:5},
    {f:4, s:6},
    {f:4, s:7},
    {f:4, s:8},
    {f:4, s:9},
]