import { get, post } from "../../src/helpers/fetch";

export function getCounterValue(url) {
  return get(url).then((res) => res);
}

export function setCounterValue(url, data) {
  return post(url, "POST", data).then((res) => res);
}
// import $ from "jquery";
// export function getCounterValue(url) {
//   console.log("------", url);
//   return $.ajax({
//     url,
//     method: "GET",
//     contentType: "application/json;charset=UTF-8",
//   }).then((res) => res);
// }
