import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { DecisionSlide } from './components/slides/DecisionSlide';
import { StoryRevealSlide } from './components/slides/StoryRevealSlide';
import { InputSlide } from './components/slides/InputSlide';
import { GameOverOverlay } from './components/GameOverOverlay';
import { STORY_DATA } from './constants';
import { ScreenType } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('');

  const currentSlideData = STORY_DATA[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < STORY_DATA.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleGameOver = () => {
    setGameOverMessage(currentSlideData.badOutcomeText || "Game Over");
    setGameOver(true);
  };

  const handleRestart = () => {
    setGameOver(false);
    setCurrentStepIndex(0);
  };

  // Render logic based on slide type
  const renderSlide = () => {
    switch (currentSlideData.type) {
      case ScreenType.INTRO_DECISION:
      case ScreenType.CLIMAX_DECISION:
        return (
          <DecisionSlide
            data={currentSlideData}
            onGoodChoice={handleNext}
            onBadChoice={handleGameOver}
          />
        );
      case ScreenType.STORY_REVEAL:
        return (
          <StoryRevealSlide
            data={currentSlideData}
            onNext={handleNext}
          />
        );
      case ScreenType.INPUT:
        return (
          <InputSlide data={currentSlideData} />
        );
      default:
        return <div>Unknown slide type</div>;
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {gameOver ? (
          <GameOverOverlay 
            key="game-over"
            message={gameOverMessage} 
            onRestart={handleRestart} 
          />
        ) : (
          <motion.div
            key={currentStepIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {renderSlide()}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default App;