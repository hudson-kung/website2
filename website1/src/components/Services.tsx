import robloxImage from '../../images/1.jpg';
import minecraftImage from '../../images/2.jpg';
import bloxFruitsImage from '../../images/3.jpg';
import { useState } from 'react';
import GamePlayer from './GamePlayer';

interface Game {
  title: string;
  price: string;
  rating: string;
  gamedata: boolean;
  picture: string[];
  gameUrl: string;
}

const games = [
  {
    title: 'Roblox',
    price: '$9.99',
    rating: '4.7',
    gamedata: true,
    gameUrl: 'https://www.roblox.com',
    picture: [robloxImage]
  },
  {
    title: 'Minecraft',
    price: '$12.99',
    rating: '4.6',
    gamedata: true,
    gameUrl: 'https://classic.minecraft.net',
    picture: [minecraftImage]
  },
  {
    title: 'Blox Fruits',
    price: '$3.99',
    rating: '4.8',
    gamedata: true,
    gameUrl: 'https://www.roblox.com/games/2757340566/blox-fruits',
    picture: [bloxFruitsImage]
  },
];

const Services = () => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);

  const openGame = (game: Game) => {
    setCurrentGame(game);
  };

  const closeGame = () => {
    setCurrentGame(null);
  };
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">Game Store</span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mt-2 mb-6">
            Choose Your Favorite Game
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From action-packed adventures to creative building experiences, we have the perfect game for every player and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 border border-gray-100"
            >
              {game.rating === '4.8' && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                  ⭐ TOP RATED
                </div>
              )}
              
              {/* Game Image */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {game.picture[0] ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={game.picture[0]} 
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Add {game.title} Image</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">{game.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Rating:</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(game.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{game.rating}/5.0</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-2xl font-bold text-purple-600">{game.price}</span>
                  </div>
                </div>

                  <a
                    onClick={() => openGame(game)}
                    className={`block w-full text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      game.rating === '4.8'
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 shadow-md'
                    }`}
                    style={{minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Play Now
                    </span>
                  </a>
              </div>
            </div>
          ))}
        
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Looking for more games? We offer bundles and seasonal discounts!</p>
          <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition">
            Browse all games →
          </a>
        </div>
      </div>
      
      {/* Game Player Modal */}
      {currentGame && <GamePlayer gameUrl={currentGame.gameUrl} title={currentGame.title} onClose={closeGame} />}
    </section>
  );
};

export default Services;
