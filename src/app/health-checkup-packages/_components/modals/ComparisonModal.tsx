"use client";

import { Check, X, Package, AlertCircle } from "lucide-react";
import Modal from "./Modal";
import type { ComparisonProfile } from "../../_lib/types";
import { ensureTestsArray } from "../../_lib/comparison-utils";
import { getAllUniqueTests, profileHasTest, profileHasCBCWithESR } from "../../_lib/test-utils";

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selected: ComparisonProfile[];
  onBook: (name: string) => void;
  onClear: () => void;
}

export default function ComparisonModal({
  isOpen,
  onClose,
  selected,
  onBook,
  onClear,
}: ComparisonModalProps) {
  const uniqueTests = getAllUniqueTests(selected, ensureTestsArray);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Package Comparison"
      hideHeader
      maxWidth="sm:max-w-5xl 2xl:max-w-7xl"
      footer={
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-start gap-1.5">
            <AlertCircle
              className="text-amber-600 flex-shrink-0 mt-0.5"
              size={14}
            />
            <p className="text-[10px] sm:text-xs text-gray-700">
              <strong>Note:</strong> Tests marked with * require fasting.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClear}
              className="flex-1 sm:flex-none px-4 sm:px-3 py-2 sm:py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors font-medium text-xs"
            >
              Clear
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 sm:px-3 py-2 sm:py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-semibold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      }
    >
      {/* Custom header inside content to get gradient */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-red-600 to-red-700 -mt-0">
        <h2 className="text-base sm:text-xl font-bold text-white">
          Package Comparison
        </h2>
        <p className="text-red-100 text-xs mt-0.5">
          Compare {selected.length} health checkup packages
        </p>
      </div>

      <div className="p-3 sm:p-4">
        {/* Package Headers */}
        <div className="mb-3 sm:mb-4 overflow-x-auto">
          <div
            className="grid gap-2 sm:gap-3 min-w-min mx-auto"
            style={{
              gridTemplateColumns: `repeat(${selected.length}, minmax(140px, 280px))`,
            }}
          >
            {selected.map((profile) => (
              <div
                key={String(profile.id)}
                className="bg-gradient-to-br from-red-50 to-red-100 p-2 sm:p-3 rounded-lg border border-red-200"
              >
                <div className="flex items-start justify-between gap-1 mb-1">
                  <h3 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">
                    {profile.package_name}
                  </h3>
                  {profile.isTierProfile && (
                    <span className="flex-shrink-0 px-1.5 py-0.5 bg-blue-500 text-white text-[7px] sm:text-[9px] font-bold rounded uppercase tracking-wide">
                      TIER
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-1.5">
                  <span className="text-base sm:text-lg font-bold text-red-600">
                    ₹{profile.package_rate}
                  </span>
                  {profile.male_price && (
                    <span className="text-[9px] sm:text-xs text-gray-600">
                      / ₹{profile.male_price} (M)
                    </span>
                  )}
                </div>
                <span className="inline-block px-1.5 py-0.5 bg-white text-gray-600 text-[8px] sm:text-xs rounded-full mb-1.5">
                  {profile.category}
                </span>

                <div className="mt-1.5">
                  {profile.male_price ? (
                    <div className="flex gap-1">
                      <button
                        className="flex-1 px-1.5 py-1.5 sm:py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-semibold text-[10px] sm:text-xs"
                        onClick={() => {
                          onBook(profile.package_name);
                          onClose();
                        }}
                      >
                        Book ₹{profile.package_rate}
                      </button>
                      <button
                        className="flex-1 px-1.5 py-1.5 sm:py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-semibold text-[10px] sm:text-xs flex items-center justify-center gap-0.5"
                        onClick={() => {
                          onBook(
                            `${profile.package_name} (Males with PSA (Total))`
                          );
                          onClose();
                        }}
                      >
                        <svg
                          className="w-2.5 h-2.5 sm:w-2 sm:h-2"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z" />
                        </svg>
                        ₹{profile.male_price}
                      </button>
                    </div>
                  ) : (
                    <button
                      className="w-full px-2 py-1.5 sm:py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-semibold text-[10px] sm:text-xs"
                      onClick={() => {
                        onBook(profile.package_name);
                        onClose();
                      }}
                    >
                      Book This Package
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            {/* Header */}
            <div
              className="grid gap-0 border-b-2 border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
              style={{
                gridTemplateColumns: `minmax(100px, 1fr) repeat(${selected.length}, minmax(${
                  selected.length >= 3 ? "80px" : "90px"
                }, 1fr))`,
              }}
            >
              <div className="p-1.5 sm:p-4 font-bold text-gray-800 border-r-2 border-gray-300 sticky left-0 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center text-[9px] sm:text-sm z-10">
                <Package
                  className="mr-1 sm:mr-2 text-red-600 flex-shrink-0"
                  size={10}
                />
                <span className="hidden sm:inline">Tests Included</span>
                <span className="sm:hidden text-[9px]">Tests</span>
              </div>
              {selected.map((profile, index) => (
                <div
                  key={String(profile.id)}
                  className={`p-1.5 sm:p-3 text-center ${
                    index < selected.length - 1
                      ? "border-r-2 border-gray-300"
                      : ""
                  }`}
                >
                  <div className="text-[9px] sm:text-xs font-bold text-red-600 mb-0.5 sm:mb-1 break-words px-1 sm:px-2">
                    {profile.package_name}
                  </div>
                  <div className="text-[8px] sm:text-xs text-gray-500">
                    ₹{profile.package_rate}
                  </div>
                </div>
              ))}
            </div>

            {/* Test Rows */}
            <div className="max-h-[400px] sm:max-h-[500px] overflow-y-auto">
              {uniqueTests.map((testName, idx) => (
                <div
                  key={idx}
                  className={`grid gap-0 border-b border-gray-200 hover:bg-red-50 transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                  style={{
                    gridTemplateColumns: `minmax(100px, 1fr) repeat(${selected.length}, minmax(${
                      selected.length >= 3 ? "80px" : "90px"
                    }, 1fr))`,
                  }}
                >
                  <div className="p-1.5 sm:p-4 text-[9px] sm:text-sm font-medium text-gray-800 border-r-2 border-gray-300 sticky left-0 bg-inherit flex items-start z-10">
                    <span className="text-gray-400 mr-0.5 sm:mr-2 text-[8px] sm:text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}.
                    </span>
                    <span className="break-words leading-tight">{testName}</span>
                  </div>
                  {selected.map((profile, index) => {
                    const testsArray = ensureTestsArray(profile.tests_details);
                    const hasTest = profileHasTest(testsArray, testName);
                    return (
                      <div
                        key={String(profile.id)}
                        className={`p-1 sm:p-4 flex items-center justify-center ${
                          index < selected.length - 1
                            ? "border-r-2 border-gray-300"
                            : ""
                        }`}
                      >
                        {hasTest ? (
                          <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100">
                              <Check
                                className="text-green-600"
                                size={14}
                                strokeWidth={3}
                              />
                            </div>
                            {testName === "CBC" &&
                              profileHasCBCWithESR(testsArray) && (
                                <span className="text-[7px] sm:text-[10px] text-gray-600 whitespace-nowrap leading-none mt-0.5">
                                  (with ESR)
                                </span>
                              )}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100">
                            <X
                              className="text-red-600"
                              size={14}
                              strokeWidth={2.5}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Notes section */}
          {selected.some(
            (p) => p.notes_contents && p.notes_contents.length > 0
          ) && (
            <div
              className="grid gap-0 border-t-2 border-gray-300"
              style={{
                gridTemplateColumns: `minmax(100px, 1fr) repeat(${selected.length}, minmax(${
                  selected.length >= 3 ? "80px" : "90px"
                }, 1fr))`,
              }}
            >
              <div className="bg-gray-50 p-1.5 sm:p-4 font-semibold text-gray-700 flex items-center border-r-2 border-gray-300 text-[9px] sm:text-sm sticky left-0 z-10">
                <span className="hidden sm:inline">Special Notes</span>
                <span className="sm:hidden text-[9px]">Notes</span>
              </div>
              {selected.map((profile, index) => (
                <div
                  key={String(profile.id)}
                  className={`p-1.5 sm:p-4 bg-white ${
                    index < selected.length - 1
                      ? "border-r-2 border-gray-300"
                      : ""
                  }`}
                >
                  {profile.notes_contents &&
                  profile.notes_contents.length > 0 ? (
                    <div className="bg-yellow-50 p-1.5 sm:p-3 rounded-lg">
                      {profile.notes_contents.map((note, idx) => (
                        <p
                          key={idx}
                          className="text-[9px] sm:text-xs text-gray-700"
                        >
                          {typeof note === "string"
                            ? note
                            : `${note.label}: ${note.note}`}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] sm:text-sm text-gray-400">
                      No special notes
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
