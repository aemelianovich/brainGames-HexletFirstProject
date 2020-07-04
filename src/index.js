/// /////////////////////////////////
// Game engine logic:
// List of required game functions:
// - showGameRules()
// - getGameQuestion()
// - showGameQuestion(question)
// - getAnswer()
// - getCorrectGameAnswer(question)
// - showRoundWinMsg()
// - showRoundLostMsg(answer, correctAnswer)
// - showWinMsg(playerName)
// - showLostMsg(playerName)
/// /////////////////////////////////

// Run Game function
const runGame = (numberOfRounds = 1, playerName = '', gameFunctions) => {
  // guard conditions
  if (numberOfRounds < 1) {
    throw new Error(`Number of rounds should be >= ${minRoundValue}. You passed numberOfRounds: "${numberOfRounds}"`);
  }

  // Show game rules
  gameFunctions.get('showGameRules')();

  // Play round iterative recursion
  const playRound = (currRound) => {
    // Termination condition
    if (currRound > numberOfRounds) {
      return true;
    }

    // Build and show game question
    const question = gameFunctions.get('getGameQuestion')();
    gameFunctions.get('showGameQuestion')(question);

    // Get answer
    const answer = gameFunctions.get('getAnswer')();

    // Check answer correctness
    const correctAnswer = gameFunctions.get('getCorrectGameAnswer')(question);
    if (answer === correctAnswer) {
      gameFunctions.get('showRoundWinMsg')();
      // Go to the next round
      return playRound(currRound + 1);
    }

    // Show incorrect answer
    gameFunctions.get('showRoundLostMsg')(answer, correctAnswer);

    return false;
  };

  // Init first round and get game result
  const isWinner = playRound(1);
  if (isWinner) {
    gameFunctions.get('showWinMsg')(playerName);
  } else {
    gameFunctions.get('showLostMsg')(playerName);
  }
};

export default runGame;
