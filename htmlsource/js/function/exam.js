// 1. 함수선언방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function add1(a, b) {
  return a + b;
}
console.log(add1(3, 5));
// 2. 함수표현식으로 1번 변경
const add2 = function (a, b) {
  return a + b;
};
console.log("7 + 2 = ", add2(7, 2));
// 3. 1 ~ 10까지 더하는 작업을 함수 표현식으로 작성
const add3 = function () {
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    sum += i;
  }
  return sum;
};
console.log("1 ~ 10합 : ", add3());
// 4. 숫자를 인자로 받아서 3의 배수 찾기
//    3의 배수라면 박수 출력, 아니라면 통과
function multiply(num) {
  if (num % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
multiply(9);
multiply(10);

const myFunc1 = function (num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
multiply(4);
multiply(3);
// 5. 4번 개선 (3의 배수라면 박수 출력, 아니라면 통과)
//    + 9의 배수인 경우 박수 x 2 출력
function clap(num) {
  if (num % 9 === 0) {
    console.log("박수 x2");
  } else if (num % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
clap(9);
clap(6);
clap(4);

const myFunc2 = function (num) {
  if (num % 3 == 0) {
    if (num % 9 !== 0) {
      console.log("박수");
    } else {
      console.log("박수 x2");
    }
  } else {
    console.log("통과");
  }
};

myFunc2(3);
myFunc2(6);
myFunc2(9);
// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
//    과목은 2과목이라 하고, 두 과목 합해서 120점 이상이면 합격
//    한 과목이 40점 미만이면 과락으로 불합격
function pass(score1, score2) {
  const total = score1 + score2;

  if (score1 < 40 || score2 < 40) {
    console.log("과락으로 불합격");
  } else if (total >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
pass(60, 65);
pass(35, 90);
pass(50, 50);

function pass1(outline, law) {
  const jumsu = outline + law;

  if (outline >= 40 && law >= 40 && jumsu >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}

pass1(40, 80);
pass1(30, 90);
