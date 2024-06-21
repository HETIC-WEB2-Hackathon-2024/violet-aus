import { Button } from "@material-tailwind/react";

interface ButtonProps {
  className: string;
  textContent: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonDefault({
  className,
  textContent,
  onClick,
}: ButtonProps) {
  return (
    <Button className={className} onClick={(event) => onClick(event)}>
      {textContent}
    </Button>
  );
}
