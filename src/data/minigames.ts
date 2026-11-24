// 미니게임 목록. /games 목록 페이지와 각 게임 페이지의 "다른 게임" 링크가 이 목록을 씁니다.
export interface MiniGame {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  tags: string[];
}

export const miniGames: MiniGame[] = [
  {
    slug: 'omok',
    name: '오목',
    icon: '⚫',
    summary: '컴퓨터와 두는 오목. 쉬움·보통·어려움 세 단계로, 다섯 알을 먼저 잇는 쪽이 이깁니다.',
    tags: ['보드게임', '컴퓨터 대전'],
  },
  {
    slug: 'sudoku',
    name: '스도쿠',
    icon: '🔢',
    summary: '매일 새 문제가 나오는 스도쿠. 난이도 세 가지, 메모 기능과 최고 기록 저장까지.',
    tags: ['퍼즐', '매일 새 문제'],
  },
  {
    slug: 'dodge',
    name: '암기 피하기',
    icon: '🗡️',
    summary: '사방에서 날아오는 표창과 비도를 피해 오래 버티는 1분 무협 게임.',
    tags: ['1분 게임', '무협'],
  },
];
