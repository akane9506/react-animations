import { type MouseEvent } from "react";
import { Button, Text, type ButtonProps } from "@radix-ui/themes";
import { motion } from "motion/react";

type RippleButtonProps = {
  text: string;
  duration: number; // millisecond
} & ButtonProps;

export default function SliderButton({ text, duration, ...props }: RippleButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);
  };

  return (
    <motion.div initial="initial" whileHover="hover">
      <Button
        size="3"
        radius="full"
        variant="solid"
        className="relative overflow-hidden brightness-100 shadow-lg shadow-(color:--gray-8)"
        onClick={handleClick}
      >
        <Text weight="medium" className="z-10">
          {text}
        </Text>
        <motion.span
          variants={{
            initial: { x: "-100%" },
            hover: { x: "0%" },
          }}
          transition={{ duration: duration / 1000, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "var(--accent-12)",
            borderRadius: "inherit",
          }}
        />
      </Button>
    </motion.div>
  );
}
