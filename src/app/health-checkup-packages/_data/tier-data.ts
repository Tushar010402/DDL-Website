import type {
  VitaminTiers,
  FeverTiers,
  TierDefinitionWithBooleans,
  FitnessTiers,
} from "../_lib/types";

// ── Vitamin & Mineral Profile tiers ─────────────────────────────────
export const vitaminTiers: VitaminTiers = {
  basic: {
    name: "Basic",
    price: "6,500",
    tests: [
      "Vitamin D3",
      "Vitamin B12",
      "Total Calcium",
      "Phosphorus",
      "Folic Acid (Vitamin B9)",
      "Iron",
      "Ferritin",
      "T.I.B.C.",
      "U.I.B.C.",
      "Magnesium",
      "Zinc",
      "Transferrin Saturation",
    ],
  },
  advanced: {
    name: "Advanced",
    price: "9,000",
    tests: [
      "Vitamin D3",
      "Vitamin B12",
      "Total Calcium",
      "Phosphorus",
      "Folic Acid (Vitamin B9)",
      "Iron",
      "Ferritin",
      "T.I.B.C.",
      "U.I.B.C.",
      "Magnesium",
      "Zinc",
      "Transferrin Saturation",
      "Vitamin A*",
      "Vitamin E*",
      "Urinary Iodine*",
    ],
  },
  comprehensive: {
    name: "Comprehensive",
    price: "13,000",
    tests: [
      "Vitamin D3",
      "Vitamin B12",
      "Total Calcium",
      "Phosphorus",
      "Folic Acid (Vitamin B9)",
      "Iron",
      "Ferritin",
      "T.I.B.C.",
      "U.I.B.C.",
      "Magnesium",
      "Zinc",
      "Transferrin Saturation",
      "Vitamin A*",
      "Vitamin E*",
      "Urinary Iodine*",
      "STFR (Soluble Transferrin Receptor)",
      "RBC Folate",
      "Ionized Calcium",
      "Vitamin C*",
    ],
  },
};

/** Derived: union of all vitamin tier tests (for the comparison table) */
export const allVitaminTests: string[] = vitaminTiers.comprehensive.tests;

// ── Fever Profile tiers ─────────────────────────────────────────────
export const feverTiers: FeverTiers = {
  monsoon: {
    name: "Monsoon",
    price: "3,600",
    tests: [
      "Malaria Parasite",
      "Malaria Ag",
      "CBC",
      "S.G.O.T",
      "S.G.P.T",
      "Widal",
      "CRP",
      "Dengue NS1",
    ],
  },
  basic: {
    name: "Basic",
    price: "4,900",
    tests: [
      "Malaria Parasite",
      "Malaria Ag",
      "CBC",
      "S.G.O.T",
      "S.G.P.T",
      "Widal",
      "CRP",
      "Dengue NS1",
      "Dengue IgM",
      "Dengue IgG",
      "Comprehensive Urine Examination",
      "Typhidot IgM",
    ],
  },
  advanced: {
    name: "Advanced",
    price: "15,500",
    tests: [
      "Malaria Parasite",
      "Malaria Ag",
      "CBC",
      "S.G.O.T",
      "S.G.P.T",
      "Widal",
      "CRP",
      "Dengue NS1",
      "Dengue IgM",
      "Dengue IgG",
      "Comprehensive Urine Examination",
      "Typhidot IgM",
      "Throat Swab Culture",
      "Blood Culture",
      "Urine Culture",
      "Chikungunya PCR",
      "Scrub Typhus PCR",
      "Leptospira IgM",
      "Lyme's IgM",
      "Mumps IgM",
    ],
  },
};

/** Derived: union of all fever tier tests */
export const allFeverTests: string[] = feverTiers.advanced.tests;

// ── Cardiac Risk Profile tiers ──────────────────────────────────────
export interface CardiacTier {
  name: string;
  tests: string[];
  price: string;
}

export const cardiacTiers: CardiacTier[] = [
  {
    name: "Basic Cardiac Risk Profile",
    tests: [
      "High Sensitivity C-Reactive Protein (hs-CRP)",
      "Homocysteine",
      "High Sensitivity Cardiac Troponin I test (hs Troponin I)",
    ],
    price: "3,500",
  },
  {
    name: "Basic Cardiac Risk Profile with Lipid Profile*",
    tests: [
      "Includes all tests in Basic Cardiac Risk Profile",
      "Lipid Profile*",
    ],
    price: "4,100",
  },
  {
    name: "Advanced Cardiac Risk Profile*",
    tests: [
      "High Sensitivity C-Reactive Protein (hs-CRP)",
      "Homocysteine",
      "High Sensitivity Cardiac Troponin I test (hs Troponin I)",
      "Lp(PLA)2*",
      "Extended Lipid Profile*",
      "(Lipid profile with Lipoprotein (a), Apolipoprotein A & B, Homocysteine)",
    ],
    price: "7,500",
  },
  {
    name: "Comprehensive Cardiac Risk Profile*",
    tests: [
      "High Sensitivity C-Reactive Protein (hs-CRP)",
      "High Sensitivity Cardiac Troponin I test (hs Troponin I)",
      "High Sensitivity Cardiac Troponin T test (hs Troponin T)",
      "Pro-B-type Natriuretic Peptide (Pro BNP)",
      "Leptin",
      "Lp(PLA)2*",
      "Extended Lipid Profile*",
      "(Lipid profile with Lipoprotein (a), Apolipoprotein A & B, Homocysteine)",
    ],
    price: "13,900",
  },
];

// ── Menopause Profile tiers ─────────────────────────────────────────
export const menopauseTiers: TierDefinitionWithBooleans[] = [
  {
    name: "Basic",
    price: "4,500",
    tests: {
      FSH: true,
      LH: true,
      Progesterone: true,
      "Estradiol (E2)": true,
      "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH": true,
      "Cortisol (Morning)": false,
      "DHEAS (Sulphate)": false,
      DHEA: false,
    },
  },
  {
    name: "Advanced",
    price: "9,000",
    tests: {
      FSH: true,
      LH: true,
      Progesterone: true,
      "Estradiol (E2)": true,
      "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH": true,
      "Cortisol (Morning)": true,
      "DHEAS (Sulphate)": true,
      DHEA: true,
    },
  },
];

// ── Bloating Profile tiers ──────────────────────────────────────────
export const bloatingTiers: TierDefinitionWithBooleans[] = [
  {
    name: "Basic",
    price: "8,500",
    tests: {
      "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH": true,
      "Fecal Calprotectin": true,
      "Stool Examination (Routine)": true,
      "Helicobacter pylori Stool Antigen Detection*": true,
      "Anti-tTG (Tissue Transglutaminase with IgA)": true,
      "Fecal Elastase": false,
      "Urea Breath Test For H.Pylori* (Newly Launched & Most Sensitive)": false,
      "Gut Infection Panel (Cryptosporidium, Giardia, Entamoeba)": false,
      "Cortisol (Morning)": false,
      "Imupro 22 (Food Intolerance)": false,
    },
  },
  {
    name: "Advanced",
    price: "17,500",
    tests: {
      "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH": true,
      "Fecal Calprotectin": true,
      "Stool Examination (Routine)": true,
      "Helicobacter pylori Stool Antigen Detection*": true,
      "Anti-tTG (Tissue Transglutaminase with IgA)": true,
      "Fecal Elastase": true,
      "Urea Breath Test For H.Pylori* (Newly Launched & Most Sensitive)": true,
      "Gut Infection Panel (Cryptosporidium, Giardia, Entamoeba)": false,
      "Cortisol (Morning)": false,
      "Imupro 22 (Food Intolerance)": false,
    },
  },
  {
    name: "Comprehensive",
    price: "21,500",
    tests: {
      "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH": true,
      "Fecal Calprotectin": true,
      "Stool Examination (Routine)": true,
      "Helicobacter pylori Stool Antigen Detection*": true,
      "Anti-tTG (Tissue Transglutaminase with IgA)": true,
      "Fecal Elastase": true,
      "Urea Breath Test For H.Pylori* (Newly Launched & Most Sensitive)": true,
      "Gut Infection Panel (Cryptosporidium, Giardia, Entamoeba)": true,
      "Cortisol (Morning)": true,
      "Imupro 22 (Food Intolerance)": false,
    },
  },
  {
    name: "Comprehensive with IMUPRO 22",
    price: "32,500",
    tests: {
      "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH": true,
      "Fecal Calprotectin": true,
      "Stool Examination (Routine)": true,
      "Helicobacter pylori Stool Antigen Detection*": true,
      "Anti-tTG (Tissue Transglutaminase with IgA)": true,
      "Fecal Elastase": true,
      "Urea Breath Test For H.Pylori* (Newly Launched & Most Sensitive)": true,
      "Gut Infection Panel (Cryptosporidium, Giardia, Entamoeba)": true,
      "Cortisol (Morning)": true,
      "Imupro 22 (Food Intolerance)": true,
    },
  },
];

// ── Fitness Profile tiers ───────────────────────────────────────────
export const fitnessTiers: FitnessTiers = {
  female: {
    name: "Females",
    price: "5,800",
    tests: [
      "Hemoglobin",
      "Blood Glucose Fasting*",
      "Cholesterol*",
      "HDL Cholesterol*",
      "LDL Cholesterol*",
      "Total Calcium",
      "Ionized Calcium",
      "Vitamin D3",
      "Phosphorus",
      "Total Protein",
      "eGFR",
      "Creatinine",
      "Sodium",
      "Potassium",
      "CPK",
    ],
  },
  male: {
    name: "Males",
    price: "8,500",
    tests: [
      "Hemoglobin",
      "Blood Glucose Fasting*",
      "Cholesterol*",
      "HDL Cholesterol*",
      "LDL Cholesterol*",
      "Total Calcium",
      "Ionized Calcium",
      "Vitamin D3",
      "Phosphorus",
      "Total Protein",
      "eGFR",
      "Creatinine",
      "Sodium",
      "Potassium",
      "CPK",
      "Testosterone Free",
      "Testosterone Total",
      "SGOT",
      "SGPT",
    ],
  },
};
