"use client";

import Modal from "./Modal";
import type { MultiTierPackage, MultiTierEntry } from "../../_lib/types";

interface TierSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: MultiTierPackage | null;
  onSelectTier: (tier: MultiTierEntry) => void;
}

export default function TierSelectionModal({
  isOpen,
  onClose,
  packageData,
  onSelectTier,
}: TierSelectionModalProps) {
  if (!packageData) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Select Package Tier to Compare"
      maxWidth="max-w-2xl"
    >
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-4">
          {packageData.name} has multiple tiers. Please select which tier
          you&apos;d like to add to comparison.
        </p>
        <div className="grid gap-4">
          {packageData.tiers.map((tier) => (
            <button
              key={tier.key}
              onClick={() => onSelectTier(tier)}
              className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all group"
            >
              <div className="text-left">
                <div className="font-semibold text-lg text-gray-800 group-hover:text-red-600">
                  {tier.name}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">
                  ₹{tier.price}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
