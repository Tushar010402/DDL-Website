"use client";

import { useState, useCallback } from "react";
import type { ComparisonProfile, TestProfile, MultiTierPackage, MultiTierEntry } from "../_lib/types";
import { MAX_COMPARISON_COUNT } from "../_lib/constants";
import { ensureTestsArray, validateTierData } from "../_lib/comparison-utils";

export function useComparison(multiTierPackages: Record<number, MultiTierPackage>) {
  const [selectedForComparison, setSelectedForComparison] = useState<ComparisonProfile[]>([]);
  const [pendingTierSelection, setPendingTierSelection] = useState<TestProfile | null>(null);

  const isSelectedForComparison = useCallback(
    (profileId: number) =>
      selectedForComparison.some((p) => p.id === profileId || p.parentId === profileId),
    [selectedForComparison]
  );

  const getSelectedTierNames = useCallback(
    (profileId: number) =>
      selectedForComparison
        .filter((p) => p.parentId === profileId)
        .map((p) => p.tierName)
        .filter(Boolean) as string[],
    [selectedForComparison]
  );

  const handleCompareToggle = useCallback(
    (profile: TestProfile) => {
      const isAlreadySelected = selectedForComparison.some(
        (p) => p.id === profile.id || p.parentId === profile.id
      );

      if (isAlreadySelected) {
        setSelectedForComparison((prev) =>
          prev.filter((p) => p.id !== profile.id && p.parentId !== profile.id)
        );
      } else if (multiTierPackages[profile.id]) {
        setPendingTierSelection(profile);
      } else if (selectedForComparison.length < MAX_COMPARISON_COUNT) {
        setSelectedForComparison((prev) => [...prev, profile as ComparisonProfile]);
      }
    },
    [selectedForComparison, multiTierPackages]
  );

  const handleTierSelection = useCallback(
    (tier: MultiTierEntry) => {
      if (!pendingTierSelection) return;
      if (!validateTierData(tier)) return;

      const testsArray = ensureTestsArray(tier.tests);
      const tierNotes: string[] = [];
      if (testsArray.some((test) => test.includes("*"))) {
        tierNotes.push("Tests marked with * require minimum 10-12 hours fasting.");
      }

      // Generate a unique ID from parent ID + full tier key hash to avoid collisions
      const keyHash = Array.from(tier.key).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
      const tierProfile: ComparisonProfile = {
        ...pendingTierSelection,
        id: Number(`${pendingTierSelection.id}${keyHash}`),
        parentId: pendingTierSelection.id,
        package_name: `${pendingTierSelection.package_name} - ${tier.name}`,
        tierName: tier.name,
        package_rate: tier.price,
        tests_details: testsArray,
        notes_contents: tierNotes,
        isTierProfile: true,
      };

      if (selectedForComparison.length < MAX_COMPARISON_COUNT) {
        setSelectedForComparison((prev) => [...prev, tierProfile]);
      }
      setPendingTierSelection(null);
    },
    [pendingTierSelection, selectedForComparison]
  );

  const cancelTierSelection = useCallback(() => {
    setPendingTierSelection(null);
  }, []);

  const clearComparison = useCallback(() => {
    setSelectedForComparison([]);
  }, []);

  return {
    selectedForComparison,
    pendingTierSelection,
    isSelectedForComparison,
    getSelectedTierNames,
    handleCompareToggle,
    handleTierSelection,
    cancelTierSelection,
    clearComparison,
  };
}
