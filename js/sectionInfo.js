export const sectionInfo = [
  {
    // 0
    type: 'sticky',
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-section-0'),
      text0: document.querySelectorAll('#scroll-section-0 .main-text')[0],
      text1: document.querySelectorAll('#scroll-section-0 .main-text')[1],
      text2: document.querySelectorAll('#scroll-section-0 .main-text')[2],
      text3: document.querySelectorAll('#scroll-section-0 .main-text')[3],
    },
    values: {
      text0_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      text1_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      text2_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      text3_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      text0_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      text1_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      text2_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      text3_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      text0_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      text1_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      text2_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      text3_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      text0_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      text1_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      text2_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      text3_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
    },
    canvas: {
      canvas: document.querySelector('#video-canvas-0'),
      context: document.querySelector('#video-canvas-0').getContext('2d'),
      frameLength: 300,
      frameSequence: [0, 299],
      imageFrames: [],
      opacity: [1, 0, { start: 0.9, end: 1 }],
    },
  },
  {
    // 1
    type: 'normal',
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
      text0: document.querySelector('#scroll-section-2 .main-text'),
      detail0: document.querySelectorAll('#scroll-section-2 .product-detail')[0],
      detail1: document.querySelectorAll('#scroll-section-2 .product-detail')[1],
      pin0: document.querySelectorAll('#scroll-section-2 .pin')[0],
      pin1: document.querySelectorAll('#scroll-section-2 .pin')[1],
    },
    values: {
      text0_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
      text0_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
      text0_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
      text0_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],

      detail0_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
      detail0_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
      detail0_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
      detail0_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],

      detail1_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
      detail1_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
      detail1_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      detail1_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],

      pin0_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
      pin1_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
    },
    canvas: {
      canvas: document.querySelector('#video-canvas-1'),
      context: document.querySelector('#video-canvas-1').getContext('2d'),
      frameLength: 960,
      frameSequence: [0, 959],
      imageFrames: [],
      opacity_in: [0, 1, { start: 0, end: 0.05 }],
      opacity_out: [1, 0, { start: 0.95, end: 1 }],
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
