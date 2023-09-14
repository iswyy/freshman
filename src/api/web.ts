import requestObj from ".";
interface IdataType<T = any> {
  code: number;
  message: string;
  data: T;
}

export function getSignIn() {
  return requestObj.get({ url: '/numberWelcome/getSignIn' })
}
export function getAlready() {
  return requestObj.get({ url: '/numberWelcome/getAlready' })
}

export function getClass() {
  return requestObj.get<IdataType>({
    url: "/numberWelcome/getClass",
  });
}
export function getLongitudeAndLatitude() {
  return requestObj.get<IdataType>({
    url: "/numberWelcome/getLongitudeAndLatitude",
  });
}
