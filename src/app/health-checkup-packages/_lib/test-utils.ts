/**
 * Normalize test name variations to canonical form for comparison.
 */
export function normalizeTestName(testName: string): string {
  let normalized = testName.toLowerCase().trim();
  normalized = normalized.replace(/\.+$/g, "");
  normalized = normalized.replace(/\s*\/\s*/g, "/");
  normalized = normalized.replace(/\s*\(\s*/g, "(");
  normalized = normalized.replace(/\s*\)\s*/g, ")");
  normalized = normalized.replace(/\s+/g, " ");
  normalized = normalized.trim();

  const variations: Record<string, string> = {
    // Folic Acid / Vitamin B9 variants
    "folic acid": "vitamin b9/folic acid",
    "vitamin b9": "vitamin b9/folic acid",
    "vitamin b9/folic acid": "vitamin b9/folic acid",
    "folic acid(vitamin b9)": "vitamin b9/folic acid",
    "vitamin b9(folic acid)": "vitamin b9/folic acid",
    // Iron binding capacity (normalize trailing periods)
    "transferrin saturation": "transferrin saturation",
    "t.i.b.c": "t.i.b.c",
    "t.i.b.c.": "t.i.b.c",
    "u.i.b.c": "u.i.b.c",
    "u.i.b.c.": "u.i.b.c",
    // Spelling
    phosphorous: "phosphorus",
    // Vitamin D
    "vitamin d3": "vitamin d",
    "vitamin d": "vitamin d",
    // HbA1c variants
    "hba1c": "hba1c(glycosylated hemoglobin)",
    "hba1c(glycosylated hemoglobin)": "hba1c(glycosylated hemoglobin)",
    // Liver enzymes
    "s.g.o.t": "sgot",
    "sgot": "sgot",
    "s.g.p.t": "sgpt",
    "sgpt": "sgpt",
    // eGFR
    "egfr": "egfr",
    // HOMA-IR variants
    "homa ir*(insulin resistance index)": "homa-ir*(insulin resistance index)",
    "homa ir(insulin resistance index)*": "homa-ir*(insulin resistance index)",
    "homa-ir*(insulin resistance index)": "homa-ir*(insulin resistance index)",
    // CRP variants
    "c reactive protein": "crp",
    "hs-crp": "crp",
    "hs crp": "crp",
    // STFR
    "stfr(soluble transferrin)": "stfr(soluble transferrin receptor)",
    "stfr(soluble transferrin receptor)": "stfr(soluble transferrin receptor)",
    // A/G ratio variants
    "a/g ratio": "albumin/globulin ratio",
    "albumin/globulin ratio": "albumin/globulin ratio",
    "ag ratio": "albumin/globulin ratio",
    // Calcium variants
    calcium: "total calcium",
  };

  return variations[normalized] || normalized;
}

/**
 * Check if a profile has a specific test, accounting for composite tests
 * (Lipid Profile, CBC, LFT, KFT, Vitamins & Minerals bundle).
 */
export function profileHasTest(
  testsArray: string[],
  testName: string
): boolean {
  if (!testName || testsArray.length === 0) return false;

  const normalizedTestName = normalizeTestName(testName);
  const testNameWithoutAsterisk = normalizedTestName.replace(/\*/g, "").trim();

  const lipidProfileComponents = [
    "cholesterol", "total cholesterol", "hdl cholesterol", "ldl cholesterol",
    "triglycerides", "vldl cholesterol", "cholesterol/hdl ratio",
  ];
  if (lipidProfileComponents.includes(testNameWithoutAsterisk)) {
    if (testsArray.some((t) => t.toLowerCase().includes("lipid profile"))) return true;
  }

  const cbcComponents = [
    "hemoglobin", "haemoglobin", "rbc", "wbc", "platelets", "platelet count",
    "hematocrit", "hct", "mcv", "mch", "mchc", "rdw", "red blood cell",
    "white blood cell", "packed cell volume", "pcv",
  ];
  if (cbcComponents.includes(testNameWithoutAsterisk)) {
    if (testsArray.some((t) => t.toLowerCase().includes("cbc"))) return true;
  }

  const lftComponents = [
    "sgot", "sgpt", "ast", "alt", "bilirubin", "total bilirubin",
    "direct bilirubin", "indirect bilirubin", "alkaline phosphatase", "alp",
    "ggt", "gamma gt", "total protein", "albumin", "globulin",
    "albumin/globulin ratio", "a/g ratio",
  ];
  if (lftComponents.includes(testNameWithoutAsterisk)) {
    if (testsArray.some((t) => t.toLowerCase().includes("liver function test"))) return true;
  }

  const kftComponents = [
    "urea", "bun", "creatinine", "uric acid", "electrolytes", "sodium",
    "potassium", "chloride", "total calcium", "calcium", "phosphorus", "phosphorous",
    "egfr", "electrolytes(na,k,cl)",
  ];
  if (kftComponents.includes(testNameWithoutAsterisk)) {
    if (testsArray.some((t) => t.toLowerCase().includes("kidney function test"))) return true;
  }

  return testsArray.some((test) => {
    if (normalizeTestName(test) === normalizedTestName) return true;
    if (normalizedTestName === "cbc" && normalizeTestName(test) === "cbc with esr") return true;
    if (test.includes("Vitamins & Minerals Profile")) {
      const match = test.match(/\(([^)]+)\)/);
      if (match) {
        const components = match[1].split(",").map((item) => item.trim());
        return components.some((c) => normalizeTestName(c) === normalizedTestName);
      }
    }
    return false;
  });
}

/** Check if a profile has "CBC with ESR" specifically */
export function profileHasCBCWithESR(testsArray: string[]): boolean {
  return testsArray.some((t) => t.toLowerCase().trim() === "cbc with esr");
}

/** Get all unique tests from selected comparison profiles */
export function getAllUniqueTests(
  profiles: { tests_details?: string[] }[],
  ensureTestsArray: (tests: unknown) => string[]
): string[] {
  const testMap = new Map<string, string>();

  profiles.forEach((profile) => {
    if (!profile?.tests_details) return;
    const testsArray = ensureTestsArray(profile.tests_details);
    if (testsArray.length === 0) return;

    testsArray.forEach((test) => {
      if (test.includes("Vitamins & Minerals Profile")) {
        const match = test.match(/\(([^)]+)\)/);
        if (match) {
          const components = match[1].split(",").map((item) => item.trim());
          components.forEach((component) => {
            const normalizedKey = normalizeTestName(component);
            if (!testMap.has(normalizedKey)) {
              testMap.set(normalizedKey, component);
            } else {
              const existing = testMap.get(normalizedKey)!;
              if (normalizedKey === "vitamin d") {
                if (!component.toLowerCase().includes("d3") && existing.toLowerCase().includes("d3")) {
                  testMap.set(normalizedKey, component);
                }
              } else if (component.length > existing.length) {
                testMap.set(normalizedKey, component);
              }
            }
          });
        }
      } else if (test.includes("Kidney Function Test")) {
        const normalizedKey = normalizeTestName(test);
        if (!testMap.has(normalizedKey)) {
          testMap.set(normalizedKey, test);
        }
      } else {
        let normalizedKey = normalizeTestName(test);
        let displayTest = test;
        if (normalizedKey === "cbc with esr") {
          normalizedKey = "cbc";
          displayTest = "CBC";
        }
        if (!testMap.has(normalizedKey)) {
          testMap.set(normalizedKey, displayTest);
        }
      }
    });
  });

  const displayNames = Array.from(testMap.values()).map((name) =>
    name.toLowerCase().trim() === "vitamin d3" ? "Vitamin D" : name
  );

  return displayNames.sort();
}
