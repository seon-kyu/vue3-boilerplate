import { loginApi } from "@/apis/repository/controllers/authController";

export async function login() {
  const res = await loginApi();

  return res.data;
}
