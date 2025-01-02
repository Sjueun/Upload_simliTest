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
        question: "1. 다음 중 당신의 현재로 알맞은 것을 고르시오",
        choices: ["이과다", "문과다", "예체능이다"],
        variables: [5, 6, 3] // T 증가, F 증가, N 증가
    },
    {
        question: "2. 다음 중 가장 적절한 것을 고르시오",
        choices: ["암기를 잘한다", "응용을 잘한다", "둘 다 못한다"],
        variables: [4, 3, 4] // S 증가, N 증가, P 증가
    },
    {
        question: "3. 다음 중 선호하는 공부법을 고르시오",
        choices: ["개념만 달달 암기", "기출 여러번 돌리기", "공부 안하기"],
        variables: [2, 1, 2] // I 증가, E 증가, P 증가
    },
    {
        question: "4. 다음 중 가장 잘하는 과목을 고르시오",
        choices: ["국어", "수학", "영어"],
        variables: [6, 5, 6] // F 증가, T 증가, F 증가
    },
    {
        question: "5. 시험 준비 기간으로 적절한 것을 고르시오",
        choices: ["한달 이상", "한달~3주", "1주일"],
        variables: [7, 7, 8] // J 증가, J 증가, P 증가
    },
    {
        question: "6. 다음 중 수학에서 가장 어려웠던 파트를 고르시오",
        choices: ["수열, 경우의 수", "미적분", "삼각함수"],
        variables: [2, 6, 4] // I 증가, F 증가, S 증가
    },
    {
        question: "7. 시험을 망쳤다는 친구에게 할 말로 적절한 것을 고르시오",
        choices: ["어떡해… 너무 아쉽겠다", "아 그래? ㅠㅠ (다행이다)", "야 나도 ㅋㅋ"],
        variables: [6, 5, 8] // F 증가, T 증가, P 증가
    },
    {
        question: "8. 다음 중 자신의 문제 푸는 속도에 해당하는 것은?",
        choices: ["빠르다", "느리다", "평범하다"],
        variables: [5, 8, 8] // T 증가, P 증가, P 증가
    },
    {
        question: "9. 시험이 끝난 뒤 할 일로 적절한 것을 고르시오",
        choices: ["놀러가기", "채점하기", "집에서 쉬기"],
        variables: [1, 7, 2] // E 증가, J 증가, I 증가
    },
    {
        question: "10. 시험 중 SNS 대처법에 대해 알맞은 것을 고르시오",
        choices: ["자제한다", "평소대로 한다", "SNS를 원래 안한다"],
        variables: [7, 8, 7] // J 증가, P 증가, J 증가
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
            container.style.backgroundImage = "url('study/001.png')"; // 생명 ENFJ
            break;
        case "INFJ":
            container.style.backgroundImage = "url('study/002.png')"; // 윤사 INFJ
            break;
        case "ENTP":
            container.style.backgroundImage = "url('study/003.png')"; // 확통 ENTP
            break;
        case "INTP":
            container.style.backgroundImage = "url('study/004.png')"; // 기하 INTP
            break;
        case "INTJ":
            container.style.backgroundImage = "url('study/005.png')"; // 화학 INTJ
            break;
        case "ISTP":
            container.style.backgroundImage = "url('study/006.png')"; // 세계사 ISTP
            break;
        case "ISTJ":
            container.style.backgroundImage = "url('study/007.png')"; // 미적 ISTJ
            break;
        case "ISFJ":
            container.style.backgroundImage = "url('study/008.png')"; // 생윤 ISFJ
            break;
        case "INFP":
            container.style.backgroundImage = "url('study/009.png')"; // 지구과학 INFP
            break;
        case "ESTP":
            container.style.backgroundImage = "url('study/010.png')"; // 경제 ESTP
            break;
        case "ESTJ":
            container.style.backgroundImage = "url('study/011.png')"; // 언매 ESTJ
            break;
        case "ENTJ":
            container.style.backgroundImage = "url('study/012.png')"; // 물리 ENTJ
            break;
        case "ENFP":
            container.style.backgroundImage = "url('study/013.png')"; // 화작 ENFP
            break;
        case "ESFJ":
            container.style.backgroundImage = "url('study/014.png')"; // 정법 ESFJ
            break;
        case "ESFP":
            container.style.backgroundImage = "url('study/015.png')"; // 사문 ESFP
            break;
        case "ISFP":
            container.style.backgroundImage = "url('study/016.png')"; // 한지 ISFP
            break;
    }
    
}
