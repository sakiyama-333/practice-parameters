import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const RouterPage2 = [
  {
    path: "/",
    expect: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    expect: false,
    children: <UrlParameter />
  }
];
