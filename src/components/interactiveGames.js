'use client'

import { useState } from 'react'

export default function InteractiveGames() {
  const [activeGame, setActiveGame] = useState(null)

  const games = [
    {
      id: 1,
      title: "Bible Coloring Book",
      description: "Color scenes from your favorite Bible stories",
      icon: "🎨",
      features: ["50+ Coloring Pages", "Touch Controls", "Save & Share"],
      time: "15-20 min",
      age: "3-8"
    },
    {
      id: 2, 
      title: "Memory Verse Puzzle",
      description: "Drag and drop to build Bible verses",
      icon: "🧩",
      features: ["100+ Verses", "Difficulty Levels", "Progress Tracking"],
      time: "10-15 min", 
      age: "5-12"
    },
    {
      id: 3,
      title: "Bible Character Match",
      description: "Match Bible characters with their stories",
      icon: "🃏", 
      features: ["30 Characters", "Sound Effects", "Time Challenge"],
      time: "8-12 min",
      age: "4-10"
    },
    {
      id: 4,
      title: "Noah's Animal Sounds",
      description: "Learn animal sounds from Noah's Ark",
      icon: "🐘",
      features: ["20 Animals", "Touch to Hear", "Name Learning"],
      time: "5-10 min",
      age: "2-6"
    }
  ]

  return (
    <section id="games" className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Interactive Learning Games
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While competitors show static text, we provide engaging games that make Bible learning fun and memorable
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map(game => (
            <div key={game.id} className="bg-white rounded-2xl shadow-xl border-2 border-green-200 hover:border-green-400 transition-all hover:scale-105 cursor-pointer">
              <div className="p-6">
                {/* Game Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-5xl">{game.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{game.title}</h3>
                    <p className="text-gray-600">{game.description}</p>
                  </div>
                </div>

                {/* Game Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {game.features.map(feature => (
                      <span key={feature} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Game Info */}
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>⏱️ {game.time}</span>
                    <span>👶 Ages {game.age}</span>
                  </div>
                </div>

                {/* Play Button */}
                <button 
                  onClick={() => setActiveGame(game.id)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all"
                >
                  Play Game Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Game Demo Preview */}
        {activeGame && (
          <div className="mt-12 bg-white rounded-2xl shadow-2xl border-2 border-blue-300 p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Playing: {games.find(g => g.id === activeGame)?.title}
              </h3>
              <button 
                onClick={() => setActiveGame(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-center text-white min-h-64 flex items-center justify-center">
              <div>
                <div className="text-6xl mb-4">
                  {games.find(g => g.id === activeGame)?.icon}
                </div>
                <p className="text-xl mb-4">Game loading in full version...</p>
                <div className="bg-white/20 rounded-lg p-4 inline-block">
                  <p className="text-sm">In full version: Touch, drag, and play!</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold">
                Unlock Full Game
              </button>
            </div>
          </div>
        )}

        {/* Games Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
            <div className="text-3xl font-bold text-blue-600">25+</div>
            <div className="text-gray-600">Learning Games</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100">
            <div className="text-3xl font-bold text-green-600">15min</div>
            <div className="text-gray-600">Avg Play Time</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100">
            <div className="text-3xl font-bold text-purple-600">95%</div>
            <div className="text-gray-600">Engagement Rate</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-100">
            <div className="text-3xl font-bold text-yellow-600">4.9★</div>
            <div className="text-gray-600">Parent Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
