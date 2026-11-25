// 미니게임 목록. /games 목록 페이지, 메인화면, 각 게임 페이지의 "다른 게임" 링크가 이 목록을 씁니다.
export type MiniGameGroup = 'party' | 'brain' | 'kids' | 'solo';

export interface MiniGame {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  tags: string[];
  group: MiniGameGroup;
  /** 메인화면에도 보일지 */
  home?: boolean;
}

export const miniGameGroups: Array<{ id: MiniGameGroup; title: string; description: string }> = [
  {
    id: 'party',
    title: '모임 도구',
    description: '모임, 회식, 회사에서 휴대폰 하나로 바로 쓰는 뽑기·내기 도구',
  },
  {
    id: 'brain',
    title: '두뇌 운동',
    description: '큰 글씨, 큰 버튼. 부모님과 함께 하기 좋은 기억력·집중력 게임',
  },
  {
    id: 'kids',
    title: '어린이 · 온 가족',
    description: '구구단, 숫자 추리처럼 놀면서 배우는 게임',
  },
  {
    id: 'solo',
    title: '혼자 하는 게임',
    description: '잠깐 쉴 때 한 판씩, 최고 기록은 내 브라우저에 저장돼요',
  },
];

export const miniGames: MiniGame[] = [
  {
    slug: 'ladder',
    name: '사다리타기',
    icon: '🪜',
    summary: '이름과 결과를 넣으면 사다리가 그려져요. 한 명씩 타거나 한 번에 결과를 볼 수 있어요.',
    tags: ['내기', '순서 정하기'],
    group: 'party',
    home: true,
  },
  {
    slug: 'roulette',
    name: '돌림판 룰렛',
    icon: '🎯',
    summary: '커피 내기, 벌칙, 점심 메뉴까지. 항목을 넣고 돌리면 하나가 뽑혀요.',
    tags: ['내기', '메뉴 정하기'],
    group: 'party',
    home: true,
  },
  {
    slug: 'croc',
    name: '악어 이빨 게임',
    icon: '🐊',
    summary: '이빨을 하나씩 누르다 숨은 아픈 이빨을 누르면 덥석! 폰 하나 돌려 가며 하는 복불복 게임.',
    tags: ['복불복', '모임 게임'],
    group: 'party',
    home: true,
  },
  {
    slug: 'king',
    name: '왕게임 번호 뽑기',
    icon: '👑',
    summary: '인원 수만 넣으면 폰을 돌려 가며 몰래 왕과 번호를 확인해요. 명령 아이디어도 뽑아 줘요.',
    tags: ['모임 게임', '번호 뽑기'],
    group: 'party',
  },
  {
    slug: 'team',
    name: '팀 나누기·제비뽑기',
    icon: '👥',
    summary: '명단을 넣으면 무작위로 팀을 나누거나 당첨자를 뽑아요. 결과는 바로 복사해서 공유.',
    tags: ['팀 편성', '당첨자 뽑기'],
    group: 'party',
  },
  {
    slug: 'dice',
    name: '주사위 굴리기',
    icon: '🎲',
    summary: '주사위 1~6개를 한 번에 굴려요. 합계와 지난 기록까지, 보드게임 주사위가 없을 때 바로.',
    tags: ['주사위', '보드게임'],
    group: 'party',
  },
  {
    slug: 'coin',
    name: '동전 던지기',
    icon: '🪙',
    summary: '앞면일까 뒷면일까? 누르면 동전이 돌아가요. 선 정하기, 둘 중 하나 고르기에 딱.',
    tags: ['선 정하기', '50:50'],
    group: 'party',
  },
  {
    slug: 'number-pick',
    name: '랜덤 숫자 뽑기',
    icon: '🔟',
    summary: '1부터 100까지처럼 범위를 넣으면 숫자를 무작위로 뽑아요. 중복 없이 여러 개도 돼요.',
    tags: ['추첨', '번호 뽑기'],
    group: 'party',
  },
  {
    slug: 'memory',
    name: '같은 그림 짝 맞추기',
    icon: '🃏',
    summary: '카드를 두 장씩 뒤집어 같은 그림을 찾는 기억력 게임. 카드 12·16·20장.',
    tags: ['기억력', '큰 글씨'],
    group: 'brain',
    home: true,
  },
  {
    slug: 'number-order',
    name: '1부터 순서대로 누르기',
    icon: '🔢',
    summary: '섞여 있는 숫자를 1부터 차례로 눌러요. 9칸·16칸·25칸, 걸린 시간을 재요.',
    tags: ['집중력', '큰 글씨'],
    group: 'brain',
  },
  {
    slug: 'proverb',
    name: '속담 완성 퀴즈',
    icon: '📜',
    summary: '"가는 말이 고와야 ___" 속담의 뒷부분을 골라요. 문제마다 속담 뜻도 알려 줘요.',
    tags: ['퀴즈', '우리말'],
    group: 'brain',
  },
  {
    slug: 'color-word',
    name: '글자 색 맞히기',
    icon: '🎨',
    summary: '"빨강"이라고 파란색으로 쓴 글자, 무슨 색일까요? 글자 말고 색을 고르는 집중력 게임.',
    tags: ['집중력', '30초 게임'],
    group: 'brain',
  },
  {
    slug: 'chosung',
    name: '초성 퀴즈',
    icon: '🔤',
    summary: '"ㅅㄱ"는 무슨 과일일까요? 초성만 보고 낱말을 맞혀요. 힌트와 보기 4개 모드도 있어요.',
    tags: ['퀴즈', '우리말'],
    group: 'brain',
    home: true,
  },
  {
    slug: 'odd-one',
    name: '다른 그림 찾기',
    icon: '🔍',
    summary: '똑같은 그림 사이에 딱 하나 다른 그림이 숨어 있어요. 단계마다 칸이 늘어나요.',
    tags: ['관찰력', '큰 글씨'],
    group: 'brain',
  },
  {
    slug: 'gugudan',
    name: '구구단 게임',
    icon: '✖️',
    summary: '단을 골라 10문제. 숫자판으로 답을 누르고, 틀린 문제는 끝나고 다시 보여 줘요.',
    tags: ['어린이', '구구단'],
    group: 'kids',
    home: true,
  },
  {
    slug: 'number-baseball',
    name: '숫자 야구',
    icon: '⚾',
    summary: '컴퓨터가 정한 세 자리 숫자를 스트라이크·볼 힌트로 맞히는 추리 게임.',
    tags: ['추리', '온 가족'],
    group: 'kids',
  },
  {
    slug: 'typing',
    name: '한글 타자 연습',
    icon: '⌨️',
    summary: '짧은 문장을 따라 치며 타수와 정확도를 재요. 속담 문장으로 연습하는 무료 타자 연습.',
    tags: ['타자 연습', '타수 측정'],
    group: 'kids',
    home: true,
  },
  {
    slug: 'omok',
    name: '오목',
    icon: '⚫',
    summary: '컴퓨터와 두는 오목. 쉬움·보통·어려움 세 단계로, 다섯 알을 먼저 잇는 쪽이 이깁니다.',
    tags: ['보드게임', '컴퓨터 대전'],
    group: 'solo',
    home: true,
  },
  {
    slug: 'sudoku',
    name: '스도쿠',
    icon: '🔢',
    summary: '매일 새 문제가 나오는 스도쿠. 난이도 세 가지, 메모 기능과 최고 기록 저장까지.',
    tags: ['퍼즐', '매일 새 문제'],
    group: 'solo',
  },
  {
    slug: 'minesweeper',
    name: '지뢰찾기',
    icon: '💣',
    summary: '숫자를 보고 지뢰를 피해 칸을 여는 퍼즐. 첫 칸은 항상 안전하고, 휴대폰은 깃발 모드로.',
    tags: ['퍼즐', '클래식'],
    group: 'solo',
  },
  {
    slug: 'reaction',
    name: '반응속도 테스트',
    icon: '⚡',
    summary: '화면이 초록색으로 바뀌는 순간 누르세요. 5번 평균으로 내 반응속도를 ms 단위로 재요.',
    tags: ['1분 게임', '기록 도전'],
    group: 'solo',
  },
  {
    slug: 'dodge',
    name: '암기 피하기',
    icon: '🗡️',
    summary: '사방에서 날아오는 표창과 비도를 피해 오래 버티는 1분 무협 게임.',
    tags: ['1분 게임', '무협'],
    group: 'solo',
  },
];
