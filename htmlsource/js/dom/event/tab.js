// tab_content 보여주기 : show 클래스명
// 메뉴선택 : orange

// Products 를 클릭 + 첫번째 tab_content
// - Information, Shipping : orange 제거 / show 제거
// Information 를 클릭 + 두번째 tab_content
// - Products, Shipping : orange 제거 / show 제거
// Shipping 를 클릭 + 세번째 tab_content
// - Products, Information : orange 제거 / show 제거

// 클릭 요소
const tabButton = document.querySelectorAll(".tab-button");

// 변화가 일어나야 하는 요소
const tabContent = document.querySelectorAll(".tab-content");

// Products 클릭
// tabButton[1].classList.remove("orange");
// tabButton[2].classList.remove("orange");
// tabContent[1].classList.remove("show");
// tabContent[2].classList.remove("show");
// tabButton[0].classList.add("orange");
// tabContent[0].classList.add("show");

// Information
// tabButton[0].classList.remove("orange");
// tabButton[2].classList.remove("orange");
// tabContent[0].classList.remove("show");
// tabContent[2].classList.remove("show");
// tabButton[1].classList.add("orange");
// tabContent[1].classList.add("show");

tabButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    // 모든 li의 orange 제거
    tabButton.forEach((el) => el.classList.remove("orange"));
    // 현재 눌러진 li에는 orange 추가
    button.classList.add("orange");

    // 모든 div의 show 제거
    tabContent.forEach((el) => el.classList.remove("show"));
    // 현재 눌러진 li와 같은 순서인 div에 show 추가
    tabContent[index].classList.add("show");
  });
});
