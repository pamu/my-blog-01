// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";

function str(prim) {
  return prim;
}

var footerStyles = Css.merge(/* :: */[
      Css.style(/* :: */[
            Css.background(Css.rgb(244, 244, 244)),
            /* [] */0
          ]),
      /* :: */[
        "footer",
        /* [] */0
      ]
    ]);

var Styles = /* module */[/* footerStyles */footerStyles];

function Footer(Props) {
  return React.createElement("footer", {
              className: footerStyles
            }, React.createElement("div", {
                  className: "content has-text-centered"
                }, React.createElement("p", undefined, React.createElement("strong", undefined, "My Blog "), "was made with ReasonML ReasonReact and Next.js")));
}

var make = Footer;

export {
  str ,
  Styles ,
  make ,
  
}
/* footerStyles Not a pure module */