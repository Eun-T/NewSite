import { useEffect, useState } from "react";

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL = 150;
const PAUSE_MS = 150;
const DELETING_INTERVAL = 150;

export const useTypedSuperpower = (superpowers: string[]): {
  typedSuperpower: string,
  selectedSuperpower: string,
  phase: Phase
} => {
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedSuperpower, setTypedSuperpower] = useState("");
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedSuperPower = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length + 1
        );

        if (nextTypedSuperPower === typedSuperpower) {
          setPhase(Phase.Pausing);
          return
        }

        const timeout = setTimeout(() => {
          setTypedSuperpower(
            nextTypedSuperPower
          );
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!typedSuperpower) {
          const nextIndex = selectedIndex + 1
          setSelectedIndex(superpowers[nextIndex] ? nextIndex : 0)
          setPhase(Phase.Typing);
          return
        }
        const nextRemaining = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedSuperpower(
            nextRemaining
          );
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);

        return () => clearTimeout(timeout);
    }

    // if (phase === Phase.Pausing) return;
  }, [superpowers, typedSuperpower, phase, selectedIndex]);

  return {typedSuperpower,phase,selectedSuperpower: superpowers[selectedIndex]};
};
