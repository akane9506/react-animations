import * as React from "react";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { MessageSquareQuote } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  contentClassName?: string;
} & PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export default function Card({
  title,
  description,
  contentClassName,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl flex flex-col gap-1 justify-start shadow-xl bg-white",
        className
      )}
      {...props}
    >
      <div className="p-2 space-y-3">
        <section
          className={cn(
            "relative bg-accent rounded-2xl flex justify-center items-center overflow-hidden",
            contentClassName
          )}
        >
          {children}
        </section>
        <section className="px-4 flex justify-between items-center">
          <div className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm/4 text-muted-foreground">{description}</p>
          </div>
          <MessageSquareQuote
            size={40}
            className="stroke-1 p-1 bg-muted-foreground rounded-full stroke-background hover:bg-accent hover:stroke-primary transition-colors duration-150"
          />
        </section>
      </div>
      <Separator />
      <div className="my-3 p-2">Tags</div>
    </div>
  );
}
