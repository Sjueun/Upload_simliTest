const progressBar = document.getElementById('progress-bar');
const choose1 = document.getElementById('choose1');
const choose2 = document.getElementById('choose2');
const choose3 = document.getElementById('choose3');
const questionElement = document.getElementById('question');
const container = document.getElementById('container'); // 배경 이미지를 변경할 요소

let A = 0; // 1
let B = 0; // 2
let C = 0; // 3


let currentProgress = 1; // 시작 진행도
const maxProgress = 100; // 최대 진행도

const questions = [
    {
        question: "1. 새해 첫날, 길에서 만난 인물은 누구입니까?",
        choices: [
            "왕의 충신인 무관, 전투에서 뛰어난 능력을 가진 자",
            "학문과 유학에 길이 있는 유생, 지혜로운 말을 아끼지 않는 자",
            "고향 마을에서 상인, 세상 돌아가는 일을 잘 아는 자"
        ],
        variables: [1, 3, 2]
    },
    {
        question: "2. 새해 첫날, 길에서 만난 고수는 누구입니까?",
        choices: [
            "고전 무공을 익힌 무림의 고수, 누구보다 강한 검술을 지닌 자",
            "현자이자 마을의 정신적 기둥인 노인, 세상의 이치를 꿰뚫고 있는 자",
            "궁녀, 왕실의 안주인을 맡고 있는 아름답고 영리한 여성"
        ],
        variables: [1, 3, 2]
    },
    {
        question: "3. 새해 첫날, 왕의 궁궐에서 중요한 모임이 열렸습니다. 그 자리에서 논의된 주제는?",
        choices: [
            "나라를 지키기 위한 군사 전략",
            "왕실의 문화와 학문 발전",
            "백성들의 생활 향상과 민생 안정"
        ],
        variables: [1, 3, 2]
    },
    {
        question: "4. 새해 결심을 하며, 당신은 무엇을 가장 먼저 하겠습니까?",
        choices: [
            "나라와 왕을 위해 충성을 다하겠다!",
            "사람들과 함께 평화롭고 조화롭게 살겠다!",
            "배워서 지혜롭고 훌륭한 사람이 되겠다!"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "5. 새해 첫날, 고향 마을에서 돌아가는 길에 만난 길손이 당신에게 묻습니다. '당신은 어떤 사람이 되고 싶습니까?'",
        choices: [
            "나라를 지킬 수 있는 강력한 장수가 되고 싶다.",
            "사람들의 마음을 읽고 그들에게 기쁨을 주는 사람이 되고 싶다.",
            "세상에서 가장 지혜로운 사람이 되고 싶다."
        ],
        variables: [1, 2, 3]
    },
    {
        question: "6. 새해 첫날, 당신은 궁궐의 왕비에게 불려 갔습니다. 그녀는 당신에게 무엇을 물어볼까요?",
        choices: [
            "나라의 안전을 위한 당신의 의견은 무엇입니까?",
            "사람들 간의 조화와 평화를 이루는 방법을 알고 있습니까?",
            "당신은 내면의 성찰을 얼마나 깊이 하고 있습니까?"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "7. 새해 첫날, 무사에게 한 가지 무기를 선물받습니다. 당신은 어떤 무기를 고르겠습니까?",
        choices: [
            "강철 검, 강하고 용맹한 전사로서의 상징",
            "활과 화살, 멀리서 적을 제압할 수 있는 전략적 무기",
            "칼과 호신도구, 스스로를 지킬 수 있는 방어적인 무기"
        ],
        variables: [1, 1, 2]
    },
    {
        question: "8. 새해 첫날, 하늘에서 떨어진 것은 무엇입니까?",
        choices: [
            "왕의 어명이 담긴 비밀스러운 문서",
            "백성들이 바친 꽃다발",
            "옛 고서, 깊은 지혜가 담긴 고대의 책"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "9. 새해 첫날, 당신에게 어울리는 옷은 무엇일까요?",
        choices: [
            "무사 복장, 전쟁터에서도 돋보일 수 있는 튼튼한 갑옷",
            "고급 비단, 왕실이나 중요한 행사에서 어울리는 품격 있는 복장",
            "검소한 의상, 일상적인 삶에서 편안하고 소박한 복장"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "10. 만약 2025년에 특별한 능력을 하나 얻을 수 있다면, 어떤 능력을 선택하시겠습니까?",
        choices: [
            "무적의 전투력, 어떤 전쟁에서도 승리할 수 있는 능력",
            "마음을 읽는 능력, 사람들의 속마음을 알고 관계를 조율하는 능력",
            "모든 지식을 습득하는 능력, 세상의 모든 학문을 배울 수 있는 능력"
        ],
        variables: [1, 2, 3]
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
            A += 10; 
        } else if (variables[choiceIndex] === 2) {
            B += 10; 
        } else if (variables[choiceIndex] === 3) {
            C += 10; 
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
function getMBTI(A, B, C) {
    return A > B && A > C
        ? "A"
        : B > C
        ? "B"
        : "C";
}


// 최종 결과 처리 함수
// 최종 결과 처리 함수
function handleFinalResult() {
    const finalMBTI = getMBTI(A,B,C); // MBTI 타입 가져오기
    
    // MBTI에 맞는 배경 이미지로 변경
    switch(finalMBTI) {
        case "A":
            container.style.backgroundImage = "url('sehe/009.png')";
            break;
        case "B":
            container.style.backgroundImage = "url('sehe/010.png')";
            break;
        case "C":
            container.style.backgroundImage = "url('sehe/011.png')";
            break;
    }
}
