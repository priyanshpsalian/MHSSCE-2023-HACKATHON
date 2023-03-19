import React from "react";
import { withRouter } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(AuthLayout);