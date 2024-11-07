
const knightMoves = require('./KnightTravails');

// Test Cases

// Short path
knightMoves([0, 0], [2, 1]);
// Long path
knightMoves([0, 0], [7, 7]);
// Random path
knightMoves([4, 1], [0, 5]);
// Out of boundaries path
knightMoves([0, 0], [9, 10]);

