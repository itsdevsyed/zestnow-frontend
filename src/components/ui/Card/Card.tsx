import React from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import type { ReactNode, HTMLAttributes } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    children?: ReactNode;
}


const Card = React.forwardRef<HTMLDivElement, CardProps>(({ imageUrl, title, description, price, children, className, ...props}, ref) => {

    const cardClass = React.useMemo(() => {
      return cn(
         "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
         "flex flex-col",
           inter.className,
           className
      )
    }, [inter.className, className]);

     const imageWrapperClass = React.useMemo(() => {
       return cn(
           "aspect-w-4 aspect-h-3",
           "relative overflow-hidden"
       )
     }, []);



    return (
       <div className={cardClass} {...props} ref={ref}>
           <div className={imageWrapperClass}>
               <img src={imageUrl} alt={title} className="object-cover w-full h-full"/>
           </div>
           <div className="p-4 flex flex-col gap-2 flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100"> {title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">{description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-gray-900 dark:text-gray-100 font-bold text-lg"> {price} </span>
                 {children}
              </div>
           </div>
       </div>
    );

});

Card.displayName = "Card";

export default Card;