// 투표 항목과 득표수, 타입 지정, 객체 선언 같은 것
interface VoteOption {
  name: string;
  votes: number;
}

// 투표 생성
function createVoteOption(name: string): VoteOption {
  return {
    name,
    votes: 0,
  };
}

// 투표 함수
function vote(option: VoteOption): void {
  option.votes += 1;
  console.log(`${option.name}에 투표 완료, 현재 투표수 : ${option.votes}`);
}

// 투표수 조회하는 함수
// 입력으로 VoteOption []을 받아서 리턴은 없음
// 안에서 모든 투표의 투표수를 콘솔에 출력
function getVoteResults(options: VoteOption[]): void {
  console.log("\n--- 현재 투표 현황 ---");
  console.log(`첫 번째 투표 : ${options[0].votes}`);
  options.forEach((o) => console.log(`${o.name} : ${o.votes} 표`));
  console.log("-------------------------");
}

// 모든 투표의 최고 투표 항목을 찾아서 반환하는 함수
// 동점일 경우 첫 번째 항목을 반환
// 진행 중인 투표가 없는 경우 null 반환
function getWinner(options: VoteOption[]): VoteOption | null {  // 반환값 여러 개 지정
  let winner: VoteOption = options[0];

  if (options.length === 0) {
    return null;
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].votes > winner.votes) {
      winner = options[i];
    }

    // 동점인 경우
    if (options[i].votes === winner.votes) {
      continue;
    }
  }

  return winner;
}

function main(): void {
  // 투표 항목 생성
  const menuOptions: VoteOption[] = [
    createVoteOption("김치찌개"),
    createVoteOption("된장찌개"),
    createVoteOption("제육볶음"),
    createVoteOption("돈까스"),
  ];

  // 투표 진행
  vote(menuOptions[0]); // 김찌
  vote(menuOptions[2]); // 제육
  vote(menuOptions[0]); // 김찌
  vote(menuOptions[3]); // 돈까스
  vote(menuOptions[2]); // 제육
  vote(menuOptions[0]); // 김찌

  // 현재 투표 현황 출력
  getVoteResults(menuOptions);

  // 최종 우승 항목 발표
  const winner = getWinner(menuOptions);

  if (winner) {
    console.log(
      `오늘의 점심 메뉴는 바로... ${winner.name}입니다! (${winner.votes}표)`
    );
  } else {
    console.log("아직 투표된 항목이 없습니다.");
  }
}

main();
