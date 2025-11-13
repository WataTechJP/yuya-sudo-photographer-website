# フォトグラファーポートフォリオサイト

Next.js 16とTypeScriptで構築されたモダンなフォトグラファー向けポートフォリオウェブサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **UIコンポーネント**: shadcn/ui
- **フォント**: Geist Sans, Playfair Display

## 📋 必要な環境

- Node.js 18.x 以上
- npm または yarn または pnpm

## 🛠️ セットアップ手順

### 1. ZIPファイルを展開

ダウンロードしたZIPファイルを任意のフォルダに展開してください。

### 2. VSCodeでプロジェクトを開く

\`\`\`bash
# ターミナルでプロジェクトフォルダに移動
cd photographer-website

# VSCodeで開く
code .
\`\`\`

### 3. 依存関係のインストール

\`\`\`bash
npm install
# または
yarn install
# または
pnpm install
\`\`\`

### 4. 開発サーバーの起動

\`\`\`bash
npm run dev
# または
yarn dev
# または
pnpm dev
\`\`\`

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 📁 プロジェクト構造

\`\`\`
.
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── header.tsx          # ヘッダーナビゲーション
│   ├── hero.tsx            # ヒーローセクション
│   ├── portfolio-grid.tsx  # ポートフォリオグリッド
│   ├── about-section.tsx   # 自己紹介セクション
│   ├── contact-section.tsx # お問い合わせフォーム
│   └── footer.tsx          # フッター
├── public/
│   └── *.jpg               # 画像ファイル
└── README.md
\`\`\`

## ✏️ カスタマイズ方法

### テキストの編集

各コンポーネントファイル内のテキストを直接編集してください：

- **名前・タイトル**: `components/hero.tsx`
- **ポートフォリオ作品**: `components/portfolio-grid.tsx`
- **自己紹介**: `components/about-section.tsx`
- **お問い合わせ情報**: `components/contact-section.tsx`

### 画像の変更

1. 新しい画像を `public/` フォルダに配置
2. 各コンポーネントの画像パスを更新

例：
\`\`\`tsx
<Image src="/your-image.jpg" alt="説明" />
\`\`\`

### 色の変更

`app/globals.css` のデザイントークンを編集：

\`\`\`css
@theme inline {
  --color-primary: 30 35% 90%;  /* メインカラー */
  --color-accent: 20 15% 35%;   /* アクセントカラー */
  /* ... */
}
\`\`\`

## 🎨 アニメーションについて

このサイトではFramer Motionを使用してスムーズなアニメーションを実装しています：

- スクロール連動アニメーション
- フェードイン・スライドアップ効果
- ホバーエフェクト

アニメーションの調整は各コンポーネントの `motion` 設定を編集してください。

## 📱 レスポンシブデザイン

Tailwind CSSのブレークポイントを使用：

- `sm`: 640px以上
- `md`: 768px以上
- `lg`: 1024px以上
- `xl`: 1280px以上

## 🚢 デプロイ方法

### Vercelにデプロイ（推奨）

1. [Vercel](https://vercel.com)にサインアップ
2. プロジェクトをGitHubにプッシュ
3. Vercelで「New Project」から連携
4. 自動的にデプロイされます

または、v0のUIから直接「Publish」ボタンでデプロイも可能です。

### その他のプラットフォーム

\`\`\`bash
# ビルド
npm run build

# 本番サーバー起動
npm run start
\`\`\`

## 🔧 トラブルシューティング

### ポートが使用中の場合

\`\`\`bash
# 別のポートで起動
PORT=3001 npm run dev
\`\`\`

### 依存関係のエラー

\`\`\`bash
# node_modulesとロックファイルを削除して再インストール
rm -rf node_modules package-lock.json
npm install
\`\`\`

## 📝 今後の拡張案

- [ ] ブログセクションの追加
- [ ] 作品詳細ページの作成
- [ ] お問い合わせフォームのバックエンド連携
- [ ] 多言語対応（i18n）
- [ ] CMSとの連携（Contentful, Sanity等）
- [ ] 画像最適化（Next.js Image Optimization）

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

---

何か質問がある場合は、お気軽にお問い合わせください！
# yuya-sudo-photographer-website
