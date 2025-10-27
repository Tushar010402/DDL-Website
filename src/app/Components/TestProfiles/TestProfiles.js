"use client";

import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  X,
  Search,
  Check,
  DollarSign,
  Package,
  AlertCircle,
  Clock,
  FileText,
} from "lucide-react";

// Mock router for demonstration - replace with actual Next.js router
const useRouter = () => ({
  push: (url) => {
    console.log(`Navigating to: ${url}`);
    window.location.href = url;
  },
});

const TestProfiles = () => {
  const router = useRouter();
  const [showVitaminDetail, setShowVitaminDetail] = useState(false);
  const [showFeverDetail, setShowFeverDetail] = useState(false);
  const [showAllerginiusDetail, setShowAllerginiusDetail] = useState(false); // Added state for Allergynius DX
  const [showCardiacDetail, setShowCardiacDetail] = useState(false); // Add this with other states
  const [showMenopauseDetail, setShowMenopauseDetail] = useState(false);
  const [showBloatingDetail, setShowBloatingDetail] = useState(false);
  const [showFitnessDetail, setShowFitnessDetail] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 30000 }); // Updated max to accommodate Allergynius prices
  const [selectedTests, setSelectedTests] = useState([]);
  const [testCountRange, setTestCountRange] = useState({ min: 0, max: 50 });
  const [requiresFasting, setRequiresFasting] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Allergynius DX profiles data
  const allerginiusProfiles = [
    {
      name: "Comprehensive Allergy Profile",
      allergens: 163,
      components: 294,
      price: "28,800",
    },
    {
      name: "Food Profile",
      allergens: 93,
      components: 154,
      price: "25,500",
    },
    {
      name: "Respiratory Profile",
      allergens: 62,
      components: 122,
      price: "25,500",
    },
    {
      name: "Skin Allergy (Rashes/Hives/Urticaria) Profile",
      allergens: 99,
      components: 179,
      price: "26,800",
    },
    {
      name: "Vegetarian - Food Allergy Profile",
      allergens: 64,
      components: 111,
      price: "23,500",
    },
  ];

  // Vitamin and Mineral Profile tiers data
  const vitaminTiers = {
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
        "T.I.B.C",
        "U.I.B.C",
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
        "T.I.B.C",
        "U.I.B.C",
        "Magnesium",
        "Zinc",
        "Transferrin Saturation",
        "Vitamin A*",
        "Vitamin E*",
        "Urinary Iodine",
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
        "T.I.B.C",
        "U.I.B.C",
        "Magnesium",
        "Zinc",
        "Transferrin Saturation",
        "Vitamin A*",
        "Vitamin E*",
        "Urinary Iodine",
        "STFR (Soluble transferrin)",
        "RBC Folate",
        "Ionized Calcium",
        "Vitamin C*",
      ],
    },
  };

  const allVitaminTests = [
    "Vitamin D3",
    "Vitamin B12",
    "Total Calcium",
    "Phosphorus",
    "Folic Acid (Vitamin B9)",
    "Iron",
    "Ferritin",
    "T.I.B.C",
    "U.I.B.C",
    "Magnesium",
    "Zinc",
    "Transferrin Saturation",
    "Vitamin A*",
    "Vitamin E*",
    "Urinary Iodine",
    "STFR (Soluble transferrin)",
    "RBC Folate",
    "Ionized Calcium",
    "Vitamin C*",
  ];

  const feverTiers = {
    monsoon: {
      name: "Monsoon",
      price: "3,600",
      tests: [
        "Malaria Parasite",
        "Malaria Ag",
        "CBC (with ESR)",
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
        "CBC (with ESR)",
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
        "CBC (with ESR)",
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

  const allFeverTests = [
    "Malaria Parasite",
    "Malaria Ag",
    "CBC (with ESR)",
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
  ];

  // Cardiac Risk Profile tiers data
  const cardiacTiers = [
    {
      name: "Basic Cardiac Risk Profile",
      tests: [
        "High Sensitivity C-Reactive Protein (hs CRP)",
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
        "High Sensitivity C-Reactive Protein (hs CRP)",
        "Homocysteine",
        "High Sensitivity Cardiac Troponin I test (hs Troponin I)",
        "Lp(PLA)2*",
        "Extended Lipid Profile* (Lipid profile with Lipoprotein (a), Apolipoprotein A & B, Homocysteine)",
        
      ],
      price: "7,500",
    },
    {
      name: "Comprehensive Cardiac Risk Profile*",
      tests: [
        "High Sensitivity C-Reactive Protein (hs CRP)",
        "High Sensitivity Cardiac Troponin I test (hs Troponin I)",
        "High Sensitivity Cardiac Troponin T test (hs Troponin T)",
        "Pro-B-type Natriuretic Peptide (Pro BNP)",
        "Leptin",
        "Lp(PLA)2*",
        "Extended Lipid Profile* (Lipid profile with Lipoprotein (a), Apolipoprotein A & B, Homocysteine)",
        
      ],
      price: "13,900",
    },
  ];

  // Menopause Profile tiers data
  const menopauseTiers = [
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

  // Bloating Profile tiers data
  const bloatingTiers = [
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

  // Fitness Profile tiers data
  const fitnessTiers = {
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
        "Testosterone Free & Total",
        "SGOT",
        "SGPT",
      ],
    },
  };

  const toggleDescription = (profileId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [profileId]: !prev[profileId],
    }));
  };

  // Static data with categories added
  const profiles = [
    {
      id: 1,
      package_name: "Smart Check Profile",
      category: "Basic Health",
      package_detail:
        "This is a basic yet powerful package which gives a bird's eye view of your inner metabolism. It has Complete Blood Count which in itself provides a wealth of information regarding anemia (Hemoglobin), infections (TLC, DLC), blood cancers, lipids, blood sugar evaluation, kidney and liver evaluation, Magnesium - a key mineral, deficiency of which causes fatigue and a muscle marker CPK.",
      package_rate: "3,500",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
      ],
    },
    {
      id: 2,
      package_name: "Advanced Smart Check Profile",
      category: "Advanced Health",
      package_detail:
        "This package couples the advantage of Glycosylated Hemoglobin (HbA1C) which gives you an average estimation of your sugar levels over the past 3 months, as well as the well-established Thyroid Profile with Free T3, Free T4 and Ultra-sensitive TSH while continuing to give you all the benefits of a Smart Check Profile.",
      package_rate: "4,750",
      male_price: "5,150",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
      ],
    },
    {
      id: 3,
      package_name: "Superior Smart Check Profile",
      category: "Advanced Health",
      package_detail:
        "The superior smart check profile adds an assessment of key vitamins such as vitamin D3 and vitamin B12 along with IgE (which gives you an indication of your body's response to allergy), beyond all the value of an Advanced Smart Check. This package encourages you to consider a superior choice in a health check & this package is highly recommended for persons of any age group who are looking for a simplified yet effective evaluation by blood tests.",
      package_rate: "8,600",
      male_price: "9,000",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "IgE",
        "Vitamin D3",
        "Vitamin B12",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
      ],
    },
    {
      id: 4,
      package_name: "Premium Smart Check Profile",
      category: "Premium Health",
      package_detail:
        "Premium smart check profile amplifies the advantages of the superior smart check by including additional tests that provide a greater in-depth analysis of your health. The additional tests include Vitamin B9/ folic acid, a detailed urine analysis, complete iron studies including ferritin, iron binding capacity, and transferrin saturation. The inclusion of High Sensitive CRP is a huge plus with the test being a sensitive marker for evidence of inflammation as well as cardiac risk assessment. This package is highly recommended to persons of any age group who are looking for an extensive and effective evaluation by blood tests.",
      package_rate: "11,500",
      male_price: "11,900",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "IgE",
        "Vitamin D3",
        "Vitamin B12",
        "Vitamin B9/ Folic acid",
        "hs-CRP",
        "Iron",
        "Ferritin",
        "U.I.B.C.",
        "T.I.B.C.",
        "Transferrin Saturation",
        "Comprehensive Urine Examination",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
      ],
    },
    {
      id: 5,
      package_name: "Comprehensive Health Profile (CHP)",
      category: "Comprehensive",
      package_detail:
        "An all inclusive package covering various tests scientifically proven to have a role in preventive health testing. This package is also extremely useful for the monitoring of patients with Hypertension, Diabetes, Cardiac, Kidney, Thyroid, Pancreas and Liver conditions, Vitamin deficiencies and Inflammation. CHP also has Cystatin C & Microalbuminuria, an early indicator of kidney disease, High Sensitivity CRP, a very sensitive marker of Inflammation/cardiac risk, total serum IgE as well as a detailed urine examination. This package is highly recommended to persons of any age group who are looking for comprehensive insights into their health via urine and blood tests.",
      package_rate: "15,000",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Blood Glucose PP**",
        "Lipid Profile*",
        "Kidney Function Test",
        "Cystatin C",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Lipoprotein [a]",
        "Homocysteine",
        "Apolipoprotein A",
        "Apolipoprotein B",
        "Vitamins & Minerals Profile (Vitamin D3, Vitamin B12, Vitamin B9/Folic acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin Saturation, Zinc)",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "IgE",
        "hs-CRP",
        "Microalbuminuria",
        "Amylase",
        "Lipase",
        "Comprehensive Urine Examination",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal).",
      ],
    },
    {
      id: 6,
      package_name: "Comprehensive Health Profile with PSA",
      category: "Comprehensive",
      package_detail:
        "An all inclusive package covering various tests scientifically proven to have a role in preventive health testing. This package is also extremely useful for the monitoring of patients with Hypertension, Diabetes, Cardiac, Kidney, Thyroid, Pancreas and Liver conditions; Vitamin deficiencies and Inflammation. CHP also has Cystatin C & Microalbuminuria, an early indicator of kidney disease, High Sensitivity CRP, a very sensitive marker of Inflammation/cardiac risk; total serum IgE as well as a detailed urine examination. Prostate Specific Antigen (Total PSA, Free PSA along with the ratio), an established marker to screen for prostate cancers also forms a part of this package.",
      package_rate: "16,500",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Blood Glucose PP**",
        "Lipid Profile*",
        "Kidney Function Test",
        "Cystatin C",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Lipoprotein [a]",
        "Homocysteine",
        "Apolipoprotein A",
        "Apolipoprotein B",
        "Vitamins & Minerals Profile (Vitamin D3, Vitamin B12, Vitamin B9/Folic acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin Saturation, Zinc)",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "Comprehensive Urine Examination",
        "IgE",
        "hs-CRP",
        "Microalbuminuria",
        "Amylase",
        "Lipase",
        "PSA-Total & Free",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal).",
      ],
    },
    {
      id: 7,
      package_name: "Vitamins and Minerals Profile",
      category: "Specialized",
      package_detail:
        "Deficiency of vitamins and minerals is a common cause of anemia, fatigue, muscle cramps, joint pains, tingling sensations, frequent infections, and other vague health complaints. These micronutrients are vital for immunity and overall well-being. Adequate Vitamin D protects against infections and reduces the risk of several non-communicable diseases. This comprehensive profile is an excellent add-on to Smart Check, Advanced Smart Check, or any monitoring panel. Beyond the basics, it includes Vitamin A for vision, Vitamin E for skin and immune health, Vitamin C for healing and antioxidant defense, RBC folate (a more accurate estimate of vitamin B9), and STFR—an advanced marker to detect iron deficiency and guide iron therapy. Also included is a urine test to check whether your body has the iodine it needs for peak energy and metabolism.\n\nAdditionally, it is advisable to monitor these values if you have been taking vitamins for a prolonged period without any doctor's advice or prescription.",
      package_rate: "6,500",
      tests_details: [
        "Vitamin D3",
        "Vitamin B12",
        "Total Calcium",
        "Phosphorus",
        "Folic Acid (Vitamin B9)",
        "Iron",
        "Ferritin",
        "T.I.B.C",
        "U.I.B.C",
        "Magnesium",
        "Zinc",
        "Transferrin Saturation",
        "Vitamin A*",
        "Vitamin E*",
        "Urinary Iodine",
        "STFR (Soluble transferrin)",
        "RBC Folate",
        "Ionized Calcium",
        "Vitamin C*",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
      ],
    },
    {
      id: 8,
      package_name: "Female Hormone Profile",
      category: "Hormonal",
      package_detail:
        "An imbalance in female hormones can lead to irregular periods, bloating, fatigue, irritability, hair loss, palpitations, mood swings, diabetes, lack of ability to concentrate, issues with fertility, hirsutism(excessive hair), premature menarche, etc. This Profile can also be used in various conditions such as amenorrhea, dysfunctional uterine bleeding & to assess ovarian function. Physicians often ask for a Female Hormonal Profile to be performed on Day 2/3 of the menstrual cycle with a pooled and mid morning sample for prolactin.",
      package_rate: "7,500",
      tests_details: [
        "FSH",
        "LH",
        "Prolactin (Pooled)",
        "Estrogen",
        "Progesterone",
        "AMH",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "DHEAS",
      ],
      notes_contents: [],
    },
    {
      id: 9,
      package_name: "PCOD Profile",
      category: "Specialized",
      package_detail:
        "Polycystic Ovary Disease (PCOD) is a commonly encountered condition associated with hormonal imbalance, ovarian cysts &/or irregular periods. The PCOD profile gives you an option of testing hormone levels along with conditions like diabetes and thyroid dysfunction that may be commonly associated with PCOD. These test results along with imaging techniques & a physician's guidance are required to reach a conclusive diagnosis.",
      package_rate: "9,000",
      tests_details: [
        "FSH",
        "LH",
        "Progesterone",
        "Insulin (Fasting)*",
        "Blood Glucose Fasting*",
        "HOMA IR* (Insulin Resistance Index)",
        "Estradiol [E2]",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "Testosterone Total",
        "Testosterone Free",
        "Prolactin (Pooled)",
        "DHEAS",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
      ],
    },
    {
      id: 10,
      package_name: "Comprehensive Thyroid Profile",
      category: "Specialized",
      package_detail:
        "Dr. Dangs Lab offers a state-of-the-art Comprehensive Thyroid Profile, a vital tool in assessing thyroid health. This comprehensive panel includes key markers such as Thyroid profile with FT3, FT4, ultra-sensitive TSH, anti-thyroglobulin antibodies, anti-thyroid peroxidase (Anti-TPO), reverse T3 (RT3), as well as Total T3 and Total T4 levels. These precise measurements provide a thorough evaluation of thyroid function, aiding in the diagnosis and management of thyroid disorders, ensuring comprehensive and accurate insights into the individual's health.",
      package_rate: "9,800",
      tests_details: [
        "Thyroid profile with FT3, FT4, Ultra-sensitive TSH",
        "T3, Total",
        "T4, Total",
        "Anti-TG (Anti-thyroglobulin antibodies)",
        "Anti-TPO (Anti-thyroid peroxidase antibodies)",
        "Reverse T3 (RT3)",
      ],
      notes_contents: [],
    },

    {
      id: 11,
      package_name: "Arthritis Profile",
      category: "Specialized",
      package_detail:
        "The Arthritis Profile assesses the several reasons due to which an individual could be having pain in the bones or joints. This profile confirms the Rheumatoid Arthritis factor (RA), and also has a vitamin check, markers for inflammation and autoimmune screening (ANA). These assist the clinician in making a definite diagnosis. The detection of anti-CCP antibodies confirms the presence of rheumatoid arthritis, establishes a prognosis for the progression of the disease and helps determine the best possible treatment.",
      package_rate: "7,500",
      tests_details: [
        "CBC with ESR",
        "CRP",
        "RA Factor",
        "ANA",
        "Uric Acid",
        "ASO (Antistreptolysin O)",
        "Anti-CCP",
        "Total Calcium",
        "Ionized Calcium",
        "Phosphorus",
        "Vitamin D3",
      ],
      notes_contents: [],
    },
    {
      id: 12,
      package_name: "Fever Profiles",
      category: "Specialized",
      package_detail:
        "Fever Profile Basic screens for common causes of fever such as Malaria, Typhoid, Dengue, and Urinary infections. It also includes CBC with ESR, the most frequently prescribed test, providing valuable information on blood counts including platelets to help define the nature of fever and its treatment. Fever Profile Advanced offers all these benefits, along with extended investigations for Typhoid, Chikungunya, Scrub Typhus, Mumps, Leptospira, and Lyme's disease. It also includes culture/sensitivity of urine, throat, and blood samples, CRP to assess inflammation and recovery, and liver enzymes as markers of liver infection. For seasonal needs, our Monsoon Fever Panel provides a focused approach to quickly identify the most common infections prevalent during the rainy season.",
      package_rate: "4,900",
      tests_details: [
        "Malaria Parasite",
        "Malaria Ag",
        "CBC (with ESR)",
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
      notes_contents: [],
    },
    {
      id: 13,
      package_name: "Flu Panels",
      category: "Specialized",
      package_detail:
        "Respiratory infections can be caused not only by influenza viruses but also by a host of other pathogens. These commonly spread through respiratory droplets, and symptoms may include fever, congestion, cough, sore throat, fatigue, and body aches, etc. Diagnosing accurately is essential to manage symptoms early, reduce complications, and prevent unnecessary use of antibiotics. Dr. Dangs Lab offers advanced diagnostic options for upper respiratory infections through our Influenza Panel, Comprehensive Flu Panel, and Respiratory BioFire. These tests vary in coverage, identifying a wide range of pathogens, including influenza viruses and other respiratory agents. Using oropharyngeal and nasopharyngeal swabs, these tests provide precise results, helping physicians tailor treatment accordingly. Accurate testing ensures better patient care and supports public health by managing seasonal outbreaks effectively.",

      tests_details: ["Please refer to the detailed panel."],
      link: "https://testprofiles.drdangslab.com/static/files/Updated-Flu-Panels-1.4.23.pdf",

      notes_contents: [],
    },
    {
      id: 14,
      package_name: "Basic Male Hormonal Profile",
      category: "Hormonal",
      package_detail:
        "Basic male hormonal profile measures the levels of hormones that play an active role in men's health and may be an important part of sexual health as well as general wellbeing in men. Cortisol, also known as the stress hormone, and a Thyroid profile with FT3, FT4 & Ultra-sensitive TSH are included along with all other essential male hormones. This profile gives a broader picture of your health and is useful in determining the reasons behind general weakness, inability to lose weight, sexual dysfunctions, and various lifestyle-related issues among males.",
      package_rate: "10,000",
      tests_details: [
        "FSH",
        "LH",
        "Cortisol",
        "DHEAS",
        "Estrogen (E2)",
        "Free Androgen Index",
        "SHBG",
        "Thyroid Profile with FT3, FT4, Ultra-Sensitive TSH",
        "Testosterone (Total)",
        "Testosterone (Free)",
        "Prolactin (Pooled)",
      ],
      notes_contents: [],
    },
    {
      id: 15,
      package_name: "Basic STD Profile",
      category: "Specialized",
      package_detail:
        "The basic sexually transmitted disease profile is a combination of the most frequently contracted and screened for infections linked to unprotected sex. The reason to get an STD panel done is to identify and treat early any infection and also prevent passing on the infection to partner. HIV Combo comprising of the HIV P24 Antigen & the HIV Antibody, Hepatitis B, C, Syphilis & genital Herpes diagnosis can be made by the tests included in the panel.",
      package_rate: "4,000",
      tests_details: [
        "HIV Combo",
        "HBsAg for Hepatitis B",
        "HCV Antibodies for Hepatitis C",
        "Syphilis by CLIA",
        "Herpes Simplex 2 IgM",
      ],
      notes_contents: [],
    },
    {
      id: 16,
      package_name: "Comprehensive STD Profile",
      category: "Specialized",
      package_detail:
        "Comprehensive STD profile additionally tests for the molecular STD panel (Chlamydia trachomatis, Neisseria gonorrhoeae, Trichomonas vaginalis, Gardnerella vaginalis, Mycoplasma genitalium, Mycoplasma hominis, Herpes simplex virus 1/2, Ureaplasma species, Candida albicans, Cytomegalovirus, Human papillomavirus types 16 & 18) beyond testing for HIV, Hepatitis B, Hepatitis C and Syphilis which forms part of the basic STD profile. Organisms included in the comprehensive STD panel include common sexually transmitted infections often presenting as unusual discharge, genital sores, itching, pain during urination or sex. The molecular STD panel tests are tested using a molecular method, i.e., nucleic acid amplification technique (NAAT), which provides the very best of results. Many STDs can also be asymptomatic, so regular screening is important, especially if you have new or multiple partners. Always keep in mind that the period of time when while testing for STDs.",
      package_rate: "13,800",
      tests_details: [
        "HIV Combo",
        "HBsAg (Hepatitis B)",
        "HCV Antibodies (Hepatitis C)",
        "HSV2 IgM",
        "Syphilis",
        "TPHA (Treponema Pallidum Hemagglutination Assay)",
        "RPR (Rapid Plasma Reagin)",
        "Chlamydia Trachomatis",
        "Neisseria Gonorrhoeae",
        "Trichomonas Vaginalis",
        "Gardnerella vaginalis",
        "Mycoplasma genitalium",
        "Mycoplasma hominis",
        "Herpes simplex virus 1/2",
        "Ureaplasma species",
        "Candida albicans",
        "Cytomegalovirus",
        "Human Papillomavirus types 16",
        "Human Papillomavirus types 18",
      ],
      notes_contents: [],
    },
    {
      id: 17,
      package_name: "Allergynius Dx Test",
      category: "Specialized",
      package_detail:
        "The Allergynius Dx Test is a comprehensive diagnostic panel designed to identify specific allergens causing allergic reactions. It helps in detecting sensitivities to common environmental allergens such as pollen, dust mites, mold, pet dander, and certain food items. This test aids physicians in determining the root cause of allergic symptoms like sneezing, runny nose, skin rashes, itching, and respiratory difficulties, allowing for personalized treatment and preventive strategies.",
      tests_details: ["Please refer to details Allergynius Dx panel."],
      notes_contents: [],
      link: "https://testprofiles.drdangslab.com/static/files/ALLERGYNIUS%20DX%20-%20ALLERGY%20(%20IGE%20BASED%20).pdf",
    },
    {
      id: 18,
      package_name: "Food Intolerance Profiles (IgG Based)",
      category: "Specialized",
      package_detail:
        "IgG-based food intolerance (IMUPRO) is exclusively due to your diet and most commonly presents with gut-related symptoms such as bloating, gastritis, constipation, diarrhoea, irritable bowel syndrome (IBS), inflammatory bowel disease (IBD), nausea, and also other symptoms like chronic pain, chronic weight problems, skin problems (atopic dermatitis, eczema, psoriasis), and nervous system disorders. There are various food panels available for testing: 22/44/90 vegetarian, 90 non-vegetarian, 180, and 270 foods are available, and the one most appropriate for you needs to be selected as per your daily diet.",
      tests_details: ["Please refer to the detailed panel."],
      notes_contents: [],
      link: "https://testprofiles.drdangslab.com/static/files/Imupro%20brochure%20(April%202025).pdf",
    },
    {
      id: 19,
      package_name: "Cardiac Risk Profiles",
      category: "Specialized",
      package_detail:
        "Dr. Dangs Lab's cardiac risk profiles consist of a group of advanced tests that provide immediate, actionable clinical information for the risk stratification and aid in predicting future cardiac events. These comprehensive panels include high-sensitivity markers like hs-CRP, homocysteine, cardiac troponins, and advanced lipid testing to assess cardiovascular risk factors. Early detection through these profiles enables timely intervention and better management of heart health.",
      tests_details: [
        "Please refer to the detailed cardiac risk profile options.",
      ],
      notes_contents: [
        {
          label: "Note",
          note: "Tests marked with * require minimum 10-12 hours fasting.",
        },
      ],
      link: "https://testprofiles.drdangslab.com/static/files/Comprehensive%20Cardiac%20Risk%20Profile%20with%20Lp-PLA.pdf",
    },
    {
      id: 20,
      package_name: "Basic Obesity Profile",
      category: "Specialized",
      package_detail:
        "This profile is helpful for individuals who are planning weight reduction for themselves and need to assess metabolic functions at functional levels that might contribute to obesity. This profile assesses the common causes of obesity, including derangements in lipid levels, insulin resistance, thyroid, and a liver function test, along with the stress hormone, i.e., cortisol. Leptin, a hormone that plays an integral role in regulating hunger, appetite, and body weight, is also included in this basic obesity profile.",
      package_rate: "11,500",
      tests_details: [
        "CBC",
        "Blood Glucose Fasting*",
        "Insulin Fasting*",
        "Liver Function Test",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "Lipid Profile*",
        "Cortisol (Morning)",
        "Testosterone Total",
        "Blood Glucose PP**",
        "Insulin PP**",
        "HOMA IR (Insulin Resistance Index)*",
        "HbA1c (Glycosylated Hemoglobin)",
        "C Reactive Protein",
        "Leptin",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal).",
        "For details of Advanced Obesity Profile & METACHECK [Metacheck analyses 86/7 food items to provide personalised diet recommendations as per the individual's genetic makeup to help you lose weight & reach your fitness goals] kindly contact 999-999-2020 or our frontdesk.",
      ],
    },
    {
      id: 21,
      package_name: "Diabetes/Hypertension Profile",
      category: "Specialized",
      package_detail:
        "Diabetes is understood as a disease where there is excess glucose in the blood, and it is hence often assumed that having fewer sweets can help overcome the illness. However, it is critical to keep a lookout for the complications of diabetes, which cause permanent damage. A fair number of patients have both hypertension as well as diabetes, which doubles the risk of organ damage. This profile puts together tests to monitor diabetes and hypertension and their commonly associated complications.",
      package_rate: "4,500",
      tests_details: [
        "Blood Glucose Fasting*",
        "Blood Glucose PP**",
        "HBA1C (Glycosylated Hemoglobin)",
        "Urea",
        "BUN",
        "Lipid Profile*",
        "Fructosamine",
        "Urine for Ketones",
        "Comprehensive Urine Examination",
        "Microalbuminuria",
        "Creatinine",
        "Cystatin C",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal).",
        "For tests related to diagnosing Type 1 Diabetes Mellitus, please ask our front office about the Type 1 Diabetes Autoimmune Antibody Panel.",
        "For tests related to resistant hypertension, such as Renin & Aldosterone, please ask our front office for further details.",
      ],
    },
    {
      id: 22,
      package_name: "Comprehensive Diabetes Profile",
      category: "Specialized",
      package_detail:
        "Comprehensive diabetes profile provides an edge over the tests in the diabetes and hypertension profile by giving an in-depth view of the function of kidneys and pancreas in relation to blood glucose levels. This profile is ideally suited for those who need to track diabetic markers holistically and require more detailed analysis. The additional tests in this profile include complete kidney function tests, fasting insulin, eGFR, HOMA-IR, and C-peptide.",
      package_rate: "7,500",
      tests_details: [
        "Blood Glucose Fasting*",
        "Blood Glucose PP**",
        "Fructosamine",
        "Urea",
        "Creatinine",
        "BUN",
        "Uric Acid",
        "Phosphorus",
        "Calcium",
        "Electrolytes (Na,K,Cl)",
        "Total Protein",
        "Albumin",
        "Albumin/Globulin ratio",
        "Urine for Ketones",
        "HBA1C",
        "Comprehensive Urine Examination",
        "Microalbuminuria",
        "Lipid Profile*",
        "Insulin Fasting*",
        "Insulin PP**",
        "EGFR",
        "HOMA IR* (Insulin Resistance Index)",
        "Cystatin C",
        "C-Peptide*",
      ],
      notes_contents: [
        "Tests marked with * require a minimum of 10-12 hours of fasting.",
        "Tests marked with ** are to be performed as PP (postprandial, i.e., 2 hours after finishing your meal).",
        "For tests related to diagnosing Type 1 Diabetes Mellitus, please ask our front office about the Diabetes Type 1 Autoimmune Antibody Panel.",
        "For tests related to resistant hypertension, such as Renin & Aldosterone, please ask our front office for further details.",
      ],
    },
    {
      id: 23,
      package_name: "Menopause Profiles",
      category: "Specialized",
      package_detail:
        "At Dr. Dangs Lab, we recognise that menopause is a profound biological transition, influencing hormonal balance, metabolic health, and overall well-being. Our Menopause Profiles are meticulously curated to provide clinicians and patients with a comprehensive, evidence-based assessment of this life stage. These profiles serve as powerful tools for early intervention, personalised treatment planning, and optimising quality of life during midlife and beyond.",
      tests_details: [
        "Please refer to the detailed menopause profile options.",
      ],
      notes_contents: [],
    },
    {
      id: 24,
      package_name: "Bloating Profiles",
      category: "Specialized",
      package_detail:
        "At Dr. Dangs Lab, we understand that bloating is more than just an inconvenience—it can be a sign of underlying gastrointestinal, hormonal, or immune imbalances. Our Bloating Profiles are designed to pinpoint the cause through targeted, evidence-based testing, enabling precise diagnosis and personalised treatment strategies.",
      tests_details: ["Please refer to the detailed bloating profile options."],
      notes_contents: [
        {
          label: "Note",
          note: "Avoid antibiotics, bismuth-containing medications, and proton pump inhibitors (PPIs) for at least 10-14 days prior to the test. (Always consult your doctor before stopping any medications.)",
        },
      ],
    },
    {
      id: 25,
      package_name: "Longevity Panel",
      category: "Specialized",
      package_detail:
        "Dr. Dangs Lab presents the Longevity Profile - a sophisticated lens into biological aging and inflammation in the human body. By weaving together markers of inflammation, coagulation, cardiometabolic balance, immune vigilance, hormonal tone, vascular risk, and micronutrient sufficiency, this profile delivers a panoramic view of resilience, vitality, and long-term health potential. Establishing a baseline for these markers and monitoring them over time can be a valuable tool to track changes, guide interventions, and optimise long-term health outcomes.",
      package_rate: "35,000",
      tests_details: [
        "HS CRP",
        "D DIMER",
        "Fibrinogen",
        "Interleukin-6 (IL6)",
        "Extended lipid profile* (with Lipoprotein (a), Apolipoprotein A & B, Homocysteine)",
        "Anti TPO",
        "ANA (ELISA)",
        "Cortisol (AM)",
        "LP PLA2*",
        "MTHFR",
        "VITAMIN C*",
        "Vitamin D",
        "HOMA-IR* (Insulin Resistance)",
        "Zinc",
        "Copper",
        "Zn/Cu ratio",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "For details of TruAge Biological Age Test (TruAge measures key epigenetic and molecular markers to estimate your biological age, helping you understand how your body is aging compared to your chronological age and guiding personalised health and wellness strategies), kindly contact 999-999-2020 or our front desk. Or scan QR code to learn more about TruAge Biological Age Test.",
      ],
    },
    {
      id: 26,
      package_name: "Fatigue Profile",
      category: "Specialized",
      package_detail:
        "This profile helps in determining the causative factors of long-term fatigue and weakness. The profile includes an assessment of key vitamins, minerals and essential parameters, deficiency of which may cause fatigue. Additionally, it also includes an inflammatory marker, liver enzymes, electrolytes, blood counts along with a complete kidney function test, tests for diabetes, cortisol-the bodies stress hormone as well as urine analysis to ascertain the cause of fatigue. ANA (antinuclear antibody) screening for autoimmune disorders is also included in the fatigue profile.",
      package_rate: "12,700",
      tests_details: [
        "CBC",
        "Blood Glucose Random",
        "Kidney Function Test",
        "S.G.O.T",
        "S.G.P.T",
        "Sodium",
        "Potassium",
        "Chloride",
        "Magnesium",
        "Phosphorus",
        "HbA1c (Glycosylated Hemoglobin)",
        "Iron",
        "U.I.B.C",
        "T.I.B.C",
        "Transferrin saturation",
        "Ferritin",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "Vitamin D3",
        "Microalbuminuria",
        "Comprehensive Urine Examination",
        "Cortisol (Morning)",
        "Active-B12 (Holotranscobalamin)",
        "Anti-Nuclear Antibody (Indirect Immunofluorescence)",
      ],
      notes_contents: [
        "For details of NEUROSPOT (a genetic test to assess vital parameters related to stress & fatigue including stress hormones & neurotransmitters) kindly contact 999-999-2020 or our frontdesk.",
      ],
    },
    {
      id: 27,
      package_name: "Basic Hairfall Profile",
      category: "Specialized",
      package_detail:
        "The Basic Hairfall Panel is designed to help identify common underlying causes of hair loss by assessing key health markers. Hairfall can result from a variety of factors, including hormonal imbalances, nutritional deficiencies, and other health issues. This comprehensive package includes essential tests such as the Thyroid profile with FT3, FT4, Ultra-sensitive TSH, CBC with ESR, Vitamins and Minerals Profile including levels of Magnesium, Vitamin D3, and Vitamin B12. It also measures Total Calcium, Phosphorus, Folic Acid (B9), Ferritin, Iron, TIBC, Transferrin Saturation, UIBC & Zinc. This profile also includes DHEAS (Dehydroepiandrosterone Sulfate) i.e. a hormone produced by the adrenal glands that serves as a precursor to male and female sex hormones. By evaluating these parameters, this panel assists in ruling out common causes and guiding appropriate treatment options.",
      package_rate: "9,500",
      tests_details: [
        "Thyroid profile with FT3, FT4, Ultra-sensitive TSH",
        "CBC with ESR",
        "Vitamins & Minerals Profile (Vitamin D3, Calcium, Phosphorous, Vitamin B12, Folic Acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin saturation, Magnesium & Zinc)",
        "DHEAS (Dehydroepiandrosterone Sulfate)",
      ],
      notes_contents: [],
    },
    {
      id: 28,
      package_name: "Anemia Profile with HPLC",
      category: "Specialized",
      package_detail:
        "The Dr. Dangs Lab Anemia profile with HPLC not only diagnoses anemia but also helps ascertain the cause for the same. A complete blood count with reticulocyte count and detailed peripheral smear analysis provides a wealth of information in the assessment of a patient with anemia and guides whether these could be due to nutritional deficiency (Iron, Vitamin B12, Folate), abnormalities in red blood cells, abnormal Hemoglobins, infections, variant hemoglobinopathies, depressed marrow function or cancers. The work-up also includes evaluation to rule out autoimmune hemolytic anemia, with testing for Indirect Coombs Test (ICT), Direct Coombs Test (DCT), and serum haptoglobin.",
      package_rate: "7,800",
      tests_details: [
        "CBC with Reticulocytes",
        "LDH",
        "Iron",
        "Ferritin",
        "U.I.B.C.",
        "T.I.B.C.",
        "Transferrin saturation",
        "Vitamin B12",
        "Folic Acid (Vitamin B9)",
        "HPLC",
        "Detailed Peripheral Smear Analysis",
        "STFR (Soluble Transferrin Receptor)",
        "Indirect Coombs Test",
        "Direct Coombs Test",
        "Haptoglobin",
      ],
      notes_contents: [],
    },
    {
      id: 29,
      package_name: "Ultra Comprehensive Health Profile",
      category: "Comprehensive",
      package_detail:
        "This is an all-inclusive health check profile that provides detailed insights into the overall health status of an individual. In addition to the Comprehensive Health Profile (CHP), Ultra CHP1 includes HOMA-IR, a test assessing insulin resistance; Vitamins A, C, E & Urinary Iodine, serum protein electrophoresis, tests for evaluating levels of basic female hormones, cardiac assessment in the way of testing for high-sensitivity Troponin T & Lp-PLA2.",
      package_rate: "26,000",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Blood Glucose PP**",
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Lipoprotein [a]",
        "Homocysteine",
        "Apolipoprotein A",
        "Apolipoprotein B",
        "Vitamins & Minerals Profile (Vitamin D3, Vitamin B12, Folic Acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin saturation, Zinc)",
        "Urinary Iodine",
        "Copper",
        "Zn/Cu ratio",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "Comprehensive Urine Examination",
        "IgE",
        "hs CRP",
        "Microalbuminuria",
        "Amylase",
        "Lipase",
        "Cystatin C",
        "HOMA-IR* (Insulin Resistance Index)*",
        "hs Troponin T",
        "FSH",
        "LH",
        "Estrogen",
        "Vitamins A & E*",
        "Serum Protein electrophoresis",
        "Vitamin C*",
        "LpPLA2*",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal)",
      ],
    },
    {
      id: 30,
      package_name: "Ultra Comprehensive Health Profile with PSA",
      category: "Comprehensive",
      package_detail:
        "This is an all inclusive health check profile that provides detailed insights on the overall health status of an individual. In addition to the Comprehensive Health Profile (CHP) with PSA, ultra CHP with PSA includes HOMA-IR, a test assessing insulin resistance, Vitamins A, C, E & Urinary Iodine, serum protein electrophoresis, tests for evaluating levels of basic hormones i.e. testosterone free & total, Cardiac assessment in the way of testing for high sensitivity Troponin T & Lp-PLA2. Also included is a urine test to check if your body has the iodine it needs for peak energy and metabolism.",
      package_rate: "27,500",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Blood Glucose PP**", 
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Lipoprotein [a]",
        "Homocysteine",
        "Apolipoprotein A",
        "Apolipoprotein B",
        "Vitamins & Minerals Profile (Vitamin D3, Vitamin B12, Folic Acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin saturation, Zinc)",
        "Copper",
        "Zn/Cu ratio",
        "Thyroid profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "Comprehensive Urine Examination",
        "IgE",
        "hs CRP",
        "Microalbuminuria",
        "Amylase",
        "Urinary Iodine",
        "Lipase",
        "HOMA-IR* (Insulin Resistance Index)*",
        "PSA-Total & Free",
        "hs Troponin T",
        "Testosterone Total",
        "Testosterone Free",
        "Estrogen",
        "Cystatin C",
        "Vitamins A & E*",
        "Serum Protein electrophoresis",
        "Vitamin C*",
        "LpPLA2*",
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal)",
      ],
    },
    {
      id: 31,
      package_name: "Fitness Profiles",
      category: "Specialized",
      package_detail:
        "The Dr. Dangs Lab Fitness Profile helps active individuals identify deficiencies affecting performance & issues like weakness, cramps, or electrolyte imbalance. It screens for anemia, diabetes, lipids, proteins, vitamins, minerals, kidney and muscle health. Separate Profiles are available for females and males. The male panel also includes Testosterone (free & total) and liver markers (SGOT, SGPT) for strength, muscle growth assessment and liver metabolism.",
      tests_details: ["Please refer to the detailed fitness profile options."],
      notes_contents: [
        {
          label: "Note",
          note: "Tests marked with * require minimum 10-12 hours fasting.",
        },
      ],
    },
  ];

  // Get unique tests and categories
  const allUniqueTests = useMemo(() => {
    const testMap = new Map();

    profiles.forEach((profile) => {
      profile.tests_details.forEach((test) => {
        // Normalize test name
        let normalizedTest = test.trim();

        // Skip "Please refer" entries
        if (normalizedTest.toLowerCase().startsWith('please refer')) {
          return;
        }

        // Create a key for deduplication (lowercase, remove extra spaces, special chars)
        const key = normalizedTest
          .toLowerCase()
          .replace(/\s+/g, ' ')
          .replace(/[()]/g, '')
          .replace(/\*/g, '')
          .replace(/\./g, '')
          .trim();

        if (normalizedTest && !testMap.has(key)) {
          // Store the original (properly formatted) test name
          testMap.set(key, normalizedTest);
        }
      });
    });

    return Array.from(testMap.values()).sort();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set();
    profiles.forEach((profile) => cats.add(profile.category));
    return Array.from(cats);
  }, []);

  // Filter profiles based on criteria
  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = profile.package_name.toLowerCase().includes(query);
        const matchesDetail = profile.package_detail
          .toLowerCase()
          .includes(query);
        const matchesTests = profile.tests_details.some((test) =>
          test.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDetail && !matchesTests) return false;
      }

      // Price filter - handle Allergynius DX as no price
      if (profile.id !== 16) {
        // Skip price filter for Allergynius DX
        const price = parseFloat(profile.package_rate);
        if (price < priceRange.min || price > priceRange.max) return false;
      }

      // Test count filter
      const testCount = profile.tests_details.length;
      if (testCount < testCountRange.min || testCount > testCountRange.max)
        return false;

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
  }, [
    searchQuery,
    priceRange,
    testCountRange,
    selectedCategories,
    selectedTests,
    requiresFasting,
  ]);

  const handlePackageSelect = (packageName) => {
    const encodedPackageName = encodeURIComponent(packageName);
    router.push(`/HomeCollection?package=${encodedPackageName}`);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange({ min: 0, max: 30000 });
    setSelectedTests([]);
    setTestCountRange({ min: 0, max: 50 });
    setRequiresFasting("all");
    setSelectedCategories([]);
  };

  const handleTestSelection = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((t) => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  const handleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      
      <div className="relative h-96 bg-[#da262a] overflow-hidden">
  <div className="absolute inset-0 opacity-30"></div>
  <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
    <div>
      {/* ✅ Logo placed above the title */}
      <div className="flex justify-center mb-6">
        <Image
          src="/PhotosAndLogos/ddl-white-logo.svg"
          alt="Dr. Dangs Lab"
          width={100}
          height={50}
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-5xl font-bold mb-4">Health Checkup Packages in Delhi/NCR</h1>
      <p className="text-xl">Delhi NCR | Home Collection Available</p>
    </div>
  </div>
</div>


      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Health Checkup Packages in Delhi/NCR
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            We provide home collection services in Delhi-NCR region including
            Gurgaon, Faridabad, Noida, and Ghaziabad.
          </p>
          <div className="flex justify-center">
            <a
              href="https://testprofiles.drdangslab.com/static/files/Towards-Better-Health-28-April-2025.pdf"
              className="inline-flex items-center   px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors  "
            >
              Download Health Test Package Brochure
            </a>
          </div>

          <p className="text-gray-600 mt-6">
            Dr. Dangs Lab provides an extensive range of health packages that
            are specifically curated by the Dr. Dangs to include effective
            diagnostic tests according to varied diagnostic requirements.
            Preventive checks are an important part of disease prevention and
            are the most important tools in the hands of doctors to identify
            diseases and risk factors early.
          </p>

          {/* Features Grid */}
          <div className="flex justify-center items-center gap-[5rem] flex-wrap py-6">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/PhotosAndLogos/TestProgile40years.png"
                alt="40 Years of Service"
                width={60}
                height={60}
              />
              <p className="mt-2 text-sm text-black font-medium">
                40 Years of Service
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/PhotosAndLogos/TestProgilegoogleRating.png"
                alt="Rated 4.9/5"
                width={60}
                height={60}
              />
              <p className="mt-2 text-black text-sm font-medium">
                Rated 4.9/5
                <br />
                Customers love us!
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/PhotosAndLogos/TestProgileNABL.png"
                alt="NABL Accredited"
                width={60}
                height={60}
              />
              <p className="mt-2 text-sm text-black font-medium">
                NABL Accredited
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/PhotosAndLogos/TestProgileDiscover.png"
                alt="Get Personalized Test Package"
                width={60}
                height={60}
              />
              <p className="mt-2 text-sm text-black font-medium">
                Get Personalized Test Package
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
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
            {(searchQuery ||
              selectedTests.length > 0 ||
              selectedCategories.length > 0 ||
              requiresFasting !== "all") && (
              <span className="ml-2 px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                Active
              </span>
            )}
          </button>

          {showFilters && (
            <div className="mt-4 bg-white rounded-lg shadow-lg p-6 animate-slideDown">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Search Bar */}
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

                {/* Fasting Requirement */}
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

                {/* Specific Tests - Scrollable */}
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
                  Showing {filteredProfiles.length} of {profiles.length}{" "}
                  packages
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        {(searchQuery ||
          selectedTests.length > 0 ||
          selectedCategories.length > 0) && (
          <div className="mb-4 p-4 bg-red-50 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-red-800">
                Found <strong>{filteredProfiles.length}</strong> package(s)
                matching your criteria
              </p>
              {filteredProfiles.length === 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-red-600 hover:underline"
                >
                  Clear filters to see all packages
                </button>
              )}
            </div>
          </div>
        )}


        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => {
            return (
              <div
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                key={profile.id}
              >
                {/* Category Badge and Logo */}
                <div className="px-6 pt-4 flex items-start justify-between">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {profile.category}
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] text-gray-400 mb-0.5">Packages by</span>
                    <svg className="w-10 h-auto" viewBox="0 0 910.51 885.08" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <style>{`
                          .cls-1 { letter-spacing: 0em; }
                          .cls-2 { font-family: Montserrat-Bold, Montserrat; font-size: 109.32px; font-weight: 700; }
                          .cls-2, .cls-3 { fill: #d30d0d; }
                          .cls-4 { letter-spacing: 0em; }
                        `}</style>
                      </defs>
                      <g>
                        <path className="cls-3" d="M525.56,194.39c-1.81-8.48,3.4-20.37,7.42-27.54,12.96-23.15,38.52-30.73,61.67-41.98,23.25-11.29,60.94-25.9,62.39-55.24,1.23-24.81-13.69-48.52-25.58-69.63,1.41,9.32,2.79,18.72,2.34,28.12-.5,9.41-2.96,18.94-8.7,26.66-12.09,16.37-34.46,24.08-52.12,33.99-17.66,9.91-36.96,21.76-44.99,40.41-8.79,20.52-6.99,44.03-2.42,65.22"/>
                        <polygon className="cls-3" points="534.66 176.45 534.66 217.2 711.5 420.32 522.37 637.53 335.35 422.74 515.29 216.06 515.29 175.75 300.07 422.96 522.17 678.06 746.78 420.08 534.66 176.45"/>
                        <polygon className="cls-3" points="493.17 631.42 468.6 659.63 266.03 422.74 462.97 191.23 462.97 175.74 247.71 422.97 469.82 678.07 501.59 641.59 493.17 631.42"/>
                        <polygon className="cls-3" points="446.81 639.49 429.27 659.6 226.74 422.74 423.64 191.23 423.64 175.77 208.4 422.96 430.52 678.06 455.27 649.66 446.81 639.49"/>
                        <polygon className="cls-3" points="404.98 637.98 386.13 659.64 183.57 422.74 380.48 191.24 380.48 175.75 165.24 422.96 387.36 678.08 413.4 648.16 404.98 637.98"/>
                      </g>
                      <text className="cls-2" transform="translate(0 856)"><tspan x="0" y="0">DR. </tspan><tspan className="cls-1" x="230.22" y="0">D</tspan><tspan x="319.43" y="0">ANGS </tspan><tspan className="cls-4" x="676.46" y="0">L</tspan><tspan x="743.14" y="0">AB</tspan></text>
                    </svg>
                  </div>
                </div>

                <div className="px-6 pt-6 pb-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {profile.package_name}
                  </h3>
                  <div className="mb-4">
                    <p
                      className={`text-gray-600 text-sm ${
                        !expandedDescriptions[profile.id] ? "line-clamp-3" : ""
                      }`}
                    >
                      {profile.package_detail}
                    </p>
                    {profile.package_detail.length > 200 && (
                      <button
                        onClick={() => toggleDescription(profile.id)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium mt-1"
                      >
                        {expandedDescriptions[profile.id]
                          ? "View Less"
                          : "View More"}
                      </button>
                    )}
                  </div>

                  {/* Tests List - Collapsible */}
                  <details className="mb-4">
                    <summary className="cursor-pointer text-red-600 hover:text-red-700 font-semibold text-sm">
                      View all tests
                    </summary>
                    <ul className="mt-3 space-y-1 max-h-40 overflow-y-auto">
                      {profile.tests_details.map((test, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-red-500 mr-2">•</span>
                          {test}
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* Notes */}
                  {profile.notes_contents &&
                    profile.notes_contents.length > 0 && (
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
                    {/* Hide price for Flu Panels (id 13) and Allergynius DX (id 16) */}
                    {profile.id !== 7 &&
                    profile.id !== 12 &&
                    profile.id !== 13 &&
                    profile.id !== 17 &&
                    profile.id !== 18 &&
                    profile.id !== 19 &&
                    profile.id !== 23 &&
                    profile.id !== 24 &&
                    profile.id !== 31 ? (
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
                                  <path d="M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"/>
                                </svg>
                                with PSA
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
                    ) : profile.id !== 7 &&
                      profile.id !== 12 &&
                      profile.id !== 23 &&
                      profile.id !== 24 &&
                      profile.id !== 31 ? (
                      <div>
                        <a
                          href={profile.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                          onClick={(e) => {
                            if (!profile.link) {
                              e.preventDefault();
                              console.log(`Link needed for ${profile.package_name}`);
                            }
                          }}
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

                {/* View Details buttons for Menopause, Bloating, Fitness, Allergynius, Cardiac, Fever, and Vitamins - Above Book button */}
                {(profile.id === 7 || profile.id === 12 || profile.id === 23 || profile.id === 24 || profile.id === 31 || profile.id === 17 || profile.id === 19) && (
                  <div className="px-6 pb-3">
                    {profile.id === 7 && (
                      <button
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                        onClick={() => setShowVitaminDetail(true)}
                      >
                        View Detailed Profiles & Pricing
                      </button>
                    )}
                    {profile.id === 12 && (
                      <button
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                        onClick={() => setShowFeverDetail(true)}
                      >
                        View Detailed Profiles & Pricing
                      </button>
                    )}
                    {profile.id === 23 && (
                      <button
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                        onClick={() => setShowMenopauseDetail(true)}
                      >
                        View Detailed Profiles & Pricing
                      </button>
                    )}
                    {profile.id === 24 && (
                      <button
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                        onClick={() => setShowBloatingDetail(true)}
                      >
                        View Detailed Profiles & Pricing
                      </button>
                    )}
                    {profile.id === 31 && (
                      <button
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                        onClick={() => setShowFitnessDetail(true)}
                      >
                       View Detailed Profiles & Pricing
                      </button>
                    )}
                    {profile.id === 17 && (
                      <button
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                        onClick={() => setShowAllerginiusDetail(true)}
                      >
                        View Detailed Profiles & Pricing
                      </button>
                    )}
                    {profile.id === 19 && (
                      <button
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                        onClick={() => setShowCardiacDetail(true)}
                      >
                        View Detailed Profiles & Pricing
                      </button>
                    )}
                  </div>
                )}

                {/* Book This Package Button - Always at bottom */}
                <div className="px-6 pb-6">
                  {profile.male_price ? (
                    <div className="flex gap-2">
                      <button
                        className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
                        onClick={() => handlePackageSelect(profile.package_name)}
                      >
                        Book ₹{profile.package_rate}
                      </button>
                      <button
                        className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm flex items-center justify-center gap-1"
                        onClick={() => handlePackageSelect(`${profile.package_name} (Male with PSA)`)}
                      >
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"/>
                        </svg>
                        Book ₹{profile.male_price}
                      </button>
                    </div>
                  ) : (
                    <button
                      className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                      onClick={() => handlePackageSelect(profile.package_name)}
                    >
                      Book This Package
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredProfiles.length === 0 && (
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
        )}
      </div>


      {/* Vitamins & Minerals Detail Modal */}
      {showVitaminDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[60vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Vitamins & Mineral Profiles
              </h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowVitaminDetail(false)}
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(60vh-140px)]">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="text-left p-3 font-semibold text-black text-sm">
                      Name of Panel
                    </th>
                    <th className="text-center p-3">
                      <div className="font-semibold text-black text-sm">
                        Basic
                      </div>
                      <div className="text-xs text-gray-600">
                        INR {vitaminTiers.basic.price}
                      </div>
                    </th>
                    <th className="text-center p-3">
                      <div className="font-semibold text-black text-sm">
                        Advanced
                      </div>
                      <div className="text-xs text-gray-600">
                        INR {vitaminTiers.advanced.price}
                      </div>
                    </th>
                    <th className="text-center p-3">
                      <div className="font-semibold text-black text-sm">
                        Comprehensive
                      </div>
                      <div className="text-xs text-gray-600">
                        INR {vitaminTiers.comprehensive.price}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allVitaminTests.map((test, index) => (
                    <tr
                      key={test}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-2 text-sm text-black">{test}</td>
                      <td className="text-center p-2">
                        {vitaminTiers.basic.tests.includes(test) ? (
                          <Check className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-2">
                        {vitaminTiers.advanced.tests.includes(test) ? (
                          <Check className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-2">
                        {vitaminTiers.comprehensive.tests.includes(test) ? (
                          <Check className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}

                  {/* Book Buttons Row */}
                  <tr className="bg-gray-50 border-t-2">
                    <td className="p-3 font-semibold text-black text-sm">
                      Book Now
                    </td>
                    <td className="text-center p-3">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        onClick={() =>
                          handlePackageSelect(
                            "Vitamins and Minerals Profile - Basic"
                          )
                        }
                      >
                        Book This Package
                      </button>
                    </td>
                    <td className="text-center p-3">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        onClick={() =>
                          handlePackageSelect(
                            "Vitamins and Minerals Profile - Advanced"
                          )
                        }
                      >
                        Book This Package
                      </button>
                    </td>
                    <td className="text-center p-3">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        onClick={() =>
                          handlePackageSelect(
                            "Vitamins and Minerals Profile - Comprehensive"
                          )
                        }
                      >
                        Book This Package
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-yellow-50 border-t">
              <p className="text-xs text-gray-700">
                <strong>Note:</strong> Tests marked with * require minimum 10–12
                hours fasting.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Fever Profile Detail Modal */}
      {showFeverDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[60vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Fever Profile Tiers
              </h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowFeverDetail(false)}
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(60vh-140px)]">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="text-left p-3 font-semibold text-black text-sm">
                      Name of Test
                    </th>
                    <th className="text-center p-3">
                      <div className="font-semibold text-black text-sm">
                        Monsoon
                      </div>
                      <div className="text-xs text-gray-600">
                        INR {feverTiers.monsoon.price}
                      </div>
                    </th>
                    <th className="text-center p-3">
                      <div className="font-semibold text-black text-sm">
                        Basic
                      </div>
                      <div className="text-xs text-gray-600">
                        INR {feverTiers.basic.price}
                      </div>
                    </th>
                    <th className="text-center p-3">
                      <div className="font-semibold text-black text-sm">
                        Advanced
                      </div>
                      <div className="text-xs text-gray-600">
                        INR {feverTiers.advanced.price}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allFeverTests.map((test, index) => {
                    // Extract base test name and any modifiers
                    const isSpecialTest = test === "CBC (with ESR)";
                    const displayTestName = isSpecialTest ? "CBC" : test;

                    return (
                      <tr
                        key={test}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-2 text-sm text-black">
                          {displayTestName}
                        </td>
                        <td className="text-center p-2">
                          {feverTiers.monsoon.tests.includes(test) ? (
                            <div className="flex items-center justify-center gap-1">
                              <Check className="w-4 h-4 text-green-500" />
                              {isSpecialTest && (
                                <span className="text-xs text-gray-600"></span>
                              )}
                            </div>
                          ) : (
                            <X className="w-4 h-4 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="text-center  p-2">
                          {feverTiers.basic.tests.includes(test) ? (
                            <div className="flex items-center justify-center  gap-1">
                              <Check className="w-4 h-4 text-green-500" />
                              {isSpecialTest && (
                                <span className="text-xs  text-gray-600">
                                  (with ESR)
                                </span>
                              )}
                            </div>
                          ) : (
                            <X className="w-4 h-4 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-2">
                          {feverTiers.advanced.tests.includes(test) ? (
                            <div className="flex items-center justify-center gap-1">
                              <Check className="w-4 h-4 text-green-500" />
                              {isSpecialTest && (
                                <span className="text-xs text-gray-600">
                                  (with ESR)
                                </span>
                              )}
                            </div>
                          ) : (
                            <X className="w-4 h-4 text-gray-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    );
                  })}

                  {/* Book Buttons Row */}
                  <tr className="bg-gray-50 border-t-2">
                    <td className="p-3 font-semibold text-black text-sm">
                      Book Now
                    </td>
                    <td className="text-center p-3">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        onClick={() =>
                          handlePackageSelect("Fever Profile - Monsoon")
                        }
                      >
                        Book This Package
                      </button>
                    </td>
                    <td className="text-center p-3">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        onClick={() =>
                          handlePackageSelect("Fever Profile - Basic")
                        }
                      >
                        Book This Package
                      </button>
                    </td>
                    <td className="text-center p-3">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        onClick={() =>
                          handlePackageSelect("Fever Profile - Advanced")
                        }
                      >
                        Book This Package
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Allergynius DX Detail Modal */}
      {showAllerginiusDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Allergynius DX - Available Allergy Profiles
              </h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowAllerginiusDetail(false)}
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(80vh-140px)]">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="text-left p-4 font-semibold text-black">
                      Profile Name
                    </th>
                    <th className="text-center p-4 font-semibold text-black">
                      Allergens
                    </th>
                    <th className="text-center p-4 font-semibold text-black">
                      Components
                    </th>
                    <th className="text-right p-4 font-semibold text-black">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allerginiusProfiles.map((profile, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 text-sm text-gray-900">
                        {profile.name}
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {profile.allergens}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {profile.components}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-lg font-semibold text-gray-900">
                          ₹{profile.price}/-
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Book Buttons Section - ADDED THIS */}
              <div className="mt-6 p-6 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Select a Profile to Book
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allerginiusProfiles.map((profile, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">
                            {profile.name}
                          </p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-xs text-gray-600">
                              {profile.allergens} allergens
                            </span>
                            <span className="text-xs text-gray-600">
                              {profile.components} components
                            </span>
                            <span className="text-sm font-semibold text-gray-700">
                              ₹{profile.price}
                            </span>
                          </div>
                        </div>
                        <button
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold ml-4"
                          onClick={() => handlePackageSelect(profile.name)}
                        >
                          Book This Package
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Statistics */}
              <div className="mt-6 p-6 bg-gray-50">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-blue-700">5</p>
                    <p className="text-sm text-blue-600 mt-1">
                      Profile Options
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-green-700">163</p>
                    <p className="text-sm text-green-600 mt-1">Max Allergens</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-purple-700">294</p>
                    <p className="text-sm text-purple-600 mt-1">
                      Max Components
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border-t">
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="text-amber-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> No special fasting or preparation
                  required unless otherwise instructed by your physician. Choose
                  the profile that best matches your allergy symptoms and
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cardiac Risk Profile Detail Modal */}
      {showCardiacDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Cardiac Risk Profiles
              </h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowCardiacDetail(false)}
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(80vh-140px)]">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th
                      className="text-left p-4 font-semibold text-black"
                      style={{ width: "30%" }}
                    >
                      Profile
                    </th>
                    <th
                      className="text-left p-4 font-semibold text-black"
                      style={{ width: "55%" }}
                    >
                      Tests Included
                    </th>
                    <th
                      className="text-right p-4 font-semibold text-black"
                      style={{ width: "15%" }}
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cardiacTiers.map((tier, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 text-sm font-medium text-gray-900 align-top">
                        {tier.name}
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          {tier.tests.map((test, testIdx) => (
                            <li key={testIdx} className="text-sm">
                              {test}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 text-right align-top">
                        <span className="text-lg font-semibold text-gray-900">
                          INR {tier.price}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Book Buttons Section */}
              <div className="mt-6 p-6 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Select a Profile to Book
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cardiacTiers.map((tier, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">
                            {tier.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            INR {tier.price}
                          </p>
                        </div>
                        <button
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                          onClick={() => handlePackageSelect(tier.name)}
                        >
                          Book This Package
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border-t">
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="text-amber-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Tests marked with * require minimum
                  10-12 hours fasting. These advanced cardiac markers help
                  assess cardiovascular risk and aid in early detection of heart
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menopause Profile Detail Modal */}
      {showMenopauseDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Menopause Profiles
              </h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowMenopauseDetail(false)}
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(80vh-140px)]">
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  At Dr. Dangs Lab, we recognise that menopause is a profound
                  biological transition, influencing hormonal balance, metabolic
                  health, and overall well-being. Our Menopause Profiles are
                  meticulously curated to provide clinicians and patients with a
                  comprehensive, evidence-based assessment of this life stage.
                </p>

                {/* Profiles Table */}
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 border border-gray-300 font-semibold text-black">
                        Name of Panels
                      </th>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black">Basic</div>
                        <div className="text-sm text-gray-600 mt-1">
                          INR 4,500
                        </div>
                      </th>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black">Advanced</div>
                        <div className="text-sm text-gray-600 mt-1">
                          INR 9,000
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(menopauseTiers[0].tests).map(
                      (testName, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="p-3 border border-gray-300 text-sm text-gray-800">
                            {testName}
                          </td>
                          {menopauseTiers.map((tier, tierIndex) => (
                            <td
                              key={tierIndex}
                              className="text-center p-3 border border-gray-300"
                            >
                              {tier.tests[testName] ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <span className="text-gray-300">-</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>

                {/* Book Buttons Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Select a Profile to Book
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {menopauseTiers.map((tier, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-900">
                              Menopause Profile - {tier.name}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              INR {tier.price}
                            </p>
                          </div>
                          <button
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                            onClick={() =>
                              handlePackageSelect(
                                `Menopause Profile - ${tier.name}`
                              )
                            }
                          >
                            Book This Package
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bloating Profile Detail Modal */}
      {showBloatingDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Bloating Profiles
              </h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowBloatingDetail(false)}
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(80vh-140px)]">
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  At Dr. Dangs Lab, we understand that bloating is more than
                  just an inconvenience—it can be a sign of underlying
                  gastrointestinal, hormonal, or immune imbalances. Our Bloating
                  Profiles are designed to pinpoint the cause through targeted,
                  evidence-based testing, enabling precise diagnosis and
                  personalised treatment strategies.
                </p>

                {/* Profiles Table */}
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 border border-gray-300 font-semibold text-black">
                        Name of Panels
                      </th>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black">Basic</div>
                        <div className="text-sm text-gray-600 mt-1">
                          INR 8,500
                        </div>
                      </th>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black">Advanced</div>
                        <div className="text-sm text-gray-600 mt-1">
                          INR 17,500
                        </div>
                      </th>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black">
                          Comprehensive
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          INR 21,500
                        </div>
                      </th>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black text-sm">
                          Comprehensive with IMUPRO 22
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          INR 32,500
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(bloatingTiers[0].tests).map(
                      (testName, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="p-3 border border-gray-300 text-sm text-gray-800">
                            {testName}
                          </td>
                          {bloatingTiers.map((tier, tierIndex) => (
                            <td
                              key={tierIndex}
                              className="text-center p-3 border border-gray-300"
                            >
                              {tier.tests[testName] ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <span className="text-gray-300">-</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>

                {/* Book Buttons Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Select a Profile to Book
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bloatingTiers.map((tier, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-900">
                              Bloating Profile - {tier.name}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              INR {tier.price}
                            </p>
                          </div>
                          <button
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                            onClick={() =>
                              handlePackageSelect(
                                `Bloating Profile - ${tier.name}`
                              )
                            }
                          >
                            Book This Package
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border-t">
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="text-amber-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> *Avoid antibiotics, bismuth-containing
                  medications, and proton pump inhibitors (PPIs) for at least
                  10-14 days prior to the test. (Always consult your doctor
                  before stopping any medications.)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fitness Profile Detail Modal */}
      {showFitnessDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">Fitness Profiles</h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowFitnessDetail(false)}
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(80vh-140px)]">
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  The Dr. Dangs Lab Fitness Profile helps active individuals
                  identify deficiencies affecting performance & issues like
                  weakness, cramps, or electrolyte imbalance. It screens for
                  anemia, diabetes, lipids, proteins, vitamins, minerals, kidney
                  and muscle health. The male panel includes additional
                  testosterone and liver markers for comprehensive assessment.
                </p>

                {/* Comparison Table */}
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black">
                          ♀ Females
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          (INR 5,800)
                        </div>
                      </th>
                      <th className="text-center p-4 border border-gray-300">
                        <div className="font-semibold text-black">♂ Males</div>
                        <div className="text-sm text-gray-600 mt-1">
                          (INR 8,500)
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Common tests */}
                    {fitnessTiers.female.tests.map((test, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-3 border border-gray-300 text-sm text-center text-gray-800">
                          {test}
                        </td>
                        <td className="p-3 border border-gray-300 text-sm text-center text-gray-800">
                          {fitnessTiers.male.tests.includes(test) ? test : "-"}
                        </td>
                      </tr>
                    ))}
                    {/* Additional male-only tests */}
                    <tr className="bg-white">
                      <td className="p-3 border border-gray-300 text-sm text-center text-gray-300">
                        -
                      </td>
                      <td className="p-3 border border-gray-300 text-sm text-center text-gray-800">
                        Testosterone Free & Total
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-300 text-sm text-center text-gray-300">
                        -
                      </td>
                      <td className="p-3 border border-gray-300 text-sm text-center text-gray-800">
                        SGOT
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border border-gray-300 text-sm text-center text-gray-300">
                        -
                      </td>
                      <td className="p-3 border border-gray-300 text-sm text-center text-gray-800">
                        SGPT
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Book Buttons Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Select a Profile to Book
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">
                            Fitness Profile - Female
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            INR 5,800
                          </p>
                        </div>
                        <button
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                          onClick={() =>
                            handlePackageSelect("Fitness Profile - Female")
                          }
                        >
                          Book This Package
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">
                            Fitness Profile - Male
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            INR 8,500
                          </p>
                        </div>
                        <button
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                          onClick={() =>
                            handlePackageSelect("Fitness Profile - Male")
                          }
                        >
                          Book This Package
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border-t">
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="text-amber-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Tests marked with * require minimum
                  10-12 hours fasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TestProfiles;