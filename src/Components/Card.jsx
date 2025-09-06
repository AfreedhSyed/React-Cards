import { useState } from "react";
export default function Card({ cardData }) {
  const [like, likeCounter] = useState(0);
  const [dislike, dislikeCounter] = useState(0);
  return (
    <div className="card">
      <nav className="card-navbar">
        <div className="navbar-top">
          <h1 className="heading">{cardData.name}</h1>
          <div className="button-group">
            <button
              className="like"
              onClick={() => {
                likeCounter(like + 1);
              }}
            >
              {like}🩷
            </button>
            <button
              className="dislike"
              onClick={() => {
                dislikeCounter(dislike + 1);
              }}
            >
              {dislike}👎🏻
            </button>
          </div>
        </div>
        <h3>{cardData.time}</h3>
      </nav>
      <div className="card-body">
        <p>
          <b>Serves:</b> {cardData.serves}
        </p>
        <p>
          <b>Difficulty:</b> {cardData.difficulty}
        </p>
        <p>
          <b>Type:</b> {cardData.type}
        </p>
      </div>
      <footer className="card-footer">
        <em>Traditional: AFREEDH Tea Receipe since 2004</em>
      </footer>
    </div>
  );
}
