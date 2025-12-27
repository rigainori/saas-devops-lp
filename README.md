# SaaS DevOps LP

Astroを使用したランディングページプロジェクトです。A/Bテスト機能を実装しています。

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🧪 A/Bテスト

このプロジェクトにはBtoB向けとBtoC向けの2つのバリアントが実装されています。

### ページURL

- **BtoB向け**: `/btob/`
  - 技術的で詳細なアプローチ
  - コピー: 「Gitを起点に、SaaS運用をシンプルに」

- **BtoC向け**: `/btoc/`
  - よりシンプルで感情的なアプローチ
  - コピー: 「デプロイの不安をなくし、開発スピードを最大化」

### GitHub Pagesでの運用方法

#### 方法1: URLベースの振り分け（推奨）

1. **Cloudflare Workers / Pages Functions を使用する場合**:
   ```javascript
   // functions/index.js
   export async function onRequest(context) {
     const url = new URL(context.request.url);

     // BtoB/BtoC振り分けロジック（50/50）
     const variant = Math.random() < 0.5 ? 'btob' : 'btoc';

     // Cookieでバリアントを保存
     const cookie = context.request.headers.get('Cookie');
     let savedVariant = cookie?.match(/variant=(btob|btoc)/)?.[1];

     if (!savedVariant) {
       savedVariant = variant;
     }

     // リダイレクト
     return Response.redirect(`${url.origin}/${savedVariant}/`, 302);
   }
   ```

2. **Netlify Redirects を使用する場合**:
   ```toml
   # netlify.toml
   [[redirects]]
     from = "/"
     to = "/btob/"
     status = 200
     conditions = {Cookie = ["variant=btob"]}

   [[redirects]]
     from = "/"
     to = "/btoc/"
     status = 200
     conditions = {Cookie = ["variant=btoc"]}

   # デフォルトはBtoB
   [[redirects]]
     from = "/"
     to = "/btob/"
     status = 302
   ```

3. **純粋なGitHub Pagesの場合**:
   - `/btob/` と `/btoc/` の2つのURLを使い分ける
   - 広告キャンペーンごとに異なるURLを設定（例: LinkedIn広告 → /btob/、Facebook広告 → /btoc/）
   - Google Analyticsなどで効果測定

#### 方法2: JavaScriptでクライアント側振り分け

[index.astro](src/pages/index.astro) に以下を追加:

```astro
<script>
  // Cookieをチェック
  const getVariant = () => {
    const match = document.cookie.match(/variant=(btob|btoc)/);
    if (match) return match[1];

    // 新規訪問者は50/50で振り分け
    const variant = Math.random() < 0.5 ? 'btob' : 'btoc';
    document.cookie = `variant=${variant}; path=/; max-age=2592000`; // 30日間
    return variant;
  };

  const variant = getVariant();
  window.location.href = `/${variant}/`;
</script>
```

### トラッキング設定

Google Analytics 4を使用している場合:

```javascript
// GTMまたはGA4タグに追加
gtag('event', 'page_view', {
  'variant': 'btob' // または 'btoc'
});
```

### 測定指標の例

- コンバージョン率（問い合わせフォーム送信）
- 滞在時間
- スクロール深度
- CTAボタンクリック率

## 👀 詳細情報

詳しくは [Astroドキュメント](https://docs.astro.build)をご覧ください。
