"use client";

import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Popup */}
     {showPopup && (
  <div className="absolute bottom-20 right-16 bg-white shadow-lg rounded-2xl p-4 w-72 border border-gray-300 z-[9999] animate-slideUp">
    {/* Title */}
    <h3 className="text-lg text-gray-800 font-bold mb-1">HI THERE!</h3>
    <p className="text-sm text-gray-600 mb-4">
      We are here to help you! Chat with us on WhatsApp for any queries.
    </p>

    {/* Start Chat Button */}
    <button
      className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all"
      onClick={() =>
        window.open(
          "https://wa.me/919266399785?text=Hi",
          "_blank"
        )
      }
    >
      <FaWhatsapp size={20} className="mr-2" />
      START CHAT
    </button>

    {/* Footer */}
    <p className="text-xs text-center text-gray-500 mt-2">
      Powered by Dr Dangs Lab
    </p>
  </div>
)}


      {/* Floating Button */}
      <button
        className="flex items-center gap-2 px-4 py-3 text-green-500 bg-white border-2 border-gray-900 rounded-full shadow-md hover:bg-green-500 hover:text-white transition-all"
        onClick={() => setShowPopup(!showPopup)}
      >
        {showPopup ? (
          <>
            <FaTimes size={20} />
            <span className="font-medium hidden sm:inline">Close</span>
          </>
        ) : (
          <>
            <FaWhatsapp size={20} />
            <span className="font-medium ">Chat with us</span>
          </>
        )}
      </button>
    </div>
  );
}
