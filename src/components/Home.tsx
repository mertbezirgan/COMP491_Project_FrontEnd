import React from "react";
import { Link } from "react-router-dom";

// import { getPublicContent } from "../services/user.service";

const Home: React.FC = () => {
  // const [content, setContent] = useState<string>("");

  // useEffect(() => {
  //   getPublicContent().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3
          style={{
            fontFamily: "Trebuchet MS",
            fontStyle: "italic",
          }}
        >
          shibArmy presents proudly!
        </h3>
        <h6 className="mt-5">
          Please{" "}
          <Link
            to={"/login"}
            style={{
              fontWeight: "bold",
            }}
          >
            sign in
          </Link>{" "}
          or{" "}
          <Link
            to="/register"
            style={{
              fontWeight: "bold",
            }}
          >
            register
          </Link>
          !
        </h6>
      </header>
    </div>
  );
};

export default Home;
