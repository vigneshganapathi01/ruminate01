
import React from 'react';

export function Logo({ className = "", size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} aspect-square rounded-lg bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center`}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-2/3 h-2/3 text-white"
          >
            <path 
              d="M13 4.5C13 3.12 11.88 2 10.5 2S8 3.12 8 4.5V6H10.5V4.5H13Z" 
              fill="currentColor"
            />
            <path 
              d="M18.21 8.21C18.21 5.87 16.34 4 14 4C12.39 4 10.99 4.89 10.28 6.17C9.39 5.15 8.05 4.5 6.5 4.5C4.01 4.5 2 6.51 2 9C2 13.17 6.67 16.92 11.28 21.72C11.5 21.92 11.73 22 12 22C12.27 22 12.5 21.92 12.72 21.72C14.76 19.68 16.68 17.96 18.25 16.09C19.86 14.16 21 12.18 21 9C21 7.46 20.35 6.12 19.33 5.23C18.89 7 17.21 8.21 15.28 8.21H14V10.5H15.28C16.36 10.5 17.32 10.07 18.05 9.36C18.14 9.24 18.21 9.12 18.21 9V8.21Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-midnight dark:bg-sand rounded-full border-2 border-white dark:border-midnight"></div>
      </div>
      <span className={`font-bold tracking-tight ${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"}`}>
        Ruminate
      </span>
    </div>
  );
}
