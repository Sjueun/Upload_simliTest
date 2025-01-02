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
        question: "1. 캐릭터를 플레이할 때 나는",
        choices: ["외견이 이쁘면 사용한다", "성능이 좋으면 외견은 상관없다", "외견이 못생겨도 스킬이 멋지면 사용한다"],
        variables: [6, 7, 3] // F 증가, J 증가, N 증가
    },
    {
        question: "2. 게임을 할 때 나는",
        choices: ["안 맞는 위치에서 상대방을 멀리서 때리는 것을 선호한다", "정정당당하게 상대방과 맞붙고 싶다", "상대방과 싸우고 싶지 않다"],
        variables: [4, 1, 2] // S 증가, E 증가, I 증가
    },
    {
        question: "3. 라인전 도중 상대 정글이 갱을 온 것을 봤을 때 나는",
        choices: ["사는 게 중요. 일단 도망치고 본다", "어떻게든 2대1을 이겨낼 생각을 한다", "내가 죽더라도 한 명은 데려간다"],
        variables: [8, 5, 6] // P 증가, T 증가, F 증가
    },
    {
        question: "4. 나는",
        choices: ["미니언을 먹고 싶지 않다", "미니언도 먹고 정글도 먹고 다 내꺼다", "먹든 말든 상관없다"],
        variables: [2, 1, 8] // I 증가, E 증가, P 증가
    },
    {
        question: "5. 싸운다면 나는",
        choices: ["한 방에 적을 죽이고 싶다", "이것저것 사용해보면서 싸우고 싶다", "내가 직접 죽이는 것보단 우리 팀을 도와주고 싶다"],
        variables: [5, 3, 6] // T 증가, N 증가, F 증가
    },
    {
        question: "6. 라인전이 끝나면 나는",
        choices: ["팀원과 합류해서 다 같이 싸우고 싶다", "사이드로 가서 내쪽으로 상대방을 불러내어 뭔가를 하고 싶다", "상대방을 괴롭히고 싶다"],
        variables: [1, 4, 5] // E 증가, S 증가, T 증가
    },
    {
        question: "7. 템은",
        choices: ["내가 생각해보면서 여러 가지를 실험해보고 싶다", "사람들이 좋다는 거 따라가려고 한다", "아무 생각이 없다"],
        variables: [3, 7, 8] // N 증가, J 증가, P 증가
    },
    {
        question: "8. 롤 챔피언은",
        choices: ["왜 이렇게 많은지 모르겠다", "다양하게 있어서 고르는 맛이 있다", "아무 생각이 없다"],
        variables: [2, 3, 8] // I 증가, N 증가, P 증가
    },
    {
        question: "9. 나에게 있어 팀원은",
        choices: ["고혈만 빨아대는 모기와 다름이 없다", "서로 힘을 합쳐 함께 승리를 이끌어낼 존재다", "나를 캐리해줘야 하는 존재다"],
        variables: [2, 1, 4] // I 증가, E 증가, S 증가
    },
    {
        question: "10. 나는 팀원에게",
        choices: ["게임을 승리로 이끌어줄 존재", "보살핌이 필요한 아이 같은 존재", "게임을 재밌게 만들어주는 존재"],
        variables: [7, 6, 3] // J 증가, F 증가, N 증가
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
        case "ESTJ":
            container.style.backgroundImage = "url('lol/025.png')";
            break;
        case "ENFP":
            container.style.backgroundImage = "url('lol/026.png')";
            break;
        case "ESTP":
            container.style.backgroundImage = "url('lol/027.png')";
            break;
        case "INTP":
            container.style.backgroundImage = "url('lol/028.png')";
            break;
        case "ISFP":
            container.style.backgroundImage = "url('lol/029.png')";
            break;
        case "ENFJ":
            container.style.backgroundImage = "url('lol/030.png')";
            break;
        case "ISTP":
            container.style.backgroundImage = "url('lol/031.png')";
            break;
        case "INTJ":
            container.style.backgroundImage = "url('lol/032.png')";
            break;
        case "ISFJ":
            container.style.backgroundImage = "url('lol/033.png')";
            break;
        case "ESFJ":
            container.style.backgroundImage = "url('lol/034.png')";
            break;
        case "INFJ":
            container.style.backgroundImage = "url('lol/035.png')";
            break;
        case "ENTP":
            container.style.backgroundImage = "url('lol/036.png')";
            break;
        case "ESFP":
            container.style.backgroundImage = "url('lol/037.png')";
            break;
        case "INFP":
            container.style.backgroundImage = "url('lol/038.png')";
            break;
        case "ISTJ":
            container.style.backgroundImage = "url('lol/039.png')";
            break;
        case "ENTJ":
            container.style.backgroundImage = "url('lol/040.png')";
            break;
    }
    
}
