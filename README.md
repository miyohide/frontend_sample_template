# これは何か

フロントエンド系（HTMLやJavaScript、CSS）を開発するときのテンプレートプロジェクトです。

以下のツールを使用しています。

- webpack
    - JavaScriptやCSSのビルドを実施し、HTMLに埋め込むことを実施します。
        - ここでJavaScriptやCSSのビルドとは、文法変換や複数のファイルを一つにまとめたりすることを指します。
- eslint
    - lintツールとして利用しています。
- prettier
    - ソースコードフォーマットとして利用しています。

# Webページの作り方

`src`ディレクトリ以下に以下のディレクトリを作成しています。

- `htmls`
    - HTMLファイルを格納します
- `javascripts`
    - JavaScriptファイルを格納します
- `stylesheets`
    - CSSやSCSSファイルを格納します

一つのHTMLページに対して1つのJavaScriptファイルを紐づける形を取ります。例えば、`a.html`ファイルに対して`a.js`ファイルが紐づく形です。`a.js`からは別のJavaScriptを読み込んでも構いません。

実際の作業の流れは次のとおりです。

1. `npm run dev`を実行する
2. ブラウザを開いて`localhost:8080`にアクセスする
3. HTMLファイルを作成する
    - このとき、HTMLの中にはJavaScriptやCSSの読み込み処理は記入しない。webpackで自動的に挿入してくれる
4. 上記2.に対応するJavaScriptファイルを作成する
    - 頑張って開発をする。

