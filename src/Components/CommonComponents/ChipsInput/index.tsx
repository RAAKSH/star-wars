import { useState } from "react";

export default function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      if (!chips.includes(input.trim())) {
        setChips([...chips, input.trim()]);
        setInput("");
      }
    } else if (e.key === "Backspace" && input === "" && chips.length) {
      setChips(chips.slice(0, -1));
    }
  };

  const removeChip = (chipToRemove) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };

  return (
    <div className="mx-auto border p-4 rounded">
      <div className="flex flex-wrap gap-2 mb-2">
        {chips.map((chip, index) => (
          <div key={index} className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            <span>{chip}</span>
            <button
              onClick={() => removeChip(chip)}
              className="ml-1 text-sm font-bold px-1"
            >
              ×
            </button>
          </div>
        ))}
        <input
          className="flex-1 outline-none p-1 min-w-[100px]"
          placeholder="Type and press Enter or ,"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
