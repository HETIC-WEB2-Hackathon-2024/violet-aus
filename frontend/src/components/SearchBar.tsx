interface SearchProps {
  placeholder: string;
  className: string;
}

export default function SearchBar({ placeholder, className }: SearchProps) {
  return <input type="text" placeholder={placeholder} className={className} />;
}
