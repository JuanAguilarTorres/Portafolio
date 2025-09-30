// Cards
// Single card body component.
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Props for the InfoCard component.
 * @property title - The card's title.
 * @property description - Description or summary of the project/item.
 * @property tags - Array of tags/technologies associated with the card.
 * @property links - Object containing optional GitHub and website URLs.
 * @property image - Optional image URL for the card.
 * @property isHovered - Whether this card is currently hovered.
 * @property isOtherHovered - Whether another card is hovered (for dimming effect).
 * @property onHoverChange - Callback for hover state changes.
 */
interface InfoCardProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    website?: string;
  };
  image?: string;
  isHovered?: boolean;
  isOtherHovered?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
}

/**
 * InfoCard component.
 * 
 * Renders a project or item card with:
 * - Optional image preview.
 * - Title, description, and tags.
 * - GitHub and Website links with icons.
 * - Animated hover and dimming effects.
 * 
 * @param title - The card's title.
 * @param description - Description or summary.
 * @param tags - Array of tags/technologies.
 * @param links - GitHub and/or website URLs.
 * @param image - Optional image URL.
 * @param isHovered - If this card is hovered.
 * @param isOtherHovered - If another card is hovered.
 * @param onHoverChange - Callback for hover state changes.
 */
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  tags,
  links,
  image,
  isHovered = false,
  isOtherHovered = false,
  onHoverChange
}) => {
  /**
   * Handles mouse enter event to trigger hover state.
   */
  const handleMouseEnter = () => {
    onHoverChange?.(true);
  };

  /**
   * Handles mouse leave event to reset hover state.
   */
  const handleMouseLeave = () => {
    onHoverChange?.(false);
  };

  return (
    <div 
      className={`
        bg-stone-800/50 backdrop-blur-sm rounded-xl p-6 border border-stone-700/50 
        transition-all duration-500 ease-out group cursor-pointer
        ${isHovered 
          ? 'border-stone-600/70 shadow-s shadow-slate-500/20 -translate-y-2 scale-[1.02] z-10' 
          : 'hover:border-stone-600/50'
        }
        ${isOtherHovered 
          ? 'opacity-40 scale-[0.98] translate-y-1' 
          : 'opacity-100'
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        filter: isHovered 
          ? 'drop-shadow(0 20px 25px rgba(45, 58, 77, 0.15)) drop-shadow(0 0 40px rgba(45, 58, 77, 0.1))' 
          : 'none'
      }}
    >
      {/* Image preview */}
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-stone-400/20 to-blue-400/20 p-3">
          <div className="bg-stone-900/50 rounded-md p-2">
            <img
              src={image}
              alt={title}
              className="w-full h-32 object-cover rounded transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Hide image if it fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      )}
     
      {/* Title */}
      <div className="mb-3">
        <h3 className={`
          text-xl font-bold transition-all duration-300
          ${isHovered 
            ? 'text-green-400 transform scale-105' 
            : 'text-white group-hover:text-green-400'
          }
        `}>
          {title}
        </h3>
      </div>
     
      {/* Description */}
      <p className={`
        mb-4 leading-relaxed transition-all duration-300
        ${isHovered 
          ? 'text-slate-200' 
          : 'text-slate-300'
        }
      `}>
        {description}
      </p>
     
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`
              px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300
              ${isHovered
                ? 'bg-slate-600/70 text-slate-200 border-slate-500/70 shadow-lg'
                : 'bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-slate-600/50'
              }
            `}
          >
            {tag}
          </span>
        ))}
      </div>
     
      {/* Links */}
      <div className="flex gap-3">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium
              transition-all duration-300 transform hover:scale-105
              ${isHovered
                ? 'bg-slate-600/70 text-white border-slate-500/70 shadow-lg'
                : 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white border-slate-600/50 hover:border-slate-500/50'
              }
            `}
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
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium
              transition-all duration-300 transform hover:scale-105
              ${isHovered
                ? 'bg-green-500/30 text-green-300 border-green-500/60 shadow-lg shadow-green-500/20'
                : 'bg-green-500/10 hover:bg-green-500/20 text-green-400 hover:text-green-300 border-green-500/30 hover:border-green-500/50'
              }
            `}
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