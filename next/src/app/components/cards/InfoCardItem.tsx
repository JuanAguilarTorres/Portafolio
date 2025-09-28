// Cards 
// Single card body component.
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    website?: string;
  };
  image?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  tags,
  links,
  image
}) => {
  return (
    <div className="bg-stone-800/50 backdrop-blur-sm rounded-xl p-6 border border-stone-700/50 hover:border-stone-600/50 transition-all duration-300 group">

      {image && (
        <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-stone-400/20 to-blue-400/20 p-3">
          <div className="bg-stone-900/50 rounded-md p-2">
            <img 
              src={image} 
              alt={title}
              className="w-full h-32 object-cover rounded"
              onError={(e) => {
                // Hide image
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      )}
      
      <div className="mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
          {title}
        </h3>
      </div>
      
      <p className="text-slate-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 hover:bg-slate-600/50 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-all text-sm font-medium"
          >
            <Github size={16} />
            GitHub
          </a>
        )}
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 hover:text-green-300 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-all text-sm font-medium"
          >
            <ExternalLink size={16} />
            Website
          </a>
        )}
      </div>
    </div>
  );
};

export default InfoCard;