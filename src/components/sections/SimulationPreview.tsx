import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts"
import { Thermometer, Gauge, Zap, Activity, AlertCircle, CheckCircle2, Clock, Terminal } from "lucide-react"

function generatePoint(prev: number, min: number, max: number, step: number) {
  const delta = (Math.random() - 0.48) * step
  return Math.max(min, Math.min(max, prev + delta))
}

function initTempData() {
  const data = []; let v = 68
  for (let i = 20; i >= 0; i--) {
    v = generatePoint(v, 60, 82, 2.5)
    data.push({ t: `-${i * 3}s`, v: parseFloat(v.toFixed(1)) })
  }
  return data
}

function initPressureData() {
  const data = []; let v = 2.4
  for (let i = 20; i >= 0; i--) {
    v = generatePoint(v, 1.8, 3.2, 0.1)
    data.push({ t: `-${i * 3}s`, v: parseFloat(v.toFixed(2)) })
  }
  return data
}

const machineStatuses = [
  { id: "M-001", name: "Compressor A", status: "online" as const, rpm: 3200, temp: 71 },
  { id: "M-002", name: "Pump Station", status: "online" as const, rpm: 1800, temp: 54 },
  { id: "M-003", name: "Heat Exchanger", status: "warning" as const, rpm: 0, temp: 88 },
  { id: "M-004", name: "Turbine Unit B", status: "online" as const, rpm: 5400, temp: 66 },
  { id: "M-005", name: "Valve Controller", status: "online" as const, rpm: 0, temp: 42 },
]

type Status = "online" | "warning" | "offline"
function StatusDot({ status }: { status: Status }) {
  const cls = status === "online" ? "status-dot-green" : status === "warning" ? "status-dot-yellow animate-blink" : "status-dot-red"
  return <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${cls}`} />
}

function MetricCard({ icon: Icon, label, value, unit, delta, colorClass }: {
  icon: React.ElementType; label: string; value: string; unit: string; delta: number; colorClass: string;
}) {
  const isPos = delta >= 0
  return (
    <div className="relative hud-panel p-4 flex flex-col gap-2 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>
        <div className={`w-7 h-7 cyber-chamfer-sm flex items-center justify-center border ${colorClass}`}>
          <Icon className="w-3 h-3" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex items-end gap-1.5">
        <span className="text-xl font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>{value}</span>
        <span className="text-xs text-muted-foreground pb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{unit}</span>
      </div>
      <div className={`text-[10px] font-medium ${isPos ? "text-[#00e676]" : "text-[#ff3355]"}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {isPos ? "▲" : "▼"} {Math.abs(delta).toFixed(2)} from last cycle
      </div>
    </div>
  )
}

export function SimulationPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const [tempData, setTempData] = useState(initTempData)
  const [pressureData, setPressureData] = useState(initPressureData)
  const [temp, setTemp] = useState(68.5)
  const [pressure, setPressure] = useState(2.42)
  const [efficiency, setEfficiency] = useState(87.3)
  const [uptime, setUptime] = useState(99.2)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1)
      setTemp((prev) => {
        const next = generatePoint(prev, 60, 82, 1.8)
        setTempData((d) => [...d.slice(1), { t: "now", v: parseFloat(next.toFixed(1)) }])
        return parseFloat(next.toFixed(1))
      })
      setPressure((prev) => {
        const next = generatePoint(prev, 1.8, 3.2, 0.08)
        setPressureData((d) => [...d.slice(1), { t: "now", v: parseFloat(next.toFixed(2)) }])
        return parseFloat(next.toFixed(2))
      })
      setEfficiency((prev) => parseFloat(generatePoint(prev, 82, 95, 1).toFixed(1)))
      setUptime((prev) => parseFloat(generatePoint(prev, 98, 99.9, 0.1).toFixed(1)))
    }, 2200)
    return () => clearInterval(id)
  }, [])

  const tempDelta = tempData.length > 1 ? parseFloat((temp - tempData[tempData.length - 2].v).toFixed(2)) : 0
  const pressDelta = pressureData.length > 1 ? parseFloat((pressure - pressureData[pressureData.length - 2].v).toFixed(3)) : 0

  const chartGridColor = "rgba(42,107,219,0.12)"
  const chartTextColor = "#5a6a80"

  return (
    <section id="simulation" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-circuit opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(42,107,219,0.04), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 bg-primary/5 cyber-chamfer-sm">
            <Terminal className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Live Simulation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            WATCH YOUR FACTORY{" "}
            <span className="gradient-text text-glow-blue">THINK IN REAL-TIME</span>
          </h2>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto tracking-wide leading-relaxed"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            This simulation preview shows exactly what your operations team would see —
            live system telemetry, behavioral trends, and intelligent status monitoring.
          </p>
        </motion.div>

        {/* Main simulation panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hud-panel overflow-hidden"
        >
          {/* Terminal header bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-primary/15 bg-black/40">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="terminal-dot bg-[#ff5f56] w-2.5 h-2.5" />
              <div className="terminal-dot bg-[#febc2e] w-2.5 h-2.5" />
              <div className="terminal-dot bg-[#28c840] w-2.5 h-2.5" />
              <span className="ml-3 text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                korvixes — plant-operations-center.exe
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 px-2.5 py-1 border border-[#00e676]/30 bg-[#00e676]/10">
                <span className="w-1.5 h-1.5 rounded-full status-dot-green animate-blink" />
                <span className="text-[9px] font-bold tracking-wider text-[#00e676] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>LIVE</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <Clock className="w-3 h-3" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tick}
                    initial={{ opacity: 0, y: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 3 }}
                  >
                    {String(new Date().getHours()).padStart(2,"0")}:
                    {String(new Date().getMinutes()).padStart(2,"0")}:
                    {String(new Date().getSeconds()).padStart(2,"0")}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Breadcrumb path */}
          <div className="px-4 py-1.5 bg-black/20 border-b border-border/20">
            <span className="text-[10px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="text-primary">&gt;</span> Factory Floor A <span className="text-primary/50">/</span> Zone 3 <span className="text-primary/50">/</span> <span className="text-accent">Active Monitor</span>
            </span>
          </div>

          <div className="p-5 grid lg:grid-cols-3 gap-5">
            {/* Left: Metrics */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-1"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>// System Metrics</h3>
              <MetricCard icon={Thermometer} label="Core Temperature" value={temp.toFixed(1)} unit="°C" delta={tempDelta}
                colorClass="text-primary bg-primary/10 border-primary/25" />
              <MetricCard icon={Gauge} label="System Pressure" value={pressure.toFixed(2)} unit="bar" delta={pressDelta}
                colorClass="text-accent bg-accent/10 border-accent/25" />
              <MetricCard icon={Zap} label="Op. Efficiency" value={efficiency.toFixed(1)} unit="%" delta={0.3}
                colorClass="text-[#00e676] bg-[#00e676]/10 border-[#00e676]/25" />
              <MetricCard icon={Activity} label="System Uptime" value={uptime.toFixed(1)} unit="%" delta={0.1}
                colorClass="text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/25" />
            </div>

            {/* Center: Charts */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-1"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Telemetry Streams</h3>
              <div className="hud-panel p-3 h-44">
                <div className="text-[9px] text-muted-foreground mb-2 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>TEMP_STREAM :: °C</div>
                <ResponsiveContainer width="100%" height="85%">
                  <AreaChart data={tempData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2A6BDB" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#2A6BDB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="2 4" stroke={chartGridColor} vertical={false} />
                    <XAxis dataKey="t" tick={{ fontSize: 8, fill: chartTextColor, fontFamily: 'JetBrains Mono' }} tickLine={false} axisLine={false} interval={4} />
                    <YAxis tick={{ fontSize: 8, fill: chartTextColor, fontFamily: 'JetBrains Mono' }} tickLine={false} axisLine={false} domain={['auto','auto']} />
                    <Tooltip contentStyle={{ background: "#0e0e1a", border: "1px solid rgba(42,107,219,0.3)", borderRadius: "0", fontSize: "10px", fontFamily: 'JetBrains Mono', color: "#e0e8f0" }} />
                    <Area type="monotone" dataKey="v" stroke="#2A6BDB" strokeWidth={1.5} fill="url(#tg)" isAnimationActive={false} dot={false} activeDot={{ r: 3, fill: "#2A6BDB" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="hud-panel p-3 h-44">
                <div className="text-[9px] text-muted-foreground mb-2 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>PRES_STREAM :: bar</div>
                <ResponsiveContainer width="100%" height="85%">
                  <AreaChart data={pressureData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3BC4E8" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#3BC4E8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="2 4" stroke={chartGridColor} vertical={false} />
                    <XAxis dataKey="t" tick={{ fontSize: 8, fill: chartTextColor, fontFamily: 'JetBrains Mono' }} tickLine={false} axisLine={false} interval={4} />
                    <YAxis tick={{ fontSize: 8, fill: chartTextColor, fontFamily: 'JetBrains Mono' }} tickLine={false} axisLine={false} domain={['auto','auto']} />
                    <Tooltip contentStyle={{ background: "#0e0e1a", border: "1px solid rgba(59,196,232,0.3)", borderRadius: "0", fontSize: "10px", fontFamily: 'JetBrains Mono', color: "#e0e8f0" }} />
                    <Area type="monotone" dataKey="v" stroke="#3BC4E8" strokeWidth={1.5} fill="url(#pg)" isAnimationActive={false} dot={false} activeDot={{ r: 3, fill: "#3BC4E8" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right: Machine status */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-1"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Machine Status</h3>
              <div className="flex flex-col gap-1.5">
                {machineStatuses.map((machine, i) => (
                  <motion.div
                    key={machine.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="hud-panel px-3 py-2.5 flex items-center gap-2.5"
                  >
                    <StatusDot status={machine.status} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold truncate" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{machine.name}</span>
                        <span className="text-[9px] text-muted-foreground font-mono ml-2 shrink-0">{machine.id}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-0.5">
                        {machine.rpm > 0 && <span className="text-[9px] text-muted-foreground">{machine.rpm.toLocaleString()} rpm</span>}
                        <span className={`text-[9px] font-mono ${machine.status === "warning" ? "text-[#f59e0b]" : "text-muted-foreground"}`}>
                          {machine.temp}°C
                        </span>
                      </div>
                    </div>
                    {machine.status === "warning"
                      ? <AlertCircle className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                      : <CheckCircle2 className="w-3.5 h-3.5 text-[#00e676] shrink-0" />
                    }
                  </motion.div>
                ))}
              </div>

              {/* Alert log */}
              <div className="mt-1">
                <h3 className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Recent Alerts</h3>
                <div className="flex flex-col gap-1.5">
                  <div className="hud-panel px-3 py-2 border-l-2 border-[#f59e0b] bg-[#f59e0b]/5">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-3 h-3 text-[#f59e0b] shrink-0" />
                      <span className="text-[10px] text-[#f59e0b] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        Heat Exchanger — Temp Threshold
                      </span>
                    </div>
                    <span className="text-[9px] text-muted-foreground ml-4.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>88°C — Warning at 85°C</span>
                  </div>
                  <div className="hud-panel px-3 py-2 border-l-2 border-[#00e676] bg-[#00e676]/5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#00e676] shrink-0" />
                      <span className="text-[10px] text-[#00e676] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        Turbine B — Stability Restored
                      </span>
                    </div>
                    <span className="text-[9px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>All parameters nominal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom status bar */}
          <div className="px-4 py-2 border-t border-primary/10 bg-black/30 flex items-center justify-between">
            <span className="text-[9px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="text-primary/50 mr-1">$</span>
              NVIDIA_SDK :: simulation_engine v4.2.1 — powered by NVIDIA SDK
            </span>
            <span className="text-[9px] text-[#00e676]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>● SYNC ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
