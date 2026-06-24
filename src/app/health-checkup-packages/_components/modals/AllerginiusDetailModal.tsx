"use client";

import Modal from "./Modal";
import type { AllerginiusProfile } from "../../_lib/types";

interface AllerginiusDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: AllerginiusProfile[];
  onBook: (name: string) => void;
}

export default function AllerginiusDetailModal({
  isOpen,
  onClose,
  profiles,
  onBook,
}: AllerginiusDetailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Allerginius Dx Profiles">
      <div className="p-6">
        <p className="text-gray-700 mb-6">
          The Allerginius Dx Test is a comprehensive, component-resolved
          diagnostic platform that identifies specific allergen components
          causing allergic reactions.
        </p>
        <div className="grid gap-4">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{profile.name}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {profile.allergens} Allergens | {profile.components}{" "}
                    Components
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-red-600">
                    ₹{profile.price}
                  </p>
                  <button
                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                    onClick={() =>
                      onBook(`Allerginius Dx - ${profile.name}`)
                    }
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
