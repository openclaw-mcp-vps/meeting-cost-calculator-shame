export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Every meeting has a price tag.{" "}
          <span className="text-[#58a6ff]">Show it.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          MeetingCost injects a live cost counter into your video calls — calculated from real attendee salaries. Watch the number climb. Make meetings count.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works with Google Meet, Zoom, and Teams.</p>

        {/* Mock widget preview */}
        <div className="mt-14 inline-flex flex-col items-start bg-[#161b22] border border-[#30363d] rounded-xl px-6 py-4 shadow-xl">
          <span className="text-xs text-[#6e7681] uppercase tracking-widest mb-1">Meeting Cost</span>
          <span className="text-3xl font-mono font-bold text-[#f85149]">$47.82</span>
          <span className="text-xs text-[#8b949e] mt-1">6 attendees · 23 min elapsed</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Live cost widget on all video calls</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Unlimited team members</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Salary-based cost calculation</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Meeting history & reports</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Google Meet, Zoom & Teams</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does it calculate meeting cost?</h3>
            <p className="text-[#8b949e] text-sm">You enter each team member's annual salary in the dashboard. The extension detects attendees on the call, divides their hourly rate by the elapsed time, and sums it all up in real time.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Does it share salary data with anyone?</h3>
            <p className="text-[#8b949e] text-sm">No. Salary data is stored only in your account and never shared with other attendees or third parties. The widget shows cost totals, not individual salaries.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Which video platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">MeetingCost works with Google Meet, Zoom (web), and Microsoft Teams. Support for additional platforms is on the roadmap.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} MeetingCost. All rights reserved.
      </footer>
    </main>
  )
}
