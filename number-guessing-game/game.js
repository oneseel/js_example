let targetNumber; // 컴퓨터가 생성한 숫자를 저장
let currentNumber; // 현재 입력한 숫자를 저장
let attempt; // 시도횟수
let historyNumbers = []; // 지금까지 입력한 숫자들을 저장할 배열

const msgElement = document.getElementById("msg"); // 메시지를 출력할 요소
const gameForm = document.getElementById("game-form"); // 게임 입력 폼
const startBtn = document.getElementById("start-btn"); // 시작 버튼
const historyElement = document.getElementById("history"); // 입력된 숫자 표시용 요소
const attemptElement = document.getElementById("attempt"); // 시도 요소

// 게임 시작 버튼 클릭 시 실행
document.getElementById("start-btn").addEventListener("click", () => {
  targetNumber = Math.floor(Math.random() * 100) + 1; // 1부터 100까지의 난수 생성
  gameForm.style.display = "block";
  startBtn.style.display = "none";
  msgElement.textContent = "숫자를 맞춰보세요!";
  historyNumbers = []; // 히스토리 초기화
  historyElement.textContent = ""; // 화면에 표시된 히스토리 초기화
  attempt = 0;
  attemptElement.textContent = `시도횟수: 0`;
});

// 입력 버튼 클릭 시 실행
document.getElementById("input-btn").addEventListener("click", () => {
  const inputElement = document.getElementById("number-input");
  const inputNumber = Number(inputElement.value);
  currentNumber = inputNumber;
  attempt++;
  attemptElement.textContent = `시도횟수: ${attempt}`;

  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
    alert("1부터 100 사이의 숫자를 입력하세요.");
  } else {
    if (!historyNumbers.includes(currentNumber)) {
      historyNumbers.push(currentNumber); // 히스토리에 추가
      const span = document.createElement("span");
      span.textContent = `${currentNumber} `;
      historyElement.appendChild(span); // 화면에 히스토리 표시
    }

    if (inputNumber === targetNumber) {
      msgElement.textContent = `정답입니다! 🎉 ${attempt}번 만에 맞췄습니다."`;
      gameForm.style.display = "none";
      startBtn.style.display = "block";
    } else if (inputNumber < targetNumber) {
      msgElement.textContent = `${currentNumber}보다 더 높은 숫자입니다.`;
    } else {
      msgElement.textContent = `${currentNumber}보다 더 낮은 숫자입니다.`;
    }
  }

  inputElement.value = ""; // 입력 필드 초기화
});

// Enter 입력 시 입력 버튼 함수 호출
document.getElementById("number-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("input-btn").click();
  }
});
