'use client'

import { useState, useEffect } from 'react'

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState([])
  const [childAge, setChildAge] = useState(5)
  const [interests, setInterests] = useState(['animals', 'adventure'])

  // AI-Powered Recommendation Engine
  const aiStories = {
    '3-5': [
      { id: 1, title: "Noah's Animal Boat", emoji: "🚢", reason: "Lots of animals to touch and name" },
      { id: 2, title: "Baby Moses in Basket", emoji: "👶", reason: "Simple, caring story" },
      { id: 3, title: "Jesus Loves Children", emoji: "❤️", reason: "Gentle, loving message" }
    ],
    '5-8': [
      { id: 4, title: "David's Brave Fight", emoji: "🎯", reason: "Exciting adventure with courage" },
      { id: 5, title: "Jonah's Big Fish", emoji: "🐟", reason: "Underwater adventure story" },
      { id: 6, title: "Daniel's Lion Friends", emoji: "🦁", reason: "Animals and bravery combined" }
    ],
    '8-12': [
      { id: 7, title: "Joseph's Dream Journey", emoji: "🌟", reason: "Complex story with lessons" },
      { id: 8, title: "Esthero's Brave Choice", emoji: "👑", reason: "Strong character story" },
      { id: 9, title: "Paul's Amazing Journey", emoji: "🗺️", reason: "Travel and adventure" }
    ]
  }

  // AI Logic to recommend stories
  useEffect(() => {
    let ageGroup = '5-8'
    if (childAge <= 5) ageGroup = '3-5'
    if (childAge >= 8) ageGroup = '8-12'
    
    setRecommendations(aiStories[ageGroup] || [])
  }, [childAge])

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full mb-4">
          <span>🤖</span>
          <span className="font-semibold">AI Story Recommender</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Personalized Bible Stories
        </h3>
        <p className="text-gray-600">
          Our AI selects perfect stories based on your child's age and interests
        </p>
      </div>

      {/* Age Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Child's Age: <span className="font-bold text-blue-600">{childAge} years</span>
        </label>
        <input 
          type="range" 
          min="3" 
          max="12" 
          value={childAge}
          onChange={(e) => setChildAge(parseInt(e.target.value))}
          className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>3</span>
          <span>5</span>
          <span>7</span>
          <span>9</span>
          <span>12</span>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((story) => (
          <div key={story.id} className="bg-white rounded-xl p-4 shadow-lg border border-blue-100">
            <div className="text-3xl mb-2">{story.emoji}</div>
            <h4 className="font-bold text-gray-800 mb-1">{story.title}</h4>
            <p className="text-sm text-gray-600">{story.reason}</p>
            <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm transition-colors">
              Read Story
            </button>
          </div>
        ))}
      </div>

      {/* AI Learning Progress */}
      <div className="mt-6 p-4 bg-white rounded-xl border border-green-200">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-green-500">📊</span>
          <span className="font-semibold text-gray-800">AI Learning Report</span>
        </div>
        <p className="text-sm text-gray-600">
          Based on age {childAge}, our AI recommends stories that teach <strong>courage, kindness, and faith</strong> through interactive adventures.
        </p>
      </div>
    </div>
  )
}
