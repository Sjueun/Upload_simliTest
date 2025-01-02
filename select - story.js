const progressBar = document.getElementById('progress-bar');
const choose1 = document.getElementById('choose1');
const choose2 = document.getElementById('choose2');
const choose3 = document.getElementById('choose3');
const questionElement = document.getElementById('question');
const container = document.getElementById('container'); // 배경 이미지를 변경할 요소

let 개구리 = 0; // 1
let 헨젤 = 0; // 2
let 공주 = 0; // 3
let 오리 = 0; // 4
let 피노키오 = 0; // 5

let currentProgress = 1; // 시작 진행도
const maxProgress = 100; // 최대 진행도

const questions = [
    {
        question: "1. 숲에서 길을 잃었을 때, 당신은?",
        choices: [
            "주변의 나무를 살펴보며 길을 찾는다.",
            "큰 소리로 도움을 요청한다.",
            "길을 잃은 것을 즐기며 주변을 탐험한다."
        ],
        variables: [3, 1, 5] // 신데렐라, 늑대, 피노키오
    },
    {
        question: "2. 신비한 생물을 만났을 때, 당신은?",
        choices: [
            "조심스럽게 다가가 대화를 시도한다.",
            "그 생물을 친구로 만들기 위해 노력한다.",
            "그 생물의 신비로운 능력을 관찰한다."
        ],
        variables: [4, 3, 2] // 오리, 헨젤, 신데렐라
    },
    {
        question: "3. 마법의 물약을 발견했을 때, 당신은?",
        choices: [
            "조심스럽게 성분을 분석한다.",
            "즉시 마셔보고 어떤 효과가 있는지 본다.",
            "다른 친구들과 나눠 마신다."
        ],
        variables: [2, 5, 3] // 헨젤, 피노키오, 늑대
    },
    {
        question: "4. 어두운 동굴에 들어가게 되었을 때, 당신은?",
        choices: [
            "손전등을 켜고 조심스럽게 탐험한다.",
            "친구들과 함께 어두운 곳을 두려워하지 않는다.",
            "귀신 이야기를 하며 분위기를 더 끌어올린다."
        ],
        variables: [4, 3, 2] // 오리, 신데렐라, 헨젤
    },
    {
        question: "5. 숲 속에서 보물을 찾았을 때, 당신은?",
        choices: [
            "보물을 어떻게 사용할지 고민한다.",
            "보물을 친구들과 나누기로 한다.",
            "보물을 숨겨서 비밀로 한다."
        ],
        variables: [3, 4, 5] // 신데렐라, 오리, 피노키오
    },
    {
        question: "6. 마법의 동물들이 싸우고 있을 때, 당신은?",
        choices: [
            "중재하려고 노력한다.",
            "그 싸움을 구경하며 응원한다.",
            "싸움에서 이긴 쪽에 붙는다."
        ],
        variables: [2, 1, 5] // 헨젤, 늑대, 신데렐라
    },
    {
        question: "7. 불가사의한 문을 발견했을 때, 당신은?",
        choices: [
            "문을 열고 들어가 보려 한다.",
            "문 주위에서 이 문에 대해 조사한다.",
            "다른 사람들에게 이야기를 나누고 함께 생각한다."
        ],
        variables: [5, 4, 3] // 피노키오, 오리, 신데렐라
    },
    {
        question: "8. 마법의 나무에서 떨어진 열매를 주웠을 때, 당신은?",
        choices: [
            "열매의 효능을 연구해본다.",
            "즉시 먹어보고 맛을 평가한다.",
            "친구들에게 나눠주기로 한다."
        ],
        variables: [2, 1, 4] // 헨젤, 늑대, 오리
    },
    {
        question: "9. 숲의 신비로운 축제를 발견했을 때, 당신은?",
        choices: [
            "조용히 관찰하며 어떻게 진행되는지 본다.",
            "즉시 참여해서 즐겁게 놀아본다.",
            "친구들을 초대해 함께 즐기고 싶어 한다."
        ],
        variables: [3, 5, 2] // 신데렐라, 피노키오, 헨젤
    },
    {
        question: "10. 마법의 숲을 떠날 시간이 되었을 때, 당신은?",
        choices: [
            "이곳의 경험을 기록해두기로 한다.",
            "친구들과의 추억을 소중히 여기며 인사를 한다.",
            "돌아오는 길에 다시 올 것을 다짐한다."
        ],
        variables: [4, 3, 5] // 오리, 신데렐라, 피노키오
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
            개구리 += 10; // E 값 증가
        } else if (variables[choiceIndex] === 2) {
            헨젤 += 10; // I 값 증가
        } else if (variables[choiceIndex] === 3) {
            공주 += 10; // N 값 증가
        } else if (variables[choiceIndex] === 4) {
            오리 += 10; // S 값 증가
        } else if (variables[choiceIndex] === 5) {
            피노키오 += 10; // T 값 증가
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
function getMBTI(개구리, 공주, 헨젤, 오리, 피노키오) {
    let mbtiType = "";
    
    // 가장 큰 값을 찾는 방식
    mbtiType = (개구리 > 공주 && 개구리 > 헨젤 && 개구리 > 오리 && 개구리 > 피노키오) 
        ? "개구리"
        : (공주 > 헨젤 && 공주 > 오리 && 공주 > 피노키오)
        ? "공주"
        : (헨젤 > 오리 && 헨젤 > 피노키오)
        ? "헨젤"
        : (오리 > 피노키오)
        ? "오리"
        : "피노키오";
    
    return mbtiType;
}



// 최종 결과 처리 함수
// 최종 결과 처리 함수
function handleFinalResult() {
    const finalMBTI = getMBTI(개구리, 공주, 헨젤, 오리, 피노키오); // MBTI 타입 가져오기
    
    // MBTI에 맞는 배경 이미지로 변경
    switch(finalMBTI) {
        case "개구리":
            container.style.backgroundImage = "url('story/020.png')";
            break;
        case "헨젤":
            container.style.backgroundImage = "url('story/021.png')";
            break;
        case "공주":
            container.style.backgroundImage = "url('story/022.png')";
            break;
        case "오리":
            container.style.backgroundImage = "url('story/023.png')";
            break;
        case "피노키오":
            container.style.backgroundImage = "url('story/024.png')";
            break;
    }
}
