//This is a fucking node.js demo. XD
let  _ =  require('lodash');

let obj = {
    "fq":{
        "r":[],
        "b":[]
    },
    "tt":{
        "r":[],
        "b":[]
    }
};

let [tqR,tqB,ttR,ttB] = [[],[],[],[]];

let [tqRArr,tqBArr,ttRArr,ttBArr] = [
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
	[1,2,3,4,5,6,7,8,9,10,11,12],
];


for(let i = 1;i<=100;i++){
    tqR.push(_.sampleSize(tqRArr,6));
    tqB.push(_.sampleSize(tqBArr,1));
    ttR.push(_.sampleSize(ttRArr,5));
    ttB.push(_.sampleSize(ttBArr,2));
}

let [qR,qB,tR,tB] = [
    _.sortBy(tqR[_.random(tqR.length-1,1)]),
    _.sortBy(tqB[_.random(tqB.length-1,1)]),
    _.sortBy(ttR[_.random(ttR.length-1,1)]),
    _.sortBy(ttB[_.random(ttB.length-1,1)])
];

obj["fq"]["r"] = qR;
obj["fq"]["b"] = qB;
obj["tt"]["r"] = tR;
obj["tt"]["b"] = tB;

console.log(obj);

