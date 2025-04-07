
import { Tag } from './tag';
import { formatDistanceToNow } from 'date-fns';
import { Linkedin, FileText, Twitter, Book } from 'lucide-react';

interface InsightCardProps {
  title: string;
  excerpt: string;
  source: string;
  date: Date;
  tags: Array<{
    name: string;
    color?: 'default' | 'blue' | 'green' | 'orange' | 'purple' | 'red';
  }>;
  onClick?: () => void;
}

export function InsightCard({ 
  title, 
  excerpt, 
  source, 
  date, 
  tags = [],
  onClick 
}: InsightCardProps) {
  
  const sourceIconMap: Record<string, JSX.Element> = {
    linkedin: <Linkedin className="h-4 w-4 text-[#0077B5]" />,
    article: <FileText className="h-4 w-4 text-gray-600" />,
    twitter: <Twitter className="h-4 w-4 text-[#1DA1F2]" />,
    book: <Book className="h-4 w-4 text-amber-600" />,
  };

  const sourceIcon = sourceIconMap[source.toLowerCase()] || <FileText className="h-4 w-4 text-gray-600" />;
  
  return (
    <div className="insight-card group" onClick={onClick}>
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-medium text-lg leading-tight group-hover:text-teal transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center shrink-0 mt-1">
            {sourceIcon}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <Tag key={tag.name} color={tag.color}>
                {tag.name}
              </Tag>
            ))}
            
            {tags.length > 3 && (
              <Tag>+{tags.length - 3}</Tag>
            )}
          </div>
          
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(date, { addSuffix: true })}
          </span>
        </div>
      </div>
    </div>
  );
}
