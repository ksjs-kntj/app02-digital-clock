// 時計を更新する関数
function updateClock() {
  // 現在日時を取得
  const now = new Date();

  // 現在日時を「年/月/日 時:分:秒」の形式（24時間制）で文字列に変換
  // 'ja-JP' → 日本ロケール
  // { hour12: false } → 24時間表示に設定
  const timeString = now.toLocaleString('ja-JP', { hour12: false });

  // HTML内のid="clock"の要素を取得し、そのテキスト部分を現在日時で更新
  document.getElementById('clock').textContent = timeString;
}

// 1秒（1000ミリ秒）ごとに updateClock 関数を実行し、時刻を更新し続ける
setInterval(updateClock, 1000);

// ページ読み込み直後にも即座に現在時刻を表示するため、最初に1回だけ実行
updateClock();
