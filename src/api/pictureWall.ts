import requestObj from ".";
interface IdataType<T = any> {
  code: number;
  message: string;
  data: T;
}
// 获取所有学生的数据
export function getAllRegisteredFreshmen() {
    return requestObj.get<IdataType>({ url: '/interaction/getAllRegisteredFreshmen' })
  }
// 获取所有老师的数据
export function getAllTeacherMsg() {
    return requestObj.get<IdataType>({ url: '/interaction/getAllTeacherMsg' })
}
// 获取下一条学生信息
export function getNextRegisteredFreshmen(id:String) {
    return requestObj.get<IdataType>({ url: `/interaction/getNextRegisteredFreshmen?id=${id}` })
}
// 获取下一条老师信息
export function getNextTeacherMsg(id:String) {
    return requestObj.get<IdataType>({ url: `/interaction/getNextTeacherMsg?id=${id}` })
}