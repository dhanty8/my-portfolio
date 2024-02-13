import React, { ReactNode } from "react";

import Navbar from "../navbar";

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
