import { useState } from 'react';

interface GamePlayerProps {
  gameUrl: string;
  title: string;
  onClose: () => void;
}

const GamePlayer = ({ gameUrl, title, onClose }: GamePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setError('Failed to load game');
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        )}
        
        <div className="relative">
          <iframe
            src={gameUrl}
            onLoad={handleLoad}
            onError={handleError}
            className="w-full h-96 md:h-[500px] border-0 rounded-lg"
            title={title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Playing {title} • Use fullscreen for best experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
