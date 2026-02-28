

function App() {
  return (
    <div className="min-h-screen bg-aura-bg text-aura-text flex flex-col font-sans">
      {/* Header / Navbar */}
      <header className="w-full bg-aura-surface border-b border-aura-border p-4 shadow-sm flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wider">AURA Profyle</h1>

        {/* Placeholder Button */}
        <button className="px-5 py-2 rounded-md border border-aura-border hover:bg-aura-border/20 transition-colors text-aura-text text-sm font-medium">
          Admin Login
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Executive Voice Proxy</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Authorized Unified Representation Assistant, designed to communicate with clarity, accuracy, and executive-level maturity.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
