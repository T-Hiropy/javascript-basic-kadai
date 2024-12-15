// 現在時刻表示
var nowDate = new Date();
var nowYYYY = nowDate.getFullYear();
var nowMM = nowDate.getMonth() + 1;
var nowDD = nowDate.getDate();

// 出力
// console.log(nowDate);
console.log(nowYYYY +`年`+ nowMM + `月` + nowDD +`日`);
