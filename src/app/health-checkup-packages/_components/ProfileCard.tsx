"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import type { TestProfile, MultiTierPackage } from "../_lib/types";
import { DETAIL_MODAL_PROFILES, COMPARISON_EXCLUDED_PROFILES, PROFILES_WITHOUT_SINGLE_PRICE } from "../_lib/constants";
import DdlLogo from "./DdlLogo";

interface ProfileCardProps {
  profile: TestProfile;
  isSelected: boolean;
  comparisonCount: number;
  selectedTierNames: string[];
  multiTierPackage?: MultiTierPackage;
  onCompareToggle: (profile: TestProfile) => void;
  onPackageSelect: (name: string) => void;
  onOpenDetail: (profileId: number) => void;
}

export default function ProfileCard({
  profile,
  isSelected,
  comparisonCount,
  selectedTierNames,
  multiTierPackage,
  onCompareToggle,
  onPackageSelect,
  onOpenDetail,
}: ProfileCardProps) {
  const [expanded, setExpanded] = useState(false);
  const showComparisonCheckbox = !COMPARISON_EXCLUDED_PROFILES.has(profile.id);
  const hasDetailModal = DETAIL_MODAL_PROFILES.has(profile.id);
  const hasSinglePrice = !PROFILES_WITHOUT_SINGLE_PRICE.has(profile.id) && profile.package_rate;

  const detailLabels: Record<number, string> = {
    7: "View Vitamins & Minerals Profile In Detail For Price",
    12: "View Fever Profiles In Detail For Price",
    17: "View Allerginius DX In Detail For Price",
    19: "View Cardiac Risk Profiles In Detail For Price",
    23: "View Menopause Profile In Detail For Price",
    24: "View Bloating Profile In Detail For Price",
    31: "View Fitness Profiles In Detail For Price",
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border-2 border-red-500 ${
        isSelected ? "ring-2 ring-red-500" : ""
      }`}
    >
      {/* Comparison Checkbox + Logo */}
      <div className="px-6 pt-4 flex items-start justify-between">
        {showComparisonCheckbox ? (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onCompareToggle(profile)}
                disabled={!isSelected && comparisonCount >= 3}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                title={
                  !isSelected && comparisonCount >= 3
                    ? "Maximum 3 packages can be compared"
                    : isSelected
                    ? "Selected"
                    : "Select to compare"
                }
              />
              <span
                className={`text-xs font-medium ${
                  isSelected ? "text-red-600" : "text-gray-500"
                }`}
              >
                {isSelected ? "Selected" : "Select to compare"}
              </span>
            </div>
            {multiTierPackage && selectedTierNames.length > 0 && (
              <div className="flex flex-wrap gap-1 ml-6">
                {selectedTierNames.map((tierName, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-semibold rounded-full border border-blue-300"
                  >
                    {tierName}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
        <DdlLogo />
      </div>

      {/* Category Badge */}
      <div className="px-6 pt-1">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
          {profile.category}
        </span>
      </div>

      <div className="px-6 pt-4 pb-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {profile.package_name}
        </h3>
        <div className="mb-4">
          <p
            className={`text-gray-600 text-sm ${
              !expanded ? "line-clamp-3" : ""
            }`}
          >
            {profile.package_detail}
          </p>
          {profile.package_detail.length > 200 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-red-600 hover:text-red-700 text-sm font-medium mt-1"
            >
              {expanded ? "View Less" : "View More"}
            </button>
          )}
        </div>

        {/* Tests List */}
        <details className="mb-4">
          <summary className="cursor-pointer text-red-600 hover:text-red-700 font-semibold text-sm">
            View all tests
          </summary>
          <ul className="mt-3 space-y-1 max-h-40 overflow-y-auto">
            {profile.tests_details.map((test, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                {test}
              </li>
            ))}
          </ul>
        </details>

        {/* Notes */}
        {profile.notes_contents && profile.notes_contents.length > 0 && (
          <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
            {profile.notes_contents.map((note, idx) => (
              <p key={idx} className="text-xs text-gray-600">
                {typeof note === "string"
                  ? note
                  : `${note.label}: ${note.note}`}
              </p>
            ))}
          </div>
        )}

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          {hasSinglePrice ? (
            <div className="w-full">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price</p>
                  <p className="text-2xl font-bold text-gray-800">
                    ₹{profile.package_rate}
                  </p>
                </div>
                {profile.male_price && (
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">
                      For Males
                      <svg
                        className="w-3 h-3 text-red-600 inline mx-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z" />
                      </svg>
                      with PSA (Total)
                    </p>
                    <p className="text-lg font-bold text-red-600">
                      ₹{profile.male_price}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : profile.id === 13 ? (
            <div>
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                View Panel Details
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ) : !hasDetailModal && profile.link ? (
            <div>
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                <FileText className="w-5 h-5" />
                Refer to Profile
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ) : null}
        </div>
      </div>

      {/* View Details button for tiered profiles */}
      {hasDetailModal && (
        <div className="px-6 pb-3">
          <button
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
            onClick={() => onOpenDetail(profile.id)}
          >
            {detailLabels[profile.id] || "View Details"}
          </button>
        </div>
      )}

      {/* Book This Package */}
      <div className="px-6 pb-6">
        {profile.male_price ? (
          <div className="flex gap-2">
            <button
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
              onClick={() => onPackageSelect(profile.package_name)}
            >
              Book ₹{profile.package_rate}
            </button>
            <button
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm flex items-center justify-center gap-1"
              onClick={() =>
                onPackageSelect(
                  `${profile.package_name} (Males with PSA (Total))`
                )
              }
            >
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z" />
              </svg>
              Book ₹{profile.male_price}
            </button>
          </div>
        ) : (
          <button
            className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            onClick={() => onPackageSelect(profile.package_name)}
          >
            Book this package
          </button>
        )}
      </div>
    </div>
  );
}
