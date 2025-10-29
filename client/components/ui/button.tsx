import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-9 rounded-full px-4 text-sm",
        lg: "h-12 px-8 py-3 text-base md:h-14 md:px-10 md:py-3 md:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // Complete inline styles - override Tailwind for Netlify compatibility
    const inlineStyles: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      fontWeight: 500,
      transition: "all 0.2s ease-in-out",
      cursor: "pointer",
      border: "none",
      outline: "none",
      ...(variant === "default" && {
        backgroundColor: "#00ccbd",
        color: "#ffffff",
        borderRadius: "9999px",
      }),
      ...(variant === "outline" && {
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "1px solid #333333",
        borderRadius: "9999px",
      }),
      ...(variant === "secondary" && {
        backgroundColor: "#262626",
        color: "#ffffff",
        borderRadius: "9999px",
      }),
      ...(variant === "destructive" && {
        backgroundColor: "#dc2626",
        color: "#ffffff",
        borderRadius: "6px",
      }),
      ...(variant === "ghost" && {
        backgroundColor: "transparent",
        color: "#ffffff",
        borderRadius: "6px",
      }),
      ...(variant === "link" && {
        backgroundColor: "transparent",
        color: "#00ccbd",
        textDecoration: "underline",
      }),
      ...(size === "lg" && {
        height: "48px",
        paddingLeft: "32px",
        paddingRight: "32px",
        fontSize: "16px",
        gap: "8px",
      }),
      ...(size === "default" && {
        height: "40px",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontSize: "14px",
        gap: "8px",
      }),
      ...(size === "sm" && {
        height: "36px",
        paddingLeft: "16px",
        paddingRight: "16px",
        fontSize: "14px",
        borderRadius: "9999px",
        gap: "6px",
      }),
      ...(size === "icon" && {
        height: "40px",
        width: "40px",
        padding: "0",
      }),
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={inlineStyles}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
