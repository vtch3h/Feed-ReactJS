import React, { useState } from "react";

const ThemeBar = (modes) => {
  const [style, setStyle] = useState("light");
  const [open, setOpen] = useState(false);

  return (
    <div className={`${style}_g`}>
      <div className="round-container">
        <div
          onClick={() => {
            if (style === "light") setStyle("dark");
            if (style === "dark") setStyle("pink");
            if (style === "pink") setStyle("light");
          }}
          className={style}
        ></div>
      </div>
    </div>
  );
};
export default ThemeBar;

{
  /* <div className={`${style}_g`}>
      
      <ul onClick={() => setOpen(!open)} className={style}>
        {modes.modes.modeName}
        {open &&
          modes.modes.map((mode) => (
            <li
              onClick={() => {
                setStyle(mode.id);
              }}
              key={mode.id}
            >
              {mode.modeName}
            </li>
          ))}{" "}
      </ul>
    </div>
  );
}; */
}
