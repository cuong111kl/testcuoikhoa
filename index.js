const names=["ANH", "BINH", "HA", "THAO", "CUONG"]
var longest = 0
var longerName= ""
for (let index = 0; index < names.length; index++) {
    if(longest < names[index].length){
        longest =names[index].length}
        longerName=names[index]
}
console.log(longerName);

const weigh=[10,20,30,40,50,60]
let team1=[]
let team2=[]
for (let j = 0; j < weigh.length; j++) {
    if(j%2 === 0){
        team1.push(weigh[j])
    }else{
        team2.push(weigh[j])
    }
}
let sumT1=0
for (i=0; i<team1.length;i++){
    sumT1=sumT1+team1[i]
}
console.log(sumT1);
let sumT2=0
for (i=0; i<team2.length;i++){
    sumT2=sumT2+team2[i]
}
console.log(sumT2);


