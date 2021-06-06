import React from "react";

function Footer() {
  var rec_year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {rec_year}</p>
    </footer>
  );
}

export default Footer;
