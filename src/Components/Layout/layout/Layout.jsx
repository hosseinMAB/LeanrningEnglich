import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
export const Layout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Header />
    </>
  );
};
