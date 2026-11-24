// 미니게임 목록. /games 목록 페이지, 메인화면, 각 게임 페이지의 "다른 게임" 링크가 이 목록을 씁니다.
export type MiniGameGroup = 'party' | 'solo';

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
    home: true,
  },
  {
    slug: 'minesweeper',
    name: '지뢰찾기',
    icon: '💣',
    summary: '숫자를 보고 지뢰를 피해 칸을 여는 퍼즐. 첫 칸은 항상 안전하고, 휴대폰은 깃발 모드로.',
    tags: ['퍼즐', '클래식'],
    group: 'solo',
    home: true,
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
