import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StoryScreen } from '../../types';
import { Button } from '../ui/Button';
import { Skull, Heart, ShieldAlert, ShieldCheck } from 'lucide-react';

interface DecisionSlideProps {
  data: StoryScreen;
  onGoodChoice: () => void;
  onBadChoice: () => void;
}

export const DecisionSlide: React.FC<DecisionSlideProps> = ({ data, onGoodChoice, onBadChoice }) => {
  const [showButtons, setShowButtons] = useState(false);

  // Delay for buttons to appear (1 second as requested)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1500); // 1.5s for dramatic effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full p-6 items-center justify-between py-12">
      <div className="flex flex-col items-center w-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 mb-8 border-4 border-black rounded-lg overflow-hidden bg-gray-100"
        >
          <img 
            src={data.imageSrc} 
            alt={data.imageAlt} 
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl text-center font-bold text-sketch-black"
        >
          {data.initialText}
        </motion.p>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-row gap-4 justify-center items-end h-24">
        {showButtons && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="danger" onClick={onBadChoice} className="flex items-center gap-2">
                <Skull size={20} />
                {data.badButtonText}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="primary" onClick={onGoodChoice} className="flex items-center gap-2">
                {data.id === 6 ? <ShieldCheck size={20} /> : <Heart size={20} />}
                {data.goodButtonText}
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};