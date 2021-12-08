import { sectionInfo } from './sectionInfo.js';

function calcValues(values, currentYOffset, currentSection) {
  //현재 섹션 높이에 대한 현재 스크롤 위치의 비율
  let rv;
  const scrollHeight = sectionInfo[currentSection].scrollHeight;
  const scrollRatio = currentYOffset / scrollHeight;
  if (values[2]) {
    const actionStart = values[2].start * scrollHeight;
    const actionEnd = values[2].end * scrollHeight;
    const actionRatio = (currentYOffset - actionStart) / (actionEnd - actionStart);
    if (currentYOffset >= actionStart && currentYOffset <= actionEnd) {
      rv = actionRatio * (values[1] - values[0]) + values[0];
    } else if (currentYOffset < actionStart) {
      rv = values[0];
    } else if (currentYOffset > actionEnd) {
      rv = values[1];
    }
  } else {
    // values[0] 부터 values[1]까지 일정비율로 증가/감소
    rv = scrollRatio * (values[1] - values[0]) + values[0];
  }
  return rv;
}

export default function playAnimation(currentYOffset, currentSection) {
  let objs = sectionInfo[currentSection].objs;
  let values = sectionInfo[currentSection].values;
  const scrollHeight = sectionInfo[currentSection].scrollHeight;
  const scrollRatio = currentYOffset / scrollHeight;

  switch (currentSection) {
    case 0:
      if (scrollRatio <= 0.22) {
        // in
        objs.text0.style.opacity = calcValues(values.text0_opacity_in, currentYOffset, currentSection);
        objs.text0.style.transform = `translateY(${calcValues(values.text0_translateY_in, currentYOffset, currentSection)}%)`;
      } else {
        // out
        objs.text0.style.opacity = calcValues(values.text0_opacity_out, currentYOffset, currentSection);
        objs.text0.style.transform = `translateY(${calcValues(values.text0_translateY_out, currentYOffset, currentSection)}%)`;
      }

      if (scrollRatio <= 0.42) {
        // in
        objs.text1.style.opacity = calcValues(values.text1_opacity_in, currentYOffset, currentSection);
        objs.text1.style.transform = `translateY(${calcValues(values.text1_translateY_in, currentYOffset, currentSection)}%)`;
      } else {
        // out
        objs.text1.style.opacity = calcValues(values.text1_opacity_out, currentYOffset, currentSection);
        objs.text1.style.transform = `translateY(${calcValues(values.text1_translateY_out, currentYOffset, currentSection)}%)`;
      }

      if (scrollRatio <= 0.62) {
        // in
        objs.text2.style.opacity = calcValues(values.text2_opacity_in, currentYOffset, currentSection);
        objs.text2.style.transform = `translateY(${calcValues(values.text2_translateY_in, currentYOffset, currentSection)}%)`;
      } else {
        // out
        objs.text2.style.opacity = calcValues(values.text2_opacity_out, currentYOffset, currentSection);
        objs.text2.style.transform = `translateY(${calcValues(values.text2_translateY_out, currentYOffset, currentSection)}%)`;
      }

      if (scrollRatio <= 0.82) {
        // in
        objs.text3.style.opacity = calcValues(values.text3_opacity_in, currentYOffset, currentSection);
        objs.text3.style.transform = `translateY(${calcValues(values.text3_translateY_in, currentYOffset, currentSection)}%)`;
      } else {
        // out
        objs.text3.style.opacity = calcValues(values.text3_opacity_out, currentYOffset, currentSection);
        objs.text3.style.transform = `translateY(${calcValues(values.text3_translateY_out, currentYOffset, currentSection)}%)`;
      }
      break;

    case 2:
      if (scrollRatio <= 0.32) {
        // in
        objs.text0.style.opacity = calcValues(values.text0_opacity_in, currentYOffset, currentSection);
        objs.text0.style.transform = `translateY(${calcValues(values.text0_translateY_in, currentYOffset, currentSection)}%)`;
      } else {
        // out
        objs.text0.style.opacity = calcValues(values.text0_opacity_out, currentYOffset, currentSection);
        objs.text0.style.transform = `translateY(${calcValues(values.text0_translateY_out, currentYOffset, currentSection)}%)`;
      }

      if (scrollRatio <= 0.57) {
        // in
        objs.detail0.style.opacity = calcValues(values.detail0_opacity_in, currentYOffset, currentSection);
        objs.detail0.style.transform = `translateY(${calcValues(values.detail0_translateY_in, currentYOffset, currentSection)}%)`;
        objs.pin0.style.transform = `scaleY(${calcValues(values.pin0_scaleY, currentYOffset, currentSection)})`;
      } else {
        // out
        objs.detail0.style.opacity = calcValues(values.detail0_opacity_out, currentYOffset, currentSection);
        objs.detail0.style.transform = `translateY(${calcValues(values.detail0_translateY_out, currentYOffset, currentSection)}%)`;
        objs.pin0.style.transform = `scaleY(${calcValues(values.pin0_scaleY, currentYOffset, currentSection)})`;
      }

      if (scrollRatio <= 0.83) {
        // in
        objs.detail1.style.opacity = calcValues(values.detail1_opacity_in, currentYOffset, currentSection);
        objs.detail1.style.transform = `translateY(${calcValues(values.detail1_translateY_in, currentYOffset, currentSection)}%)`;
        objs.pin1.style.transform = `scaleY(${calcValues(values.pin1_scaleY, currentYOffset, currentSection)})`;
      } else {
        // out
        objs.detail1.style.opacity = calcValues(values.detail1_opacity_out, currentYOffset, currentSection);
        objs.detail1.style.transform = `translateY(${calcValues(values.detail1_translateY_out, currentYOffset, currentSection)}%)`;
        objs.pin1.style.transform = `scaleY(${calcValues(values.pin1_scaleY, currentYOffset, currentSection)})`;
      }
      break;

    case 3:
      break;
  }
}
