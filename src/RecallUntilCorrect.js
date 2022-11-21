const InputView = require("./InputView.js");
const ValidCheck = require("./ValidCheck.js");
const RecallUntilCorrect = {
  recallReadBridgeSize(recallUntilCorrect){
    let BRIDGE_SIZE;
    while(recallUntilCorrect){
      BRIDGE_SIZE = InputView.readBridgeSize();
      recallUntilCorrect = ValidCheck.bridgeSizeValidCheck(BRIDGE_SIZE);
    }
    return BRIDGE_SIZE;
  },
  recallReadMoving(recallUntilCorrect){
    let moving;
    while(recallUntilCorrect){
      moving = InputView.readMoving();
      recallUntilCorrect = ValidCheck.movingValidCheck(moving);
    }
    return moving;
  },
  recallreadGameCommand(recallUntilCorrect){
    let gameCommand;
    while(recallUntilCorrect){
      gameCommand = InputView.readGameCommand();
      recallUntilCorrect = ValidCheck.movingValidCheck(gameCommand);
    }
    return gameCommand;
  },
}
module.exports = RecallUntilCorrect;