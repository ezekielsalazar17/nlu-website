import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 lg:text-4xl font-extrabold tracking-tight text-3xl",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-wide text-balance",
      h3: "scroll-m-20 lg:text-2xl font-semibold tracking-wide text-xl",
      h4: "scroll-m-20 lg:text-xl font-semibold tracking-tight text-lg",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

const variantElementMap: Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  keyof React.JSX.IntrinsicElements
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  blockquote: "blockquote",
  code: "code",
  list: "ul",
};

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: keyof React.JSX.IntrinsicElements;
  };

export function Typography({ variant = "p", as, className, ...props }: TypographyProps) {
  const Tag = (as ?? variantElementMap[variant!]) as React.ElementType;
  return (
    <Tag
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
}
