import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-lg border border-gray-300 bg-white/20 backdrop-blur-sm px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
