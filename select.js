const progressBar = document.getElementById('progress-bar');
const choose1 = document.getElementById('choose1');
const choose2 = document.getElementById('choose2');
const choose3 = document.getElementById('choose3');
const questionElement = document.getElementById('question');
const container = document.getElementById('container'); // 배경 이미지를 변경할 요소

let E = 0; // 1
let I = 0; // 2
let N = 0; // 3
let S = 0; // 4
let T = 0; // 5
let F = 0; // 6
let J = 0; // 7
let P = 0; // 8

let currentProgress = 1; // 시작 진행도
const maxProgress = 100; // 최대 진행도

const questions = [
    {
        question: "1. 어색한 사람과 단 둘이 있게 됐다",
        choices: ["어색한거지 뭐...", "어색한건 싫으니 말을 건다", "친해지고 싶어! 말을 건다"],
        variables: [5, 1, 1] // I 증가, E 증가
    },
    {
        question: "2. 방에 갑자기 벌레가 들어왔다",
        choices: ["벌레도 생명인데 냅둔다", "당장 잡는다", "무서워서 못잡는다"],
        variables: [6, 5, 2] // F 증가, T 증가, I 증가
    },
    {
        question: "3. 열린 결말 영화를 본다면",
        choices: ["대중적 해석을 검색해본다", "친구랑 결말에 대해 이야기한다", "혼자 상상의 나래를 펼친다"],
        variables: [7, 1, 3] // J 증가, E 증가, N 증가
    },
    {
        question: "4. 아무리 봐도 내 잘못이 아닌데 사과를 요구한다면?",
        choices: ["일단 사과하고 넘긴다", "누구 잘못인지 확실하게 집는다", "사과하고 자기 전에 후회한다"],
        variables: [8, 5, 2] // F 증가, T 증가, I 증가
    },
    {
        question: "5. 주말에 쉬고 있는데 친구에게 놀자고 연락이 왔다",
        choices: ["당연히 나간다", "나가지 않는다", "다음에 일정을 잡는다"],
        variables: [1, 2, 7] // E 증가, I 증가, J 증가
    },
    {
        question: "6. 알바중에 진상 손님이 왔다...",
        choices: ["상냥하게 대한다", "강경하게 대응한다", "다른 손님처럼 대한다"],
        variables: [6, 5, 8] // F 증가, T 증가, P 증가
    },
    {
        question: "7. 다른 사람들이 모두 내 선택을 말린다",
        choices: ["다들 그러는 이유가 있겠지... 선택을 바꾼다", "신경쓰지 않는다", "이야기를 들어보고 결정한다"],
        variables: [6, 8, 5] // J 증가, P 증가, F 증가
    },
    {
        question: "8. 당신은 회사의 사장. 다음 셋 중 한 명을 해고해야 한다.",
        choices: ["가정이 어렵지만 실적이 나쁜 직원", "실적은 좋지만 불화 메이커 직원", "모난 곳 없지만 장점도 없는 직원"],
        variables: [6, 5, 7] // F 증가, T 증가, J 증가
    },
    {
        question: "9. 당신의 SNS는",
        choices: ["공개", "비공개", "SNS를 안한다"],
        variables: [1, 2, 2] // E 증가, I 증가, I 증가
    },
    {
        question: "10. 슬픈 일이 생긴다면",
        choices: ["혼자 삭힌다", "기분전환겸 다른 일을 한다", "슬픔을 주변과 나눈다"],
        variables: [2, 8, 6] // I 증가, P 증가, F 증가
    }
];

let currentQuestionIndex = 0; // 현재 질문 인덱스

// 질문을 화면에 표시하는 함수
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question; // 질문 표시

    // 선택지 표시
    choose1.innerText = currentQuestion.choices[0];
    choose2.innerText = currentQuestion.choices[1];
    choose3.innerText = currentQuestion.choices[2];
}

// 선택지를 클릭했을 때 처리 함수
function handleChoice(choiceIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    // 선택된 변수 증가
    function updateVariable(choiceIndex) {
        const variables = currentQuestion.variables; // 현재 질문에 대한 변수 값
        if (variables[choiceIndex] === 1) {
            E += 10; // E 값 증가
        } else if (variables[choiceIndex] === 2) {
            I += 10; // I 값 증가
        } else if (variables[choiceIndex] === 3) {
            N += 10; // N 값 증가
        } else if (variables[choiceIndex] === 4) {
            S += 10; // S 값 증가
        } else if (variables[choiceIndex] === 5) {
            T += 10; // T 값 증가
        } else if (variables[choiceIndex] === 6) {
            F += 10; // F 값 증가
        } else if (variables[choiceIndex] === 7) {
            J += 10; // J 값 증가
        } else if (variables[choiceIndex] === 8) {
            P += 10; // P 값 증가
        }
    }

    updateVariable(choiceIndex); // 선택지 클릭 시 변수 증가

    // 진행도 업데이트
    currentProgress += 8.5;
    if (currentProgress > maxProgress) currentProgress = maxProgress;
    progressBar.style.width = `${currentProgress}%`;

    // 다음 질문으로 넘어가기
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionElement.innerText = " ";
        choose1.style.display = "none";
        choose2.style.display = "none";
        choose3.style.display = "none";
        progressBar.style.display = "none";

        handleFinalResult();
    }
}

// 선택지 클릭 이벤트 추가
choose1.addEventListener('click', function() {
    handleChoice(0); // 첫 번째 선택지 클릭
});
choose2.addEventListener('click', function() {
    handleChoice(1); // 두 번째 선택지 클릭
});
choose3.addEventListener('click', function() {
    handleChoice(2); // 세 번째 선택지 클릭
});

displayQuestion(); // 첫 번째 질문 표시

// 최종 MBTI 계산 함수
function getMBTI() {
    let mbtiType = "";
    mbtiType += E > I ? "E" : "I";
    mbtiType += N > S ? "N" : "S";
    mbtiType += T > F ? "T" : "F";
    mbtiType += J > P ? "J" : "P";
    return mbtiType;
}

// 최종 결과 처리 함수
// 최종 결과 처리 함수
function handleFinalResult() {
    const finalMBTI = getMBTI(); // MBTI 타입 가져오기
    
    // MBTI에 맞는 배경 이미지로 변경
    switch(finalMBTI) {
        case "ENFJ":
            container.style.backgroundImage = "url('animal/014.png')";
            break;
        case "INFJ":
            container.style.backgroundImage = "url('animal/001.png')";
            break;
        case "ENTP":
            container.style.backgroundImage = "url('animal/008.png')";
            break;
        case "INTP":
            container.style.backgroundImage = "url('animal/005.png')";
            break;
        case "INTJ":
            container.style.backgroundImage = "url('animal/002.png')";
            break;
        case "ISTP":
            container.style.backgroundImage = "url('animal/003.png')";
            break;
        case "ISTJ":
            container.style.backgroundImage = "url('animal/004.png')";
            break;
        case "ISFJ":
            container.style.backgroundImage = "url('animal/006.png')";
            break;
        case "INFP":
            container.style.backgroundImage = "url('animal/007.png')";
            break;
        case "ESTP":
            container.style.backgroundImage = "url('animal/009.png')";
            break;
        case "ESTJ":
            container.style.backgroundImage = "url('animal/010.png')";
            break;
        case "ENTJ":
            container.style.backgroundImage = "url('animal/011.png')";
            break;
        case "ENFP":
            container.style.backgroundImage = "url('animal/012.png')";
            break;
        case "ESFJ":
            container.style.backgroundImage = "url('animal/013.png')";
            break;
        case "ESFP":
            container.style.backgroundImage = "url('animal/015.png')";
            break;
        case "ISFP":
            container.style.backgroundImage = "url('animal/016.png')";
            break;
    }
}
