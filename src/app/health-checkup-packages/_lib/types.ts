export interface NoteContent {
  label: string;
  note: string;
}

export interface TestProfile {
  id: number;
  package_name: string;
  category: string;
  package_detail: string;
  package_rate?: string;
  male_price?: string;
  tests_details: string[];
  notes_contents: (string | NoteContent)[];
  link?: string;
}

export interface TierDefinition {
  name: string;
  price: string;
  tests: string[];
}

export interface TierDefinitionWithBooleans {
  name: string;
  price: string;
  tests: Record<string, boolean>;
}

export interface FitnessTiers {
  female: TierDefinition;
  male: TierDefinition;
}

export interface VitaminTiers {
  basic: TierDefinition;
  advanced: TierDefinition;
  comprehensive: TierDefinition;
}

export interface FeverTiers {
  monsoon: TierDefinition;
  basic: TierDefinition;
  advanced: TierDefinition;
}

export interface MultiTierEntry {
  key: string;
  name: string;
  price: string;
  tests: string[];
}

export interface MultiTierPackage {
  name: string;
  tiers: MultiTierEntry[];
}

export interface ComparisonProfile extends TestProfile {
  parentId?: number;
  tierName?: string;
  isTierProfile?: boolean;
}

export type ModalName =
  | "vitamin"
  | "fever"
  | "allerginius"
  | "cardiac"
  | "menopause"
  | "bloating"
  | "fitness"
  | "comparison"
  | "tierSelection"
  | null;

export interface FilterState {
  searchQuery: string;
  selectedTests: string[];
  requiresFasting: string;
  selectedCategories: string[];
}

export interface AllerginiusProfile {
  name: string;
  allergens: number;
  components: number;
  price: string;
}
