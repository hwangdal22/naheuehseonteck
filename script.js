function makeChoice() {
    const choices = ['좋다', '개좋다', '미쳤어 존나 개좋아'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = randomChoice;
    resultElement.classList.add('show');

    // 애니메이션 효과
    resultElement.style.animation = 'none';
    resultElement.offsetHeight; // Trigger reflow
    resultElement.style.animation = 'shake 0.5s, scaleUp 0.5s';

    setTimeout(() => {
        resultElement.classList.remove('show');
        resultElement.style.animation = 'none';
    }, 2000);
}

// 애니메이션 추가
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
@keyframes scaleUp {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(styleSheet);
