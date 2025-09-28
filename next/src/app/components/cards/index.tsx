// Cards
// Main body component.
'use client';
import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCardItem';

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

interface InfoCardData {
  infocards: infocard[];
}

const CardSection: React.FC = () => {
  const [infocards, setInfocards] = useState<infocard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const loadInfocards = async () => {
      try {
        const response = await fetch('/info.json');
        if (!response.ok) {
          throw new Error('Failed to load cards.');
        }
        const data: InfoCardData = await response.json();
        setInfocards(data.infocards);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    loadInfocards();
  }, []);

  if (loading) {
    return (
      <section className="py-8">
        <div className="text-stone-400">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8">
        <div className="text-red-400">Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infocards.map((card) => (
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