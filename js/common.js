document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const dropdownToggle = document.querySelector('.navbar-menu .dropdown > a');

    // 1. 모바일 햄버거 버튼 클릭 이벤트
    if (menuToggleBtn && navbarMenu) {
        menuToggleBtn.addEventListener('click', () => {
            navbarMenu.classList.toggle('is-open');
        });
    }

    // 2. 모바일에서 '상품' 드롭다운 클릭 이벤트
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (event) => {
            // 모바일 화면에서만(768px 미만) 작동
            if (window.innerWidth < 768) {
                // a 태그의 기본 링크 이동을 막음
                event.preventDefault(); 
                const dropdownContent = event.target.nextElementSibling;
                dropdownContent.classList.toggle('is-open-mobile');
            }
        });
    }
});
