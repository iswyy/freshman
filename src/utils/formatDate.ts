export function getNowTime() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  let time = year + '年' + addZero(month) + '月' + addZero(day) + '日' + '  ' + addZero(hour) + ':' + addZero(min) + ':' + addZero(sec) + ''
  return time
}
function addZero(num: any) {
  return num < 10 ? ('0' + num) : num
}
export function formatTime(time: string) {
  const originalTime = time
  const date = new Date(originalTime);
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份从0开始，需要加1
  const day = date.getDate().toString().padStart(2, "0");
  // 获取时、分、秒
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${month}-${day} ${hours}:${minutes}`;
  return formattedTime
}