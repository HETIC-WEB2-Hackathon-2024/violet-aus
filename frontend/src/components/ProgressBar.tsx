import { Button, Typography, Progress, Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
  addIdOffer: (id: string) => void;
  deleteIdOffer: (id: string) => void;
  idOffer: number;
  alreadyApplied: boolean;
}

export default function ProgressBar({
  openAlert,
  setOpenAlert,
  addIdOffer,
  deleteIdOffer,
  idOffer,
  alreadyApplied,
}: ProgressBarProps) {
  const storedProgress = localStorage.getItem("progress");
  const initialProgress =
    storedProgress !== null ? parseInt(storedProgress) : 0;
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    localStorage.setItem("progress", progress.toString());
  }, [progress]);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : prev));
  };

  const decreaseProgress = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : prev));
  };

  const getColor = (progress: number) => {
    if (progress >= 10 && progress <= 30) return "red";
    if (progress >= 40 && progress <= 50) return "orange";
    if (progress >= 60 && progress <= 90) return "yellow";
    if (progress === 100) return "green";
  };

  const handleButtonClick = () => {
    if (alreadyApplied) {
      decreaseProgress();
      deleteIdOffer(idOffer.toString());
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 2000);
    } else {
      increaseProgress();
      addIdOffer(idOffer.toString());
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 2000);
    }
  };
  return (
    <div>
      <Button
        className="bg-primary-base_dark bg-none"
        variant="gradient"
        onClick={handleButtonClick}
      >
        {alreadyApplied ? "Enlever ma candidature" : "Candidater"}
      </Button>
      <div className="absolute w-full inset-x-0 bottom-[-50px]">
        <Alert
          open={openAlert}
          onClose={() => setOpenAlert(false)}
          className="alertClass w-full bg-primary-light_white dark:bg-primary-dark_white text-white"
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          <style>{`.alertClass > :first-child { width : 100%; }`}</style>
          <Typography variant="h6" className="mb-4 w-full">
            Objectif de candidature
          </Typography>
          <Progress
            value={progress}
            color={getColor(progress)}
            className="mb-4"
          />
          <Typography variant="h6" className="text-center mb-4 w-full">
            {progress}%
          </Typography>
        </Alert>
      </div>
    </div>
  );
}
