let BASE_URL: string;
const TIME_OUT = 10000;

if (import.meta.env.MODE === "development") {
  BASE_URL = "http://10.102.245.164:8081/api/v1";
} else if (import.meta.env.MODE === "production") {
  BASE_URL = "";
} else {
  BASE_URL = "http://10.102.245.164:8081/api/v1";
}
export { BASE_URL, TIME_OUT };
