import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const itemLinks = links.map((e) => {
    return (
      <a key={e} href={"#" + e}>
        {e}
      </a>
    );
  });

  return <nav>{itemLinks}</nav>;
}

export default NavBar;
