var isim1 = ("Ada Bilgi");
var dogumTarihi1 = (2012);
var MatematikNot1_1 = 70;
var MatematikNot1_2 = 70;
var MatematikNot1_3 = 80;
var ortalama1 = (MatematikNot1_1 + MatematikNot1_2 + MatematikNot1_3) / 3;


let isim2 = ("Yiğit Bilgi");
let dogumTarihi2 = (2010);
let MatematikNot2_1 = 40;
let MatematikNot2_2 = 40;
let MatematikNot2_3 = 50;
var ortalama2 = (MatematikNot2_1 + MatematikNot2_2 + MatematikNot2_3) / 3;


var basarilimi1 = (ortalama1 >= 50);
var basarilimi2 = (ortalama2 >= 50);

console.log(basarilimi1);
console.log(basarilimi2);

let suankiYil = new Date().getFullYear(); // Var olan zamanı eşzamanlı olarak gösterir.

var yasbilgisi1 = (2022 - dogumTarihi1); // parseInt string olan türü numbera çevirir. Tam sayıya çevirir.
var yasbilgisi2 = (2022 - dogumTarihi2); // parseFloat ise ondalıklı kısmı gösterir.

console.log(yasbilgisi1);
console.log(yasbilgisi2);