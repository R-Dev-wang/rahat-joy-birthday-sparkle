import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: string;
  animationDelay: string;
  color: string;
}

export const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const pieces: ConfettiPiece[] = [];
    const colors = [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(var(--accent))",
      "hsl(var(--primary-glow))",
    ];

    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 animate-confetti-fall"
          style={{
            left: piece.left,
            animationDelay: piece.animationDelay,
            backgroundColor: piece.color,
          }}
        />
      ))}
    </div>
  );
};
