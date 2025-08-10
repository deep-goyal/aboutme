"use client"

import * as React from "react"
import type { ReactNode } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  label = null,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { label?: ReactNode }) {


  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/10 relative h-12 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="rounded-full h-full w-full flex-1 transition-all bg-green-500"
        style={{ transform: `translateX(-${100 - (value || 0)}%)`, transitionDuration: '5000ms' }}
      />
      <span
        data-slot="progress-label"
        className="absolute inset-0 left-0 flex items-center pl-4 text-lg font-medium text-white dark:text-zinc-950"
      >
        {label}
      </span>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
