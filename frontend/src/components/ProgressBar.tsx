import { Button, Typography, Progress } from "@material-tailwind/react";
import { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : prev));
  };

  const getColor = (progress: number) => {
    if (progress >= 10 && progress <= 30) return "red";
    if (progress >= 40 && progress <= 50) return "orange";
    if (progress >= 60 && progress <= 90) return "yellow";
    if (progress == 100) return "green";
  };

  return (
    <div className="w-3/4">
      <Progress value={progress} color={getColor(progress)} className="mb-4" />
      <Typography variant="h6" className="text-center mb-4">
        {progress}%
      </Typography>
      <Button
        onClick={increaseProgress}
        disabled={progress >= 100}
        className="w-full"
      >
        {progress >= 100 ? "Objectif atteint" : "Ajouter une candidature"}
      </Button>
    </div>
  );
}

