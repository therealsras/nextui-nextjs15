"use client"

import { Suspense } from "react";
import Loading from "./loading";
import { Chip } from "@nextui-org/react";
export default function Home() {  
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex items-center justify-center h-full">
      <Chip
            color="primary"
            size="sm"
            variant="flat"
          >
           something
          </Chip>
      </div>

    </Suspense>
  );
}
