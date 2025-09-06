import Card from "./Components/Card";
import Data from "./Data";
import "./Card.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Cards() {
  return (
    <div className="card-container">
      {Data.map((cardData) => (
        <Card cardData={cardData} />
      ))}
    </div>
  );
}

root.render(<Cards />);
