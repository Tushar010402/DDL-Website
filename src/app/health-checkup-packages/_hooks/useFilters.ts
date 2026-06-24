"use client";

import { useState, useMemo, useCallback } from "react";
import type { TestProfile, FilterState } from "../_lib/types";
import { filterProfiles } from "../_lib/filter-utils";

export function useFilters(profiles: TestProfile[]) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [requiresFasting, setRequiresFasting] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filters: FilterState = {
    searchQuery,
    selectedTests,
    requiresFasting,
    selectedCategories,
  };

  const filteredProfiles = useMemo(
    () => filterProfiles(profiles, filters),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- profiles is a static import
    [searchQuery, selectedTests, requiresFasting, selectedCategories]
  );

  // profiles is a static import so [] deps are safe
  const allUniqueTests = useMemo(() => {
    const testMap = new Map<string, string>();
    profiles.forEach((profile) => {
      profile.tests_details.forEach((test) => {
        const normalizedTest = test.trim();
        if (normalizedTest.toLowerCase().startsWith("please refer")) return;
        const key = normalizedTest
          .toLowerCase()
          .replace(/\s+/g, " ")
          .replace(/[()]/g, "")
          .replace(/\*/g, "")
          .replace(/\./g, "")
          .trim();
        if (normalizedTest && !testMap.has(key)) {
          testMap.set(key, normalizedTest);
        }
      });
    });
    return Array.from(testMap.values()).sort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    profiles.forEach((profile) => cats.add(profile.category));
    return Array.from(cats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedTests([]);
    setRequiresFasting("all");
    setSelectedCategories([]);
  }, []);

  const handleTestSelection = useCallback((test: string) => {
    setSelectedTests((prev) =>
      prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]
    );
  }, []);

  const handleCategorySelection = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  }, []);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedTests.length > 0 ||
    selectedCategories.length > 0 ||
    requiresFasting !== "all";

  return {
    showFilters,
    setShowFilters,
    searchQuery,
    setSearchQuery,
    requiresFasting,
    setRequiresFasting,
    selectedCategories,
    selectedTests,
    filteredProfiles,
    allUniqueTests,
    categories,
    clearFilters,
    handleTestSelection,
    handleCategorySelection,
    hasActiveFilters,
    totalCount: profiles.length,
  };
}
