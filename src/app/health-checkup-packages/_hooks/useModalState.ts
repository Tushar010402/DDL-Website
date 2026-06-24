"use client";

import { useState, useCallback, useMemo } from "react";
import type { ModalName } from "../_lib/types";

export function useModalState() {
  const [openModal, setOpenModal] = useState<ModalName>(null);

  const open = useCallback((name: ModalName) => setOpenModal(name), []);
  const close = useCallback(() => setOpenModal(null), []);

  return useMemo(() => ({ openModal, open, close }) as const, [openModal, open, close]);
}
