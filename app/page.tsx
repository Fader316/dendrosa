"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, Server, Shield, Bell, MessageSquare, 
  Lock, LayoutDashboard, Zap, ChevronRight, Code2, 
  BookOpen, Mail, Terminal, Globe, CheckCircle2, AlertCircle 
} from "lucide-react";

// --- Componentes Reutilizables ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
    {children}
  </span>
);

const Button = ({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "secondary" | "outline"; className?: string }) => {
  const baseStyle = "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950";
  const variants = {
    primary: "bg-white text-zinc-950 hover:bg-zinc-200 focus:ring-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700 focus:ring-zinc-700",
    outline: "bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/50 border border-zinc-800 focus:ring-zinc-800",
  };
  return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)" }}
    className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/60 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]"
  >
    <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold text-zinc-100 mb-2">{title}</h3>
    <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
  </motion.div>
);

const PricingCard = ({ title, price, period, features, highlighted = false }: any) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`relative p-8 rounded-2xl border flex flex-col ${
      highlighted 
        ? "bg-zinc-900/80 border-cyan-500/30 shadow-[0_0_40px_-15px_rgba(6,182,212,0.15)]" 
        : "bg-zinc-950/50 border-zinc-800"
    }`}
  >
    {highlighted && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-zinc-950 text-xs font-bold rounded-full">
        MOST POPULAR
      </div>
    )}
    <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
    <div className="mt-4 flex items-baseline">
      <span className="text-4xl font-bold text-zinc-100">${price}</span>
      <span className="ml-2 text-zinc-500">{period}</span>
    </div>
    <ul className="mt-8 space-y-4 flex-1">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start text-sm text-zinc-300">
          <CheckCircle2 size={16} className="text-cyan-400 mr-3 mt-0.5 shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <Button variant={highlighted ? "primary" : "outline"} className="mt-8 w-full">
      {price === "0" ? "Start Free" : "Subscribe"}
    </Button>
  </motion.div>
);

// --- Mockup Components (Pure CSS/Tailwind) ---

const DashboardMockup = () => (
  <div className="relative w-full max-w-5xl mx-auto mt-16">
    {/* Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-emerald-500/20 rounded-2xl blur-2xl opacity-50" />
    
    <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Mockup Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-zinc-500 font-mono">app.portscope.io/dashboard</div>
        <div className="w-16" /> {/* Spacer */}
      </div>

      {/* Mockup Body */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar / Monitor List */}
        <div className="lg:col-span-1 space-y-3">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Monitors</div>
          {[
            { name: "Production API", status: "online", port: "443", latency: "24ms" },
            { name: "Homelab NAS", status: "online", port: "8080", latency: "12ms" },
            { name: "Minecraft Server", status: "online", port: "25565", latency: "45ms" },
            { name: "Staging DB", status: "offline", port: "5432", latency: "Timeout" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors cursor-default">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${item.status === "online" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"}`} />
                <div>
                  <div className="text-sm font-medium text-zinc-200">{item.name}</div>
                  <div className="text-xs text-zinc-500">Port {item.port}</div>
                </div>
              </div>
              <div className={`text-xs font-mono ${item.status === "online" ? "text-emerald-400" : "text-red-400"}`}>
                {item.latency}
              </div>
            </div>
          ))}
        </div>

        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-zinc-100">Uptime & Latency</h4>
              <p className="text-xs text-zinc-500">Last 24 hours</p>
            </div>
            <div className="flex space-x-2">
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700">1H</span>
              <span className="px-2 py-1 text-xs rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">24H</span>
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700">7D</span>
            </div>
          </div>

          {/* Fake Chart */}
          <div className="h-48 w-full bg-zinc-900/30 rounded-lg border border-zinc-800/50 relative overflow-hidden flex items-end px-2 pb-2 gap-1">
            {Array.from({ length: 40 }).map((_, i) => {
              const height = 30 + ((i * 17) % 60);
              const isDrop = i > 25 && i < 30;
              return (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-sm transition-all duration-500 ${isDrop ? "bg-red-500/40" : "bg-cyan-500/20 hover:bg-cyan-500/40"}`}
                  style={{ height: `${isDrop ? 10 : height}%` }}
                />
              );
            })}
            {/* Grid lines */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "100% 25%" }} />
          </div>

          {/* Alert Preview */}
          <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start space-x-3">
            <div className="p-2 rounded-md bg-blue-500/10 text-blue-400">
              <MessageSquare size={18} />
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-200">Telegram Alert</div>
              <div className="text-xs text-zinc-400 mt-1">
                <span className="text-red-400 font-mono">[CRITICAL]</span> Staging DB (Port 5432) is not responding. Timeout after 5000ms.
              </div>
              <div className="text-[10px] text-zinc-600 mt-2">2 minutes ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Página Principal ---

export default function LandingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Activity className="text-cyan-400" size={24} />
              <span className="text-xl font-bold tracking-tight text-zinc-100">PortScope</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Pricing</a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Docs</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hidden sm:block text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Login</a>
              <Button variant="primary" className="text-sm px-4 py-2">Start Free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-32 pb-16 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Badge>Now in Public Beta</Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 mb-6">
            Monitor your servers <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
              and ports 24/7
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed">
            Get instant alerts when your services go offline. Simple, powerful uptime monitoring 
            built specifically for developers and homelab enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" className="w-full sm:w-auto h-12 px-8 text-base">
              Start Free <ChevronRight size={16} className="ml-2" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base">
              View Demo
            </Button>
          </div>
          {/* Waitlist Form */}
<div className="max-w-md mx-auto mt-8">
  <p className="text-zinc-400 text-sm text-center mb-3">
    Be among the first to try PortScope.
  </p>
  <form 
    action="https://formspree.io/f/maewkepy" 
    method="POST"
    className="flex flex-col sm:flex-row gap-3"
  >
    <input
      type="email"
      name="email"
      placeholder="your@email.com"
      required
      className="flex-1 h-12 px-4 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
    />
    <button 
      type="submit"
      className="h-12 px-6 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold transition-colors whitespace-nowrap text-zinc-900"
    >
      Join the beta
    </button>
  </form>
</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DashboardMockup />
        </motion.div>
      </Section>

      {/* Social Proof */}
      <Section className="py-12 border-y border-zinc-800/50 bg-zinc-950/50">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Trusted by developers worldwide</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Fake Logos using Text/Icons for reliability */}
          {["Nexus Labs", "CloudForge", "DevStream", "HomeStack"].map((name, i) => (
            <div key={i} className="flex items-center space-x-2 text-xl font-bold text-zinc-400">
              <Globe size={20} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { label: "Uptime Guarantee", value: "99.9%" },
            { label: "Checks per Day", value: "10k+" },
            { label: "Alert Delivery", value: "< 5s" },
          ].map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-3xl font-bold text-zinc-100 mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">Everything you need to stay online</h2>
          <p className="text-zinc-400">Powerful features wrapped in a minimalist interface. No bloat, just reliable monitoring.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Server} title="Port Monitoring" description="Check any TCP/UDP port. Perfect for game servers, databases, and custom services." />
          <FeatureCard icon={Globe} title="HTTP/HTTPS Checks" description="Validate status codes, response times, and keyword matching on your web endpoints." />
          <FeatureCard icon={MessageSquare} title="Telegram & Discord" description="Get instant notifications directly in your favorite chat apps via webhooks." />
          <FeatureCard icon={Lock} title="SSL Expiration" description="Never let a certificate expire again. Get warned 30, 14, and 7 days before expiry." />
          <FeatureCard icon={LayoutDashboard} title="Simple Dashboard" description="A clean, dark-mode native interface designed for quick glances and deep dives." />
          <FeatureCard icon={Activity} title="Real-time Status" description="Live latency charts and uptime history to spot degradation before it becomes an outage." />
          <FeatureCard icon={Zap} title="Fast Setup" description="Add your first monitor in under 30 seconds. No complex configurations required." />
          <FeatureCard icon={Shield} title="Multi-region Checks" description="Verify your service is accessible globally, not just from a single datacenter." />
        </div>
      </Section>

      {/* Dashboard Preview Section (Detailed) */}
      <Section className="py-24 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge>Deep Visibility</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-6">
              Know exactly what's happening, <span className="text-cyan-400">the second it happens.</span>
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Our dashboard provides granular insights into your infrastructure's health. 
              Track latency spikes, view historical uptime percentages, and manage all your 
              alerts from a single, unified command center.
            </p>
            <ul className="space-y-4 mb-8">
              {["Visual uptime calendars (GitHub-style)", "Customizable check intervals (1min to 24h)", "Incident timeline and audit logs"].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-300">
                  <CheckCircle2 size={18} className="text-cyan-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline">Explore Documentation</Button>
          </div>
          
          {/* Secondary Mockup: Focus on Analytics */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Activity size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-100">api.production.com</div>
                    <div className="text-xs text-emerald-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                      Operational
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zinc-100">99.98%</div>
                  <div className="text-xs text-zinc-500">Last 30 days</div>
                </div>
              </div>
              
              {/* Mini Latency Chart */}
              <div className="h-32 w-full flex items-end gap-1 mb-4">
                {Array.from({ length: 30 }).map((_, i) => {
                  const h = 20 + ((i * 23) % 70);
                  return <div key={i} className="flex-1 bg-zinc-700/50 hover:bg-cyan-500/50 rounded-t transition-colors" style={{ height: `${h}%` }} />;
                })}
              </div>
              <div className="flex justify-between text-xs text-zinc-500 font-mono">
                <span>30 days ago</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">Simple, transparent pricing</h2>
          <p className="text-zinc-400">Start for free, scale as your infrastructure grows. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Free"
            price="0"
            period="/month"
            features={["3 monitors", "5 minute check intervals", "Basic email alerts", "7-day data retention", "Community support"]}
          />
          <PricingCard 
            title="Pro"
            price="9"
            period="/month"
            highlighted={true}
            features={["50 monitors", "1 minute check intervals", "Telegram & Discord alerts", "SSL expiration monitoring", "30-day data retention", "Priority support"]}
          />
          <PricingCard 
            title="Business"
            price="29"
            period="/month"
            features={["Unlimited monitors", "30 second check intervals", "Advanced analytics & API", "Team access & SSO", "1-year data retention", "Dedicated account manager"]}
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-24">
        <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-12 sm:p-20 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          <div className="absolute -inset-20 bg-cyan-500/5 blur-3xl pointer-events-none" />
          
          <h2 className="relative text-3xl sm:text-5xl font-bold text-zinc-100 mb-6">
            Start monitoring your infrastructure today
          </h2>
          <p className="relative text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            Join thousands of developers who trust PortScope to keep their homelabs and production environments online.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="h-14 px-8 text-lg w-full sm:w-auto">
              Join the Beta
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="text-cyan-400" size={20} />
                <span className="text-lg font-bold text-zinc-100">PortScope</span>
              </div>
              <p className="text-sm text-zinc-500">
                Reliable uptime monitoring for the modern developer.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-100 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-100 mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Status Page</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-100 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><Code2 size={14} className="mr-2"/> Github</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><Mail size={14} className="mr-2"/> Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
            <p>© 2026 PortScope. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-zinc-400">Terms</a>
              <a href="#" className="hover:text-zinc-400">Privacy</a>
              <a href="#" className="hover:text-zinc-400">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}