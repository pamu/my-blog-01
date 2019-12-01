// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Section$MyBlog from "../layout/Section.bs.js";
import * as UserContext$MyBlog from "./UserContext.bs.js";

function Authenticated(Props) {
  var children = Props.children;
  var match = UserContext$MyBlog.useUser(/* () */0);
  return React.createElement(React.Fragment, undefined, match[0] ? children : React.createElement(Section$MyBlog.make, {
                    title: "403 Unauthorized"
                  }));
}

var make = Authenticated;

var $$default = Authenticated;

export {
  make ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
