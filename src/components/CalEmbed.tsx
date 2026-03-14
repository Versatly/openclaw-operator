"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CAL_NAMESPACE } from "@/lib/cal";

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#f26430",
          },
        },
      });
    })();
  }, []);

  return null;
}
