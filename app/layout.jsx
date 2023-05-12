import "../styles/globals.css";
import React from "react";
import MainNavigation from "./components/MainNavigation";

function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Food App</title>
      </head>
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
export default layout;
