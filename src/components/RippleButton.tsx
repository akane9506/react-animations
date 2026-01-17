import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

export default function RippleButton() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  return <Button></Button>;
}
