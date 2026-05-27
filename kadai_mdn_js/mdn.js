function getTodayesDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');  // ゼロ埋め
  const day = String(date.getDate()).padStart(2, '0');  // ゼロ埋め

  return `${year}年${month}月${day}日`;
}

// 本日の日付を表示
console.log(getTodayesDate());
