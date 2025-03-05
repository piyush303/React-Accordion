import { useEffect, useState } from "react";
import "./AccordionItem.css";

// Each Item can be Expand and Collapsed
export default AccordionItemWithMultiple = ({ accordionItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openIcon = "+";
  const closeIcon = "-";

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        {accordionItem.title}
        <span
          className="accordion-expand-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? closeIcon : openIcon}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content">{accordionItem.content}</div>
      )}
    </div>
  );
};
