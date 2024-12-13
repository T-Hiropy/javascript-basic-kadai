//Variable
let userWeight = 68;  //体重：68kg
let userHight = 1.7;  //身長：1.7m
let userBmi;          //BMI

//計算式：[体重(kg)]÷[身長(m)×身長(m)]
userBmi = userWeight / (userHight**2);

console.log("BMI")
console.log(userBmi);
