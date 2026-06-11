export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  date: string
  featured: boolean
  author?: string
  authorRole?: string
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Digital Twin Accuracy at Scale: How We Hit 99.8% Across 180+ Enterprise Workloads",
    excerpt: "A deep-dive into the simulation accuracy methodologies behind Korvixes Engine v4 — covering numerical solvers, real-time data assimilation, and our physics validation framework.",
    content: "Achieving 99.8% simulation accuracy at enterprise scale required rethinking every layer of our digital twin pipeline. Traditional approaches to industrial simulation often sacrifice accuracy for performance, but our hybrid solver architecture bridges this gap.\n\nOur numerical solver combines finite element methods with neural PDE approximations, allowing us to maintain sub-millisecond inference times while preserving physical fidelity. The key breakthrough came from our adaptive mesh refinement algorithm, which dynamically allocates computational resources to regions of interest within each simulation.\n\nReal-time data assimilation pipelines ingest sensor data from 180+ industrial deployments, continuously calibrating our models against ground truth measurements. This feedback loop ensures that simulations remain accurate even as plant conditions evolve over time. Our physics validation framework cross-references simulation outputs against known analytical solutions and historical failure modes, providing a safety net for edge cases.",
    category: "Engineering",
    readTime: "12 min read",
    date: "May 28, 2026",
    featured: true,
    author: "Dr. Elena Vasquez",
    authorRole: "Chief Simulation Scientist",
  },
  {
    id: "2",
    title: "OT/IT Convergence: Securing Industrial Networks Without Sacrificing Performance",
    excerpt: "As industrial systems become increasingly connected, the security perimeter has dissolved. We explore how zero-trust architectures can be applied in latency-sensitive OT environments.",
    content: "The convergence of Operational Technology and Information Technology has created unprecedented attack surfaces in industrial environments. Traditional air-gapped architectures are no longer viable as manufacturers demand real-time data access across their digital twin ecosystems.\n\nOur approach applies zero-trust principles at the OT level without introducing measurable latency overhead. Each device authenticates every request using hardware-backed attestation, and all communication is encrypted using lightweight ciphers optimized for real-time control loops.\n\nWe deployed this architecture across 47 industrial sites in the past year, achieving sub-100-microsecond authentication overhead while maintaining compliance with IEC 62443 SL2. The key insight was that security and performance are not trade-offs when the security primitives are designed specifically for the constraints of industrial real-time systems.",
    category: "Security",
    readTime: "8 min read",
    date: "May 14, 2026",
    featured: true,
    author: "Marcus Chen",
    authorRole: "Security Architect",
  },
  {
    id: "3",
    title: "Predictive Maintenance vs. Digital Twin Simulation: A Practitioner's Comparison",
    excerpt: "Both approaches aim to prevent downtime. We break down where classical ML-based predictive maintenance falls short, and how simulation-based approaches close the gap.",
    content: "Predictive maintenance and digital twin simulation are often confused, but they serve fundamentally different purposes. Classical ML-based predictive maintenance analyzes historical failure patterns to forecast when equipment might fail, while digital twin simulation models the underlying physics to predict how equipment behaves under any condition.\n\nThe limitation of pure ML approaches becomes apparent when operating conditions change. A model trained on historical data from a specific production line cannot generalize to new configurations or unexpected operating regimes. Simulation-based approaches, by contrast, model the physical principles that govern equipment behavior, making them robust to environmental changes.\n\nIn practice, the most effective solutions combine both approaches. ML models excel at detecting subtle patterns in sensor data, while simulation provides causal understanding and generalization. Our platform's hybrid architecture leverages this synergy, using simulation to augment training data and ML to calibrate simulation parameters in real-time.",
    category: "Product",
    readTime: "10 min read",
    date: "April 30, 2026",
    featured: false,
    author: "Sarah Lindholm",
    authorRole: "Product Manager",
  },
  {
    id: "4",
    title: "How a Tier 1 Automotive Supplier Reduced Unplanned Downtime by 73%",
    excerpt: "A case study on deploying Korvixes across 14 stamping lines at a European automotive components manufacturer. From integration to measurable ROI in 90 days.",
    content: "A leading European automotive supplier approached us with a critical challenge: their 14 stamping lines were experiencing an average of 47 hours of unplanned downtime per month, costing approximately €2.3M annually in lost production. Traditional predictive maintenance systems had failed to deliver meaningful improvements.\n\nWe deployed Korvixes across all 14 lines in a phased approach over six weeks. Each line received a digital twin calibrated to its specific configuration, tooling wear patterns, and environmental conditions. The simulation models ran in parallel with live production, identifying anomalies before they manifested as failures.\n\nWithin 90 days, unplanned downtime dropped by 73%, from 47 hours to 12.7 hours per month. The system detected 89% of impending failures at least 48 hours in advance, giving maintenance teams sufficient time to plan interventions during scheduled windows. The ROI measured 8.4x within the first six months of deployment.",
    category: "Case Study",
    readTime: "7 min read",
    date: "April 15, 2026",
    featured: false,
    author: "Thomas Weber",
    authorRole: "Solutions Engineer",
  },
  {
    id: "5",
    title: "The Physics of Industrial Simulation: Why Most Digital Twins Get Thermodynamics Wrong",
    excerpt: "A technical exploration of common errors in thermal and fluid simulation in industrial digital twins, and the modeling choices that lead to them.",
    content: "Thermodynamic accuracy is the single most common failure point in industrial digital twins. Despite sophisticated modeling frameworks, many implementations make fundamental errors in how they handle heat transfer, fluid dynamics, and thermal coupling between components.\n\nThe most pervasive error is treating thermal systems as lumped parameter models when distributed effects dominate. In high-precision manufacturing environments, thermal gradients as small as 0.5°C can cause micron-level positional errors in machining centers. Lumped models simply cannot capture these gradients.\n\nOur approach uses reduced-order modeling of computational fluid dynamics that preserves the spatial distribution of thermal effects while remaining computationally tractable for real-time simulation. We validated this approach against physical measurements across 23 different industrial processes, achieving mean absolute error of 0.12°C in thermal prediction across all test cases.",
    category: "Engineering",
    readTime: "15 min read",
    date: "March 28, 2026",
    featured: false,
    author: "Dr. Yuki Tanaka",
    authorRole: "Computational Physicist",
  },
  {
    id: "6",
    title: "Korvixes Engine v4.2: Real-Time Latency Improvements and New API Capabilities",
    excerpt: "What's new in our latest platform release — including the sub-2ms latency breakthrough for synchronous simulation streams and the expanded digital twin composition API.",
    content: "We are pleased to announce the release of Korvixes Engine v4.2, our most significant update this year. The headline feature is our sub-2ms latency breakthrough for synchronous simulation streams, achieved through a complete rearchitecture of our inference pipeline.\n\nThe new engine uses GPU-accelerated sparse tensor operations combined with a custom kernel scheduler that prioritizes real-time streams over batch processing. This architectural change reduced p95 latency from 4.7ms to 1.8ms across all deployment configurations.\n\nVersion 4.2 also introduces the expanded Digital Twin Composition API, which allows engineers to compose complex multi-physics simulations from modular component twins. The API supports hierarchical composition, shared state synchronization, and versioned deployment of simulation components. Full documentation is available in our developer portal.",
    category: "Release",
    readTime: "5 min read",
    date: "March 12, 2026",
    featured: false,
  },
  {
    id: "7",
    title: "Smart Factory AI: Integrating LLM-based Reasoning into Simulation Pipelines",
    excerpt: "How we built the AI Simulation Intelligence layer — combining physics-based simulation with large language models for natural language interaction with industrial models.",
    content: "The intersection of physics-based simulation and large language models represents a paradigm shift in how engineers interact with industrial systems. Our AI Simulation Intelligence layer enables operators to query simulation state, modify parameters, and receive optimization recommendations using natural language.\n\nUnder the hood, we fine-tuned a domain-specific language model on a corpus of industrial engineering documentation, simulation logs, and maintenance records. The model is constrained to generate structured queries that our simulation engine can execute deterministically, ensuring that the AI cannot propose physically impossible configurations.\n\nIn early deployments, the system reduced the time required to reconfigure simulation parameters by 94%, from an average of 18 minutes using traditional interfaces to 62 seconds using natural language. Engineers reported significantly higher engagement with simulation tools, with daily active usage increasing by 3.7x.",
    category: "Engineering",
    readTime: "11 min read",
    date: "February 24, 2026",
    featured: false,
    author: "Priya Nair",
    authorRole: "AI Research Lead",
  },
  {
    id: "8",
    title: "IEC 62443 Compliance for Cloud-Based Industrial Platforms: A Practical Guide",
    excerpt: "Achieving IEC 62443 SL2 certification as a cloud-native SaaS provider isn't straightforward. We share our implementation journey, architectural decisions, and lessons learned.",
    content: "IEC 62443 is the gold standard for industrial cybersecurity, but its requirements were designed primarily for on-premise deployments. Adapting its framework to a cloud-native SaaS architecture required creative interpretation and significant engineering investment.\n\nOur approach mapped each IEC 62443 SL2 requirement to specific architectural controls in our platform. For foundational requirements (FR 1–7), we implemented hardware-backed identity management, encrypted data pipelines with automated key rotation, and continuous monitoring with real-time anomaly detection.\n\nAchieving certification took 14 months and required 23 architectural changes to our platform. The most challenging requirement was FR 5 — data integrity — which demanded end-to-end provenance tracking for every simulation input and output. We built an append-only audit ledger using Merkle tree structures that provides cryptographic proof of data lineage without introducing measurable performance overhead.",
    category: "Security",
    readTime: "9 min read",
    date: "February 10, 2026",
    featured: false,
    author: "Alex Foster",
    authorRole: "Compliance Engineer",
  },
]

export const categoryColors: Record<string, string> = {
  Engineering: "text-accent border-accent/30 bg-accent/8",
  Security: "text-[#ff3355] border-[#ff3355]/30 bg-[#ff3355]/8",
  Product: "text-primary border-primary/30 bg-primary/8",
  "Case Study": "text-[#00e676] border-[#00e676]/30 bg-[#00e676]/8",
  Release: "text-[#f59e0b] border-[#f59e0b]/30 bg-[#f59e0b]/8",
}
