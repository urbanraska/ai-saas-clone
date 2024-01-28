"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5f3015c9-45b4-4006-8f75-7590e916972c");
  }, []);

  return null;
};
