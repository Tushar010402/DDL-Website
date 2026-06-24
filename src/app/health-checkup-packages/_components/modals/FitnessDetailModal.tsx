"use client";

import { AlertCircle } from "lucide-react";
import Modal from "./Modal";
import type { FitnessTiers } from "../../_lib/types";

interface FitnessDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  tiers: FitnessTiers;
  onBook: (name: string) => void;
}

export default function FitnessDetailModal({
  isOpen,
  onClose,
  tiers,
  onBook,
}: FitnessDetailModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Fitness Profiles"
      maxWidth="max-w-4xl 2xl:max-w-6xl"
      footer={
        <div className="bg-yellow-50 p-3 rounded flex items-start gap-2">
          <AlertCircle
            className="text-amber-600 flex-shrink-0 mt-0.5"
            size={18}
          />
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Tests marked with * require minimum 10-12
            hours fasting.
          </p>
        </div>
      }
    >
      <div className="p-6">
        <p className="text-gray-700 mb-6">
          The Dr. Dangs Lab Fitness Profile helps active individuals identify
          deficiencies affecting performance & issues like weakness, cramps, or
          electrolyte imbalance. It screens for anemia, diabetes, lipids,
          proteins, vitamins, minerals, kidney and muscle health. The male panel
          includes additional testosterone and liver markers for comprehensive
          assessment.
        </p>

        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center p-4 border border-gray-300">
                <div className="font-semibold text-black">
                  &#9792; Females
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  (INR {tiers.female.price})
                </div>
              </th>
              <th className="text-center p-4 border border-gray-300">
                <div className="font-semibold text-black">&#9794; Males</div>
                <div className="text-sm text-gray-600 mt-1">
                  (INR {tiers.male.price})
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tiers.female.tests.map((test, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-3 border border-gray-300 text-sm text-center text-gray-800">
                  {test}
                </td>
                <td className="p-3 border border-gray-300 text-sm text-center text-gray-800">
                  {tiers.male.tests.includes(test) ? test : "-"}
                </td>
              </tr>
            ))}
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
                    INR {tiers.female.price}
                  </p>
                </div>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                  onClick={() => onBook("Fitness Profile - Female")}
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
                    INR {tiers.male.price}
                  </p>
                </div>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                  onClick={() => onBook("Fitness Profile - Male")}
                >
                  Book This Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
