import { Page1 } from "../Page1";
import { Page1Child1 } from "../Page1Child1";
import { Page1Child2 } from "../Page1Child2";

export const RouterPage1 = [
  {
    path: "/",
    expect: true,
    children: <Page1 />
  },
  {
    path: "/Page1Child1",
    expect: false,
    children: <Page1Child1 />
  },
  {
    path: "/Page1Child2",
    expect: false,
    children: <Page1Child2 />
  }
];
