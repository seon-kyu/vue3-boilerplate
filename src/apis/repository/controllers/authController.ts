import api from "@/apis/client/api";

export function loginApi() {
  return api({
    method: "post",
    url: "login",
  });
}
