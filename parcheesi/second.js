import { PLAYERS, STEP_LENGTH } from './first.js';

// the key is the cell number and value is X and Y coordinates
const MAP_coordinates = {

    1: [-0.4, 12],
    2: [0.52, 12],
    3: [1.5, 12],
    4: [2.48, 12],
    5: [3.48, 12],
    6: [4.5, 12],
    7: [5.5, 12],
    8: [6.5, 11],
    9: [7.5, 12],
    10: [6.5, 13],
    11: [6.5, 14],
    12: [6.5, 14.9],
    13: [6.5, 15.8],
    14: [6.5, 16.8],
    15: [6.5, 17.8],
    16: [6.5, 18.8],
    17: [9.2, 18.8],
    18: [11.6, 18.8],
    19: [11.6, 18],
    20: [11.6, 17],
    21: [11.6, 16],
    22: [11.6, 15],
    23: [11.6, 14],
    24: [11.6, 13],
    25: [11, 12],
    26: [12, 11],
    27: [13, 11.6],
    28: [14, 11.6],
    29: [15, 11.6],
    30: [16, 11.6],
    31: [16.9, 11.6],
    32: [17.8, 11.6],
    33: [18.76, 11.6],
    34: [18.76, 9],
    35: [18.76, 6.8],
    36: [17.8, 6.8],
    37: [16.9, 6.8],
    38: [16, 6.8],
    39: [15, 6.8],
    40: [14, 6.8],
    41: [13, 6.8],
    42: [12, 7],
    43: [11.2, 6.4],
    44: [11.6, 5.4],
    45: [11.6, 4.5],
    46: [11.6, 3.5],
    47: [11.6, 2.5],
    48: [11.6, 1.6],
    49: [11.6, 0.64],
    50: [11.6, -0.36],
    51: [9.2, -0.36],
    52: [6.8, -0.36],
    53: [6.8, 0.64 ],
    54: [6.8, 1.6],
    55: [6.8, 2.5],
    56: [6.8, 3.5],
    57: [6.8, 4.5],
    58: [6.8, 5.4],
    59: [7, 6.4],
    60: [6.4, 7],
    61: [5.4, 6.8],
    62: [4.42, 6.8],
    63: [3.48, 6.8],
    64: [2.48, 6.8],
    65: [1.5, 6.8],
    66: [0.52, 6.8],
    67: [-0.4, 6.8],
    68: [-0.4, 9.2],
    
  
    // where pawns enter home

    // pawn1
    100: [0.52, 9.2],
    101: [1.5, 9.2],
    102: [2.48, 9.2],
    103: [3.48, 9.2],
    104: [4.42, 9.2],
    105: [5.4, 9.2],
    106: [6.4, 9.2],
    107: [7.8, 9.2],
    // Pawn2
    200: [17.8, 9,2],
    201: [16.9, 9,2],
    202: [16, 9,2],
    203: [15, 9,2],
    204: [14, 9,2],
    205: [13, 9,2],
    206: [12, 9,2],
    207: [10.6, 9,2],

    // pawns in Nest 
    // pawns player 1
    300: [1.5735, 15.001008],
    301: [1.5735, 16.8008],
    302: [3.550035, 15.008],
    303: [3.550035, 16.801],

    // pawns player 2
    400: [16.99, 1.748],
    401: [14.88, 1.748],
    402: [16.9, 3.35],
    403: [14.88, 3.35],
};



const diceButtonElement = document.querySelector('#dice-btn');
const playerPiecesElements = {
    P1: document.querySelectorAll('[player-id="P1"].player-piece'),
    P2: document.querySelectorAll('[player-id="P2"].player-piece'),
}
/*A callback function is a function that is passed as an argument to another function and is executed 
after some event occurs or when a task is completed. The main purpose of a callback function is to provide
 a way to execute code asynchronously, meaning that the program does not have to wait for the task to be completed
 before moving on to the next task.
*/
export class UI {
    static listenDiceClick(callback) {
        diceButtonElement.addEventListener('click', callback);
    }

    static listenResetClick(callback) {
        document.querySelector('button#reset-btn').addEventListener('click', callback)
    }

    static listenPieceClick(callback) {
        document.querySelector('.player-pieces').addEventListener('click', callback)
    }

    static setPiecePosition(player, piece, newPosition) {
        if(!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
            console.error(`Player element of given player: ${player} and piece: ${piece} not found`)
            return;
        }

        const [x, y] = MAP_coordinates[newPosition];

        const pieceElement = playerPiecesElements[player][piece];
        pieceElement.style.top = y * STEP_LENGTH + '%';
        pieceElement.style.left = x * STEP_LENGTH + '%';
    }

    static setTurn(index) {
        if(index < 0 || index >= PLAYERS.length) {
            console.error('index out of bound!');
            return;
        }
        
        const player = PLAYERS[index];

        // Display player ID
        document.querySelector('.active-player span').innerText = player;

        const activePlayerBase = document.querySelector('.player-base.highlight');
        if(activePlayerBase) {
            activePlayerBase.classList.remove('highlight');
        }
        // highlight
        document.querySelector(`[player-id="${player}"].player-base`).classList.add('highlight')
    }

    static enableDice() {
        diceButtonElement.removeAttribute('disabled');
    }

    static disableDice() {
        diceButtonElement.setAttribute('disabled', '');
    }


    static highlightPieces(player, pieces) {
        pieces.forEach(piece => {
            const pieceElement = playerPiecesElements[player][piece];
            pieceElement.classList.add('highlight');
        })
    }

    static unhighlightPieces() {
        document.querySelectorAll('.player-piece.highlight').forEach(ele => {
            ele.classList.remove('highlight');
        })
    }

    static setDiceValue(value) {
        document.querySelector('.dice-value').innerText = value;
    }
}

