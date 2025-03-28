"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for rentals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />
    </div>
  );
}
