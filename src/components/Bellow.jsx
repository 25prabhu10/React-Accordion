import { useRef } from "react";
import "./Bellow.css";

export const Bellow = ({
  mainText = "",
  description = "",
  handleClick,
  showDesc,
}) => {
  const contentRef = useRef(null);

  return (
    <>
      <div className="main">
        <h3>{mainText}</h3>
        <button onClick={handleClick}>{showDesc ? "Hide" : "Show"}</button>
      </div>
      <div
        ref={contentRef}
        className="content"
        style={{
          maxHeight: showDesc ? `${contentRef.current.scrollHeight}px` : "0px",
        }}>
        <p className="desc">{description}</p>
      </div>
    </>
  );
};
