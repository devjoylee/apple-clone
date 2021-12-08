import { sectionInfo } from './sectionInfo.js';
import playAnimation from './animation.js';

(() => {
  let yOffset = 0; // window.pageYOffset
  let prevScrollHeight = 0; // 현재 스크롤 위치((yOffset) 이전의 섹션 스크롤 높이값의 합
  let currentSection = 0; // 현재 활성화 된 섹션
  let switchSection = false; // 섹션이 바뀌는 순간 true

  // canvas에 사용할 이미지 불러오기
  function imgToCanvas() {
    for (let i = 0; i < sectionInfo[0].canvas.frameLength; i++) {
      let image = new Image();
      image.src = `./images/frame0/IMG_${6726 + i}.jpg`;
      sectionInfo[0].canvas.imageFrames.push(image);
    }

    for (let i = 0; i < sectionInfo[2].canvas.frameLength; i++) {
      let image = new Image();
      image.src = `./images/frame1/IMG_${7027 + i}.jpg`;
      sectionInfo[2].canvas.imageFrames.push(image);
    }
  }

  // 현재 스크롤 중인 섹션 알아내기 : currentSection
  function scrollLoop() {
    switchSection = false;
    prevScrollHeight = 0;

    // 현재 위치보다 앞에 있는 섹션들의 높이 합 구하기
    for (let i = 0; i < currentSection; i++) {
      prevScrollHeight += sectionInfo[i].scrollHeight;
    }

    // 스크롤 위치가 지난 섹션 + 현재 섹션 보다 크다 =>  to next section
    if (yOffset > prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
      switchSection = true;
      currentSection++;
      document.body.setAttribute('id', `show-section-${currentSection}`);
    }

    // 스크롤 위치가 지난 섹션 보다 작다 => to prev section
    if (yOffset < prevScrollHeight) {
      if (currentSection === 0) return; // 브라우저 바운스 효과로 마이너스가 되는 것 방지 (모바일)
      switchSection = true;
      currentSection--;
      document.body.setAttribute('id', `show-section-${currentSection}`);
    }

    // 섹션 바뀌는 순간은 에러때문에 animation 실행 x
    if (switchSection) return;

    playAnimation(yOffset - prevScrollHeight, currentSection);
  }

  // 레이아웃 설정 init
  function setLayout() {
    let totalScrollHeight = 0;
    const heightRatio = window.innerHeight / 1080;

    // canvas 배치하기
    sectionInfo[0].canvas.canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`;
    sectionInfo[2].canvas.canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`;

    // 각 스크롤 섹션 높이 세팅
    for (let i = 0; i < sectionInfo.length; i++) {
      if (sectionInfo[i].type === 'sticky') {
        sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * window.innerHeight;
      } else if (sectionInfo[i].type === 'normal') {
        sectionInfo[i].scrollHeight = sectionInfo[i].objs.container.offsetHeight;
      }
      sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`;
    }

    // 현재 스크롤 위치 찾아서 해당 페이지 활성화
    yOffset = window.pageYOffset;
    for (let i = 0; i < sectionInfo.length; i++) {
      totalScrollHeight += sectionInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentSection = i;
        break;
      }
    }
    document.body.setAttribute('id', `show-section-${currentSection}`);
  }

  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });

  imgToCanvas();
  window.addEventListener('resize', setLayout);
  window.addEventListener('load', () => {
    setLayout();

    // 로드 시 캔버스 첫 화면 띄우기
    sectionInfo[0].canvas.context.drawImage(sectionInfo[0].canvas.imageFrames[0], 0, 0);
    sectionInfo[2].canvas.context.drawImage(sectionInfo[2].canvas.imageFrames[0], 0, 0);
  });
})();
