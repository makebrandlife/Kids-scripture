import AIStoryGrid from '@/components/AIStoryGrid'
import InteractiveGames from '@/components/InteractiveGames'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">📖</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Kids Scripture</h1>
                <p className="text-sm text-gray-600 hidden sm:block">World's #1 Bible Stories</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#stories" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Stories</a>
              <a href="#games" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Games</a>
              <a href="#ai" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">AI Features</a>
              <a href="#parents" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Parents</a>
            </nav>

            {/* Mobile Menu */}
            <button className="md:hidden text-gray-700 p-2">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* AI Badge */}
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
            <span className="font-semibold">fun games</span> that make Bible learning unforgettable for kids 3-12!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl flex items-center space-x-3">
              <span>🚀</span>
              <span>Start Free Trial</span>
            </button>
            
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-purple-600 transition-all backdrop-blur-sm">
              Watch 2-Min Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-white/80">Happy Kids</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-white/80">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">#1</div>
              <div className="text-white/80">Rated Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Story Recommendations */}
      <AIStoryGrid />

      {/* Interactive Games */}
      <InteractiveGames />

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate the Market?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of parents who choose the #1 Bible platform for kids
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
            World's most advanced Bible stories platform. 3x faster, AI-powered, and mobile-perfect.
          </p>
          <div className="text-gray-400 text-sm">
            © 2024 Kids Scripture. Beating competitors daily. 🏆
          </div>
        </div>
      </footer>
    </div>
  )
}
