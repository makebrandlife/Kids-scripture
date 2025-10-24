'use client'

import { useState, useEffect } from 'react'

export default function ProgressTracker() {
  const [progress, setProgress] = useState({
    storiesCompleted: 3,
    gamesPlayed: 5,
    versesLearned: 8,
    streakDays: 2
  })
  
  const [achievements, setAchievements] = useState([
    { id: 1, name: "First Story", earned: true, emoji: "🎯" },
    { id: 2, name: "Bible Explorer", earned: true, emoji: "🧭" },
    { id: 3, name: "Memory Master", earned: false, emoji: "🏆" },
    { id: 4, name: "7-Day Streak", earned: false, emoji: "🔥" }
  ])

  const progressPercentage = Math.min((progress.storiesCompleted / 10) * 100, 100)

  return (
    <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">🏆</div>
        <h3 className="text-2xl font-bold mb-2">Learning Progress</h3>
        <p className="opacity-90">Track achievements and earn rewards!</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Bible Explorer Progress</span>
          <span>{progress.storiesCompleted}/10 stories</span>
        </div>
        <div className="w-full bg-white/30 rounded-full h-4">
          <div 
            className="bg-yellow-400 h-4 rounded-full transition-all duration-1000"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
          <div className="text-2xl mb-1">📚</div>
          <div className="text-xl font-bold">{progress.storiesCompleted}</div>
          <div className="text-xs opacity-90">Stories Read</div>
        </div>
        <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
          <div className="text-2xl mb-1">🎮</div>
          <div className="text-xl font-bold">{progress.gamesPlayed}</div>
          <div className="text-xs opacity-90">Games Played</div>
        </div>
        <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
          <div className="text-2xl mb-1">💫</div>
          <div className="text-xl font-bold">{progress.versesLearned}</div>
          <div className="text-xs opacity-90">Verses Learned</div>
        </div>
        <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
          <div className="text-2xl mb-1">🔥</div>
          <div className="text-xl font-bold">{progress.streakDays}</div>
          <div className="text-xs opacity-90">Day Streak</div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="font-bold mb-3 text-center">Your Achievements</h4>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-3 rounded-lg text-center transition-all ${
                achievement.earned
                  ? 'bg-white/30 backdrop-blur-sm border-2 border-yellow-400'
                  : 'bg-white/10 border-2 border-white/20 opacity-60'
              }`}
            >
              <div className="text-2xl mb-1">{achievement.emoji}</div>
              <div className="text-sm font-medium">{achievement.name}</div>
              <div className="text-xs opacity-80 mt-1">
                {achievement.earned ? 'Earned! 🎉' : 'Locked 🔒'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-yellow-300">⭐</span>
          <span className="font-bold">Daily Challenge</span>
        </div>
        <p className="text-sm mb-3">Read 1 story and play 1 game to keep your streak!</p>
        <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-bold hover:scale-105 transition-transform">
          Start Challenge
        </button>
      </div>
    </div>
  )
}
