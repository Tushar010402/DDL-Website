"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

// Data
import { profiles } from "../_data/profiles";
import { multiTierPackages } from "../_data/multi-tier-packages";
import { allerginiusProfiles } from "../_data/allerginius-data";
import {
  vitaminTiers,
  feverTiers,
  cardiacTiers,
  menopauseTiers,
  bloatingTiers,
  fitnessTiers,
  allVitaminTests,
  allFeverTests,
} from "../_data/tier-data";

// Hooks
import { useModalState } from "../_hooks/useModalState";
import { useFilters } from "../_hooks/useFilters";
import { useComparison } from "../_hooks/useComparison";

// Components
import Header from "./Header";
import InfoSection from "./InfoSection";
import FilterPanel from "./FilterPanel";
import ProfileGrid from "./ProfileGrid";
import ComparisonBar from "./ComparisonBar";

// Modals
import TierComparisonModal from "./modals/TierComparisonModal";
import AllerginiusDetailModal from "./modals/AllerginiusDetailModal";
import CardiacDetailModal from "./modals/CardiacDetailModal";
import FitnessDetailModal from "./modals/FitnessDetailModal";
import TierSelectionModal from "./modals/TierSelectionModal";
import ComparisonModal from "./modals/ComparisonModal";

export default function TestProfilesPage() {
  const router = useRouter();
  const modal = useModalState();
  const filters = useFilters(profiles);
  const comparison = useComparison(multiTierPackages);

  const handlePackageSelect = useCallback(
    (packageName: string) => {
      const encoded = encodeURIComponent(packageName);
      router.push(`/HomeCollection?package=${encoded}`);
    },
    [router]
  );

  const handleOpenDetail = useCallback(
    (profileId: number) => {
      const modalMap: Record<number, Parameters<typeof modal.open>[0]> = {
        7: "vitamin",
        12: "fever",
        17: "allerginius",
        19: "cardiac",
        23: "menopause",
        24: "bloating",
        31: "fitness",
      };
      const name = modalMap[profileId];
      if (name) modal.open(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modal.open]
  );

  const handleOpenComparison = useCallback(() => {
    if (comparison.selectedForComparison.length >= 2) {
      modal.open("comparison");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comparison.selectedForComparison.length, modal.open]);

  // All menopause test names (union of all tiers)
  const allMenopauseTests = Object.keys(menopauseTiers[menopauseTiers.length - 1].tests);
  // All bloating test names
  const allBloatingTests = Object.keys(bloatingTiers[bloatingTiers.length - 1].tests);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto px-4 py-12">
        <InfoSection />

        <FilterPanel
          showFilters={filters.showFilters}
          setShowFilters={filters.setShowFilters}
          searchQuery={filters.searchQuery}
          setSearchQuery={filters.setSearchQuery}
          requiresFasting={filters.requiresFasting}
          setRequiresFasting={filters.setRequiresFasting}
          selectedCategories={filters.selectedCategories}
          selectedTests={filters.selectedTests}
          allUniqueTests={filters.allUniqueTests}
          categories={filters.categories}
          clearFilters={filters.clearFilters}
          handleTestSelection={filters.handleTestSelection}
          handleCategorySelection={filters.handleCategorySelection}
          hasActiveFilters={filters.hasActiveFilters}
          filteredCount={filters.filteredProfiles.length}
          totalCount={filters.totalCount}
        />

        {/* Results Summary */}
        {filters.hasActiveFilters && (
          <div className="mb-4 p-4 bg-red-50 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-red-800">
                Found <strong>{filters.filteredProfiles.length}</strong>{" "}
                package(s) matching your criteria
              </p>
              {filters.filteredProfiles.length === 0 && (
                <button
                  onClick={filters.clearFilters}
                  className="text-sm text-red-600 hover:underline"
                >
                  Clear filters to see all packages
                </button>
              )}
            </div>
          </div>
        )}

        <ProfileGrid
          profiles={filters.filteredProfiles}
          multiTierPackages={multiTierPackages}
          isSelectedForComparison={comparison.isSelectedForComparison}
          comparisonCount={comparison.selectedForComparison.length}
          getSelectedTierNames={comparison.getSelectedTierNames}
          onCompareToggle={comparison.handleCompareToggle}
          onPackageSelect={handlePackageSelect}
          onOpenDetail={handleOpenDetail}
          clearFilters={filters.clearFilters}
        />
      </div>

      {/* Floating Comparison Bar */}
      <ComparisonBar
        selected={comparison.selectedForComparison}
        onCompare={handleOpenComparison}
        onClear={comparison.clearComparison}
      />

      {/* Tier Selection Modal (for comparison) */}
      <TierSelectionModal
        isOpen={comparison.pendingTierSelection !== null}
        onClose={comparison.cancelTierSelection}
        packageData={
          comparison.pendingTierSelection
            ? multiTierPackages[comparison.pendingTierSelection.id] || null
            : null
        }
        onSelectTier={comparison.handleTierSelection}
      />

      {/* Vitamin Detail Modal */}
      <TierComparisonModal
        isOpen={modal.openModal === "vitamin"}
        onClose={modal.close}
        config={{
          title: "Vitamins & Mineral Profiles",
          tiers: [vitaminTiers.basic, vitaminTiers.advanced, vitaminTiers.comprehensive],
          allTests: allVitaminTests,
          note: "Tests marked with * require minimum 10\u201312 hours fasting.",
          onBookTier: (tierName) =>
            handlePackageSelect(`Vitamins and Minerals Profile - ${tierName}`),
        }}
      />

      {/* Fever Detail Modal */}
      <TierComparisonModal
        isOpen={modal.openModal === "fever"}
        onClose={modal.close}
        config={{
          title: "Fever Profile Tiers",
          tiers: [feverTiers.monsoon, feverTiers.basic, feverTiers.advanced],
          allTests: allFeverTests,
          note: undefined,
          onBookTier: (tierName) =>
            handlePackageSelect(`Fever Profile - ${tierName}`),
        }}
      />

      {/* Menopause Detail Modal */}
      <TierComparisonModal
        isOpen={modal.openModal === "menopause"}
        onClose={modal.close}
        config={{
          title: "Menopause Profile Tiers",
          tiers: menopauseTiers,
          allTests: allMenopauseTests,
          useBooleanTests: true,
          note: undefined,
          onBookTier: (tierName) =>
            handlePackageSelect(`Menopause Profile - ${tierName}`),
        }}
      />

      {/* Bloating Detail Modal */}
      <TierComparisonModal
        isOpen={modal.openModal === "bloating"}
        onClose={modal.close}
        config={{
          title: "Bloating Profile Tiers",
          tiers: bloatingTiers,
          allTests: allBloatingTests,
          useBooleanTests: true,
          note: "Avoid antibiotics, bismuth-containing medications, and proton pump inhibitors (PPIs) for at least 10-14 days prior to the test. (Always consult your doctor before stopping any medications.)",
          onBookTier: (tierName) =>
            handlePackageSelect(`Bloating Profile - ${tierName}`),
        }}
      />

      {/* Allerginius Detail Modal */}
      <AllerginiusDetailModal
        isOpen={modal.openModal === "allerginius"}
        onClose={modal.close}
        profiles={allerginiusProfiles}
        onBook={handlePackageSelect}
      />

      {/* Cardiac Detail Modal */}
      <CardiacDetailModal
        isOpen={modal.openModal === "cardiac"}
        onClose={modal.close}
        tiers={cardiacTiers}
        onBook={handlePackageSelect}
      />

      {/* Fitness Detail Modal */}
      <FitnessDetailModal
        isOpen={modal.openModal === "fitness"}
        onClose={modal.close}
        tiers={fitnessTiers}
        onBook={handlePackageSelect}
      />

      {/* Comparison Modal */}
      <ComparisonModal
        isOpen={modal.openModal === "comparison"}
        onClose={modal.close}
        selected={comparison.selectedForComparison}
        onBook={handlePackageSelect}
        onClear={() => {
          comparison.clearComparison();
          modal.close();
        }}
      />
    </div>
  );
}
