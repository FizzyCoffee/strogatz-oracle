/* ============================================================
   STROGATZ ORACLE — Love Dynamics Personality Analysis
   Based on Strogatz coupled-oscillator model
   ============================================================ */

// ===== TYPE DEFINITIONS =====
const TYPES = {
  NOVA: {
    name: 'NOVA',
    code: 'RSF',
    icon: '✦',
    color: '#FF0D1A',
    tagline: 'Explosive resonance — a supernova of passion',
    jaName: '新星',
    axes: { resonance: 'R', coupling: 'S', phase: 'F' },
    params: { a: 0.8, b: 0.5 },
    traits: { intensity: 0.95, stability: 0.2, empathy: 0.8, independence: 0.3, speed: 0.9, depth: 0.5 },
    description: 'You are a NOVA — the most explosive oscillator type. Your feelings self-amplify rapidly, spiraling ever further from equilibrium. Each emotional cycle grows larger than the last — passion that cannot be contained. Your eigenvalue is strongly positive (λ > 0), meaning deviations from the love point amplify exponentially. In the phase portrait, your trajectory spirals outward: not less love, but love too intense to settle.',
    strengths: 'Passionate, magnetic, deeply present, emotionally generous',
    risks: 'Burnout, overwhelming partners, intensity addiction'
  },
  PULSAR: {
    name: 'PULSAR',
    code: 'RSW',
    icon: '◉',
    color: '#3601FB',
    tagline: 'Deep rhythmic devotion — a steady cosmic heartbeat',
    jaName: 'パルサー',
    axes: { resonance: 'R', coupling: 'S', phase: 'W' },
    params: { a: 0.6, b: 0.3 },
    traits: { intensity: 0.7, stability: 0.5, empathy: 0.85, independence: 0.3, speed: 0.3, depth: 0.95 },
    description: 'You are a PULSAR — a deep, rhythmic oscillator locked in eternal balance. Like a pulsar star emitting steady beams of energy, your love is a reliable signal that neither fades nor overwhelms. Your feelings orbit the love equilibrium in perfect rhythm — never fully settling, never losing control. Your bond is an endless heartbeat: constant, dependable, forever.',
    strengths: 'Devoted, profound, emotionally rich, patient',
    risks: 'Over-attachment, slow to recognize incompatibility, possessive depth'
  },
  QUASAR: {
    name: 'QUASAR',
    code: 'RAF',
    icon: '⊗',
    color: '#FF5500',
    tagline: 'Electric tension — thriving in opposition',
    jaName: '準星',
    axes: { resonance: 'R', coupling: 'A', phase: 'F' },
    params: { a: 0.8, b: -0.5 },
    traits: { intensity: 0.9, stability: 0.25, empathy: 0.4, independence: 0.95, speed: 0.85, depth: 0.6 },
    description: 'You are a QUASAR — the most dynamically charged type. Your feelings amplify internally but you instinctively push against your partner\'s energy, creating electric tension and thrilling opposition. Like a quasar\'s relativistic jets, you channel enormous energy in unexpected directions. You fall hard but you fight the fall, creating the most dramatic love stories.',
    strengths: 'Exciting, challenging, growth-provoking, never boring',
    risks: 'Conflict addiction, emotional whiplash, push-pull exhaustion'
  },
  NEBULA: {
    name: 'NEBULA',
    code: 'RAW',
    icon: '☁',
    color: '#EA027E',
    tagline: 'Mysterious depths — a slow-burning cosmic enigma',
    jaName: '星雲',
    axes: { resonance: 'R', coupling: 'A', phase: 'W' },
    params: { a: 0.6, b: -0.3 },
    traits: { intensity: 0.6, stability: 0.4, empathy: 0.35, independence: 0.9, speed: 0.2, depth: 0.9 },
    description: 'You are a NEBULA — vast, mysterious, and locked in eternal opposition. Your feelings cycle through vast internal landscapes while you maintain a contrarian distance from your partner\'s direct influence. Like a nebula suspended between gravity and radiation, your love exists in permanent creative tension — never collapsing, never dispersing. You are the eternal contradiction that generates beauty.',
    strengths: 'Mysterious, creatively inspiring, emotionally independent, transformative',
    risks: 'Emotional unavailability, confusing partners, hidden intensity eruptions'
  },
  PHOTON: {
    name: 'PHOTON',
    code: 'DSF',
    icon: '◇',
    color: '#01FFFF',
    tagline: 'Quick empathic spark — brilliant but fleeting',
    jaName: '光子',
    axes: { resonance: 'D', coupling: 'S', phase: 'F' },
    params: { a: -0.6, b: 0.5 },
    traits: { intensity: 0.6, stability: 0.6, empathy: 0.95, independence: 0.4, speed: 0.95, depth: 0.3 },
    description: 'You are a PHOTON — fast, bright, and empathically responsive. Your feelings cycle in quick, balanced orbits around the love equilibrium — never fully settling but never fading either. Like a photon in perpetual motion, you need constant exchange to sustain the rhythm. You synchronize instantly with your partner\'s energy, maintaining an eternal dance of give and receive.',
    strengths: 'Empathic, responsive, adaptable, emotionally agile',
    risks: 'Emotional dependency, losing self in partner, fickleness without input'
  },
  AURORA: {
    name: 'AURORA',
    code: 'DSW',
    icon: '≋',
    color: '#C0FC04',
    tagline: 'Gentle harmonizer — soft waves of steady light',
    jaName: 'オーロラ',
    axes: { resonance: 'D', coupling: 'S', phase: 'W' },
    params: { a: -0.8, b: 0.3 },
    traits: { intensity: 0.3, stability: 0.95, empathy: 0.8, independence: 0.5, speed: 0.2, depth: 0.7 },
    description: 'You are an AURORA — gentle, harmonious, and deeply stabilizing. Your strong self-damping (λ < 0) means every emotional deviation spirals back toward the love equilibrium. In the phase portrait, your trajectory converges inward: not shrinking love, but love finding its deepest, most stable form. Like the aurora borealis — born from turbulence, settling into luminous calm.',
    strengths: 'Stabilizing, calming, harmonious, emotionally mature',
    risks: 'Emotional suppression, over-accommodation, lack of passion'
  },
  PHANTOM: {
    name: 'PHANTOM',
    code: 'DAF',
    icon: '△',
    color: '#3601FB',
    tagline: 'Elusive enigma — fast to retreat, impossible to forget',
    jaName: 'ファントム',
    axes: { resonance: 'D', coupling: 'A', phase: 'F' },
    params: { a: -0.6, b: -0.5 },
    traits: { intensity: 0.4, stability: 0.5, empathy: 0.2, independence: 0.95, speed: 0.8, depth: 0.5 },
    description: 'You are a PHANTOM — the most elusive oscillator type. Your feelings cycle in a perpetual dance of retreat and return, orbiting the love equilibrium but never landing on it. Like a phantom particle that exists only in equations, you are felt more than seen. Your love operates in negative space — an eternal orbit of absence and presence that neither decays nor settles.',
    strengths: 'Intriguing, self-sufficient, creates longing, emotionally self-aware',
    risks: 'Emotional avoidance, partner frustration, isolation'
  },
  SINGULARITY: {
    name: 'SINGULARITY',
    code: 'DAW',
    icon: '◎',
    color: '#EA027E',
    tagline: 'Gravitational mystery — a slow deep pull into the unknown',
    jaName: '特異点',
    axes: { resonance: 'D', coupling: 'A', phase: 'W' },
    params: { a: -0.8, b: -0.3 },
    traits: { intensity: 0.3, stability: 0.7, empathy: 0.15, independence: 1.0, speed: 0.15, depth: 1.0 },
    description: 'You are a SINGULARITY — the deepest, most gravitational type. Your feelings dampen strongly and you oppose external emotional influence, yet like a black hole, your sheer depth creates an inexorable pull. Love near a Singularity is a one-way trip: slow, inevitable, and world-altering. Those who get close enough discover infinite depth beyond the event horizon.',
    strengths: 'Profoundly deep, utterly unique, transformative, self-contained',
    risks: 'Extreme emotional unavailability, intimidating depth, absolute isolation'
  }
};

// ===== QUIZ =====
const QUESTIONS = [
  // Resonance (R vs D) — questions 0-3
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: When you begin to develop feelings for someone, what happens internally?',
    options: [
      { text: 'My feelings snowball — each thought amplifies the next, building to a crescendo', value: 1 },
      { text: 'The initial spark fades unless something external keeps reigniting it', value: -1 }
    ]
  },
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: After a relationship ends, your emotional residue typically...',
    options: [
      { text: 'Intensifies with distance — I idealize and feel more as time passes', value: 1 },
      { text: 'Gradually dissipates — like a signal losing power over distance', value: -1 }
    ]
  },
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: When separated from someone you love for a long period...',
    options: [
      { text: 'Absence amplifies everything — longing feeds on itself', value: 1 },
      { text: 'The emotional charge slowly drains — I need presence to maintain it', value: -1 }
    ]
  },
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: Your internal emotional system is best described as...',
    options: [
      { text: 'A feedback loop — emotions compound and escalate on their own', value: 1 },
      { text: 'A cooling system — emotions naturally regulate back to baseline', value: -1 }
    ]
  },
  // Coupling (S vs A) — questions 4-7
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: When someone shows clear romantic interest in you...',
    options: [
      { text: 'I feel drawn toward them — their energy is magnetic and warm', value: 1 },
      { text: 'I instinctively pull back — too much interest triggers my shields', value: -1 }
    ]
  },
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: The relationships that excite you most involve...',
    options: [
      { text: 'Harmony and resonance — being perfectly in sync, finishing each other\'s thoughts', value: 1 },
      { text: 'Push and pull — the electricity of opposing forces creating sparks', value: -1 }
    ]
  },
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: When your partner is experiencing intense emotions...',
    options: [
      { text: 'I absorb and mirror their state — we oscillate together', value: 1 },
      { text: 'I naturally counterbalance — providing the opposite of what they project', value: -1 }
    ]
  },
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: Your ideal partner dynamic is one where...',
    options: [
      { text: 'We amplify each other\'s best frequencies — resonance creates beauty', value: 1 },
      { text: 'We challenge each other\'s assumptions — friction creates growth', value: -1 }
    ]
  },
  // Phase (F vs W) — questions 8-11
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: Your typical pattern of falling in love...',
    options: [
      { text: 'Fast ignition — I know almost immediately if the chemistry is real', value: 1 },
      { text: 'Slow combustion — real attraction builds over weeks or months', value: -1 }
    ]
  },
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: When conflict arises in a relationship, you tend to...',
    options: [
      { text: 'React immediately — emotions spike and I address it in the moment', value: 1 },
      { text: 'Process slowly — I need time and space to understand what I feel', value: -1 }
    ]
  },
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: Your emotional cycles are best described as...',
    options: [
      { text: 'High frequency — rapid oscillations, moods shift quickly and often', value: 1 },
      { text: 'Low frequency — long wavelengths, emotional states persist for weeks', value: -1 }
    ]
  },
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: On a first date, your instinct tells you...',
    options: [
      { text: 'Everything — within minutes I have a strong sense of compatibility', value: 1 },
      { text: 'Very little — the real signal emerges only after many interactions', value: -1 }
    ]
  }
];

const ANALYSIS_LOGS = [
  '> Initializing Strogatz Love Dynamics Engine v3.7.2...',
  '> Loading coupled oscillator framework...',
  '> Parsing neural response vectors...',
  '> Computing self-coupling coefficient α...',
  '> Computing partner-coupling coefficient β...',
  '> Analyzing phase velocity ω...',
  '> Solving characteristic equation det(M - λI) = 0...',
  '> Eigenvalue decomposition in progress...',
  '> Mapping to oscillator type manifold...',
  '> Cross-referencing with Strogatz compatibility matrix...',
  '> Generating phase portrait...',
  '> TYPE IDENTIFIED. Rendering results...'
];

// ===== COMPATIBILITY DYNAMICS =====
const DYNAMICS_LABELS = {
  stable_node: {
    name: 'CONVERGENT BOND',
    jaName: '収束結合',
    color: '#C0FC04',
    emoji: '🟢',
    reading: 'Your dynamics converge to the love equilibrium — a relationship that naturally settles into deep, lasting harmony. The eigenvalues are real and negative (λ < 0), meaning every emotional perturbation decays back toward mutual love. This is not love shrinking — it is love finding its truest, most stable depth. Like two instruments tuning to the same perfect note.'
  },
  stable_spiral: {
    name: 'HARMONIC DANCE',
    jaName: '調和螺旋',
    color: '#3601FB',
    emoji: '🟣',
    reading: 'Your dynamics form an inward spiral toward the love equilibrium — you oscillate between closeness and distance, but each cycle brings you closer to deep mutual love. The complex eigenvalues have negative real parts (Re(λ) < 0), meaning your push-pull dance gradually converges. This is not love diminishing — it is turbulence settling into the deepest harmony.'
  },
  center: {
    name: 'ETERNAL ORBIT',
    jaName: '永遠軌道',
    color: '#01FFFF',
    emoji: '🔵',
    reading: 'Your dynamics form a perfect closed orbit around the love equilibrium — an eternal dance that never settles into stillness but never loses its depth. Pure imaginary eigenvalues (λ = ±bi) create this rare, mesmerizing pattern. The distance from the love point stays constant: neither converging nor diverging. You are the couple in permanent, beautiful motion.'
  },
  unstable_spiral: {
    name: 'SUPERNOVA',
    jaName: '超新星',
    color: '#FF5500',
    emoji: '🟠',
    reading: 'Your dynamics spiral outward from the love equilibrium — each emotional cycle amplifies the last, pushing further from balance. Complex eigenvalues with positive real parts (Re(λ) > 0) create this pattern of escalating deviation. This is not more love, but love that cannot find its resting point — passion too intense to settle. Exhilarating and volatile.'
  },
  unstable_node: {
    name: 'CHAIN REACTION',
    jaName: '連鎖反応',
    color: '#FF0D1A',
    emoji: '🔴',
    reading: 'Your dynamics explode away from equilibrium — real positive eigenvalues (λ > 0) drive emotional deviation in one direction without oscillation. This is not simply more love — it is feelings accelerating past all balance. Nuclear fusion-level intensity: once initiated, the reaction is unstoppable. The most overwhelming and transformative pairing.'
  },
  saddle: {
    name: 'QUANTUM TUNNEL',
    jaName: '量子トンネル',
    color: '#C0FC04',
    emoji: '🟡',
    reading: 'Your dynamics balance on a knife-edge at the love equilibrium — a saddle point where one axis converges toward deep love while the other diverges toward separation. The eigenvalues have opposite signs (λ₁ > 0, λ₂ < 0), creating a fundamentally unstable tension. Whether you fall into deep love or apart depends entirely on the initial conditions of your meeting.'
  }
};

// ===== STATE =====
let currentQuestion = 0;
let scores = { resonance: 0, coupling: 0, phase: 0 };
let answerHistory = []; // stores {axis, value} for each answered question
let userType = null;
let partnerType = null;
let phaseAnimationId = null;

// ===== BACKGROUND PARTICLES =====
function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    r: Math.random() * 1.2 + 0.3
  }));

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(192, 252, 4, 0.2)';
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = 'rgba(192, 252, 4, 0.03)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.globalAlpha = 1 - dist / 120;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== SHARED SPIRAL GRID DRAWING =====
// The center of the spiral = LOVE EQUILIBRIUM (mutual stable love state)
// Axes show deviation from equilibrium
// Stable spirals converge TO the equilibrium = feelings settle into love
// Unstable spirals diverge FROM equilibrium = feelings amplify beyond control
// Center orbits circle the equilibrium = eternal push-pull dance

function drawSpiralGrid(ctx, w, h, cx, cy, scale, accentColor) {
  // Background
  ctx.fillStyle = '#050508';
  ctx.fillRect(0, 0, w, h);

  // Concentric rings = deviation distance from equilibrium
  ctx.strokeStyle = 'rgba(42, 42, 58, 0.35)';
  ctx.lineWidth = 1;
  for (let r = 1; r <= 4; r++) {
    ctx.beginPath();
    ctx.arc(cx, cy, r * scale * 0.9, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Cross axes through equilibrium
  const axColor = accentColor ? accentColor + '12' : 'rgba(192, 252, 4, 0.08)';
  ctx.strokeStyle = axColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, cy); ctx.lineTo(w, cy);
  ctx.moveTo(cx, 0); ctx.lineTo(cx, h);
  ctx.stroke();

  // Diagonal guides
  ctx.strokeStyle = 'rgba(42, 42, 58, 0.12)';
  ctx.beginPath();
  ctx.moveTo(0, 0); ctx.lineTo(w, h);
  ctx.moveTo(w, 0); ctx.lineTo(0, h);
  ctx.stroke();

  // === LOVE EQUILIBRIUM TARGET ===
  // Glowing target zone at center — this is where stable love lives
  const eqR = scale * 0.35;
  ctx.fillStyle = 'rgba(192, 252, 4, 0.04)';
  ctx.beginPath();
  ctx.arc(cx, cy, eqR * 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(192, 252, 4, 0.06)';
  ctx.beginPath();
  ctx.arc(cx, cy, eqR, 0, Math.PI * 2);
  ctx.fill();

  // Dashed "love level" lines — the target level that stable systems converge to
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(192, 252, 4, 0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, cy); ctx.lineTo(w, cy);
  ctx.moveTo(cx, 0); ctx.lineTo(cx, h);
  ctx.stroke();
  ctx.setLineDash([]);

  // Equilibrium crosshair
  ctx.fillStyle = '#C0FC04';
  ctx.fillRect(cx - 3, cy - 1, 6, 2);
  ctx.fillRect(cx - 1, cy - 3, 2, 6);

  // EQ label
  ctx.font = '800 10px "Barlow Condensed", sans-serif';
  ctx.fillStyle = '#C0FC04';
  ctx.textAlign = 'left';
  ctx.fillText('♡ DEEP MUTUAL LOVE', cx + 10, cy - 10);
  ctx.font = '400 8px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(192, 252, 4, 0.5)';
  ctx.fillText('EQUILIBRIUM POINT', cx + 10, cy + 2);

  // Ring labels — distance = emotional turbulence, NOT love amount
  ctx.font = '400 7px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(100, 100, 140, 0.35)';
  ctx.textAlign = 'left';
  for (let r = 1; r <= 3; r++) {
    ctx.fillText(`${r}σ`, cx + r * scale * 0.9 + 3, cy - 3);
  }

  // Corner context
  ctx.font = '600 7px "Barlow Condensed", sans-serif';
  ctx.fillStyle = 'rgba(100, 100, 140, 0.3)';
  ctx.textAlign = 'left';
  ctx.fillText('DISTANCE FROM CENTER = EMOTIONAL TURBULENCE', 6, h - 20);
  ctx.fillText('CENTER = STABLE DEEP LOVE (NOT ZERO)', 6, h - 10);
}

function drawSpiralAxes(ctx, w, h, cx, cy, color1, color2, mode) {
  ctx.font = '800 10px "Barlow Condensed", sans-serif';

  // Horizontal axis — deviation from equilibrium, not absolute love
  ctx.fillStyle = (color1 || '#C0FC04') + '45';
  ctx.textAlign = 'right';
  ctx.fillText('A\'S DEVIATION →', w - 6, cy - 9);
  ctx.textAlign = 'left';
  ctx.fillText('←', 6, cy - 9);

  // Vertical axis
  ctx.fillStyle = (color2 || '#EA027E') + '45';
  ctx.textAlign = 'left';
  ctx.fillText('↑ B\'S DEVIATION', cx + 10, 15);

  // Narrative: what the dynamics MEAN for the relationship
  ctx.font = '700 9px "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  if (mode === 'stable') {
    ctx.fillStyle = '#C0FC04';
    ctx.fillText('CONVERGES TO ♡ — LOVE FINDS ITS NATURAL RHYTHM', w / 2, h - 6);
  } else if (mode === 'unstable') {
    ctx.fillStyle = '#FF5500';
    ctx.fillText('DIVERGES FROM ♡ — PASSION AMPLIFIES WITHOUT LIMIT', w / 2, h - 6);
  } else if (mode === 'center') {
    ctx.fillStyle = '#01FFFF';
    ctx.fillText('ORBITS ♡ — ETERNAL DANCE AROUND THE LOVE POINT', w / 2, h - 6);
  } else if (mode === 'saddle') {
    ctx.fillStyle = '#C0FC04';
    ctx.fillText('KNIFE-EDGE AT ♡ — ONE PATH TO LOVE, ONE TO SEPARATION', w / 2, h - 6);
  }
}

// ===== HERO SPIRAL (Landing Page) =====
let heroSpiralId = null;
function initHeroSpiral() {
  const canvas = document.getElementById('hero-spiral');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = w / 10;

  // Beautiful stable spiral parameters:
  // dx/dt = -0.06x + 0.9y     (slow damping, strong sync)
  // dy/dt = -0.9x  - 0.06y    (strong anti, slow damping)
  // eigenvalues: -0.06 ± 0.9i → slow inward spiral
  const p1 = { a: -0.06, b: 0.9 };
  const p2 = { a: -0.06, b: -0.9 };

  // Multiple starting points spread around
  const ics = [];
  for (let k = 0; k < 6; k++) {
    const angle = (k / 6) * Math.PI * 2;
    const r = 3.5;
    ics.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
  }
  // Add a few at different radii
  for (let k = 0; k < 4; k++) {
    const angle = (k / 4) * Math.PI * 2 + 0.4;
    ics.push({ x: 2.0 * Math.cos(angle), y: 2.0 * Math.sin(angle) });
  }

  const trajectories = ics.map(ic => simulate(p1, p2, ic.x, ic.y, 0.06, 600));

  const colors = ['#C0FC04', '#EA027E', '#01FFFF', '#FF5500', '#C0FC04', '#3601FB',
                  '#EA027E', '#01FFFF', '#FF5500', '#C0FC04'];

  let frame = 0;
  const maxFrames = 600;

  function drawFrame() {
    drawSpiralGrid(ctx, w, h, cx, cy, scale, '#C0FC04');

    // Vector field
    const step = 1.6;
    for (let gx = -4; gx <= 4; gx += step) {
      for (let gy = -4; gy <= 4; gy += step) {
        const dist = Math.sqrt(gx * gx + gy * gy);
        if (dist < 0.5 || dist > 4.2) continue;
        const dx = p1.a * gx + p1.b * gy;
        const dy = p2.b * gx + p2.a * gy;
        const mag = Math.sqrt(dx * dx + dy * dy);
        if (mag < 0.01) continue;
        const nx = dx / mag;
        const ny = dy / mag;
        const len = 7;
        const sx = cx + gx * scale;
        const sy = cy - gy * scale;
        ctx.strokeStyle = 'rgba(100, 100, 140, 0.18)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + nx * len, sy - ny * len);
        ctx.stroke();
      }
    }

    // Trajectories — fading trail, high saturation
    const drawUpTo = Math.min(frame, maxFrames);
    for (let t = 0; t < trajectories.length; t++) {
      const traj = trajectories[t];
      const segEnd = Math.min(drawUpTo, traj.length - 1);
      const color = colors[t % colors.length];

      for (let i = 1; i <= segEnd; i++) {
        const age = (segEnd - i) / 200;
        const alpha = Math.max(0.12, Math.min(1, 1 - age));
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha * (t < 6 ? 0.9 : 0.6);
        ctx.lineWidth = t < 6 ? 2.2 : 1.3;
        ctx.beginPath();
        ctx.moveTo(cx + traj[i - 1].x * scale, cy - traj[i - 1].y * scale);
        ctx.lineTo(cx + traj[i].x * scale, cy - traj[i].y * scale);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (segEnd > 0 && segEnd < traj.length) {
        const pt = traj[segEnd];
        ctx.fillStyle = color;
        ctx.fillRect(cx + pt.x * scale - 3, cy - pt.y * scale - 3, 6, 6);
      }
    }

    drawSpiralAxes(ctx, w, h, cx, cy, '#C0FC04', '#EA027E', 'stable');

    frame++;
    if (frame <= maxFrames + 60) {
      heroSpiralId = requestAnimationFrame(drawFrame);
    } else {
      // Loop: restart
      frame = 0;
      heroSpiralId = requestAnimationFrame(drawFrame);
    }
  }
  drawFrame();
}

// ===== RESULT SPIRAL (Results Page) =====
let resultSpiralId = null;
function drawResultSpiral(canvas, userParams, typeColor) {
  if (resultSpiralId) cancelAnimationFrame(resultSpiralId);
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = w / 10;

  // Generate spiral params based on type intensity:
  // Strong types (|a| > 0.6): clear spiral (stable or unstable)
  // Moderate types (|a| <= 0.6): balanced circle (center orbit)
  const absA = Math.abs(userParams.a);
  const isModerate = absA <= 0.6;
  let fp1, fp2;

  if (isModerate) {
    // Center dynamics — pure imaginary eigenvalues, closed orbit
    fp1 = { a: 0, b: userParams.b > 0 ? 0.9 : -0.9 };
    fp2 = { a: 0, b: userParams.b > 0 ? -0.9 : 0.9 };
  } else {
    // Spiral dynamics — nonzero trace
    const sign = userParams.a > 0 ? 1 : -1;
    fp1 = { a: sign * 0.12, b: userParams.b > 0 ? 0.88 : -0.88 };
    fp2 = { a: sign * 0.12, b: userParams.b > 0 ? -0.88 : 0.88 };
  }

  const isStable = (fp1.a + fp2.a) < 0;
  const isCenter = Math.abs(fp1.a + fp2.a) < 0.01;

  // Generate starting points
  const ics = [];
  if (isCenter) {
    // Concentric circles at different radii — shows nested orbits
    for (let ring = 1; ring <= 4; ring++) {
      const r = ring * 0.9;
      for (let k = 0; k < 2; k++) {
        const angle = (k / 2) * Math.PI * 2 + ring * 0.5;
        ics.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
      }
    }
  } else {
    for (let k = 0; k < 8; k++) {
      const angle = (k / 8) * Math.PI * 2;
      const r = isStable ? 3.8 : 0.6;
      ics.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
    }
  }

  const trajectories = ics.map(ic => simulate(fp1, fp2, ic.x, ic.y, 0.05, 500));

  let frame = 0;
  const maxFrames = 500;

  // Secondary color
  const altColor = typeColor === '#C0FC04' ? '#EA027E' : '#C0FC04';

  function drawFrame() {
    const spiralMode = isCenter ? 'center' : isStable ? 'stable' : 'unstable';
    drawSpiralGrid(ctx, w, h, cx, cy, scale, typeColor);

    const drawUpTo = Math.min(frame, maxFrames);
    for (let t = 0; t < trajectories.length; t++) {
      const traj = trajectories[t];
      const segEnd = Math.min(drawUpTo, traj.length - 1);
      const color = t % 2 === 0 ? typeColor : altColor;

      for (let i = 1; i <= segEnd; i++) {
        const age = (segEnd - i) / 160;
        const alpha = Math.max(0.12, Math.min(0.95, 1 - age));
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha * (t % 2 === 0 ? 0.9 : 0.6);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx + traj[i - 1].x * scale, cy - traj[i - 1].y * scale);
        ctx.lineTo(cx + traj[i].x * scale, cy - traj[i].y * scale);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (segEnd > 0 && segEnd < traj.length) {
        const pt = traj[segEnd];
        ctx.fillStyle = color;
        ctx.fillRect(cx + pt.x * scale - 3, cy - pt.y * scale - 3, 6, 6);
      }
    }

    drawSpiralAxes(ctx, w, h, cx, cy, typeColor, altColor, spiralMode);

    // Eigenvalue in top-left
    const ftr = fp1.a + fp2.a;
    const fdet = fp1.a * fp2.a - fp1.b * fp2.b;
    const fdisc = ftr * ftr - 4 * fdet;
    const re = ftr / 2;
    const im = Math.sqrt(Math.max(0, -fdisc)) / 2;
    ctx.font = '400 9px "Share Tech Mono", monospace';
    ctx.fillStyle = 'rgba(100, 100, 140, 0.5)';
    ctx.textAlign = 'left';
    ctx.fillText(`λ = ${re.toFixed(2)} ± ${im.toFixed(2)}i`, 8, h - 18);

    frame++;
    if (frame <= maxFrames + 40) {
      resultSpiralId = requestAnimationFrame(drawFrame);
    } else {
      frame = 0;
      resultSpiralId = requestAnimationFrame(drawFrame);
    }
  }
  drawFrame();
}

// ===== SECTION NAVIGATION =====
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// ===== QUIZ LOGIC =====
function startQuiz() {
  currentQuestion = 0;
  scores = { resonance: 0, coupling: 0, phase: 0 };
  answerHistory = [];
  showSection('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  document.getElementById('quiz-question').textContent = q.text;
  document.getElementById('quiz-counter').textContent =
    String(currentQuestion + 1).padStart(2, '0') + ' / ' + String(QUESTIONS.length).padStart(2, '0');
  document.getElementById('progress-fill').style.width =
    ((currentQuestion) / QUESTIONS.length * 100) + '%';

  const optionsEl = document.getElementById('quiz-options');
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);
  optionsEl.innerHTML = shuffled.map((opt, i) =>
    `<button class="quiz-option" onclick="answerQuestion('${q.axis}', ${opt.value})">${opt.text}</button>`
  ).join('');

  // Show/hide back button
  const backBtn = document.getElementById('quiz-back-btn');
  if (backBtn) backBtn.style.display = currentQuestion > 0 ? '' : 'none';
}

function answerQuestion(axis, value) {
  answerHistory.push({ axis, value });
  scores[axis] += value;
  currentQuestion++;
  if (currentQuestion < QUESTIONS.length) {
    const body = document.querySelector('.quiz-body');
    body.style.opacity = 0;
    setTimeout(() => {
      renderQuestion();
      body.style.opacity = 1;
    }, 200);
  } else {
    document.getElementById('progress-fill').style.width = '100%';
    runAnalysis();
  }
}

function goBackQuestion() {
  if (currentQuestion <= 0 || answerHistory.length === 0) return;
  // Undo the last answer
  const last = answerHistory.pop();
  scores[last.axis] -= last.value;
  currentQuestion--;
  const body = document.querySelector('.quiz-body');
  body.style.opacity = 0;
  setTimeout(() => {
    renderQuestion();
    body.style.opacity = 1;
  }, 150);
}

function resetQuiz() {
  userType = null;
  partnerType = null;
  if (phaseAnimationId) cancelAnimationFrame(phaseAnimationId);
  showSection('landing');
}

// ===== ANALYSIS ANIMATION =====
function runAnalysis() {
  showSection('analysis');
  const percentEl = document.getElementById('analysis-percent');
  const logEl = document.getElementById('analysis-log');
  const ring = document.querySelector('.ring-progress');
  logEl.innerHTML = '';

  let step = 0;
  const totalSteps = ANALYSIS_LOGS.length;

  function tick() {
    if (step < totalSteps) {
      const pct = Math.round(((step + 1) / totalSteps) * 100);
      percentEl.textContent = pct + '%';
      ring.style.strokeDashoffset = 565.5 * (1 - (step + 1) / totalSteps);
      logEl.innerHTML += `<div class="log-line">${ANALYSIS_LOGS[step]}</div>`;
      logEl.scrollTop = logEl.scrollHeight;
      step++;
      setTimeout(tick, 300 + Math.random() * 200);
    } else {
      setTimeout(showResults, 500);
    }
  }
  tick();
}

// ===== DETERMINE TYPE =====
function getType(scores) {
  const r = scores.resonance > 0 ? 'R' : 'D';
  const c = scores.coupling > 0 ? 'S' : 'A';
  const p = scores.phase > 0 ? 'F' : 'W';
  const code = r + c + p;
  return Object.values(TYPES).find(t => t.code === code);
}

// ===== SHOW RESULTS =====
function showResults() {
  userType = getType(scores);
  if (!userType) userType = TYPES.NOVA; // fallback

  document.getElementById('result-icon').textContent = userType.icon;
  const nameEl = document.getElementById('result-name');
  nameEl.textContent = userType.name;
  nameEl.style.color = userType.color;

  document.getElementById('result-code').textContent =
    `${userType.code} // ${userType.jaName} // α=${userType.params.a > 0 ? '+' : ''}${userType.params.a} β=${userType.params.b > 0 ? '+' : ''}${userType.params.b}`;
  document.getElementById('result-tagline').textContent = userType.tagline;

  // Params
  document.getElementById('result-params').innerHTML = `
    <div class="param-item"><span class="param-label">RESONANCE</span><span class="param-value">${userType.axes.resonance === 'R' ? 'RESONANT ↑' : 'DAMPED ↓'}</span></div>
    <div class="param-item"><span class="param-label">COUPLING</span><span class="param-value">${userType.axes.coupling === 'S' ? 'SYNC ⇄' : 'ANTI ⇆'}</span></div>
    <div class="param-item"><span class="param-label">PHASE</span><span class="param-value">${userType.axes.phase === 'F' ? 'FLASH ⚡' : 'WAVE ∿'}</span></div>
  `;

  document.getElementById('result-description').innerHTML =
    `<p>${userType.description}</p>
     <p style="margin-top:0.8rem;color:#C0FC04;font-weight:800;">STRENGTHS: ${userType.strengths}</p>
     <p style="margin-top:0.4rem;color:#FF5500;font-weight:800;">RISKS: ${userType.risks}</p>`;

  drawRadarChart(document.getElementById('result-radar'), userType.traits, userType.color);
  drawResultSpiral(document.getElementById('result-spiral'), userType.params, userType.color);
  showSection('results');
}

// ===== RADAR CHART =====
function drawRadarChart(canvas, traits, color) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.36;
  const labels = ['INTENSITY', 'STABILITY', 'EMPATHY', 'INDEPENDENCE', 'SPEED', 'DEPTH'];
  const values = [traits.intensity, traits.stability, traits.empathy, traits.independence, traits.speed, traits.depth];
  const n = labels.length;

  ctx.clearRect(0, 0, w, h);

  // Grid — hard lines, no soft glow
  for (let level = 1; level <= 5; level++) {
    const r = radius * level / 5;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(42, 42, 58, 0.8)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Spokes
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
    ctx.strokeStyle = 'rgba(42, 42, 58, 0.5)';
    ctx.stroke();
  }

  // Data fill — flat, no shadow
  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const idx = i % n;
    const angle = (Math.PI * 2 * idx / n) - Math.PI / 2;
    const r = radius * values[idx];
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.fillStyle = color + '20';
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Dots — solid, no glow
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    const r = radius * values[i];
    ctx.beginPath();
    ctx.arc(cx + r * Math.cos(angle), cy + r * Math.sin(angle), 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  // Labels — bold condensed
  ctx.font = '800 11px "Barlow Condensed", sans-serif';
  ctx.fillStyle = '#666688';
  ctx.textAlign = 'center';
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    const lx = cx + (radius + 24) * Math.cos(angle);
    const ly = cy + (radius + 24) * Math.sin(angle);
    ctx.fillText(labels[i], lx, ly + 3);
  }
}

// ===== COMPATIBILITY =====
function showCompatibility() {
  if (!userType) return;
  document.getElementById('compat-your-type').textContent = `${userType.icon} ${userType.name}`;
  document.getElementById('compat-your-type').style.borderColor = userType.color;
  document.getElementById('compat-your-type').style.color = userType.color;

  // Build partner grid
  const grid = document.getElementById('partner-type-grid');
  grid.innerHTML = Object.values(TYPES).map(t =>
    `<button class="type-grid-btn" data-type="${t.name}" onclick="selectPartner('${t.name}')">${t.icon}<br>${t.name}</button>`
  ).join('');

  document.getElementById('compat-results').style.display = 'none';
  partnerType = null;
  showSection('compatibility');
}

function selectPartner(typeName) {
  partnerType = TYPES[typeName];
  if (!partnerType) return;

  // Highlight selected
  document.querySelectorAll('.type-grid-btn').forEach(b => b.classList.remove('selected'));
  document.querySelector(`.type-grid-btn[data-type="${typeName}"]`).classList.add('selected');

  runCompatibilityAnalysis();
}

function runCompatibilityAnalysis() {
  if (!userType || !partnerType) return;
  const resultsEl = document.getElementById('compat-results');
  resultsEl.style.display = 'block';

  const a1 = userType.params.a;
  const b1 = userType.params.b;
  const a2 = partnerType.params.a;
  const b2 = partnerType.params.b;

  // System matrix: [[a1, b1], [b2, a2]]
  const tr = a1 + a2;
  const det = a1 * a2 - b1 * b2;
  const disc = tr * tr - 4 * det;

  // Eigenvalues
  let lambda1, lambda2, eigenStr;
  if (disc >= 0) {
    lambda1 = (tr + Math.sqrt(disc)) / 2;
    lambda2 = (tr - Math.sqrt(disc)) / 2;
    eigenStr = `λ₁ = ${lambda1.toFixed(3)}  λ₂ = ${lambda2.toFixed(3)}`;
  } else {
    const realPart = tr / 2;
    const imagPart = Math.sqrt(-disc) / 2;
    lambda1 = { re: realPart, im: imagPart };
    lambda2 = { re: realPart, im: -imagPart };
    eigenStr = `λ = ${realPart.toFixed(3)} ± ${imagPart.toFixed(3)}i`;
  }

  // Classify
  let classification;
  if (det < 0) {
    classification = 'saddle';
  } else if (Math.abs(tr) < 0.05) {
    classification = 'center';
  } else if (disc < 0) {
    classification = tr < 0 ? 'stable_spiral' : 'unstable_spiral';
  } else {
    classification = tr < 0 ? 'stable_node' : 'unstable_node';
  }

  const dyn = DYNAMICS_LABELS[classification];

  // Compatibility score (faux-scientific)
  let score;
  switch (classification) {
    case 'stable_spiral': score = 92; break;
    case 'stable_node': score = 85; break;
    case 'center': score = 78; break;
    case 'saddle': score = 65; break;
    case 'unstable_spiral': score = 58; break;
    case 'unstable_node': score = 42; break;
    default: score = 50;
  }
  // Add some variance based on actual parameter similarity
  const paramDist = Math.abs(a1 - a2) + Math.abs(b1 + b2);
  score = Math.max(10, Math.min(99, Math.round(score + (Math.random() * 8 - 4))));

  // Render classification
  const classEl = document.getElementById('compat-class');
  classEl.innerHTML = `<span style="color:${dyn.color}">${dyn.emoji} ${dyn.name} // ${dyn.jaName}</span>`;

  // Render score
  document.getElementById('compat-score').textContent = score;
  const ring = document.getElementById('score-ring-fill');
  ring.style.stroke = dyn.color;
  ring.style.filter = `drop-shadow(0 0 6px ${dyn.color})`;
  setTimeout(() => {
    ring.style.strokeDashoffset = 440 * (1 - score / 100);
  }, 100);

  // Equation display
  document.getElementById('compat-equation').innerHTML =
    `<div>SYSTEM MATRIX M = [[${a1}, ${b1}], [${b2}, ${a2}]]</div>
     <div>tr(M) = ${tr.toFixed(2)} &nbsp; det(M) = ${det.toFixed(2)} &nbsp; Δ = ${disc.toFixed(3)}</div>
     <div>${eigenStr}</div>
     <div>CLASSIFICATION: <span style="color:${dyn.color}">${dyn.name}</span></div>`;

  // Eigenvalue display
  document.getElementById('compat-eigen').innerHTML =
    `<span style="color:var(--text-dim)">Eigenvalue analysis: ${eigenStr} → ${classification.replace('_', ' ').toUpperCase()}</span>`;

  // Reading
  document.getElementById('compat-reading').innerHTML =
    `<p style="color:${dyn.color};font-weight:800;font-size:0.75rem;letter-spacing:0.15em;margin-bottom:0.5rem;">${dyn.name}</p>
     <p>${dyn.reading}</p>`;

  // Shared simulation — all charts use the SAME trajectories
  const sp1 = { a: a1, b: b1 };
  const sp2 = { a: a2, b: b2 };
  const sharedICs = [
    { x: 2, y: 0.5 }, { x: -2, y: -0.5 },
    { x: 0.5, y: 2 }, { x: -0.5, y: -2 },
    { x: 1.5, y: -1.5 }, { x: -1.5, y: 1.5 },
    { x: 2.5, y: 2 }, { x: -2.5, y: -2 }
  ];
  const sharedDt = 0.04;
  const sharedSteps = 300;
  const sharedTrajectories = sharedICs.map(ic =>
    simulate(sp1, sp2, ic.x, ic.y, sharedDt, sharedSteps)
  );

  // Store in module-level state for click interactions
  window._compatState = {
    trajectories: sharedTrajectories,
    ics: sharedICs,
    dt: sharedDt,
    sp1, sp2,
    dynColor: dyn.color,
    color1: userType.color,
    color2: partnerType.color,
    selectedIdx: 0
  };

  // Build trajectory selector buttons
  const btnContainer = document.getElementById('traj-buttons');
  btnContainer.innerHTML = sharedICs.map((ic, i) =>
    `<button class="traj-btn ${i === 0 ? 'active' : ''}" data-idx="${i}" onclick="selectTrajectory(${i})">${i + 1}</button>`
  ).join('');

  // Draw all charts with trajectory 0 selected
  selectTrajectory(0);

  // Add click handler to phase canvas for trajectory selection
  const phaseCanvas = document.getElementById('phase-canvas');
  phaseCanvas.onclick = function(e) {
    const rect = phaseCanvas.getBoundingClientRect();
    const scaleX = phaseCanvas.width / rect.width;
    const scaleY = phaseCanvas.height / rect.height;
    const canvasX = (e.clientX - rect.left) * scaleX;
    const canvasY = (e.clientY - rect.top) * scaleY;
    const cx = phaseCanvas.width / 2;
    const cy = phaseCanvas.height / 2;
    const pxScale = phaseCanvas.width / 12;

    // Find nearest trajectory head
    let bestDist = Infinity;
    let bestIdx = 0;
    const st = window._compatState;
    for (let t = 0; t < st.trajectories.length; t++) {
      const traj = st.trajectories[t];
      // Check against last few points of each trajectory
      for (let k = Math.max(0, traj.length - 30); k < traj.length; k++) {
        const sx = cx + traj[k].x * pxScale;
        const sy = cy - traj[k].y * pxScale;
        const d = Math.hypot(canvasX - sx, canvasY - sy);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = t;
        }
      }
    }
    if (bestDist < 40) {
      selectTrajectory(bestIdx);
    }
  };
  phaseCanvas.style.cursor = 'crosshair';

  // Scroll to results
  resultsEl.scrollIntoView({ behavior: 'auto', block: 'start' });
}

// Select and highlight a trajectory — redraws time series + convergence
function selectTrajectory(idx) {
  const st = window._compatState;
  if (!st) return;
  st.selectedIdx = idx;

  // Update button states
  document.querySelectorAll('.traj-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });

  // Redraw phase portrait with new highlight
  drawPhasePortrait(
    document.getElementById('phase-canvas'),
    st.sp1, st.sp2, st.trajectories,
    st.dynColor, st.color1, st.color2, idx
  );

  // Redraw time series for selected trajectory
  drawTimeSeries(
    document.getElementById('time-canvas'),
    st.trajectories[idx], st.dt,
    st.color1, st.color2
  );

  // Draw convergence curve
  drawConvergenceCurve(
    document.getElementById('convergence-canvas'),
    st.trajectories, st.dt, idx,
    st.dynColor, st.color1
  );
}

// ===== LOVE CONVERGENCE CURVE =====
// Plots distance-to-equilibrium over time for all trajectories,
// highlighting the selected one. Shows whether love stabilizes, amplifies, or orbits.
function drawConvergenceCurve(canvas, trajectories, dt, selectedIdx, dynColor, accentColor) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const padL = 50, padR = 16, padT = 20, padB = 28;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  ctx.fillStyle = '#07070e';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#0a0a12';
  ctx.fillRect(padL, padT, plotW, plotH);

  // Compute distance-to-equilibrium for each trajectory
  const distances = trajectories.map(traj =>
    traj.map(pt => Math.sqrt(pt.x * pt.x + pt.y * pt.y))
  );

  // Find max distance for y-axis scale
  let maxDist = 1;
  for (const d of distances) {
    for (const v of d) maxDist = Math.max(maxDist, v);
  }
  maxDist = Math.ceil(maxDist * 1.1);

  const maxLen = trajectories[0].length;

  // Grid
  ctx.strokeStyle = 'rgba(42, 42, 58, 0.5)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 4; i++) {
    const y = padT + plotH * i / 4;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(w - padR, y);
    ctx.stroke();
  }

  // Zero line (at equilibrium = distance 0 = deepest love)
  const zeroY = padT + plotH;
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(192, 252, 4, 0.35)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, zeroY);
  ctx.lineTo(w - padR, zeroY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.font = '600 8px "Barlow Condensed", sans-serif';
  ctx.fillStyle = '#C0FC04';
  ctx.textAlign = 'left';
  ctx.fillText('♡ EQUILIBRIUM (DISTANCE = 0)', padL + 4, zeroY - 4);

  // Draw all trajectories dimmed
  for (let t = 0; t < distances.length; t++) {
    if (t === selectedIdx) continue;
    const d = distances[t];
    ctx.beginPath();
    for (let i = 0; i < d.length; i++) {
      const px = padL + (i / (maxLen - 1)) * plotW;
      const py = padT + plotH - (d[i] / maxDist) * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = (dynColor || '#C0FC04') + '25';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw selected trajectory bold
  {
    const d = distances[selectedIdx];
    ctx.beginPath();
    for (let i = 0; i < d.length; i++) {
      const px = padL + (i / (maxLen - 1)) * plotW;
      const py = padT + plotH - (d[i] / maxDist) * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = accentColor || '#C0FC04';
    ctx.lineWidth = 3;
    ctx.stroke();

    // End dot
    const lastD = d[d.length - 1];
    const endX = padL + plotW;
    const endY = padT + plotH - (lastD / maxDist) * plotH;
    ctx.fillStyle = accentColor || '#C0FC04';
    ctx.fillRect(endX - 3, endY - 3, 6, 6);
  }

  // Labels
  ctx.font = '800 11px "Barlow Condensed", sans-serif';
  ctx.fillStyle = accentColor || '#C0FC04';
  ctx.textAlign = 'left';
  ctx.fillText(`— TRAJECTORY ${selectedIdx + 1}`, padL + 4, padT + 13);
  ctx.fillStyle = (dynColor || '#C0FC04') + '50';
  ctx.fillText('— ALL OTHERS', padL + 140, padT + 13);

  // IC annotation
  const ic = trajectories[selectedIdx][0];
  ctx.font = '400 8px "Share Tech Mono", monospace';
  ctx.fillStyle = '#44445a';
  ctx.textAlign = 'right';
  ctx.fillText(`IC: (${ic.x.toFixed(1)}, ${ic.y.toFixed(1)})`, w - padR, padT + 13);

  // Axes
  ctx.font = '800 10px "Barlow Condensed", sans-serif';
  ctx.fillStyle = '#44445a';
  ctx.textAlign = 'center';
  ctx.fillText('TIME →', padL + plotW / 2, h - 5);
  ctx.save();
  ctx.translate(14, padT + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('DISTANCE TO ♡', 0, 0);
  ctx.restore();

  // Y ticks
  ctx.textAlign = 'right';
  ctx.font = '600 9px "Barlow Condensed", sans-serif';
  ctx.fillStyle = '#44445a';
  ctx.fillText(`${maxDist.toFixed(1)}`, padL - 5, padT + 8);
  ctx.fillText('0', padL - 5, zeroY + 4);
}

// ===== STROGATZ ODE SIMULATION =====
function simulate(p1, p2, x0, y0, dt, steps) {
  // dx/dt = p1.a * x + p1.b * y
  // dy/dt = p2.b * x + p2.a * y
  const trajectory = [{ x: x0, y: y0 }];
  let x = x0, y = y0;
  for (let i = 0; i < steps; i++) {
    // RK4
    const k1x = p1.a * x + p1.b * y;
    const k1y = p2.b * x + p2.a * y;
    const k2x = p1.a * (x + dt / 2 * k1x) + p1.b * (y + dt / 2 * k1y);
    const k2y = p2.b * (x + dt / 2 * k1x) + p2.a * (y + dt / 2 * k1y);
    const k3x = p1.a * (x + dt / 2 * k2x) + p1.b * (y + dt / 2 * k2y);
    const k3y = p2.b * (x + dt / 2 * k2x) + p2.a * (y + dt / 2 * k2y);
    const k4x = p1.a * (x + dt * k3x) + p1.b * (y + dt * k3y);
    const k4y = p2.b * (x + dt * k3x) + p2.a * (y + dt * k3y);
    x += dt / 6 * (k1x + 2 * k2x + 2 * k3x + k4x);
    y += dt / 6 * (k1y + 2 * k2y + 2 * k3y + k4y);
    // Clamp to prevent explosion
    x = Math.max(-5, Math.min(5, x));
    y = Math.max(-5, Math.min(5, y));
    trajectory.push({ x, y });
  }
  return trajectory;
}

// ===== PHASE PORTRAIT =====
function drawPhasePortrait(canvas, p1, p2, trajectories, dynColor, color1, color2, selectedIdx) {
  if (selectedIdx === undefined) selectedIdx = 0;
  if (phaseAnimationId) cancelAnimationFrame(phaseAnimationId);
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = w / 12;

  let frame = 0;
  const maxFrames = 300;

  // Determine dynamics mode for labels
  const cTr = p1.a + p2.a;
  const cDet = p1.a * p2.a - p1.b * p2.b;
  const cDisc = cTr * cTr - 4 * cDet;
  const cMode = cDet < 0 ? 'saddle' : Math.abs(cTr) < 0.05 ? 'center' : cDisc < 0 ? (cTr < 0 ? 'stable' : 'unstable') : (cTr < 0 ? 'stable' : 'unstable');

  function drawFrame() {
    // Use shared grid with love equilibrium at center
    drawSpiralGrid(ctx, w, h, cx, cy, scale, dynColor);

    // Square grid overlay for compat (additional detail)
    ctx.strokeStyle = 'rgba(42, 42, 58, 0.25)';
    ctx.lineWidth = 0.5;
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue; // skip center line (drawn by grid)
      ctx.beginPath();
      ctx.moveTo(cx + i * scale, 0);
      ctx.lineTo(cx + i * scale, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, cy + i * scale);
      ctx.lineTo(w, cy + i * scale);
      ctx.stroke();
    }

    // Vector field — flat arrows
    const step = 2;
    for (let gx = -5; gx <= 5; gx += step) {
      for (let gy = -5; gy <= 5; gy += step) {
        const dx = p1.a * gx + p1.b * gy;
        const dy = p2.b * gx + p2.a * gy;
        const mag = Math.sqrt(dx * dx + dy * dy);
        if (mag < 0.01) continue;
        const nx = dx / mag;
        const ny = dy / mag;
        const arrowLen = 9;
        const sx = cx + gx * scale;
        const sy = cy - gy * scale;
        ctx.strokeStyle = 'rgba(100, 100, 140, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + nx * arrowLen, sy - ny * arrowLen);
        ctx.stroke();
      }
    }

    // Trajectories — first one highlighted (matches time series)
    const drawUpTo = Math.min(frame, maxFrames);
    const baseColor = dynColor || '#C0FC04';

    // Draw background trajectories first (dimmer)
    for (let t = 0; t < trajectories.length; t++) {
      if (t === selectedIdx) continue;
      const traj = trajectories[t];
      const segEnd = Math.min(drawUpTo, traj.length - 1);
      ctx.beginPath();
      for (let i = 0; i <= segEnd; i++) {
        const sx = cx + traj[i].x * scale;
        const sy = cy - traj[i].y * scale;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.strokeStyle = baseColor + '44';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    // Draw featured trajectory — bold, matches time series + convergence
    {
      const traj = trajectories[selectedIdx];
      const segEnd = Math.min(drawUpTo, traj.length - 1);
      ctx.beginPath();
      for (let i = 0; i <= segEnd; i++) {
        const sx = cx + traj[i].x * scale;
        const sy = cy - traj[i].y * scale;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.strokeStyle = baseColor;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Head dot for featured trajectory
      if (segEnd > 0 && segEnd < traj.length) {
        const pt = traj[segEnd];
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(cx + pt.x * scale - 4, cy - pt.y * scale - 4, 8, 8);
        ctx.fillStyle = baseColor;
        ctx.fillRect(cx + pt.x * scale - 3, cy - pt.y * scale - 3, 6, 6);
      }

      // Start marker for featured trajectory
      const startPt = traj[0];
      ctx.strokeStyle = '#ffffff60';
      ctx.lineWidth = 1;
      ctx.strokeRect(cx + startPt.x * scale - 5, cy - startPt.y * scale - 5, 10, 10);
    }

    // Head dots for other trajectories
    for (let t = 0; t < trajectories.length; t++) {
      if (t === selectedIdx) continue;
      const traj = trajectories[t];
      const segEnd = Math.min(drawUpTo, traj.length - 1);
      if (segEnd > 0 && segEnd < traj.length) {
        const pt = traj[segEnd];
        ctx.fillStyle = baseColor + '88';
        ctx.fillRect(cx + pt.x * scale - 2, cy - pt.y * scale - 2, 4, 4);
      }
    }

    // Shared axes with equilibrium narrative
    drawSpiralAxes(ctx, w, h, cx, cy, color1, color2, cMode);

    frame++;
    if (frame <= maxFrames + 30) {
      phaseAnimationId = requestAnimationFrame(drawFrame);
    }
  }
  drawFrame();
}

// ===== TIME SERIES =====
function drawTimeSeries(canvas, traj, dt, color1, color2) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const padL = 44, padR = 10, padT = 24, padB = 30;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  // Black bg
  ctx.fillStyle = '#07070e';
  ctx.fillRect(0, 0, w, h);

  // Plot area
  ctx.fillStyle = '#0a0a12';
  ctx.fillRect(padL, padT, plotW, plotH);

  // Grid
  ctx.strokeStyle = 'rgba(42, 42, 58, 0.6)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = padT + plotH * i / 5;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(w - padR, y);
    ctx.stroke();
  }

  let maxVal = 1;
  for (const pt of traj) {
    maxVal = Math.max(maxVal, Math.abs(pt.x), Math.abs(pt.y));
  }
  maxVal = Math.ceil(maxVal * 1.2);

  // Equilibrium line — this is the love equilibrium (0 = at balance, not zero love)
  const zeroY = padT + plotH / 2;
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(192, 252, 4, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, zeroY);
  ctx.lineTo(w - padR, zeroY);
  ctx.stroke();
  ctx.setLineDash([]);
  // EQ label
  ctx.font = '600 7px "Barlow Condensed", sans-serif';
  ctx.fillStyle = 'rgba(192, 252, 4, 0.4)';
  ctx.textAlign = 'left';
  ctx.fillText('♡ EQ', padL + 2, zeroY - 4);

  // x(t) — flat, bold
  ctx.beginPath();
  for (let i = 0; i < traj.length; i++) {
    const px = padL + (i / (traj.length - 1)) * plotW;
    const py = zeroY - (traj[i].x / maxVal) * (plotH / 2);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = color1 || '#C0FC04';
  ctx.lineWidth = 3;
  ctx.stroke();

  // y(t)
  ctx.beginPath();
  for (let i = 0; i < traj.length; i++) {
    const px = padL + (i / (traj.length - 1)) * plotW;
    const py = zeroY - (traj[i].y / maxVal) * (plotH / 2);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = color2 || '#EA027E';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Labels — bold, with IC annotation
  ctx.font = '800 12px "Barlow Condensed", sans-serif';
  ctx.fillStyle = color1 || '#C0FC04';
  ctx.textAlign = 'left';
  ctx.fillText('— YOU X(T)', padL + 6, padT + 14);
  ctx.fillStyle = color2 || '#EA027E';
  ctx.fillText('— THEM Y(T)', padL + 120, padT + 14);
  // Show initial condition (matches highlighted trajectory in phase portrait)
  ctx.font = '400 8px "Share Tech Mono", monospace';
  ctx.fillStyle = '#44445a';
  ctx.textAlign = 'right';
  ctx.fillText(`IC: (${traj[0].x.toFixed(1)}, ${traj[0].y.toFixed(1)})`, w - padR, padT + 14);

  // Axis labels
  ctx.font = '800 10px "Barlow Condensed", sans-serif';
  ctx.fillStyle = '#44445a';
  ctx.textAlign = 'center';
  ctx.fillText('TIME →', padL + plotW / 2, h - 6);
  ctx.save();
  ctx.translate(14, padT + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('FEELING', 0, 0);
  ctx.restore();

  // Y-axis ticks
  ctx.textAlign = 'right';
  ctx.fillStyle = '#44445a';
  ctx.font = '600 9px "Barlow Condensed", sans-serif';
  ctx.fillText(`+${maxVal}`, padL - 5, padT + 10);
  ctx.fillText('0', padL - 5, zeroY + 3);
  ctx.fillText(`-${maxVal}`, padL - 5, padT + plotH + 2);
}

// ===== TYPES GALLERY =====
// ===== GALLERY SPIRAL PREVIEW =====
let gallerySpiralId = null;
let currentGalleryType = null;

function drawGallerySpiral(typeName) {
  if (typeName === currentGalleryType) return;
  currentGalleryType = typeName;
  if (gallerySpiralId) cancelAnimationFrame(gallerySpiralId);

  const type = TYPES[typeName];
  if (!type) return;

  const canvas = document.getElementById('gallery-spiral');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = w / 10;

  // Pair the type with a "mirror" to guarantee a spiral
  const selfA = type.params.a;
  const selfB = type.params.b;

  // Create parameters that produce a spiral:
  // Generate dynamics based on type intensity:
  // Strong (|a| > 0.6): clear spiral   Moderate (|a| <= 0.6): balanced circle
  const absA = Math.abs(selfA);
  const isModerate = absA <= 0.6;
  let fp1, fp2;

  if (isModerate) {
    // Center dynamics — pure imaginary eigenvalues, closed circular orbit
    fp1 = { a: 0, b: selfB > 0 ? 0.9 : -0.9 };
    fp2 = { a: 0, b: selfB > 0 ? -0.9 : 0.9 };
  } else {
    const sign = selfA > 0 ? 1 : -1;
    fp1 = { a: sign * 0.12, b: selfB > 0 ? 0.88 : -0.88 };
    fp2 = { a: sign * 0.12, b: selfB > 0 ? -0.88 : 0.88 };
  }

  const isStable = (fp1.a + fp2.a) < 0;
  const isCenter = Math.abs(fp1.a + fp2.a) < 0.01;
  const ftr = fp1.a + fp2.a;
  const fdet = fp1.a * fp2.a - fp1.b * fp2.b;
  const fdisc = ftr * ftr - 4 * fdet;
  const re = ftr / 2;
  const im = Math.sqrt(Math.max(0, -fdisc)) / 2;
  const classification = isCenter ? 'CENTER ORBIT' : isStable ? 'STABLE SPIRAL' : 'UNSTABLE SPIRAL';

  // Starting points
  const ics = [];
  if (isCenter) {
    // Multiple radii for concentric orbits
    for (let ring = 1; ring <= 4; ring++) {
      const r = ring * 0.9;
      for (let k = 0; k < 2; k++) {
        const angle = (k / 2) * Math.PI * 2 + ring * 0.5;
        ics.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
      }
    }
  } else {
    const startR = isStable ? 3.8 : 0.5;
    for (let k = 0; k < 8; k++) {
      const angle = (k / 8) * Math.PI * 2;
      ics.push({ x: startR * Math.cos(angle), y: startR * Math.sin(angle) });
    }
  }

  const trajectories = ics.map(ic => simulate(fp1, fp2, ic.x, ic.y, 0.05, 500));
  const altColor = type.color === '#C0FC04' ? '#EA027E' : '#C0FC04';

  // Update info panel
  const label = document.getElementById('spiral-preview-label');
  const sub = document.getElementById('spiral-preview-sub');
  const info = document.getElementById('spiral-preview-info');
  const wrap = document.querySelector('.spiral-preview-wrap');

  label.textContent = type.name;
  label.style.color = type.color;
  sub.textContent = type.jaName + ' // ' + type.code;
  wrap.classList.add('active');
  wrap.style.borderColor = type.color;
  info.innerHTML = `
    <div class="spiral-info-row">
      <span class="spiral-info-name" style="color:${type.color}">${type.icon} ${type.name}</span>
      <span class="spiral-info-params">α=${selfA > 0 ? '+' : ''}${selfA} β=${selfB > 0 ? '+' : ''}${selfB}</span>
    </div>
    <div class="spiral-info-class" style="color:${isCenter ? '#01FFFF' : isStable ? '#C0FC04' : '#FF5500'}">${classification} // λ = ${re.toFixed(2)} ± ${im.toFixed(2)}i</div>
  `;

  let frame = 0;
  const maxFrames = 500;

  const spiralMode = isCenter ? 'center' : isStable ? 'stable' : 'unstable';

  function drawFrame() {
    drawSpiralGrid(ctx, w, h, cx, cy, scale, type.color);

    const drawUpTo = Math.min(frame, maxFrames);
    for (let t = 0; t < trajectories.length; t++) {
      const traj = trajectories[t];
      const segEnd = Math.min(drawUpTo, traj.length - 1);
      const color = t % 2 === 0 ? type.color : altColor;

      for (let i = 1; i <= segEnd; i++) {
        const age = (segEnd - i) / 160;
        const alpha = Math.max(0.12, Math.min(0.95, 1 - age));
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha * (t % 2 === 0 ? 0.9 : 0.6);
        ctx.lineWidth = t % 2 === 0 ? 2.2 : 1.4;
        ctx.beginPath();
        ctx.moveTo(cx + traj[i - 1].x * scale, cy - traj[i - 1].y * scale);
        ctx.lineTo(cx + traj[i].x * scale, cy - traj[i].y * scale);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (segEnd > 0 && segEnd < traj.length) {
        const pt = traj[segEnd];
        ctx.fillStyle = color;
        ctx.fillRect(cx + pt.x * scale - 3, cy - pt.y * scale - 3, 6, 6);
      }
    }

    drawSpiralAxes(ctx, w, h, cx, cy, type.color, altColor, spiralMode);

    // Eigenvalue annotation
    ctx.font = '400 9px "Share Tech Mono", monospace';
    ctx.fillStyle = 'rgba(100, 100, 140, 0.5)';
    ctx.textAlign = 'left';
    ctx.fillText(`λ = ${re.toFixed(2)} ± ${im.toFixed(2)}i`, 8, h - 18);

    frame++;
    if (frame <= maxFrames + 40) {
      gallerySpiralId = requestAnimationFrame(drawFrame);
    } else {
      frame = 0;
      gallerySpiralId = requestAnimationFrame(drawFrame);
    }
  }
  drawFrame();
}

function clearGallerySpiral() {
  // Don't clear — keep last hovered spiral visible
}

function renderTypesGallery() {
  const grid = document.getElementById('types-grid');
  grid.innerHTML = Object.values(TYPES).map(t => `
    <div class="type-card" data-type="${t.name}" style="--card-color:${t.color}"
         onmouseenter="drawGallerySpiral('${t.name}')"
    >
      <div class="type-card-icon" style="color:${t.color}">${t.icon}</div>
      <div class="type-card-name" style="color:${t.color}">${t.name}</div>
      <div class="type-card-code">${t.code} // ${t.jaName}</div>
      <div class="type-card-desc">${t.tagline}</div>
      <div style="margin-top:0.5rem;font-size:0.65rem;color:var(--dim);">
        α=${t.params.a > 0 ? '+' : ''}${t.params.a} β=${t.params.b > 0 ? '+' : ''}${t.params.b}
      </div>
    </div>
  `).join('');

  // Draw initial spiral for the first type
  drawGallerySpiral('NOVA');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initBackground();
  initHeroSpiral();
  renderTypesGallery();
});
