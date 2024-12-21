// 단어와 아이콘 선택
const toggleButton = document.getElementById('toggleButton');
let isVersion1 = true; // 현재 상태 (버전 1인지 여부)

// 초기 설정
setupClickEvents();

// 전체 전환 버튼 클릭 시 동작
toggleButton.addEventListener('click', () => {
    const allwords = document.querySelectorAll('.word, .spaced');
    const allicons = document.querySelectorAll('.icon');

    if (isVersion1) {
        // 버전 1 → 버전 2: 단어가 숨겨지고 아이콘이 보이도록
        allwords.forEach(word => {
            word.style.opacity = '0'; // 단어 숨기기
        });
        allicons.forEach(icon => {
            icon.style.opacity = '1'; // 아이콘 보이기
        });
        toggleButton.src = 'icon/icon_changer_icon.png'; // 버튼 이미지 변경
    } else {
        // 버전 2 → 버전 1: 아이콘이 숨겨지고 단어가 보이도록
        allwords.forEach(word => {
            word.style.opacity = '1'; // 단어 보이기
        });
        allicons.forEach(icon => {
            icon.style.opacity = '0'; // 아이콘 숨기기
        });
        toggleButton.src = 'icon/text_changer_icon.png'; // 버튼 이미지 변경
    }

    isVersion1 = !isVersion1; // 상태 반전
});

// 단어와 아이콘의 클릭 이벤트를 설정하는 함수
function setupClickEvents() {
    const wordContainers = document.querySelectorAll('.word-container');

    wordContainers.forEach(container => {
        const word = container.querySelector('.word, .spaced');
        const icon = container.querySelector('.icon');

        // 초기 상태 설정
        word.style.opacity = '1';
        icon.style.opacity = '0';

        container.addEventListener('click', () => {
            if (word.style.opacity === '1') {
                // 단어가 보이는 상태 -> 아이콘 보이기
                word.style.opacity = '0';
                icon.style.opacity = '1';
            } else {
                // 아이콘이 보이는 상태 -> 단어 보이기
                word.style.opacity = '1';
                icon.style.opacity = '0';
            }
        });
    });
}
