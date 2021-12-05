(() => {
  let yOffset = 0; // window.pageYOffset
  let prevScrollHeight = 0; // 현재 스크롤 위치((yOffset) 이전의 섹션 스크롤 높이값의 합
  let currentSection = 0; // 현재 활성화 된 섹션
  let switchSection = false; // 섹션이 바뀌는 순간 true

  const sectionInfo = [
    {
      // 0
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
        text0: document.querySelectorAll('#scroll-section-0 .main-text')[0],
      },
      values: {
        text0_opacity: [0, 1],
      },
    },
    {
      // 1
      type: 'normal',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1'),
      },
    },
    {
      // 2
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2'),
      },
    },
    {
      // 3
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3'),
      },
    },
  ];

  function calcValues(values, currentYOffeset) {
    // 현재 섹션 높이에 대한 현재 스크롤 위치의 비율
    let rv;
    let scrollRatio = currentYOffeset / sectionInfo[currentSection].scrollHeight;

    // values[0] 부터 values[1]까지 일정비율로 증가/감소
    rv = scrollRatio * (values[1] - values[0]) + values[0];

    return rv;
  }

  function playAnimation() {
    let objs = sectionInfo[currentSection].objs;
    let values = sectionInfo[currentSection].values;
    let currentYOffeset = yOffset - prevScrollHeight;

    switch (currentSection) {
      case 0:
        let text0_opacity_in = calcValues(values.text0_opacity, currentYOffeset);
        objs.text0.style.opacity = text0_opacity_in;
        console.log(currentSection, text0_opacity_in);
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  // 새로고침 or 화면크기가 바뀔 때
  function setLayout() {
    // 각 스크롤 섹션 높이 세팅
    for (let i = 0; i < sectionInfo.length; i++) {
      sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * window.innerHeight;
      sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`;
    }

    // 현재 스크롤 위치 찾아서 해당 페이지 활성화
    let totalScrollHeight = 0;
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

  // 스크롤로 인해 현재 보이는 화면이 바뀔 때
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

    playAnimation();
  }

  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });

  window.addEventListener('resize', setLayout);
  window.addEventListener('load', setLayout);
})();
