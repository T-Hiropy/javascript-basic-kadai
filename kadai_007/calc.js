//変数入力
let num = 14;

//条件分岐
if((num%3) === 0){
  if((num%5 === 0)){
    console.log(`3と5の倍数です`);
  }
  else{
    console.log(`3の倍数です`);
  }
}
else if((num%5) === 0){
  console.log(`5の倍数です`);
}
else{
  console.log(`num = ` + String(num));
}

/*
//変数入力
let num = 31;

//変数宣言
let rem3 = 9999;
let rem5 = 9999;
let flg3 = 0;
let flg5 = 0;

rem3 = num % 3;
if(rem3 === 0){
  flg3 = 1;
}

rem5 = num % 5;
if(rem5 === 0){
  flg5 = 1;
}

if(flg3===1 && flg5===1){
  console.log(`3と5の倍数です`);
}
else if(flg3===1){
  console.log(`3の倍数です`);
}
else if(flg5===1){
  console.log(`5の倍数です`);
}
else{
  console.log(`num = ` + String(num));
}
*/