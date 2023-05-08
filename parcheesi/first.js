

// 100% divided by 20 columns or rows both sides
export const STEP_LENGTH = 5;

export const PLAYERS = ['P1', 'P2'];

export const BASE_POSITIONS = {
    P1: [300, 301, 302, 303],
    P2: [400, 401, 402, 403],
}

export const START_POSITIONS = {
    P1: 5,
    P2: 39
}

export const HOME_ENTRANCE = {
    P1: [100, 101, 102, 103, 104, 105, 106, 107],
    P2: [200, 201, 202, 203, 204, 205, 206, 207]
}

export const HOME_POSITIONS = {
    P1: 107,
    P2: 207
}

export const TURNING_POINTS = {
    P1: 68,
    P2: 34
}

export const SAFE_POSITIONS = [5, 12, 17, 22, 29, 34, 39, 46, 51, 56, 63, 68];

export const STATE = {
    DICE_NOT_ROLLED: 'DICE_NOT_ROLLED',
    DICE_ROLLED: 'DICE_ROLLED',
}