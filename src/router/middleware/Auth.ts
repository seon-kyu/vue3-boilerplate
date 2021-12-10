import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import Cookie from "js-cookie";

export const auth = (
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const accessToken = Cookie.get("access_token");

  if (accessToken) {
    return next();
  }

  next({
    path: "/login",
  });
};
