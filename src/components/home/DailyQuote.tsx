
import React from 'react';

interface Quote {
  text: string;
  source: string;
}

const quotes: Quote[] = [
  {
    text: "Be like a flower that gives fragrance even to the hand that crushes it.",
    source: "Ali ibn Abi Talib (RA)"
  },
  {
    text: "The richest of the rich is the one who is not a prisoner to greed.",
    source: "Imam Ali (RA)"
  },
  {
    text: "Patience is of two kinds: patience over what pains you and patience against what you covet.",
    source: "Imam Ali (RA)"
  },
  {
    text: "The strongest amongst you is the one who subdues his self.",
    source: "Prophet Muhammad (PBUH)"
  },
  {
    text: "Make time for prayer, even at the busiest moment of your day.",
    source: "Islamic Wisdom"
  }
];

const DailyQuote = () => {
  // Get a random quote from the list
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return (
    <div className="p-4 bg-white rounded-xl shadow-md border border-primary/10 mb-6">
      <div className="font-amiri text-4xl text-primary mb-2 text-center">"</div>
      <p className="text-center text-neutral-foreground italic mb-2">
        {quote.text}
      </p>
      <p className="text-right text-sm text-primary font-medium">
        — {quote.source}
      </p>
    </div>
  );
};

export default DailyQuote;
