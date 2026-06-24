"use client";

import Modal from "./Modal";
import type { CardiacTier } from "../../_data/tier-data";

interface CardiacDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  tiers: CardiacTier[];
  onBook: (name: string) => void;
}

export default function CardiacDetailModal({
  isOpen,
  onClose,
  tiers,
  onBook,
}: CardiacDetailModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cardiac Risk Profiles"
      footer={
        <div className="bg-yellow-50 p-3 rounded">
          <p className="text-xs text-gray-700">
            <strong>Note:</strong> Tests marked with * require minimum 10-12
            hours fasting.
          </p>
        </div>
      }
    >
      <div className="p-6 space-y-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{tier.name}</p>
                <ul className="mt-2 space-y-1">
                  {tier.tests.map((test, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {test}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right ml-4 flex-shrink-0">
                <p className="text-xl font-bold text-red-600">₹{tier.price}</p>
                <button
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                  onClick={() => onBook(`Cardiac Risk Profile - ${tier.name}`)}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
