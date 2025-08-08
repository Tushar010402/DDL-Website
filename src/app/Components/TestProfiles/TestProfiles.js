// src/app/Components/TestProfiles/TestProfiles.jsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './TestProfiles.module.css';

const TestProfiles = () => {
  const router = useRouter();
  
  // Static data instead of API fetch
  const profiles = [
    {
      id: 1,
      package_name: "Smart Check Profile",
      package_detail: "This is a basic yet powerful package which gives a bird's eye view of your inner metabolism. It has Complete Blood Count which in itself provides a wealth of information regarding anemia (Hemoglobin), infections (TLC, DLC), blood cancers; lipids; blood sugar evaluation; kidney and liver evaluation; Magnesium - a key mineral, deficiency of which causes fatigue and a muscle marker CPK.",
      package_rate: "3500.00",
      meta_title: "This is a basic yet powerful packag",
      meta_keywords: "This is a basic yet powerful  of es fatigue and a muscle marker CPK.",
      meta_description: "This is a basic yet powerful package which gives a bird's eye view of your inner metabolism. It has Complete Blood Count which in",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K."
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      id: 2,
      package_name: "Advanced Smart Check Profile",
      package_detail: "This package couples the advantage of Glycosylated Hemoglobin (HbA1C) which gives you an average estimation of your sugar levels over the past 3 months, as well as the well-established Thyroid Profile with Free T3, Free T4 and Ultra-sensitive TSH while continuing to give you all the benefits of a Smart Check Profile.",
      package_rate: "4750.00",
      meta_title: "Advanced Smart Check Profile",
      meta_keywords: "Advanced Smart Check Profile",
      meta_description: "Advanced Smart Check Profile",
      tests_details: [
        "CBC with ESR",
        "Blood Glucose Fasting*",
        "Lipid Profile*",
        "Kidney Function Test",
        "Liver Function Test",
        "Magnesium",
        "C.P.K.",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      id: 3,
      package_name: "Superior Smart Check Profile",
      package_detail: "The superior smart check profile adds an assessment of key vitamins such as vitamin D3 and vitamin B12 along with IgE (which gives you an indication of your body's response to allergy), beyond all the value of an Advanced Smart Check. This package encourages you to consider a superior choice in a health check & this package is highly recommended for persons of any age group who are looking for a simplified yet effective evaluation by blood tests.",
      package_rate: "8600.00",
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
        "Vitamin B12"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      id: 4,
      package_name: "Premium Smart Check Profile",
      package_detail: "Premium smart check profile amplifies the advantages of the superior smart check by including additional tests that provide a greater in-depth analysis of your health. The additional tests include Vitamin B9/ folic acid, a detailed urine analysis, complete iron studies including ferritin, iron binding capacity, and transferrin saturation. The inclusion of High Sensitive CRP is a huge plus with the test being a sensitive marker for evidence of inflammation as well as cardiac risk assessment. This package is highly recommended to persons of any age group who are looking for an extensive and effective evaluation by blood tests.",
      package_rate: "11500.00",
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
        "U.I.B.C., T.I.B.C.",
        "Transferrin Saturation",
        "Comprehensive Urine Examination"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      "id": 5,
      "package_name": "Comprehensive Health Profile (CHP)",
      "package_detail": "An all inclusive package covering various tests scientifically proven to have a role in preventive health testing. This package is also extremely useful for the monitoring of patients with Hypertension, Diabetes, Cardiac, Kidney, Thyroid, Pancreas and Liver conditions; Vitamin deficiencies and Inflammation. CHP also has Cystatin C & Microalbuminuria, an early indicator of kidney disease; High Sensitivity CRP, a very sensitive marker of Inflammation/cardiac risk; total serum IgE as well as a detailed urine examination. This package is highly recommended to persons of any age group who are looking for comprehensive insights into their health via urine and blood tests.",
      "package_rate": "15000.00",
      "tests_details": [
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
        "Vitamins & Minerals Profile (Vitamin D3, Vitamin B12, Folic Acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin saturation, Zinc)",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "IgE",
        "hs-CRP",
        "Microalbuminuria",
        "Amylase",
        "Lipase",
        "Comprehensive Urine Examination"
      ],
      "notes_contents": [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal)."
      ]
    },    
    {
      "id": 6,
      "package_name": "Comprehensive Health Profile with PSA (CHP with PSA)",
      "package_detail": "An all inclusive package covering various tests scientifically proven to have a role in preventive health testing. This package is also extremely useful for the monitoring of patients with Hypertension, Diabetes, Cardiac, Kidney, Thyroid, Pancreas and Liver conditions; Vitamin deficiencies and Inflammation. CHP also has Cystatin C & Microalbuminuria, an early indicator of kidney disease; High Sensitivity CRP, a very sensitive marker of Inflammation/cardiac risk; total serum IgE as well as a detailed urine examination. Prostate Specific Antigen (Total PSA, Free PSA along with the ratio), an established marker to screen for prostate cancers also forms a part of this package.",
      "package_rate": "16500.00",
      "tests_details": [
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
        "Vitamins & Minerals Profile (Vitamin D3, Vitamin B12, Folic Acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin saturation, Zinc)",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "HbA1c (Glycosylated Hemoglobin)",
        "Comprehensive Urine Examination",
        "IgE",
        "hs-CRP",
        "Microalbuminuria",
        "Amylase",
        "Lipase",
        "PSA-Total & Free"
      ],
      "notes_contents": [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP (post prandial i.e. 2 hours after finishing your meal)."
      ]
    }
    ,
    {
      id: 7,
      package_name: "Vitamins and Minerals Profile",
      package_detail: "Deficiency of Vitamins and Minerals are amongst the commonest reasons for anemias, fatigue, muscle cramps, joint and body pains, tingling sensations and several other indistinct complaints. They play an essential role in strengthening the body's Immune system. Adequate levels of Vitamin D help to protect against infection. Deficiency of Vitamin D has been known to play a role as a risk factor for several Non Communicable diseases as well. Vitamins and Minerals profile is a perfect add on to a Smart Check, Advanced Smart check or any other monitoring panel.",
      package_rate: "6500.00",
      tests_details: [
        "Magnesium",
        "Vitamin D3",
        "Vitamin B12",
        "Iron",
        "Ferritin",
        "U.I.B.C., T.I.B.C.",
        "Transferrin Saturation",
        "Total Calcium",
        "Zinc",
        "Phosphorus",
        "Folic Acid (Vitamin B9)"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      id: 8,
      package_name: "Female Hormone Profile",
      package_detail: "An imbalance in female hormones can lead to irregular periods, bloating, fatigue, irritability, hair loss, palpitations, mood swings, diabetes, lack of ability to concentrate, issues with fertility, hirsutism(excessive hair), premature menarche, etc. This Profile can also be used in various conditions such as amenorrhea, dysfunctional uterine bleeding & to assess ovarian function. Physicians often ask for a Female Hormonal Profile to be performed on Day 2/3 of the menstrual cycle with a pooled and mid morning sample for prolactin.",
      package_rate: "7500.00",
      tests_details: [
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "FSH",
        "LH",
        "Prolactin (Pooled)",
        "Estrogen",
        "Progesterone",
        "AMH",
        "DHEAS"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      id: 9,
      package_name: "PCOD Profile",
      package_detail: "Poly Cystic Ovary Disease (PCOD) is a commonly encountered condition associated with hormonal imbalance, ovarian cysts &/or irregular periods. The PCOD profile gives you an option of testing hormone levels along with conditions like diabetes and thyroid dysfunction that may be commonly associated with PCOD. These test results along with imaging techniques & a physician's guidance are required to reach a conclusive diagnosis.",
      package_rate: "9000.00",
      tests_details: [
        "Blood Glucose Fasting*",
        "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
        "FSH",
        "LH",
        "Prolactin (Pooled)",
        "Progesterone",
        "DHEAS",
        "Insulin (Fasting)*",
        "Estradiol [E2]",
        "Testosterone Total",
        "Testosterone Free",
        "HOMA IR*"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      id: 10,
      package_name: "Arthritis Profile",
      package_detail: "The Arthritis Profile assesses the several reasons due to which an individual could be having pain in the bones or joints. This profile confirms the Rheumatoid Arthritis factor (RA), and also has a vitamin check, markers for inflammation and autoimmune screening (ANA). These assist the clinician in making a definite diagnosis. The detection of anti-CCP antibodies confirms the presence of rheumatoid arthritis, establishes a prognosis for the progression of the disease and helps determine the best possible treatment.",
      package_rate: "7500.00",
      tests_details: [
        "CBC with ESR",
        "Vitamin D3",
        "Total Calcium",
        "Phosphorus",
        "CRP",
        "RA Factor",
        "ANA",
        "Uric Acid",
        "ASO (Antistreptolysin O)",
        "Anti-CCP",
        "Ionized Calcium"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting."
      ]
    },
    {
      id: 11,
      package_name: "Diabetes / Hypertension Profile",
      package_detail: "Diabetes is understood as a disease where there is excess sugar in the blood and it is hence often assumed that having less sweets can help overcome the illness. However it is critical to keep a lookout for the complications of Diabetes which cause permanent damage. A fair number of patients have both Hypertension as well as Diabetes which doubles the risk of organ damage. This profile puts together tests to monitor Diabetes and Hypertension and their commonly associated complications.",
      package_rate: "4500.00",
      tests_details: [
        "Blood Glucose Fasting*",
        "Lipid Profile*",
        "HbA1c (Glycosylated Hemoglobin)",
        "Urine Routine & Microscopy",
        "Microalbuminuria",
        "Blood Glucose PP**",
        "Urea",
        "BUN",
        "Fructosamine",
        "Urine for Ketones",
        "Creatinine",
        "Cystatin C"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP ( post prandial ie. 2 hours after finishing your meal)"
      ]
    },
    {
      id: 12,
      package_name: "Comprehensive Diabetes Profile",
      package_detail: "Comprehensive diabetes profile provides an edge over the tests in the diabetes and hypertension profile by giving an in-depth view of function of kidneys and pancreas in relation to the blood sugar levels. This profile is ideally suited for those who need to view the diabetic markers holistically and require a more detailed analysis . The additional tests in this profile include complete Kidney function tests , Fasting Insulin, EGFR, HOMA-IR and C-peptide.",
      package_rate: "7500.00",
      meta_title: "Comprehensive Diabetes Profile",
      meta_keywords: "diabetes profile, blood sugar test, kidney function",
      meta_description: "Comprehensive diabetes profile with detailed analysis of diabetic markers, kidney function, and pancreas function",
      tests_details: [
        "Blood Glucose Fasting*",
        "Blood Glucose PP**",
        "Fructosamine",
        "Urea",
        "Creatinine",
        "BUN",
        "Uric Acid",
        "Phosphorous",
        "Calcium",
        "Electrolytes ( Na,K,Cl )",
        "Total Protein",
        "Albumin",
        "Albumin/Globulin ratio",
        "Urine for Ketones",
        "HBA1C (Glycosylated Hemoglobin)",
        "Urine Routine",
        "Microalbuminuria",
        "Lipid Profile*",
        "Insulin Fasting*",
        "Insulin PP**",
        "EGFR",
        "HOMA IR* (Insulin Resistance Index)",
        "Cystatin C",
        "C - Peptide*"
      ],
      notes_contents: [
        "Tests marked with * require minimum 10-12 hours fasting.",
        "Tests marked with ** are to be performed as PP ( post prandial ie. 2 hours after finishing your meal)"
      ]
    },
    // Fever Profile Basic
{
  id: 13,
  package_name: "Fever Profile Basic",
  package_detail: "Fever Profile Basic is recommended to guide the Physician by screening for some of the commonest causes for fevers such as Malaria, Typhoid,Dengue and Urine infections . Also included is CBC with ESR which is often the most prescribed test for any fever and offers a wealth of information by way of blood counts including the platelet count . These help to define the nature of fever and it's treatment.",
  package_rate: "4900.00",
  meta_title: "Fever Profile Basic",
  meta_keywords: "fever profile, malaria, dengue, typhoid",
  meta_description: "Basic fever profile to screen common causes of fever including malaria, typhoid, and dengue",
  tests_details: [
    "CBC with ESR",
    "Malaria Parasite",
    "Malaria Ag",
    "Dengue NS1",
    "Dengue IgM",
    "Dengue IgG",
    "Urine Routine",
    "Typhidot"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Fever Profile Advanced
{
  id: 14,
  package_name: "Fever Profile Advanced",
  package_detail: "Fever Profile Advanced has all the benefits of the Fever Profile Basic, added to which are an advanced set of investigations to diagnose Chikungunya, Leptospira & Lyme's disease along with culture/sensitivity for urine, throat and blood samples to check for bacterial growth and provide antibiotics that the infection would respond and be resistant to. CRP helps check the level of inflammation coexisting with the fever and is also an important marker to herald recovery. Liver enzymes help as markers for any liver infection.",
  package_rate: "15500.00",
  meta_title: "Fever Profile Advanced",
  meta_keywords: "advanced fever profile, chikungunya, leptospira, bacterial culture",
  meta_description: "Advanced fever profile including cultures and additional tests for complex fever cases",
  tests_details: [
    "CBC with ESR",
    "Malaria Parasite",
    "Malaria Ag",
    "Dengue NS1",
    "Dengue IgM",
    "Dengue IgG",
    "Urine Routine",
    "Typhidot",
    "Chikungunya PCR",
    "CRP",
    "Lyme's IgM",
    "Leptospria IgM",
    "S.G.O.T",
    "S.G.P.T",
    "Typhidot",
    "Urine Culture",
    "Throat Swab Culture",
    "Blood Culture",
    "Scrub Typhus PCR",
    "Widal",
    "Mumps IgM",

  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Anemia Profile with HPLC
{
  id: 15,
  package_name: "Anemia Profile with HPLC",
  package_detail: "The Dr. Dangs Lab Anemia profile with HPLC not only diagnoses anemia but also helps ascertain the cause for the same. A complete blood count with reticulocyte count and detailed peripheral smear analysis provides a wealth of information in the assessment of a patient with anemia and guides whether these could be due to nutritional deficiencies(Iron, Vitamin B12, Folate), abnormalities in red blood cells, abnormal Hemoglobins, infections, variant hemoglobinopathies, depressed marrow function or cancers.",
  package_rate: "6500.00",
  meta_title: "Anemia Profile with HPLC",
  meta_keywords: "anemia profile, HPLC, blood count, iron deficiency",
  meta_description: "Comprehensive anemia profile with HPLC to diagnose and determine cause of anemia",
  tests_details: [
    "CBC with Reticulocytes",
    "LDH",
    "Iron",
    "Ferritin",
    "U.I.B.C",
    "T.I.B.C",
    "Transferrin saturation",
    "Vitamin B12",
    "Folic Acid (Vitamin B9)",
    "HPLC",
    "Detailed Peripheral Smear Analysis",
    "STFR (Soluble Transferrin Receptor)"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},
// Basic STD Profile
{
  id: 16,
  package_name: "Basic STD Profile",
  package_detail: "The basic sexually transmitted disease profile is a combination of the most frequently contracted and screened for infections linked to unprotected sex. The reason to get a STD panel done is to identify and treat early any infection and also prevent passing on the infection to partner. HIV Combo comprising of the HIV P24 Antigen & the HIV Antibody, Hepatitis B, C, Syphilis & genital Herpes diagnosis can be made by the tests included in the panel.",
  package_rate: "4000.00",
  meta_title: "Basic STD Profile",
  meta_keywords: "std profile, hiv test, hepatitis test",
  meta_description: "Basic STD profile for screening common sexually transmitted infections",
  tests_details: [
    "HIV Combo",
    "HBsAg for Hepatitis B",
    "HCV Antibodies for Hepatitis C",
    "Syphilis by CLIA",
    "Herpes Simplex 2 IgM"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Comprehensive STD Profile
{
  id: 17,
  package_name: "Comprehensive STD Profile",
  package_detail: "The Comprehensive STD Profile is a meticulously designed diagnostic suite that rigorously screens for a diverse spectrum of sexually transmitted pathogens, employing advanced molecular techniques through urine and blood samples. This profile extends its reach far beyond the parameters of the Basic STD Profile by including assessments for Chlamydia Trachomatis, Neisseria Gonorrhoeae, Trichomonas vaginalis, Gardnerella vaginalis, Mycoplasma genitalium, Herpes Simplex Virus Type 1, HSV Type 2, and Ureaplasma urealyticum/parvum, in addition to the foundational screenings for HIV, Hepatitis B, Hepatitis C, and Syphilis. The pathogens encompassed in this comprehensive panel are significant contributors to sexually transmitted infections, frequently exhibiting a wide range of symptoms. The detection methodology, based on the nucleic acid amplification technique (NAAT, also known as PCR), offers extremely high accuracy and reliability. It is imperative to consider the specific window period of each infection during the testing process to ensure optimal accuracy",
  package_rate: "13800.00",
  meta_title: "Comprehensive STD Profile",
  meta_keywords: "comprehensive std testing, std panel, complete std screening",
  meta_description: "Advanced and comprehensive STD profile with molecular testing",
  "tests_details": [
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
    "Human Papillomavirus types 18"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Fitness Profile 1
{
  id: 18,
  package_name: "Fitness Profile 1",
  package_detail: "The Dr. Dangs Lab Fitness profile is aimed at the active person who has exercise as a part of their daily routine to help identify deficiencies if any which might come in the way of a full exercise routine or athletic performance by way of weakness, breathlessness, cramps, electrolyte imbalance etc. The tests screen for anemia, infections, diabetes, abnormal lipids, serum protein levels, essential vitamins and minerals, kidney & muscle health markers and also electrolytes.",
  package_rate: "5800.00",
  meta_title: "Fitness Profile 1",
  meta_keywords: "fitness profile, athletic health, exercise testing",
  meta_description: "Comprehensive fitness profile for active individuals and athletes",
  tests_details: [
    "Hemoglobin",
    "Blood Glucose (Fasting)*",
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
    "CPK"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},
// Fitness Profile 2
{
  id: 19,
  package_name: "Fitness Profile 2",
  package_detail: "The Dr. Dangs Lab Fitness profile 2 has all the benefits of Fitness Profile 1 with the added advantage of Testosterone (free and total) and also liver metabolism markers such as SGOT and SGPT. Testosterone helps with the anabolic effects of muscle growth and strength. Helpful for assessing fitness and also the response of the body to supplements; this package is very helpful for anyone exercising / spending time in the gym frequently.",
  package_rate: "8500.00",
  meta_title: "Fitness Profile 2",
  meta_keywords: "advanced fitness profile, testosterone test, liver function",
  meta_description: "Advanced fitness profile with testosterone and liver function testing",
  tests_details: [
    "Hemoglobin",
    "Blood Glucose (Fasting)*",
    "Cholesterol*",
    "HDL Cholesterol*",
    "LDL Cholesterol*",
    "Total Calcium",
    "Ionized Calcium",
    "Phosphorus",
    "Total Protein",
    "eGFR",
    "Creatinine",
    "Sodium",
    "Potassium",
    "CPK",
    "Vitamin D3",
    "Testosterone Free & Total",
    "SGOT",
    "SGPT"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Ultra CHP 1 Females
{
  id: 20,
  package_name: "Ultra CHP 1 Females",
  package_detail: "This is an all inclusive health check profile that provides detailed insights on the overall health status of a female. In addition to the Comprehensive Health Profile (CHP), Ultra CHP1 includes HOMA-IR; a test assessing insulin resistance, tests for evaluating levels of basic female hormones, a COVID antibody test & to assess cardiac inflammation in the way of testing for high sensitivity troponin T",
  package_rate: "23500.00",
  meta_title: "Ultra CHP 1 Females",
  meta_keywords: "female health check, comprehensive health profile, hormone testing",
  meta_description: "Complete health check profile for females including hormones and cardiac markers",
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
    "Vitamins and Minerals Profile (Vitamin D3, Vitamin B12, Folic Acid, Iron, Ferritin, U.I.B.C., T.I.B.C., Transferrin saturation, Zinc)",
    "Copper, Zinc Copper Ratio ",
    "Thyroid profile with FT3, FT4, Ultra-sensitive TSH",
    "HbA1c (Glycosylated Hemoglobin)",
    "Comprehensive Urine Examination",
    "IgE",
    "hs CRP",
    "Microalbuminuria",
    "Amylase",
    "Lipase",
    "HOMA IR ( Insulin Resistance Index)*",
    "hs Troponin T",
    "FSH",
    "LH",
    "Estrogen",
    "Cystatin C",
    "Vitamins A & E",
    "Serum Protein electrophoresis",
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting.",
    "Tests marked with ** are to be performed as PP ( post prandial ie. 2 hours after finishing your meal)"
  ]
},

// Ultra CHP 2 Males
{
  id: 21,
  package_name: "Ultra CHP 2 Males",
  package_detail: "This is an all inclusive health check profile that provides detailed insights on the overall health status of a male. In addition to the Comprehensive Health Profile (CHP), Ultra CHP1 includes HOMA-IR; a test assessing insulin resistance, tests for evaluating levels of basic hormones ie. testosterone Free & Total, a COVID antibody test & to assess cardiac inflammation in the way of testing for high sensitivity troponin T",
  package_rate: "25000.00",
  meta_title: "Ultra CHP 2 Males",
  meta_keywords: "male health check, comprehensive health profile, testosterone testing",
  meta_description: "Complete health check profile for males including testosterone and cardiac markers",
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
    "Copper, Zinc Copper Ratio ",
    "Thyroid profile with FT3, FT4, Ultra-sensitive TSH",
    "HbA1c (Glycosylated Hemoglobin)",
    "Comprehensive Urine Examination",
    "IgE",
    "hs CRP",
    "Microalbuminuria",
    "Amylase",
    "Lipase",
    "Total & Free PSA",
    "HOMA IR ( Insulin Resistance Index)*",
    "hs Troponin T",
    "Testosterone Total",
    "Testosterone Free",
    "Cystatin C",
    "Vitamins A & E",
    "Serum Protein electrophoresis",
    
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting.",
    "Tests marked with ** are to be performed as PP ( post prandial ie. 2 hours after finishing your meal)"
  ]
},
// Basic Obesity Profile
{
  id: 22,
  package_name: "Basic Obesity Profile",
  package_detail: "This profile is helpful for individuals who are planning weight reduction for themselves and need to assess metabolic functions and hormonal levels that might contribute to obesity. This profile assesses the common causes of obesity including derangements in lipid levels, insulin resistance, thyroid and a liver function test along with the stress hormone, i.e. Cortisol. Leptin, a hormone that plays an integral role in regulating hunger, appetite & body weight is also included in this basic obesity profile.",
  package_rate: "11500.00",
  meta_title: "Basic Obesity Profile",
  meta_keywords: "obesity testing, weight management, metabolic profile",
  meta_description: "Basic profile for assessing metabolic and hormonal factors related to obesity",
  tests_details: [
    "CBC",
    "BLOOD GLUCOSE PP*",
    "Insulin Fasting*",
    "LFT (LIVER FUNCTION TEST)",
    "Thyroid Profile with FT3, FT4, Ultra-sensitive TSH",
    "LIPID PROFILE*",
    "Cortisol (Morning)",
    "Testosterone Total",
    "Blood Glucose PP**",
    "INSULIN PP**",
    "HOMA IR (Insulin Resistance Index)",
    "HbA1c (Glycosylated Hemoglobin)",
    "C Reactive Protein",
    "LEPTIN"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting.",
    "Tests marked with ** are to be performed as PP ( post prandial ie. 2 hours after finishing your meal)"
  ]
},

// Basic Autoimmune Profile
{
  id: 23,
  package_name: "Basic Autoimmune Profile",
  package_detail: "Autoimmune disease is a disease where the body's immune system mistakes its own cells as foreign substances and starts acting against the body's own tissues. The basic autoimmune profile aims at determining the underlying pathology in autoimmune disease diagnosis",
  package_rate: "12600.00",
  meta_title: "Basic Autoimmune Profile",
  meta_keywords: "autoimmune testing, immune system, autoimmune markers",
  meta_description: "Basic profile for diagnosing autoimmune conditions",
  tests_details: [
    "RA FACTOR",
    "ASMA",
    "AMA",
    "ANTI-CCP",
    "ANA",
    "ANTI-DS DNA",
    "TPO",
    "CRP"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Advanced Vitamins and Minerals Profile
{
  id: 24,
  package_name: "Advanced Vitamins and Minerals Profile",
  package_detail: "Deficiency of Vitamins and Minerals are amongst the commonest reasons for anemias, fatigue, muscle cramps, joint and body pains, tingling sensations, frequent infections and several other indistinct complaints. They play an essential role in strengthening the body's immune system. In addition to all the parameters covered in the vitamins & minerals profile this advanced version also comprises of vitamin A (retinol) ie. essential for healthy vision & vitamin E, responsible for optimal skin health & the robust functioning of your immune system. It also includes STFR, an advanced marker to assess iron deficiency and also to guide the physician to gauge the requirement or progress of iron therapy",
  package_rate: "15500.00",
  meta_title: "Advanced Vitamins and Minerals Profile",
  meta_keywords: "vitamin testing, mineral deficiency, nutritional assessment",
  meta_description: "Comprehensive testing for vitamins and minerals deficiencies",
  tests_details: [
    "Vitamin D3",
    "Ferritin",
    "U.I.B.C.",
    "Vitamin B12",
    "T.I.B.C.",
    "Vitamin A*",
    "Total Calcium",
    "Transferrin saturation",
    "Vitamin E*",
    "Ionized Calcium",
    "Magnesium",
    "STFR (Soluble Transferrin)",
    "Phosphorus",
    "Zinc",
    "Iron",
    "RBC Folate",
    "Folic Acid (Vitamin B9)"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},
// Allergynius Dx Profile
{
  id: 25,
  package_name: "Allergynius Dx",
  package_detail: "IgE based immediate allergies are most commonly caused by aeroallergens (respiratory allergens) & food allergens. These present with respiratory symptoms (sneezing, wheezing, cough, breathing difficulties, allergic rhinitis etc.) or skin related (hives, urticaria, rashes etc.) symptoms, respectively. & Allergynius Dx is a Molecular Allergy Diagnostics test based on Microarray using Nanotechnology and provides results for 163 food and respiratory allergens along with 294 components. This cutting-edge allergy testing is powered by AI based interpretation that is provided along with the report",
  package_rate: "28800.00",
  meta_title: "Allergynius Dx",
  meta_keywords: "allergy testing, molecular diagnostics, allergen profile",
  meta_description: "Advanced molecular allergy diagnostics using microarray technology",
  tests_details: [
    "Comprehensive Allergy profile",
    "Food profile",
    "Respiratory profile",
    "Skin Allergy (Rashes/Hives/Urticaria) Profile",
    "Vegetarian - Food Allergy Profile"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting.",
    "Comprehensive Allergy profile: ₹28,800",
    "Food profile: ₹25,500",
    "Respiratory profile: ₹25,500",
    "Skin Allergy Profile: ₹26,800",
    "Vegetarian - Food Allergy Profile: ₹23,500"
  ]
},

// Food Intolerance Profiles
{
  id: 26,
  package_name: "Food Intolerance Profiles",
  package_detail: "IgG based food intolerance (IMUPRO) is exclusively due to your diet and most commonly presents with gut related symptoms, such as bloating, gastritis, constipation, diarrhoea, irritable bowel syndrome (IBS), Inflammatory bowel disease(IBD), nausea and also other symptoms like chronic pain, chronic weight problems, skin problems (topic dermatitis, eczema, psoriasis) and nervous system disorders. There are various food panels available for testing 22/44/90, vegetarian/90 non vegetarian /180/270 foods are available and the one most appropriate for you, needs to be selected as per your daily diet.",
  package_rate: "Contact for price",
  meta_title: "Food Intolerance Profiles",
  meta_keywords: "food intolerance, IgG testing, dietary sensitivity",
  meta_description: "Comprehensive food intolerance testing profiles",
  tests_details: [
    "22 Foods Panel",
    "44 Foods Panel",
    "90 Foods Panel",
    "90 Vegetarian Foods Panel",
    "180 Foods Panel",
    "270 Foods Panel"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting.",
    "Price varies based on selected panel. Please contact for pricing."
  ]
},

// Cardiac Risk Profiles
{
  id: 27,
  package_name: "Basic Cardiac Risk Profile",
  package_detail: "Dr. Dangs Lab's cardiac risk profiles consist of a group of advanced tests that provide immediate, actionable clinical information for the risk stratification and aid in predicting future cardiac events.",
  package_rate: "3500.00",
  meta_title: "Basic Cardiac Risk Profile",
  meta_keywords: "cardiac risk assessment, heart health testing",
  meta_description: "Basic cardiac risk assessment profile",
  tests_details: [
    "High-Sensitivity C-Reactive Protein ( hs CRP )",
    "Homocysteine",
    "High-Sensitivity Cardiac Troponin I test ( hs Troponin I )"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Basic Cardiac Risk Profile with Lipid
{
  id: 28,
  package_name: "Basic Cardiac Risk Profile with Lipid Profile",
  package_detail: "Dr. Dangs Lab's cardiac risk profiles consist of a group of advanced tests that provide immediate, actionable clinical information for the risk stratification and aid in predicting future cardiac events.",
  package_rate: "4100.00",
  meta_title: "Basic Cardiac Risk Profile with Lipid",
  meta_keywords: "cardiac risk assessment, lipid profile",
  meta_description: "Basic cardiac risk assessment with lipid profile",
  tests_details: [
    "High-Sensitivity C-Reactive Protein ( hs CRP )",
    "Homocysteine",
    "High-Sensitivity Cardiac Troponin I test ( hs Troponin I )",
    "Lipid Profile*"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},

// Comprehensive Cardiac Risk Profile
{
  id: 29,
  package_name: "Comprehensive Cardiac Risk Profile",
  package_detail: "Dr. Dangs Lab's cardiac risk profiles consist of a group of advanced tests that provide immediate, actionable clinical information for the risk stratification and aid in predicting future cardiac events.",
  package_rate: "13900.00",
  meta_title: "Comprehensive Cardiac Risk Profile",
  meta_keywords: "comprehensive cardiac assessment",
  meta_description: "Comprehensive cardiac risk assessment profile",
  tests_details: [
    "High-Sensitivity C-Reactive Protein ( hs CRP )",
    "High-Sensitivity Cardiac Troponin I test ( hs Troponin I )",
    "High-Sensitivity Cardiac Troponin T test ( hs Troponin T )",
    "Pro-B-type Natriuretic Peptide (Pro BNP)",
    "Leptin",
    "Extended Lipid Profile*(Lipid Profile with Lipoprotein (a), Apolipoprotein A & B, and Homocysteine)"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},
{
  id: 28,
  package_name: "Fatigue Profile",
  package_detail: "This profile helps in determining the causative factors of long-term fatigue and weakness. The profile includes an assessment of key vitamins, minerals and essential parameters, deficiency of which may cause fatigue. Additionally, it also includes an inflammatory marker, liver enzymes, electrolytes, blood counts along with a complete kidney function test, tests for diabetes, cortisol-the bodies stress hormone as well as urine analysis to ascertain the cause of fatigue. ANA (antinuclear antibody) screening for autoimmune disorders is also included in the fatigue profile.",
  package_rate: "12700.00",
  meta_title: "Fatigue Profile",
  meta_keywords: "fatigue testing, weakness assessment, vitamin deficiency",
  meta_description: "Comprehensive profile for determining causes of long-term fatigue and weakness",
  tests_details: [
    "CBC",
    "Iron",
    "S.G.O.T",
    "S.G.P.T",
    "U.I.B.C",
    "T.I.B.C",
    "Sodium",
    "Potassium",
    "Chloride",
    "Magnesium",
    "Phosphorus",
    "Ferritin",
    "Vitamin D3",
    "Microalbuminuria",
    "Cortisol (Morning)",
    "Anti-Nuclear Antibody",
    "Active-B12 (Holotranscobalamin)",
    "Blood Glucose Random",
    "Kidney Function Test",
    "HbA1c (Glycosylated Hemoglobin)",
    "Transferrin saturation",
    "Thyroid Profile with FT3, FT4, Ultrasensitiv TSH",
    "Comprehensive Urine Examination"
  ],
  notes_contents: [
    "Tests marked with * require minimum 10-12 hours fasting."
  ]
},


{
  id: 29,
  package_name: "Comprehensive Thyroid Profile",
  package_detail: "Dr. Dangs Lab offers a state-of-the-art Comprehensive Thyroid Profile, a vital tool in assessing thyroid health. This comprehensive panel includes key markers such as Thyroid profile with FT3, FT4, ultra-sensitive TSH, anti-thyroglobulin antibodies, anti-thyroid peroxidase (Anti-TPO), reverse T3 (RT3), as well as Total T3 and Total T4 levels. These precise measurements provide a thorough evaluation of thyroid function, aiding in the diagnosis and management of thyroid disorders, ensuring comprehensive and accurate insights into the individual's health.",
  package_rate: "9800.00",
  meta_title: "Comprehensive Thyroid Profile",
  meta_keywords: "thyroid testing, FT3, FT4, TSH, anti-TPO",
  meta_description: "Comprehensive profile for assessing thyroid health and managing disorders.",
  tests_details: [
    "Thyroid profile with FT3, FT4, Ultra-sensitive TSH",
    "T3, total",
    "T4, total",
    "Anti-TG: anti-thyroglobulin antibodies",
    "Anti-TPO: anti-thyroid peroxidase antibodies",
    "Reverse T3 (RT3)"
  ],
  notes_contents: []
},
{
  id: 30,
  package_name: "Basic Hairfall Profile",
  package_detail: "The Basic Hairfall Panel is designed to help identify common underlying causes of hair loss by assessing key health markers. Hairfall can result from a variety of factors, including hormonal imbalances, nutritional deficiencies, and other health issues. This comprehensive package includes essential tests such as the Thyroid profile with FT3, FT4, Ultra-sensitive TSH, CBC with ESR, Vitamins and Minerals Profile including levels of Magnesium, Vitamin D3, and Vitamin B12. It also measures Total Calcium, Phosphorus, Folic Acid (B9), Ferritin, Iron, TIBC, Transferrin Saturation, UIBC & Zinc. This profile also includes DHEAS (Dehydroepiandrosterone Sulfate), a hormone produced by the adrenal glands that serves as a precursor to male and female sex hormones. By evaluating these parameters, this panel assists in ruling out common causes and guiding appropriate treatment options.",
  package_rate: "9500.00",
  meta_title: "Basic Hairfall Profile",
  meta_keywords: "hairfall testing, vitamin deficiency, thyroid profile",
  meta_description: "Comprehensive profile for identifying causes of hairfall through essential health markers.",
  tests_details: [
    "Thyroid profile with FT3, FT4, Ultra-sensitive TSH",
    "CBC with ESR",
    "Vitamins & Minerals Profile (Vitamin D3, Calcium, Phosphorous, Vitamin B12, Folic Acid, Iron, Ferritin, UIBC, TIBC, Transferrin Saturation, Magnesium & Zinc)",
    "DHEAS (Dehydroepiandrosterone Sulfate)"
  ],
  notes_contents: []
},
{
  id: 31,
  package_name: "Basic Male Hormonal Profile",
  package_detail: "Basic male hormonal profile measures the levels of hormones that play an active role in men’s health and may be an important part of sexual health as well as general wellbeing in men. Cortisol, also known as the stress hormone, and a Thyroid profile with FT3, FT4 & Ultra-sensitive TSH are included along with all other essential male hormones. This profile gives a broader picture of your health and is useful in determining the reasons behind general weakness, inability to lose weight, sexual dysfunctions, and various lifestyle-related issues among males.",
  package_rate: "10000.00",
  meta_title: "Basic Male Hormonal Profile",
  meta_keywords: "male hormonal testing, testosterone, cortisol",
  meta_description: "Comprehensive profile for evaluating male hormones and overall health.",
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
    "Prolactin (Pooled)"
  ],
  notes_contents: []
}
    
   
  ];

  const handlePackageSelect = (packageName) => {
    const encodedPackageName = encodeURIComponent(packageName);
    router.push(`/HomeCollection?package=${encodedPackageName}`);
  };

  return (
    <>
      <div className={styles.TestProfileHeaderImagae}>
        <Image
          src="/PhotosAndLogos/OurLabC1.jpeg"
          alt="Test Profile Background"
          width={1000}
          height={400}
          priority
        />
      </div>

      <div className={styles.healthCheckupSection}>
        <h1>Health Checkup Packages in Delhi / NCR</h1>
        <p className={styles.subtitle}>
          We provide home collection services in Delhi-NCR region including Gurgaon, Faridabad, Noida, and Ghaziabad.
        </p>

        <a 
          href="/TEST-PACKAGES-BROCHURE-INCLUDING-FM-TESTS-APRIL24.pdf" 
          className={styles.downloadButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Health Test Package Brochure
        </a>

        <p className={styles.description}>
          Dr. Dangs Lab provides an extensive range of health packages that are specifically curated by the Dr. Dangs to include effective diagnostic tests according to varied diagnostic requirements. Preventive checks are an important part of disease prevention and are the most important tools in the hands of doctors to identify diseases and risk factors early. We offer a range of preventive health packages including our flagship Smart Check Profiles. Our Smart Check Profiles provide successively deeper insights into the body's functions. Various other packages provide diagnostic solutions for commonly occurring diseases as well as health concerns.
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgile40years.png"
              alt="40 Years of Service"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>40 Years of Service</p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgilegoogleRating.png"
              alt="Rated 4.9/5"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>
              Rated 4.9/5<br />Customers love us!
            </p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgileNABL.png"
              alt="NABL Accredited"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>NABL Accredited</p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgileDiscover.png"
              alt="Get Personalized Test Package"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>Get Personalized Test Package</p>
          </div>
        </div>
      </div>

      <div className={styles.testProfiles}>
        <h5>Towards Better Health
        </h5>
        <div className={styles.profilesRow}>
          {profiles.map((profile, index) => (
            <div className={styles.profileCard} key={index}>
              <h2>{profile.package_name}</h2>
              <p>{profile.package_detail}</p>
              <h3>Tests:</h3>
              <ul>
                {profile.tests_details.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
              {profile.notes_contents && profile.notes_contents.length > 0 && (
                <div className={styles.noteSection}>
                  <h3>Notes:</h3>
                  <ul>
                    {profile.notes_contents.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={styles.price}>
                <div className={styles.PriceInTestProfiles}>
                  <h3>Price:</h3>
                </div>
                <div className={styles.ProfilesPriceValue}>
                  <h3>₹{profile.package_rate}</h3>
                </div>
              </div>
              <button 
                className={styles.bookButton}
                onClick={() => handlePackageSelect(profile.package_name)}
              >
                Book this package
              </button>
            </div>
          ))}
        </div>
      </div>
      </>
  );
};

export default TestProfiles;