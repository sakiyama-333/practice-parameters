import { useParams } from "react-router-dom";
export const UrlParameter = () => {
  let { id } = useParams();
  return (
    <>
      <h1>Parameterページです</h1>
    </>
  );
};
