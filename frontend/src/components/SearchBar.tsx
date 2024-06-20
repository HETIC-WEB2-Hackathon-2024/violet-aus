interface SearchProps {
  placeholder: string;
  className: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  placeholder,
  className,
  name,
  onChange,
}: SearchProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      name={name}
      onChange={(event) => onChange(event)}
    />
  );
}
