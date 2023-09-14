import requestObj from ".";
interface IdataType<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface userInfoConfigType {
  name: string;
  identify?: number | string;
  image: string;
  studentId?: string;
  courWord: string;
}
export interface postUserInfoRes {
  message: string;
}
interface mottoType {
  courWord: string;
}
export function postUserInfo1(data: userInfoConfigType) {
  return requestObj.post<IdataType<postUserInfoRes>>({
    url: "/report/submitInfo",
    data: data,
  });
}
export function postUserInfo2(data: userInfoConfigType) {
  return requestObj.post<IdataType<postUserInfoRes>>({
    url: "/report/teaWord",
    data: data,
  });
}
export function getUserInfo() {
  return requestObj.get<IdataType>({
    url: "/report/userAll",
  });
}
export function getMottoList() {
  return requestObj.get<IdataType<Array<mottoType>>>({
    url: "/report/words",
  });
}
export function uploadImage(file: File) {
  return requestObj.post({
    url: "/report/url",
    data: file,
  });
}
