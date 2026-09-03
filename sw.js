/* 最小限のService Worker。
   オフライン対応などは行わず、「これはちゃんとしたアプリである」と
   ブラウザに認識してもらう(インストール可能にする)ためだけに設置している。
   これが無いと、ホーム画面に追加してもアプリ扱いにならず、
   アイコンへのお知らせ件数バッジ表示が機能しないことがある。 */
self.addEventListener('install', function(e){
  self.skipWaiting();
});
self.addEventListener('activate', function(e){
  self.clients.claim();
});
self.addEventListener('fetch', function(e){
  // 何もキャッシュせず、常に通常通りネットワークから取得する
  e.respondWith(fetch(e.request));
});
