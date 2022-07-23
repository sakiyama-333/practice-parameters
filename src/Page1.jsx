import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <>
      <h1>Page1ページです</h1>
      <Link to="/Page1/Page1Child1">Page1Child</Link>
      <br />
      <Link to="/Page1/Page1Child2">Page2Child</Link>
    </>
  );
};
