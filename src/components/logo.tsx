
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
        <img 
          src="/lovable-uploads/f4a01a07-a5bf-4528-aac5-d2e91c5a14fc.png" 
          alt="Ruminate Logo" 
          className={`${sizeClasses[size]}`}
        />
      </div>
      <span className={`font-bold tracking-tight text-navy-blue ${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl"}`}>
        RUMINATE
      </span>
    </div>
  );
}
