import React, { type MouseEvent } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

type SweepButtonProps = {
  text: string;
  duration: number; // millisecond
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SweepButton({ text, duration, ...props }: SweepButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);
  };

  return (
    <motion.div initial="initial" whileHover="hover" whileTap={{ scale: 0.95 }}>
      <Button
        className="relative overflow-hidden shadow-xl transition-colors duration-300 bg-teal-600 hover:bg-teal-700" // radix ui has a button active filter to reduce the brightness
        onClick={handleClick}
      >
        <span className="z-10">{text}</span>
        <motion.span
          className="absolute top-0 left-0 h-full bg-teal-950"
          variants={{
            initial: { width: "0%" },
            hover: { width: "100%" },
          }}
          transition={{ duration: duration / 1000, ease: "easeInOut" }}
          style={{
            borderRadius: "inherit",
          }}
        />
      </Button>
    </motion.div>
  );
}
