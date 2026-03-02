import React from 'react';
import Features from './components/Features';

function Landing() {
    return (
        <div className="min-h-screen bg-aura-bg text-aura-text flex flex-col font-sans selection:bg-aura-border/30">
            {/* Header / Navbar */}
            <header className="fixed top-0 w-full bg-aura-bg/80 backdrop-blur-md border-b border-aura-border/20 p-4 z-50 flex items-center justify-between px-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                        A
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">AURA Profyle</h1>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#features" className="hover:text-aura-text transition-colors">Features</a>
                    <a href="#" className="hover:text-aura-text transition-colors">Security</a>
                    <a href="#" className="hover:text-aura-text transition-colors">Pricing</a>
                </nav>

                <button className="px-5 py-2 rounded-full border border-aura-border/40 hover:bg-aura-border/10 transition-all text-aura-text text-sm font-semibold active:scale-95">
                    Admin Login
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 pt-24">
                {/* Hero Section */}
                <section className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center space-y-8 relative overflow-hidden">
                    {/* Subtle background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                            Executive Voice Proxy
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Authorized Unified Representation Assistant. Designed to communicate your professional identity with clarity, accuracy, and executive maturity.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <button className="px-8 py-4 rounded-full bg-aura-surface border border-aura-border hover:bg-aura-border/30 transition-all shadow-lg text-aura-text text-lg font-semibold flex items-center gap-3 active:scale-95">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aura-border opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                            </span>
                            Start Conversation
                        </button>
                    </div>
                </section>

                {/* Features Section */}
                <div id="features">
                    <Features />
                </div>

                {/* Bottom CTA */}
                <section className="py-24 px-8 border-t border-aura-border/10 bg-gradient-to-b from-transparent to-blue-900/10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">Ready to scale your presence?</h2>
                        <p className="text-gray-400 text-lg">
                            Join the elite circle of executives using AURA to maintain their professional reach without compromising their time.
                        </p>
                        <button className="px-10 py-5 rounded-full bg-aura-border text-white hover:bg-aura-border/90 transition-all text-xl font-bold shadow-xl active:scale-95">
                            Get Priority Access
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-aura-border/10 p-12 px-8 bg-aura-bg">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-blue-500"></div>
                            <span className="font-bold text-lg">AURA</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            The executive choice for professional voice representation.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li><a href="#" className="hover:text-aura-text">Features</a></li>
                            <li><a href="#" className="hover:text-aura-text">Security</a></li>
                            <li><a href="#" className="hover:text-aura-text">Enterprise</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li><a href="#" className="hover:text-aura-text">About</a></li>
                            <li><a href="#" className="hover:text-aura-text">Blog</a></li>
                            <li><a href="#" className="hover:text-aura-text">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li><a href="#" className="hover:text-aura-text">Privacy</a></li>
                            <li><a href="#" className="hover:text-aura-text">Terms</a></li>
                            <li><a href="#" className="hover:text-aura-text">Ethics</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-aura-border/5 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} AURA Profyle. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Landing;
