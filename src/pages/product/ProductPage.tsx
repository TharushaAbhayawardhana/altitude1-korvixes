import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { RefreshCw, Box, BarChart3, Binary, Layers, Sliders, Shield, Zap, Server, Network, ArrowRight } from 'lucide-react';
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function KorvixesProductPage() {
const [activeLayer, setActiveLayer] = useState<number>(0);
const [syncRate, setSyncRate] = useState<number>(0);
// Simulation telemetry animation loop
useEffect(() => {
const interval = setInterval(() => {
setSyncRate((prev) => (prev >= 100 ? 94.2 : parseFloat((prev + 0.8).toFixed(1))));
}, 40);
return () => clearInterval(interval);
}, []);
const coreCapabilities = [
{
title: "Digital Twin Synthesis Engine",
description: "Generates high-fidelity virtual replicas of physical factories, complex machines, and heavy infrastructure infrastructure nodes dynamically.",
icon: <Box className="w-6 h-6 text-[#3BC4E8]" />,
telemetry: "Omniverse Spatial Mesh Active"
},
{
title: "Industrial Process Simulation",
description: "Stress-test workflow adjustments, line changes, or extreme operational profiles before implementing changes across structural environments.",
icon: <Binary className="w-6 h-6 text-[#2A6BDB]" />,
telemetry: "Isaac Sim Parallel Pipeline"
},
{
title: "AI Predictive Modeling",
description: "Forecast precise asset breakdown timings, trace system production bottlenecks, and receive physics-informed structural maintenance blueprints.",
icon: <BarChart3 className="w-6 h-6 text-[#3BC4E8]" />,
telemetry: "Modulus Predictive Frame Load"
}
];
const nvidiaStack = [
{ name: "NVIDIA Omniverse", desc: "Core engine for real-time industrial scaling, ray-traced physics representation, and structural sync." },
{ name: "NVIDIA Isaac Sim", desc: "Powerful robotics and automated workflow modeling runtime environment for industrial stress testing." },
{ name: "NVIDIA Modulus", desc: "Physics-informed neural network framework ensuring real-world correctness across simulations." },
{ name: "NVIDIA TensorRT", desc: "Ultra-low latency inference compiler to evaluate live industrial state anomalies instantly." },
{ name: "NVIDIA Triton", desc: "Scalable inference platform orchestration to serve simultaneous simulation requests seamlessly." },
{ name: "NVIDIA CUDA", desc: "Parallel processing computational engine powering deep telemetry array evaluations." }
];
return (
<>
<Navbar />
<div className="bg-[#07090F] text-slate-100 min-h-screen font-sans selection:bg-[#2A6BDB]/30 overflow-x-hidden antialiased relative">
{/* ANIMATED NEON SAAS GRID BACKGROUND MESH */}
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
{/* Animated Infinite Matrix Grid Shift Layer */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#101524_1px,transparent_1px),linear-gradient(to_bottom,#101524_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] animate-gridMove opacity-60"></div>
{/* Perspective vignette fade to dark borders */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#07090F_95%)]"></div>
{/* Ambient background accent glows */}
<div className="absolute top-[20%] left-[10%] w-80 h-80 bg-[#2A6BDB]/10 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute bottom-[30%] right-[10%] w-96 h-96 bg-[#3BC4E8]/10 rounded-full blur-[130px] animate-pulse delay-1000"></div>
</div>
{/* SECTION 1: INDUSTRIAL DIGITAL TWIN HERO */}
<section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden border-b border-[#10141E] z-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
{/* Dark overlay for readability */}
<div className="absolute inset-0 bg-black/60"></div>
<div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
{/* LEFT CONTENT */}
<div className="lg:col-span-7 space-y-6 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3BC4E8]/30 bg-[#0B0E16]/80 text-xs font-semibold tracking-wider text-[#3BC4E8] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(59,196,232,0.15)]">
<RefreshCw className="w-3.5 h-3.5 animate-spin" />
Real-Time Telemetry Synchronization Active
</div>
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
Industrial{" "}
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A6BDB] to-[#3BC4E8] drop-shadow-[0_0_30px_rgba(42,107,219,0.3)]">
Digital Twin
</span>{" "}
& Simulation Core
</h1>
<p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0">
Synthesize flawless real-time virtual replicas of physical infrastructure.
Test structural modifications, predict equipment degradation, and optimize
assets using physics-bound AI.
</p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
<a
href="https://app.korvixes.one/"
target="_blank"
rel="noreferrer"
className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#2A6BDB] to-[#3BC4E8] text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-300 text-center shadow-[0_0_20px_rgba(42,107,219,0.4)]"
>
Open the Dashboard
</a>
            <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#0B0E16]/90 border border-slate-800 hover:border-[#2A6BDB]/50 text-slate-300 font-medium transition-all duration-300 backdrop-blur-md text-center"
              >
                Contact Us
              </Link>
</div>
</div>
{/* RIGHT GLASS PANEL */}
<div className="lg:col-span-5 relative">
<div className="w-full bg-[#0B0E16]/70 border border-slate-800/80 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(7,9,15,0.8)] relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2A6BDB]/50 to-transparent animate-shimmer"></div>
<div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
<div className="w-3 h-3 rounded-full bg-cyan-500/80"></div>
<div className="w-3 h-3 rounded-full bg-indigo-500/80"></div>
</div>
<span className="text-xs text-slate-500 font-mono">
kvx_twin_instance.sys
</span>
</div>
<div className="space-y-4 font-mono text-xs">
<div className="p-3 rounded bg-[#07090F]/90 border border-slate-800 flex justify-between items-center">
<span className="text-slate-400">OMNIVERSE PIPELINE:</span>
<span className="text-[#3BC4E8] animate-pulse">CONNECTED</span>
</div>
<div className="p-3 rounded bg-[#07090F]/90 border border-slate-800 flex justify-between items-center">
<span className="text-slate-400">PHYSICS MODULUS:</span>
<span className="text-[#2A6BDB] font-bold">100% Bound</span>
</div>
<div className="p-3 rounded bg-[#07090F]/90 border border-slate-800">
<div className="flex justify-between mb-1.5">
<span className="text-slate-400">DATA SYNC CONSISTENCY:</span>
<span className="text-cyan-400">{syncRate}%</span>
</div>
<div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
<div
className="bg-gradient-to-r from-[#2A6BDB] to-[#3BC4E8] h-full transition-all duration-300"
style={{ width: `${syncRate}%` }}
/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 2: SIMULATION INTELLIGENCE DASHBOARD MATRIX */}
<section className="py-24 px-6 lg:px-16 bg-[#0B0E16]/40 border-b border-[#10141E] relative z-10">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
Simulation Control Topology
</h2>
<p className="text-slate-400">
An advanced command-center grid mapping telemetry ingestion directly onto predictive
digital matrix structures.
</p>
</div>
<div className="bg-[#10141E]/40 border border-slate-800/60 rounded-2xl p-2 backdrop-blur-xl shadow-2xl">
<div className="bg-[#07090F]/90 rounded-xl border border-slate-800 p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Telemetry Control Strips */}
<div className="lg:col-span-4 space-y-2">
<div className="text-xs font-bold tracking-wider text-slate-500 uppercase px-3 mb-3">Twin Array Layers</div>
{coreCapabilities.map((item, idx) => (
<button
key={idx}
onClick={() => setActiveLayer(idx)}
className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 border ${activeLayer === idx
? 'bg-[#3BC4E8]/10 border-[#3BC4E8] shadow-[0_0_15px_rgba(59,196,232,0.15)] text-white'
: 'bg-transparent border-transparent hover:bg-[#10141E]/50 text-slate-400 hover:text-slate-200'
}`}
>
<div className={`p-2 rounded-lg ${activeLayer === idx ? 'bg-[#3BC4E8]/20' : 'bg-slate-900'}`}>
{item.icon}
</div>
<div>
<h4 className="font-semibold text-sm">{item.title}</h4>
<p className="text-xs text-slate-400 mt-1 line-clamp-1">{item.description}</p>
</div>
</button>
))}
</div>
{/* Dynamic Telemetry Feedback Screen */}
<div className="lg:col-span-8 bg-[#07090F] border border-slate-800 rounded-xl p-6 relative flex flex-col justify-between overflow-hidden group min-h-[350px]">
{/* Horizontal Scanning Matrix Trace Line */}
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#2A6BDB]/5 via-transparent to-transparent bg-[size:100%_400%] animate-scan"></div>
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#3BC4E8] animate-ping"></span>
<span className="text-xs font-mono uppercase tracking-widest text-slate-400">VIRTUALIZATION ENGINE // LINK_OK</span>
</div>
<div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-[#2A6BDB]">
{coreCapabilities[activeLayer].telemetry}
</div>
</div>
<div className="my-auto space-y-4 relative z-10 py-6">
<div className="text-slate-500 font-mono text-xs">
{"//"} Selected Synthesis Context
</div>
<p className="text-xl font-light text-slate-200 max-w-xl leading-relaxed">
{coreCapabilities[activeLayer].description}
</p>
</div>
<div className="border-t border-slate-900 pt-4 flex items-center justify-between text-xs font-mono text-slate-500 relative z-10">
<div>SYNC TELEMETRY: <span className="text-emerald-400">Isomorphic</span></div>
<div>SIM MATRIX: <span className="text-white">Korvixes Core v4.1</span></div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 3: INDUSTRIAL WORKFLOW INTEGRATION */}
<section className="py-24 px-6 lg:px-16 border-b border-[#10141E] relative z-10">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-6">
<div className="h-1 w-12 bg-gradient-to-r from-[#2A6BDB] to-[#3BC4E8]"></div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
Predictive Operations for High-Risk Infrastructures
</h2>
<p className="text-slate-400 leading-relaxed">
Korvixes unifies fragmented sensor, IoT, and system telemetry streams into a
cohesive, actionable operational layout. Mitigate engineering bottlenecks before they emerge
within structural pipelines.
</p>
<div className="space-y-3 pt-2">
{[
"Physics-informed asset breakdown forecasting",
"Cross-facility capacity and scaling strategy modeling",
"Closed-loop autonomous equipment anomaly mapping",
"Unified operational awareness across logistics corridors"
].map((item, index) => (
<div key={index} className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#3BC4E8]" />
<span>{item}</span>
</div>
))}
</div>
</div>
{/* Grid of Command-Center Structural Enhancements */}
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-[#0B0E16]/40 border border-slate-800/80 backdrop-blur-md hover:border-[#2A6BDB]/40 transition-all duration-300 group">
<Sliders className="w-8 h-8 text-[#2A6BDB] mb-4 group-hover:scale-110 transition-transform" />
<h3 className="text-lg font-bold text-white mb-2">Granular Tuning Matrix</h3>
<p className="text-xs text-slate-400">Modulate isolated environmental parameters inside simulations to review variable asset stress behavior.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0B0E16]/40 border border-slate-800/80 backdrop-blur-md hover:border-[#3BC4E8]/40 transition-all duration-300 group">
<Zap className="w-8 h-8 text-[#3BC4E8] mb-4 group-hover:scale-110 transition-transform" />
<h3 className="text-lg font-bold text-white mb-2">Zero-Risk Experimentation</h3>
<p className="text-xs text-slate-400">Validate major industrial processing logic updates entirely in virtual space, avoiding structural pipeline stoppages.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0B0E16]/40 border border-slate-800/80 backdrop-blur-md hover:border-[#3BC4E8]/40 transition-all duration-300 group">
<Shield className="w-8 h-8 text-[#3BC4E8] mb-4 group-hover:scale-110 transition-transform" />
<h3 className="text-lg font-bold text-white mb-2">Deterministic Security</h3>
<p className="text-xs text-slate-400">Architected meticulously to separate sensitive facility telemetry data pipelines safely from raw ingestion zones.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0B0E16]/40 border border-slate-800/80 backdrop-blur-md hover:border-[#2A6BDB]/40 transition-all duration-300 group">
<Layers className="w-8 h-8 text-[#2A6BDB] mb-4 group-hover:scale-110 transition-transform" />
<h3 className="text-lg font-bold text-white mb-2">Multi-Facility Stacking</h3>
<p className="text-xs text-slate-400">Consolidate multiple distinct global production complexes under a single integrated global dashboard system layout.</p>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 4: NVIDIA SIMULATION HARDWARE CORE */}
<section className="py-24 px-6 lg:px-16 bg-[#0B0E16]/20 border-b border-[#10141E] relative z-10">
<div className="absolute inset-0 bg-[#3BC4E8]/5 mix-blend-color opacity-20 pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<div className="text-xs font-bold tracking-widest text-[#3BC4E8] uppercase">Hardware Co-Processing Stack</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
The NVIDIA Omniverse Ecosystem
</h2>
<p className="text-slate-400">
Deeply integrated with NVIDIA acceleration SDKs to calculate massive physics
equations and parallel spatial layouts instantly.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{nvidiaStack.map((sdk, idx) => (
<div key={idx} className="p-6 rounded-xl bg-[#10141E]/40 border border-slate-800/50 backdrop-blur-lg hover:bg-[#10141E]/80 transition-all duration-300 flex flex-col justify-between shadow-lg relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#2A6BDB]/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#2A6BDB]"></div>
<h3 className="font-mono font-bold text-sm tracking-wide text-white group-hover:text-[#3BC4E8] transition-colors">{sdk.name}</h3>
</div>
<p className="text-xs text-slate-400 leading-relaxed">{sdk.desc}</p>
</div>
<div className="text-[10px] font-mono text-slate-600 mt-4 tracking-wider uppercase">CUDA Acceleration Verified</div>
</div>
))}
</div>
</div>
</section>
{/* SECTION 5: AWS GPU SPECIFICATION MATRIX */}
<section className="py-24 px-6 lg:px-16 border-b border-[#10141E] relative z-10">
<div className="max-w-6xl mx-auto">
<div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#0B0E16] via-[#10141E] to-[#07090F] border border-slate-800/80 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-96 h-96 bg-[#3BC4E8]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-6 space-y-6">
<div className="inline-flex items-center gap-2 text-xs font-mono text-[#2A6BDB] bg-[#2A6BDB]/10 border border-[#2A6BDB]/20 px-2.5 py-1 rounded">
Target Infrastructure Framework
</div>
<h2 className="text-3xl font-bold tracking-tight text-white">
High-Throughput Global Deployment Over AWS
</h2>
<p className="text-slate-400 text-sm leading-relaxed">
Korvixes is engineered for simple horizontal scaling across Amazon Web Services
architectures. By maximizing dedicated multi-gpu cluster matrices, low-latency spatial queries
scale instantly globally.
</p>
<div className="grid grid-cols-2 gap-4 pt-2">
<div className="p-4 bg-[#07090F]/90 border border-slate-800 rounded-xl">
<div className="text-xs text-slate-500 font-mono">AWS EC2 NODES</div>
<div className="text-base font-bold text-white mt-1">P4 / P5 Blueprints</div>
</div>
<div className="p-4 bg-[#07090F]/90 border border-slate-800 rounded-xl">
<div className="text-xs text-slate-500 font-mono">COMPUTE ARCHITECTURE</div>
<div className="text-base font-bold text-[#3BC4E8] mt-1">A100 & H100 Fabrics</div>
</div>
</div>
</div>
<div className="lg:col-span-6 space-y-4">
<div className="p-5 rounded-xl border border-slate-800 bg-[#07090F]/60 flex gap-4 items-start">
<Server className="w-5 h-5 text-[#3BC4E8] shrink-0 mt-0.5" />
<div>
<h4 className="text-sm font-bold text-white">Reduced Training Cycles</h4>
<p className="text-xs text-slate-400 mt-1">Accelerate specialized structural layout compile intervals down to minutes instead of consecutive multi-day cycles.</p>
</div>
</div>
<div className="p-5 rounded-xl border border-slate-800 bg-[#07090F]/60 flex gap-4 items-start">
<Network className="w-5 h-5 text-[#2A6BDB] shrink-0 mt-0.5" />
<div>
<h4 className="text-sm font-bold text-white">Massive Concurrent Ingestion</h4>
<p className="text-xs text-slate-400 mt-1">Simulate thousands of real-time machine pipelines simultaneously without introducing ingestion telemetry lag.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 6: TARGETED PLATFORM INTAKE ACTION */}
<section className="py-32 px-6 lg:px-16 text-center relative overflow-hidden z-10">
<div className="max-w-4xl mx-auto space-y-8 relative z-10">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
Synthesize Your Operational Future
</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">
Bring true structural visibility into your factory layout. Deploy your physical operations
safely inside a hyper-accelerated predictive simulation cluster.
</p>
<div className="flex justify-center pt-4">
<Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2A6BDB] to-[#3BC4E8] text-white font-semibold rounded-xl hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(42,107,219,0.3)] hover:shadow-[0_0_40px_rgba(59,196,232,0.5)]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
</div>
<div className="pt-12 flex justify-center items-center gap-8 text-xs font-mono text-slate-500">
<div>CORE STATUS: <span className="text-cyan-400">SYNCHRONIZED</span></div>
<div>BUILD PROFILE: <span className="text-white">v4.1.2-PROD</span></div>
<div>CLUSTER NET: <span className="text-white">AWS_NODE_GLOBAL</span></div>
</div>
</div>
</section>
</div>
<Footer />
</>
);
}

export { KorvixesProductPage as ProductPage }
