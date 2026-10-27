import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// 블로그 카테고리. 글 frontmatter 의 `category` 값과 이름이 같아야 합니다.
export const categories = [
  { text: '일상', description: '소소한 하루와 생각들', icon: 'tabler:coffee' },
  { text: '개발', description: '코드, 도구, 배운 것들', icon: 'tabler:code' },
  { text: '리뷰', description: '써 보고 남기는 솔직한 후기', icon: 'tabler:star' },
  { text: '정보', description: '알아두면 쓸모 있는 팁', icon: 'tabler:bulb' },
].map((category) => ({ ...category, href: getPermalink(category.text, 'category') }));

export const headerData = {
  links: [
    {
      text: '블로그',
      href: getBlogPermalink(),
    },
    {
      text: '카테고리',
      links: categories.map(({ text, href }) => ({ text, href })),
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
