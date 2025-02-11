"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = () => {
    router.push(`/?q=${query}`);
    setQuery("");
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 p-3  shadow-md">
      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="bg-[#3D3D3D] text-white px-4 py-3 rounded-lg hover:bg-[#666666] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Home-3--Streamline-Core"
          height={14}
          width={14}
        >
          <desc>{"Home 3 Streamline Icon: https://streamlinehq.com"}</desc>
          <g id="home-3--home-house-roof-shelter">
            <path
              id="Subtract"
              fill="#ffffff"
              fillRule="evenodd"
              d="M0.318182 6.0449C0.115244 6.23405 0 6.499 0 6.77642V12.5c0 0.8284 0.671573 1.5 1.5 1.5H6v-3c0 -0.5523 0.44772 -1 1 -1s1 0.4477 1 1v3h4.5c0.8284 0 1.5 -0.6716 1.5 -1.5V6.77642c0 -0.27742 -0.1152 -0.54237 -0.3182 -0.73152L7.3254 0.120372c-0.18725 -0.1604958 -0.46355 -0.160496 -0.6508 0L0.318182 6.0449Z"
              clipRule="evenodd"
              strokeWidth={1}
            />
          </g>
        </svg>
      </button>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="min-w-40 border border-gray-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
        placeholder="Search blogs..."
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-[#3D3D3D] text-white px-4 py-3 rounded-lg hover:bg-[#666666] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Magnifying-Glass--Streamline-Core"
          height="14"
          width="14"
        >
          <desc>
            Magnifying Glass Streamline Icon: https://streamlinehq.com
          </desc>
          <g id="magnifying-glass--glass-search-magnifying">
            <path
              id="Union"
              fill="#ffffff"
              fillRule="evenodd"
              d="M2 6a4 4 0 1 1 8 0 4 4 0 0 1 -8 0Zm4 -6a6 6 0 1 0 3.476 10.89l2.817 2.817a1 1 0 0 0 1.414 -1.414l-2.816 -2.816A6 6 0 0 0 6 0Z"
              clipRule="evenodd"
              strokeWidth="1"
            ></path>
          </g>
        </svg>
      </button>

      {/* Create Button */}
      <button
        onClick={() => router.push("/blog/create")}
        className="bg-[#9fb765] text-white px-4 py-3 rounded-lg hover:bg-[#B8D576] transition"
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Add-1--Streamline-Core" height={14} width={14} ><desc>{"Add 1 Streamline Icon: https://streamlinehq.com"}</desc><g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math"><path id="Union" fill="#ffffff" fillRule="evenodd" d="M8 1c0 -0.552285 -0.44772 -1 -1 -1S6 0.447715 6 1v5H1c-0.552285 0 -1 0.44772 -1 1s0.447715 1 1 1h5v5c0 0.5523 0.44772 1 1 1s1 -0.4477 1 -1V8h5c0.5523 0 1 -0.44772 1 -1s-0.4477 -1 -1 -1H8V1Z" clipRule="evenodd" strokeWidth={1}/></g></svg>
      </button>
    </div>
  );
}
