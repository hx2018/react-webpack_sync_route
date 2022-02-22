import { get, post } from "../helpers/fetch";

// const API_DOMAIN = "http://localhost:3001";
const API_DOMAIN = "http://localhost:9000"; // 这是前端webpack启的web服务的域名，而后端服务器api域名是"localhost:3001"，这里用webpack启的web服务的域名是因为webpack的devServer配置了代理，9000请求会代理到3001，解决跨域问题

const API_GET_RESUME_LIST = "/api/resume/list";
const API_DELETE_RESUME = (id) => `/api/resume/list/${id}`;
const API_DELETE_UPDATE = "/api/resume/update";

export function getResumeList() {
  return get(API_GET_RESUME_LIST);
}

export function deleteResume(id) {
  return post(API_DOMAIN + API_DELETE_RESUME(id), "DELETE");
}

export function updateStatus(data) {
  return post(API_DOMAIN + API_DELETE_UPDATE, "POST", data);
}
