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
              <a href="#videos" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Videos</a>
              <a href="#parents" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Parents</a>
            </nav>

            {/* Mobile Menu */}
            <button className="md:hidden text-gray-700 p-2">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Designed to Convert */}
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

      {/* Features - Why We're Better */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Why We Beat Every Competitor
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            While others use outdated technology, we built the future of children's Bible education
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-blue-50 border-2 border-blue-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">3x Faster</h3>
              <p className="text-gray-600">Loads in 1.2s vs competitor's 3.8s. Kids don't wait!</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-purple-50 border-2 border-purple-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">AI-Powered</h3>
              <p className="text-gray-600">Personalized stories & voice narration they can't match</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-green-50 border-2 border-green-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Perfect Mobile</h3>
              <p className="text-gray-600">95/100 mobile score vs their 65/100 failures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stories Preview */}
      <section id="stories" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            25+ Interactive Bible Stories
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Touch, click, and explore stories that come to life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="story-card hover:scale-105 transition-transform cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                <span className="text-6xl">🦁</span>
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  AI Voice
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Daniel's Lion Adventure</h3>
                <p className="text-gray-600 mb-4">Touch the lions to hear them roar! Interactive faith story.</p>
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

            {/* Story 2 */}
            <div className="story-card hover:scale-105 transition-transform cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                <span className="text-6xl">🚢</span>
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  AI Voice
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Noah's Amazing Ark</h3>
                <p className="text-gray-600 mb-4">Load animals by dragging them! Rain sound effects included.</p>
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Ages 3-7
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Play Story
                  </button>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="story-card hover:scale-105 transition-transform cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center relative">
                <span className="text-6xl">🎯</span>
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  AI Voice
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">David & Goliath Battle</h3>
                <p className="text-gray-600 mb-4">Aim the slingshot! Interactive courage lesson.</p>
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Ages 5-10
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Play Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Learning Games Competitors Don't Have
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            While they show static text, we provide interactive experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Bible Coloring Book</h3>
              <p className="mb-4">Color scenes from stories with touch controls</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold">
                Try Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
              <div className="text-6xl mb-4">🧩</div>
              <h3 className="text-2xl font-bold mb-3">Memory Verse Puzzle</h3>
              <p className="mb-4">Drag & drop to build Bible verses</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
                Try Now
              </button>
            </div>
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
