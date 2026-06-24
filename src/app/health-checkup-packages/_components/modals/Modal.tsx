"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
  footer?: React.ReactNode;
  hideHeader?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-3xl 2xl:max-w-6xl",
  footer,
  hideHeader = false,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Focus trap
      if (e.key === "Tab" && contentRef.current) {
        const focusable = contentRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    // Focus first focusable element
    const timer = setTimeout(() => {
      const btn = contentRef.current?.querySelector<HTMLElement>("button");
      btn?.focus();
    }, 50);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/50 z-[100000] flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog"}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={contentRef}
        className={`bg-white rounded-lg ${maxWidth} w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl`}
      >
        {!hideHeader && (
          <div className="p-4 border-b flex items-center justify-between flex-shrink-0">
            <h2 className="text-xl font-bold text-black">{title}</h2>
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
        )}
        <div className="overflow-auto flex-1">{children}</div>
        {footer && (
          <div className="p-4 border-t flex-shrink-0">{footer}</div>
        )}
      </div>
    </div>
  );
}
