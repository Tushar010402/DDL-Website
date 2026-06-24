"use client";

import type { ComparisonProfile } from "../_lib/types";

interface ComparisonBarProps {
  selected: ComparisonProfile[];
  onCompare: () => void;
  onClear: () => void;
}

export default function ComparisonBar({
  selected,
  onCompare,
  onClear,
}: ComparisonBarProps) {
  if (selected.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[99999] animate-slideUp">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-gray-800">
            {selected.length} package(s) selected
          </span>
          <div className="flex gap-2">
            {selected.map((p) => (
              <span
                key={String(p.id)}
                className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full"
              >
                {p.package_name.length > 25
                  ? p.package_name.slice(0, 25) + "..."
                  : p.package_name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClear}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Clear
          </button>
          <button
            onClick={onCompare}
            disabled={selected.length < 2}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Compare ({selected.length})
          </button>
        </div>
      </div>
    </div>
  );
}
