import React from "react";
import moment from "moment";

const ThoughtList = ({ oneThought, handleLike }) => {
  return (
    <div className="thought-card">
      <p className="thought-text">{oneThought.message}</p>
      <div className="thought-info">
        <button onClick={() => handleLike(oneThought._id)} className="likes">
          <span
            style={{
              backgroundColor: oneThought.hearts > 0 ? "#f8a6a6" : "#EAEAEA",
            }}
            className="btn-heart"
            role="img"
            aria-label="heart emoji"
          >
            ❤️
          </span>{" "}
          x {oneThought.hearts}
        </button>{" "}
        <p className="date">{moment(oneThought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};
export default ThoughtList;
