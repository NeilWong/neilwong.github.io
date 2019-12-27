import React from "react";
import Pdf from "./NeilWongResume.pdf";

function PDF({ item }) {
  return (
    <a href={Pdf} target="_blank">
      {item}
    </a>
  );
}

export default PDF;
