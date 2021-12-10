import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import Cookie from "js-cookie";

export const auth = (from: RouteLocationNormalized, to: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log("call call");
  const accessToken = Cookie.get("access_token");

  if (accessToken) {
    return next();
  }

  next({
    path: "/login",
  });
};
