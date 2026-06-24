import type { TestProfile, FilterState } from "./types";

/** Pure function to filter profiles based on all filter criteria */
export function filterProfiles(
  profiles: TestProfile[],
  filters: FilterState
): TestProfile[] {
  const {
    searchQuery,
    selectedCategories,
    selectedTests,
    requiresFasting,
  } = filters;

  return profiles.filter((profile) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = profile.package_name.toLowerCase().includes(query);
      const matchesDetail = profile.package_detail.toLowerCase().includes(query);
      const matchesTests = profile.tests_details.some((test) =>
        test.toLowerCase().includes(query)
      );
      if (!matchesName && !matchesDetail && !matchesTests) return false;
    }

    // Category filter
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(profile.category)
    ) {
      return false;
    }

    // Specific tests filter
    if (selectedTests.length > 0) {
      const hasAllSelectedTests = selectedTests.every((test) =>
        profile.tests_details.includes(test)
      );
      if (!hasAllSelectedTests) return false;
    }

    // Fasting requirement filter
    if (requiresFasting !== "all") {
      const hasFastingTests = profile.tests_details.some((test) =>
        test.includes("*")
      );
      if (requiresFasting === "yes" && !hasFastingTests) return false;
      if (requiresFasting === "no" && hasFastingTests) return false;
    }

    return true;
  });
}
