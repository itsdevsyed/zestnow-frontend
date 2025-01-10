import React, {useMemo} from 'react';

import { Inter } from 'next/font/google';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] });

interface SearchFieldProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

function SearchField({ placeholder = 'Search...', onSearch }: SearchFieldProps) {

    const searchFieldClass = useMemo(() => {
         return clsx(
            "border border-gray-300 dark:border-gray-600 rounded-md",
            "py-2 px-3",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
            "text-gray-700 dark:text-gray-300",
            inter.className
         )
    }, []);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <input
        type="text"
      placeholder={placeholder}
      className={searchFieldClass}
        onChange={handleChange}
    />
  );
}

export default SearchField;