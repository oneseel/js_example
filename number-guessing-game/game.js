let targetNumber; // 컴퓨터가 생성한 숫자를 저장
const msgElement = document.getElementById("msg"); // 메시지를 출력할 요소
const gameForm = document.getElementById("game-form"); // 게임 입력 폼
const startBtn = document.getElementById("start-btn"); // 시작 버튼

// 게임 시작 버튼 클릭 시 실행
document.getElementById("start-btn").addEventListener("click", () => {
  targetNumber = Math.floor(Math.random() * 100) + 1; // 1부터 100까지의 난수 생성
  gameForm.style.display = "block";
  startBtn.style.display = "none";
  msgElement.textContent = "숫자를 맞춰보세요!";
});

// 입력 버튼 클릭 시 실행
document.getElementById("input-btn").addEventListener("click", () => {
  const inputNumber = Number(document.getElementById("number-input").value);
  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
    alert("1부터 100 사이의 숫자를 입력하세요.");
  } else if (inputNumber === targetNumber) {
    msgElement.textContent = "정답입니다! 🎉";
    gameForm.style.display = "none";
    startBtn.style.display = "block";
  } else if (inputNumber < targetNumber) {
    msgElement.textContent = "더 높은 숫자입니다.";
  } else {
    msgElement.textContent = "더 낮은 숫자입니다.";
  }
});
