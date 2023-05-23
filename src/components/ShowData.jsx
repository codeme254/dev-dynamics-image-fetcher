import { useContext } from "react";
import { SearchTerm } from "../App";

export default function ShowData() {
  const { clickedItem } = useContext(SearchTerm);
  return (
    <div className="clicked-item">
      {clickedItem && (
        <>
          <div>
            <img src={clickedItem.src.large} alt={clickedItem.alt} />
          </div>
          <p>
            Photo taken by{" "}
            <a href={clickedItem.photographer_url}>
              {clickedItem.photographer}
            </a>
          </p>
        </>
      )}
    </div>
  );
}
