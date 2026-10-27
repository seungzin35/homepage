import { cleanSlug, getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// 블로그 카테고리. 글 frontmatter 의 `category` 값과 이름이 같아야 합니다.
export const categories = [
  { text: '스마트폰', description: '아이폰·갤럭시, 앱 사용법과 데이터 옮기기', icon: 'tabler:device-mobile' },
  { text: '윈도우·PC', description: '윈도우 설정, 단축키, PC 관리 팁', icon: 'tabler:device-desktop' },
  { text: '오류 해결', description: '인터넷, 소리 등 자주 겪는 문제 해결법', icon: 'tabler:tool' },
  { text: '웹·블로그', description: '무료 홈페이지 만들기와 블로그 운영 노하우', icon: 'tabler:world' },
  {
    text: '무협 게임',
    description: '직접 만드는 오프라인 무협 RPG의 세계관과 개발기',
    icon: 'tabler:swords',
    isGame: true,
  },
].map((category) => ({ ...category, href: getPermalink(cleanSlug(category.text), 'category') }));

const itCategories = categories.filter((category) => !category.isGame);
export const gameCategory = categories.find((category) => category.isGame)!;

export const headerData = {
  links: [
    {
      text: '블로그',
      href: getBlogPermalink(),
    },
    {
      text: 'IT 가이드',
      links: itCategories.map(({ text, href }) => ({ text, href })),
    },
    {
      text: '무협 게임',
      href: gameCategory.href,
    },
    {
      text: '소개',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '블로그',
      links: [{ text: '전체 글', href: getBlogPermalink() }, ...categories.map(({ text, href }) => ({ text, href }))],
    },
    {
      title: '사이트',
      links: [
        { text: '소개', href: getPermalink('/about') },
        { text: 'RSS 구독', href: getAsset('/rss.xml') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '이용약관', href: getPermalink('/terms') },
    { text: '개인정보처리방침', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/seungzin35' },
  ],
  footNote: `
    © ${new Date().getFullYear()} 나의 블로그 · Built with <a class="underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a>
  `,
};
