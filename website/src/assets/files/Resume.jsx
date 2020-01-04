import React from "react";
import Pdf from "./NeilWongResume.pdf";

function PDF({ item }) {
  return <a href={Pdf}>{item}</a>;
}

export default PDF;
