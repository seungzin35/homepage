---
publishDate: 2026-10-26T00:00:00Z
title: 'Astro로 무료 블로그 만들기'
excerpt: Astro와 GitHub Pages를 이용해 서버 비용 없이 빠른 정적 블로그를 만드는 과정을 정리했습니다.
image: https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: 개발
tags:
  - astro
  - 블로그
  - github-pages
---

> 예시 글입니다. 내용을 자유롭게 바꾸거나 지워 주세요.

## 정적 사이트를 고른 이유

블로그 글은 자주 바뀌지 않기 때문에 미리 HTML로 만들어 두면 충분합니다. 서버가 필요 없으니 비용도 들지 않고, 속도도 빠릅니다.

## 글 쓰는 방법

`src/data/post` 폴더에 마크다운 파일을 하나 만들면 글이 됩니다.

```md
---
title: '글 제목'
publishDate: 2026-10-26T00:00:00Z
category: 개발
tags:
  - 태그
---

본문을 여기에 씁니다.
```

## 배포

변경 사항을 GitHub에 올린 뒤 배포 워크플로를 실행하면 몇 분 안에 사이트에 반영됩니다.
