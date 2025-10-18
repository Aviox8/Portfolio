import * as React from "react";
import { motion } from 'framer-motion';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-accent text-black hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 dark:text-white dark:hover:shadow-accent/40 active:scale-95",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600/20 dark:focus-visible:ring-red-600/40 hover:shadow-lg hover:shadow-red-600/40 active:scale-95",
        outline:
          "border-2 bg-background text-foreground hover:bg-accent/10 hover:border-accent dark:bg-background/50 dark:border-white/20 dark:hover:bg-accent/20 transition-all active:scale-95",
        secondary:
          "bg-white/10 text-foreground hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40 hover:shadow-lg transition-all active:scale-95",
        ghost:
          "hover:bg-accent/10 text-foreground hover:text-accent dark:hover:bg-accent/20 transition-all active:scale-95",
        link: "text-accent underline-offset-4 hover:underline hover:text-accent/80 transition-colors",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  if (asChild) {
    return (
      <Slot
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props as any}
      />
    );
  }

  const MotionButton = motion.button;
  return (
    <MotionButton
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...(props as any)}
    />
  );
}

export { Button, buttonVariants };
