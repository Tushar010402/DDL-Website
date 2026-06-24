"use client";

import {
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Check,
} from "lucide-react";

interface FilterPanelProps {
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  requiresFasting: string;
  setRequiresFasting: (v: string) => void;
  selectedCategories: string[];
  selectedTests: string[];
  allUniqueTests: string[];
  categories: string[];
  clearFilters: () => void;
  handleTestSelection: (test: string) => void;
  handleCategorySelection: (category: string) => void;
  hasActiveFilters: boolean;
  filteredCount: number;
  totalCount: number;
}

export default function FilterPanel({
  showFilters,
  setShowFilters,
  searchQuery,
  setSearchQuery,
  requiresFasting,
  setRequiresFasting,
  selectedCategories,
  selectedTests,
  allUniqueTests,
  categories,
  clearFilters,
  handleTestSelection,
  handleCategorySelection,
  hasActiveFilters,
  filteredCount,
  totalCount,
}: FilterPanelProps) {
  return (
    <div className="mb-8 text-black">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <Filter className="w-5 h-5" />
        <span className="font-semibold">Filter Packages</span>
        {showFilters ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
        {hasActiveFilters && (
          <span className="ml-2 px-2 py-1 bg-red-600 text-white text-xs rounded-full">
            Active
          </span>
        )}
      </button>

      {showFilters && (
        <div className="mt-4 bg-white rounded-lg shadow-lg p-6 animate-slideDown">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Packages or Tests
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by package name or test..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Fasting Requirement — Bug fix: added "no" option */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fasting Required
              </label>
              <select
                value={requiresFasting}
                onChange={(e) => setRequiresFasting(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              >
                <option value="all">All Packages</option>
                <option value="yes">Requires Fasting</option>
                <option value="no">No Fasting Required</option>
              </select>
            </div>

            {/* Categories */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Package Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelection(category)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      selectedCategories.includes(category)
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-red-500"
                    }`}
                  >
                    {category}
                    {selectedCategories.includes(category) && (
                      <Check className="inline-block w-4 h-4 ml-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Specific Tests */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Specific Tests
              </label>
              <div className="max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {allUniqueTests.map((test) => (
                    <label
                      key={test}
                      className="flex items-start text-sm cursor-pointer hover:bg-gray-50 p-1 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTests.includes(test)}
                        onChange={() => handleTestSelection(test)}
                        className="mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="break-words">{test}</span>
                    </label>
                  ))}
                </div>
              </div>
              {selectedTests.length > 0 && (
                <p className="text-sm text-red-600 mt-2">
                  {selectedTests.length} test(s) selected
                </p>
              )}
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex justify-between mt-6 pt-6 border-t">
            <button
              onClick={clearFilters}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Clear All Filters
            </button>
            <div className="text-sm text-gray-600">
              Showing {filteredCount} of {totalCount} packages
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
