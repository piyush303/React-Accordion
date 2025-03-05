import { useState } from "react";

import AccordionItemMultipleOpen from "./AccordionItemMultipleOpen";
import AccordionItemSignleOpen from "./AccordionItemSingleOpen";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <h2>Accordion with Multiple Open</h2>
      {data.map((item, index) => (
        <AccordionItemMultipleOpen key={index} accordionItem={item} />
      ))}

      <h2>Accordion with Single Open</h2>
      {data.map((item, index) => (
        <AccordionItemSignleOpen
          key={index}
          accordionItem={item}
          index={index}
          activeIndex={activeIndex}
          handleActive={(index) => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
