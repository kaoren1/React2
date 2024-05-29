import React from "react";

const Info = ({ ageRating, url, description, name }) => {
  return (
    <div className="info-card">
      <img src={url} alt="Постер фильма" />
      <h2>{name}</h2> {}
      <p>{description.substring(0, 250)}...</p> {}
    </div>
  );
};

export default Info;
