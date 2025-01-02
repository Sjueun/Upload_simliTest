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
        question: "1. 커피를 마시다가 실수로 흘렸을 때, 당신의 반응은?",
        choices: [
            "이런, 오늘의 패션은 커피 얼룩인가?라고 웃는다",
            "누가 나에게 커피를 주었어?라며 농담한다",
            "이제 커피 대신 물만 마셔야겠다…라며 진지해진다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "2. 친구의 실수로 넘어졌을 때, 당신은?",
        choices: [
            "우와, 새로운 스포츠 종목이야!라고 장난친다",
            "다음에는 넘어지지 않도록 연습하자!라며 함께 웃는다",
            "괜찮아? 다치지 않았어?라고 걱정한다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "3. 길을 가다가 갑자기 비가 내리면?",
        choices: [
            "비 오는 날은 내 스타일이지!라며 춤춘다",
            "우산을 챙겼어야 했는데!라고 후회한다",
            "이런 날은 집에서 영화나 봐야지…라고 중얼거린다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "4. 혼자서 영화를 보다가 웃긴 장면이 나오면?",
        choices: [
            "이 장면은 진짜 명장면!이라며 혼자서 박장대소한다",
            "이걸 친구한테 꼭 보여줘야겠다!라고 생각한다",
            "혼자서 웃고 있으니 좀 이상하네…라고 느낀다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "5. 반찬을 잘못 가져와서 이상한 조합이 됐을 때?",
        choices: [
            "이건 새로운 요리법이야!라고 장난친다",
            "이 조합은 나만의 비밀 레시피!라며 자랑한다",
            "다음에는 꼭 제대로 골라야지…라고 반성한다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "6. 길에서 지나가는 강아지를 보고?",
        choices: [
            "너무 귀여워! 나도 강아지 키워야겠다!라고 환호한다",
            "이게 바로 인생의 행복이지!라며 웃는다",
            "강아지의 마음을 이해해봐야겠다…라고 진지해진다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "7. 친구와의 약속을 잊고 혼자 놀러갔을 때?",
        choices: [
            "혼자도 재밌네! 나의 독립적인 하루!라고 즐거워한다",
            "이건 운명의 장난이야!라며 웃는다",
            "다음에는 꼭 기억해야지…라고 반성한다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "8. 장난으로 친구에게 '너의 비밀이 다 들켰어!'라고 했을 때?",
        choices: [
            "너의 반응이 궁금해!라며 웃는다",
            "그걸로 나를 괴롭히지 마!라고 진지하게 반응한다",
            "비밀은 언제나 소중하니까!라고 장난친다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "9. 아침에 일어났을 때, 거울 속의 모습이 이상하면?",
        choices: [
            "아침은 나에게 너무 잔인해!라고 농담한다",
            "특별한 날이야!라고 긍정적으로 생각한다",
            "이건 분명 내가 아닌데…라고 혼란스러워한다"
        ],
        variables: [1, 2, 3]
    },
    {
        question: "10. 친구가 잘못된 정보를 말했을 때?",
        choices: [
            "이건 네가 만들어낸 전설이야!라고 웃는다",
            "그렇다면 역사책에 올려야겠다!라고 농담한다",
            "정확한 정보를 찾아봐야겠다…라고 진지하게 반응한다"
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
            container.style.backgroundImage = "url('food/017.png')";
            break;
        case "B":
            container.style.backgroundImage = "url('food/018.png')";
            break;
        case "C":
            container.style.backgroundImage = "url('food/019.png')";
            break;
    }
}
