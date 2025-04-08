import React from 'react';

export function Logo({ className = "", size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-16",
    md: "h-16",
    lg: "h-16",
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Ruminate Logo" 
        className={`${sizeClasses[size]}`}
      />
      <span className="ml-2 font-bold text-xl">Ruminate</span>
    </div>
  );
}