import Navbar from "../navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-col w-full h-screen bg-main">
      <Navbar />
      <div className="flex-grow flex flex-col">{children}</div>
    </div>
  );
};

export default Layout;
