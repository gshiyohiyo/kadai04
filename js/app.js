// 超簡易ベンチマーク
function benchmark() {
    // ベンチマーク対象の処理を実行する前のタイムスタンプを取得
    const startTime = performance.now();
  
    // ベンチマークの実行回数
    const iterations = 10000000;
  
    for (let i = 0; i < iterations; i++) {
        // テストしたいコードのセクション
        // 例: 配列のソート
        const array = [5, 3, 1, 4, 2];
        array.sort();
    }  
    // ベンチマーク対象の処理を実行した後のタイムスタンプを取得
    const endTime = performance.now();

    // 実行時間を計算
    const executionTime = endTime - startTime;

    // 整数に変換して返す
    return Math.floor(executionTime);
}
