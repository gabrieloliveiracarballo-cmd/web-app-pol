import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StoryScreen } from '../../types';
import { Button } from '../ui/Button';
import { submitInstagramHandle } from '../../services/submissionService';
import { Send, CheckCircle2 } from 'lucide-react';

interface InputSlideProps {
  data: StoryScreen;
}

export const InputSlide: React.FC<InputSlideProps> = ({ data }) => {
  const [handle, setHandle] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!handle.trim()) {
      setError('Por favor, escribe algo.');
      return;
    }
    setError('');
    setStatus('loading');
    
    try {
      await submitInstagramHandle(handle);
      setStatus('success');
    } catch (e) {
      setError('Hubo un error. Inténtalo de nuevo.');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
        <div className="flex flex-col h-full p-8 items-center justify-center text-center space-y-6">
             <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-green-600"
             >
                <CheckCircle2 size={80} />
             </motion.div>
             <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold"
             >
                ¡Pol ha sido salvado!
             </motion.h2>
             <p className="text-xl text-gray-600">(Te escribirá pronto)</p>
        </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-6 items-center pt-10">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-48 h-48 mb-6 border-4 border-black rounded-full overflow-hidden bg-gray-100 shadow-xl"
        >
          <img 
            src={data.imageSrc} 
            alt={data.imageAlt} 
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </motion.div>

      <h2 className="text-2xl font-bold text-center mb-8 px-4">
        {data.initialText}
      </h2>

      <div className="w-full max-w-xs space-y-4">
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder={data.placeholder}
          disabled={status === 'loading'}
          className="w-full p-4 text-center text-xl border-b-2 border-black bg-transparent focus:outline-none focus:border-green-500 transition-colors font-comic placeholder-gray-400"
        />
        
        {error && <p className="text-red-500 text-center text-sm">{error}</p>}

        <div className="pt-8 flex justify-center">
            <Button 
                onClick={handleSubmit} 
                disabled={status === 'loading'}
                className={status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
            >
                {status === 'loading' ? 'Enviando...' : (
                    <span className="flex items-center gap-2">
                        {data.submitButtonText} <Send size={18} />
                    </span>
                )}
            </Button>
        </div>
      </div>
    </div>
  );
};