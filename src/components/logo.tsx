
import React from 'react';

export function Logo({ className = "", size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16",
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/95d3f631-99c7-4c3a-af76-29b9d3e57776.png" 
        alt="Ruminate Logo" 
        className={`${sizeClasses[size]}`}
      />
      <span className="ml-2 font-bold text-xl text-midnight">Ruminate</span>
    </div>
  );
}
