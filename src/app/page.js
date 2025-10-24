import AIRecommendations from '@/components/AIRecommendations'
import VoiceNarrator from '@/components/VoiceNarrator'
import ProgressTracker from '@/components/ProgressTracker'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
      {/* Header - Keep existing header code */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">📖</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Kids Scripture</h1>
                <p className="text-sm text-gray-600 hidden sm:block">AI-Powered Bible Stories</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#stories" className="text-gray-700 hover:text-blue-600 font-semibold">Stories</a>
              <a href="#ai" className="text-gray-700 hover:text-blue-600 font-semibold">AI Features</a>
              <a href="#progress" className="text-gray-700 hover:text-blue-600 font-semibold">Progress</a>
            </nav>
            <button className="md:hidden text-gray-700 p-2">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Keep existing hero */}
      <section className="text-center text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-lg">🤖</span>
            <span className="font-semibold">AI-Powered Bible Stories</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Amazing{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Bible
            </span>{' '}
            Adventures!
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold">25+ interactive stories</span>, {' '}
            <span className="font-semibold">AI voice narration</span>, and {' '}
            <span className="font-semibold">fun games</span> that make Bible learning unforgettable!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl flex items-center space-x-3">
              <span>🚀</span>
              <span>Start Free Trial</span>
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-purple-600 transition-all backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* AI Features Section - NEW */}
      <section id="ai" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            AI Features That Beat All Competitors
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            While other sites show static text, we provide intelligent, adaptive learning
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* AI Recommendations */}
            <AIRecommendations />
            
            {/* Voice Narration */}
            <VoiceNarrator />
          </div>

          {/* Progress Tracking */}
          <div className="max-w-4xl mx-auto">
            <ProgressTracker />
          </div>
        </div>
      </section>

      {/* Interactive Stories Section - Keep existing but enhanced */}
      <section id="stories" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            25+ Interactive Bible Stories
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Touch, click, and explore stories that come to life with AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story cards - keep existing but add AI badges */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform border-2 border-blue-200">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                <span className="text-6xl">🦁</span>
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  AI Voice
                </div>
                <div className="absolute top-4 right-4 bg-green-400 text-white px-2 py-1 rounded-full text-xs">
                  Interactive
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Daniel's Lion Adventure</h3>
                <p className="text-gray-600 mb-4">Touch the lions to hear them roar! AI-powered faith story.</p>
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Ages 4-9
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Play Story
                  </button>
                </div>
              </div>
            </div>

            {/* Add 2 more story cards similarly */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate the Market?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the #1 AI-powered Bible platform that actually engages kids
          </p>
          <button className="bg-yellow-400 text-gray-900 px-12 py-6 rounded-2xl font-bold text-2xl hover:scale-105 transition-transform shadow-2xl">
            🚀 Launch Your Site Now
          </button>
          <p className="mt-4 text-white/70">
            Free 7-day trial • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">📖</span>
            </div>
            <h2 className="text-2xl font-bold">Kids Scripture</h2>
          </div>
          <p className="text-gray-400 mb-6 max-w-md mx-auto text-lg">
            World's most advanced AI-powered Bible stories platform.
          </p>
          <div className="text-gray-400 text-sm">
            © 2024 Kids Scripture. Outperforming competitors with AI. 🏆
          </div>
        </div>
      </footer>
    </div>
  )
}
