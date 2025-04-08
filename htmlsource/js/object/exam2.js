// 2개의 주사위를 던졌을 때 나오는 눈을 (5,3) 출력하고
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인 경우 실행중단
// while (true) {
//   const die1 = Math.floor(Math.random() * 6) + 1;
//   const die2 = Math.floor(Math.random() * 6) + 1;
//   console.log(`(${die1}, ${die2})`);

//   if (die1 + die2 === 5) {
//     break;
//   }
// }

while (true) {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  console.log(`(${dice1}, ${dice2})`);
  if (dice1 + dice2 === 5) break;
}

// 로또번호 6개를 추출하여 배열에 담은 후 출력
// 1~45
// function LottoNumbers() {
//   const numbers = new Set();

//   while (numbers.size < 6) {
//     const num = Math.floor(Math.random() * 45) * 1;
//     numbers.add(num);
//   }
//   return Array.from(numbers).sort((a, b) => a - b);
// }

// const lotto = LottoNumbers();
// console.log("로또 번호 : ", lotto);

let lottoArr = [];
while (true) {
  let lotto = Math.floor(Math.random() * 46) + 1;

  if (lottoArr.indexOf(lotto) == -1) {
    lottoArr.push(lotto);
  }
  if (lottoArr.length > 5) break;
}
console.log("이번 주 로또 번호 " + lottoArr);
