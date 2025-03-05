import { useEffect, useState } from "react";
import "./AccordionItem.css";

// One only Item will Expand at a time
export default AccordionItemSignleOpen = ({
  accordionItem,
  index,
  activeIndex,
  handleActive,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openIcon = "+";
  const closeIcon = "-";

  useEffect(() => {
    if (index === activeIndex) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [activeIndex]);

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        {accordionItem.title}
        <span
          className="accordion-expand-icon"
          onClick={() => handleActive(!isOpen ? index : -1)}
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
