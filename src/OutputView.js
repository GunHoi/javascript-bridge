const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart(){
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upMap, downMap) {
    MissionUtils.Console.print("["+upMap+"]");
    MissionUtils.Console.print("["+downMap+"]");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upMap, downMap) {
    MissionUtils.Console.print("최종 게임 결과");
    MissionUtils.Console.print("["+upMap+"]");
    MissionUtils.Console.print("["+downMap+"]");
  },
  printIsGameClear(success){
    MissionUtils.Console.print("게임 성공 여부: "+success);
  },
  printHowManyPlay(cumulativeCount){
    MissionUtils.Console.print("총 시도한 횟수: "+cumulativeCount);
    MissionUtils.Console.close();
  },
  printErrorMessageAboutBridgeSize(){
    MissionUtils.Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },
  printErrorMessageAboutMoving(){
    MissionUtils.Console.print("[ERROR] 입력 값은 대문자 U 또는 D 여야 합니다.");
  },
  printErrorMessageAboutOneLetter(){
    MissionUtils.Console.print("[ERROR] 한 글자만 입력해야 합니다.");
  },
  printErrorMessageAboutGameCommand(){
    MissionUtils.Console.print("[ERROR] 입력 값은 대문자 R 또는 Q 여야 합니다.");
  },
};

module.exports = OutputView;
