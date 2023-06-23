import { useState } from "react";

export default function Panel({ children }) {
  const [open, setOpen] = useState(true);

  const panelStyles = () => ({
    border: "1px solid #aaa",
    borderRadius: " 6px",
    marginTop: "20px",
    padding: "10px",
    width: "200px",
  });

  return (
    <section style={panelStyles()}>
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
}
