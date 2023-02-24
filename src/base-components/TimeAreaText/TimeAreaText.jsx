import React from "react";
import PropTypes from "prop-types";
import "./TimeAreaText.scss";
//import defaultImageUrl from "../../assets/images/unknown.png";

export function TimeAreaText({ label }) {
  return <div>{label}</div>;
}

TimeAreaText.propTypes = {
  label: PropTypes.string,
  //imageUrl: PropTypes.string,
};

TimeAreaText.defaultProps = {
  label: "undefined-zone",
  //imageUrl: "../../assets/images/israel.png",
};

//<img
//  src={imageUrl ? imageUrl : defaultImageUrl}
//  alt="Area-Flag"
//  width="50"
//  height="50"
///>
