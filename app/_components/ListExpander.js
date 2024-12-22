"use client";

import { useState } from "react";

function ListExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const list = isExpanded ? children : children.slice(0, 5);

  return (
    <ul>
      {list}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1 my-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </ul>
  );
}

export default ListExpander;
