const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

var len = holidays.length;

// for文の場合
for (let i = 0; i < len; i++) {
    console.log(holidays[i]);
}
// for(const holiday of holidays) {
//     console.log(holiday);
// }

console.log('-----');

// while文の場合
let i = 0;
while (i < len) {
    console.log(holidays[i]);
    i++;
}