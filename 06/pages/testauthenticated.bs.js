// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Section$MyBlog from "../src/components/layout/Section.bs.js";
import * as Authenticated$MyBlog from "../src/components/user/Authenticated.bs.js";

function Testauthenticated(Props) {
  return React.createElement(Authenticated$MyBlog.make, {
              children: React.createElement(Section$MyBlog.make, {
                    title: "I am authenticated"
                  })
            });
}

var make = Testauthenticated;

var $$default = Testauthenticated;

export {
  make ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
