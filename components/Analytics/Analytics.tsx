"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initGA, logPageView } from "@/app/analytics";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // initialize once on mount
    initGA();
  }, []);

  useEffect(() => {
    // send page view on path change
    const path = pathname + (searchParams ? `?${searchParams.toString()}` : "");
    logPageView(path);
  }, [pathname, searchParams]);

  return null;
}
