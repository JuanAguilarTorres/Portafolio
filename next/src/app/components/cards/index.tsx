// Cards
// Main body component.
'use client';
import React, { useState } from 'react';
import InfoCard from './InfoCardItem';
import infoData from './data/info.json'

/**
 * Interface for the infocard data structure.
 * @property id - Unique identifier for the card.
 * @property title - Title of the card.
 * @property description - Description or summary of the card.
 * @property tags - Array of tags/technologies.
 * @property links - Object containing optional GitHub and website URLs.
 * @property image - Optional image URL for the card.
 */
interface infocard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    website?: string;
  };
  image?: string;
}

/**
 * CardSection component.
 * 
 * Renders a grid of InfoCard components using data from info.json.
 * Handles hover state to animate and dim cards appropriately.
 */
const CardSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoData.infocards.map((card: infocard) => (
          <InfoCard
            key={card.id}
            title={card.title}
            description={card.description}
            tags={card.tags}
            links={card.links}
            image={card.image}
            isHovered={hoveredCard === card.id}
            isOtherHovered={hoveredCard !== null && hoveredCard !== card.id}
            onHoverChange={(isHovered) => setHoveredCard(isHovered ? card.id : null)}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;