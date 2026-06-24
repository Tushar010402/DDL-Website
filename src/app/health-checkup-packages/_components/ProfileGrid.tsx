"use client";

import { Package } from "lucide-react";
import type { TestProfile, MultiTierPackage } from "../_lib/types";
import ProfileCard from "./ProfileCard";

interface ProfileGridProps {
  profiles: TestProfile[];
  multiTierPackages: Record<number, MultiTierPackage>;
  isSelectedForComparison: (id: number) => boolean;
  comparisonCount: number;
  getSelectedTierNames: (id: number) => string[];
  onCompareToggle: (profile: TestProfile) => void;
  onPackageSelect: (name: string) => void;
  onOpenDetail: (profileId: number) => void;
  clearFilters: () => void;
}

export default function ProfileGrid({
  profiles,
  multiTierPackages,
  isSelectedForComparison,
  comparisonCount,
  getSelectedTierNames,
  onCompareToggle,
  onPackageSelect,
  onOpenDetail,
  clearFilters,
}: ProfileGridProps) {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No packages found
        </h3>
        <p className="text-gray-500 mb-4">
          Try adjusting your filters to see more results
        </p>
        <button
          onClick={clearFilters}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          isSelected={isSelectedForComparison(profile.id)}
          comparisonCount={comparisonCount}
          selectedTierNames={getSelectedTierNames(profile.id)}
          multiTierPackage={multiTierPackages[profile.id]}
          onCompareToggle={onCompareToggle}
          onPackageSelect={onPackageSelect}
          onOpenDetail={onOpenDetail}
        />
      ))}
    </div>
  );
}
