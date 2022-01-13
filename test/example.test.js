/* eslint-disable no-useless-escape */
// IMPORT MODULES under test here:
import {
    renderGame,
    renderTeam
} from '../render-utils.js';

const test = QUnit.test;

test('should return a DOM node for a team', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class=\"team\"><p class=\"name\">chelsea</p><p class=\"score\">3</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam('chelsea', 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('should return a DOM node for a game', (expect) => {
    //Arrange
    let currentGame = {
        name1: '',
        name2: '',
        score1: 0,
        score2: 0,
    }; 
    // Set up your arguments and expectations
    const expected = '<div class=\"game\"><div class=\"team\"><p class=\"name\"></p><p class=\"score\">0</p></div><div class=\"team\"><p class=\"name\"></p><p class=\"score\">0</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(currentGame);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
