import { cn } from '@/lib/utils';
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

const ButtonVariants = cva(
  "group flex flex-row gap-3 items-center justify-center web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary web:hover:opacity-90 active:opacity-90",
        destructive: "bg-destructive web:hover:opacity-90 active:opacity-90",
        outline:
          "border border-primary border-2 bg-primary-backfill web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        secondary: "bg-secondary web:hover:opacity-80 active:opacity-80",
        ghost:
          "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        link: "web:underline-offset-4 web:hover:underline web:focus:underline ",
        translucent: "bg-translucent active:opacity-90",
      },
      size: {
        default: "h-10 px-4 py-2 native:h-12 native:px-5",
        sm: "h-9 px-3",
        lg: "h-11 px-8 native:h-16",
        icon: "h-10 w-10",
        auto: "h-auto px-2 py-1 rounded-md",
      },
      radius: {
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        md: "rounded-md",
        none: "rounded-none",
        full: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "xl",
    },
  },
);

const ButtonTextVariants = cva(
  "web:whitespace-nowrap text-base font-bold text-foreground web:transition-colors",
  {
    variants: {
      variant: {
        default: "text-white",
        destructive: "text-destructive-foreground",
        outline: "group-active:text-primary text-primary",
        secondary:
          "text-secondary-foreground group-active:text-secondary-foreground",
        ghost: "group-active:text-accent-foreground",
        link: "text-foreground group-active:underline",
        translucent: "text-white",
      },
      size: {
        default: "native:text-base",
        sm: "text-base font-semibold",
        lg: "native:text-lg",
        icon: "text-base",
        auto: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof ButtonVariants> & {
    loading?: boolean;
};

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, radius, children, loading, ...props }, ref) => (
  <Pressable
    className={cn(
      ButtonVariants({ variant, size, radius }),
      props.disabled && "bg-gray-300 web:pointer-events-none"
      , className)}
    ref={ref}
    role="button"
    {...props}
  >
    <Text>test</Text>
  </Pressable>
));
Button.displayName = "Button";

export { Button, ButtonTextVariants as buttonTextVariants, ButtonVariants as buttonVariants };
export type { ButtonProps };
