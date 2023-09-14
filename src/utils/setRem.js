function isMobile() {
  let flag = false;
  let userAgent = navigator.userAgent.toLowerCase();
  if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
    flag = true;
  }
  return flag;
}
function setRem() {
  // 默认使用100px作为基准大小
  const baseSize = 100;
  let clientWidth = isMobile() ? 292 : 1920;
  const baseVal = baseSize / clientWidth;
  const vW = window.innerWidth; // 当前窗口的宽度
  const rem = vW * baseVal; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
  window.$size = rem / 100;
  document.documentElement.style.fontSize = rem / 8 + "px";
}
// 初始化
setRem();
// 窗口大小变化时重置 rem
window.onresize = function () {
  setRem();
};
