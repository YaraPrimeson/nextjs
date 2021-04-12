import Links from "./links";

const MainContainer = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <Links href={"/"} text="main page" />
        <Links href={"/users"} text="user page" />
      </div>
      <style jsx>
        {`
          .navbar {
            background: gray;
            height: 50px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
};
export default MainContainer;
