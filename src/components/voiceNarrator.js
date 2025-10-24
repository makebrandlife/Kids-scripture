'use client'

import { useState, useEffect } from 'react'

export default function VoiceNarrator() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState(0)

  // Sample Bible story with interactive parts
  const sampleStory = {
    title: "David and Goliath",
    text: "David was a young shepherd boy. Goliath was a giant warrior. David trusted God and defeated Goliath with a small stone and a sling!",
    interactivePoints: [
      { text: "Touch the sheep to hear them baa! 🐑", sound: "baa" },
      { text: "Tap the stone to hear it whoosh! 🪨", sound: "whoosh" },
      { text: "Press Goliath to hear him roar! 🗿", sound: "roar" }
    ]
  }

  // Initialize voices (simulated - in real app would use Web Speech API)
  useEffect(() => {
    setVoices([
      { name: "Friendly Teacher", emoji: "👩‍🏫" },
      { name: "Storyteller Grandpa", emoji: "👴" },
      { name: "Excited Friend", emoji: "👦" }
    ])
  }, [])

  const handlePlayStory = () => {
    setIsPlaying(true)
    // In real implementation, this would use Web Speech API
    setTimeout(() => setIsPlaying(false), 5000) // Simulate 5sec narration
  }

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">🎙️</div>
        <h3 className="text-2xl font-bold mb-2">AI Voice Narration</h3>
        <p className="opacity-90">Listen to stories with expressive character voices</p>
      </div>

      {/* Voice Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Choose Narrator:</label>
        <div className="flex space-x-2">
          {voices.map((voice, index) => (
            <button
              key={index}
              onClick={() => setSelectedVoice(index)}
              className={`flex-1 py-2 rounded-lg border-2 transition-all ${
                selectedVoice === index 
                  ? 'bg-white text-purple-600 border-white' 
                  : 'bg-transparent border-white/50 text-white'
              }`}
            >
              <div className="text-lg">{voice.emoji}</div>
              <div className="text-xs mt-1">{voice.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Story Play Button */}
      <button
        onClick={handlePlayStory}
        disabled={isPlaying}
        className={`w-full py-4 rounded-xl font-bold text-lg mb-6 transition-all ${
          isPlaying 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-yellow-400 text-gray-900 hover:scale-105'
        }`}
      >
        {isPlaying ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
            <span>Playing Story...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>▶️</span>
            <span>Play "{sampleStory.title}"</span>
          </div>
        )}
      </button>

      {/* Interactive Elements */}
      <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
        <h4 className="font-bold mb-3">Touch & Explore:</h4>
        <div className="space-y-2">
          {sampleStory.interactivePoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
              <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">
                {point.sound === 'baa' ? '🐑' : point.sound === 'whoosh' ? '🪨' : '🗿'}
              </button>
              <span className="text-sm flex-1">{point.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Learning Note */}
      <div className="mt-4 text-center text-white/80 text-sm">
        💡 <strong>AI Feature:</strong> Voice adapts to child's comprehension level
      </div>
    </div>
  )
}
