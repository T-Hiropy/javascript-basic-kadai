// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById(`btn`);

// textというidを持つHTML要素を取得し、定数に代入
const text = document.getElementById(`text`);

// Text初期化
const setText = `ボタンをクリックしました`;
const resetText = `ボタンをクリックしてください`;

// HTML要素がクリックされたときにイベント処理を実行
btn.addEventListener(`click`, () => {
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    // console.log(text.innerHTML);
    if(text.innerHTML === resetText){
      text.innerHTML = setText;
    } 
    else{
      text.innerHTML = resetText;
    }
  }, 2000);
});