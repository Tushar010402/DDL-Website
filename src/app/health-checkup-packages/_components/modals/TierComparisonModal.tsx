"use client";

import { Check, X } from "lucide-react";
import Modal from "./Modal";

interface TierConfig {
  title: string;
  tiers: {
    name: string;
    price: string;
    tests: string[] | Record<string, boolean>;
  }[];
  allTests: string[];
  /** If true, tests is Record<string,boolean>; if false, tests is string[] */
  useBooleanTests?: boolean;
  note?: string;
  onBookTier: (tierName: string) => void;
}

interface TierComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: TierConfig;
}

export default function TierComparisonModal({
  isOpen,
  onClose,
  config,
}: TierComparisonModalProps) {
  const { title, tiers, allTests, useBooleanTests, note, onBookTier } = config;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      footer={
        note ? (
          <div className="bg-yellow-50 p-3 rounded">
            <p className="text-xs text-gray-700">
              <strong>Note:</strong> {note}
            </p>
          </div>
        ) : undefined
      }
    >
      <table className="w-full">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th className="text-left p-3 font-semibold text-black text-sm">
              Name of {useBooleanTests ? "Test" : "Panel"}
            </th>
            {tiers.map((tier) => (
              <th key={tier.name} className="text-center p-3">
                <div className="font-semibold text-black text-sm">
                  {tier.name}
                </div>
                <div className="text-xs text-gray-600">INR {tier.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allTests.map((test, index) => (
            <tr
              key={test}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="p-2 text-sm text-black">{test}</td>
              {tiers.map((tier) => {
                const hasTest = useBooleanTests
                  ? (tier.tests as Record<string, boolean>)[test]
                  : (tier.tests as string[]).includes(test);
                return (
                  <td key={tier.name} className="text-center p-2">
                    {hasTest ? (
                      <Check className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-gray-300 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}

          {/* Book Buttons Row */}
          <tr className="bg-gray-50 border-t-2">
            <td className="p-3 font-semibold text-black text-sm">Book Now</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="text-center p-3">
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                  onClick={() => onBookTier(tier.name)}
                >
                  Book This Package
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Modal>
  );
}
