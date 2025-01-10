import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import ClientInput from '../ui/SearchBar/ClientInput';
import type { ReactNode } from 'react';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa'; // Import icons

const inter = Inter({ subsets: ['latin'] });

interface NavbarProps {
  address?: string; // Address is now optional
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ address, children }) => {
  const navClass = React.useMemo(() => {
    return cn(
      "bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700", // Updated background color
      "sticky top-0 z-40 w-full", // Added width
      inter.className
    );
  }, [inter.className]);

  return (
    <nav className={navClass}>
      <div className="container mx-auto flex items-center justify-between px-6 py-3 md:py-4"> {/* Increased padding */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"> {/* Updated text color and hover effect */}
            ZestNow
          </Link>
          {address && ( // Conditionally render address
            <div className="ml-4 text-gray-500 dark:text-gray-400 text-sm hidden md:block">
              {address}
            </div>
          )}
        </div>

        <div className="flex-1 md:flex justify-center hidden md:block"> {/* Search bar only on medium screens and larger */}
          <ClientInput type="search" placeholder="Search..." className="w-96 rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-800" /> {/* Added styling to the search bar */}
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 flex items-center">
            <FaRegUserCircle className="mr-1 h-5 w-5" /> {/* Added user icon */} 
            <span>Login</span>
          </Link>
          <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 flex items-center">
            <FaShoppingCart className="mr-1 h-5 w-5" /> {/* Added cart icon */}
            <span>Cart</span>
          </Link>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;