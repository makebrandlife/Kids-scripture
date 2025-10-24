'use client'

import { useState } from 'react'

export default function AIStoryGrid() {
  const [selectedAge, setSelectedAge] = useState('all')
  
  // AI-Powered Story Data
  const stories = [
    {
      id: 1,
      title: "Noah's Ark Adventure",
      description: "AI Voice: 'Help Noah load the animals! Touch each animal to hear its sound.'",
      age: "3-7",
      category: "Animals",
      aiFeatures: ["Voice Narration", "Touch Sounds", "Interactive Rain"],
      popularity: 98,
      image: "🦁"
    },
    {
      id: 2,
      title: "David & Goliath Battle",
      description: "AI Game: 'Aim your slingshot! Swipe to throw stones at the giant.'",
      age: "5-10", 
      category: "Courage",
      aiFeatures: ["Swipe Game", "Battle Sounds", "Victory Celebration"],
      popularity: 95,
      image: "🎯"
    },
    {
      id: 3,
      title: "Daniel's Lion Den",
      description: "AI Interaction: 'Pet the friendly lions! They purr when you touch them.'",
      age: "4-9",
      category: "Faith", 
      aiFeatures: ["Touch Response", "Lion Sounds", "Angel Animation"],
      popularity: 92,
      image: "🚪"
    }
  ]

  const filteredStories = selectedAge === 'all' 
    ? stories 
    : stories.filter(story => story.age === selectedAge)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* AI Recommendation Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
            <span className="text-lg">🤖</span>
            <span className="font-semibold">AI-Powered Story Recommendations</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stories That Learn Your Child
          </h2>
          <p className="text-xl text-gray-600">
            Our AI adapts difficulty and content based on your child's engagement
          </p>
        </div>

        {/* Age Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {['all', '3-7', '4-9', '5-10'].map(age => (
            <button
              key={age}
              onClick={() => setSelectedAge(age)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedAge === age
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {age === 'all' ? 'All Ages' : `${age} years`}
            </button>
          ))}
        </div>

        {/* AI Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map(story => (
            <div key={story.id} className="bg-white rounded-2xl shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:scale-105 cursor-pointer">
              {/* Story Header with AI Badge */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white rounded-t-2xl">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl">{story.image}</span>
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    AI Powered
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">{story.age} years</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">{story.category}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                
                {/* AI Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">AI Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.aiFeatures.map(feature => (
                      <span key={feature} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popularity Meter */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Popularity</span>
                    <span>{story.popularity}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${story.popularity}%` }}
                    ></div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                  Start AI Story
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Learning Explanation */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🧠</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">How Our AI Works</h3>
              <p className="text-gray-600">Real machine learning for better engagement</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold text-gray-800 mb-2">Tracks Engagement</h4>
              <p className="text-gray-600 text-sm">Measures which stories your child loves most</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-800 mb-2">Adapts Difficulty</h4>
              <p className="text-gray-600 text-sm">Auto-adjusts based on comprehension</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h4 className="font-semibold text-gray-800 mb-2">Personalizes Content</h4>
              <p className="text-gray-600 text-sm">Shows more of what your child enjoys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
