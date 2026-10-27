# 배포 가이드 (무료 호스팅)

이 사이트는 AstroWind(MIT, `LICENSE.md` 참고) 기반의 **정적 사이트**입니다. `npm run build` 결과물(`dist/`)만 올리면 되므로 서버 없이 무료 정적 호스팅에 배포할 수 있습니다.

## 추천: Cloudflare Pages (무료)

- 대역폭·요청 무제한, 상업적 사용 가능, 전 세계 CDN(한국 포함), 커스텀 도메인 + HTTPS 무료
- 설정
  1. https://dash.cloudflare.com → Workers & Pages → Create → Pages → **Connect to Git**
  2. 저장소 `homepage` 선택
  3. Framework preset: **Astro** / Build command: `npm run build` / Output directory: `dist`
  4. 환경 변수 `NODE_VERSION` = `22` (필요 시)
  5. 배포 후 `https://<프로젝트명>.pages.dev` 주소가 생기고, 이후 push 할 때마다 자동 배포됩니다.
- 대안: 저장소에 있는 `wrangler.jsonc` 로 Cloudflare Workers(정적 자산)로도 배포 가능 (`npx wrangler deploy`).

## 다른 무료 옵션

| 호스팅       | 설정 파일                             | 비고                                                                                                                         |
| ------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Vercel       | `vercel.json` (포함됨)                | 가장 쉬움. 단, Hobby(무료) 플랜은 **비상업적 용도만** 허용 → 회사 사이트면 부적합                                            |
| Netlify      | `netlify.toml` (포함됨)               | 무료 월 대역폭/빌드 시간 한도 있음                                                                                           |
| GitHub Pages | `.github/workflows/deploy-pages.yaml` | 완전 무료, 저장소가 **public** 이어야 함(무료 계정 기준). 주소가 `https://seungzin35.github.io/homepage` 처럼 하위 경로가 됨 |

### GitHub Pages 로 배포하려면

1. 저장소 Settings → Pages → Source 를 **GitHub Actions** 로 변경
2. 기본 브랜치에 합쳐지면(Merge) 자동으로 배포됩니다. 필요하면 Actions 탭 → **Deploy to GitHub Pages** → Run workflow 로 직접 실행할 수도 있습니다.
3. 워크플로가 빌드 시점에 `src/config.yaml` 의 `site`/`base` 를 Pages 주소에 맞게 자동으로 바꿉니다.

## 배포 전에 바꿀 것

- `src/config.yaml`
  - `site.site`: 실제 도메인 (예: `https://example.com`) — sitemap·OG 태그에 쓰임
  - `site.name`, `metadata.title`, `metadata.description`, `twitter` 항목
  - `googleSiteVerificationId`: Google Search Console 사용 시 입력
- `src/navigation.ts`: 메뉴·푸터 링크
- `src/pages/`, `src/data/post/`: 페이지와 블로그 글 (현재는 템플릿 예시 콘텐츠)

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```
