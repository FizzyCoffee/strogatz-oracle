/* ============================================================
   STROGATZ ORACLE — Love Dynamics Personality Analysis
   Based on Strogatz coupled-oscillator model
   ============================================================ */

// ===== I18N =====
// Japanese is the default language. Toggle persists in localStorage.
let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('strogatz-lang')) || 'ja';

function L(en, ja) {
  return currentLang === 'ja' ? ja : en;
}

// Static UI strings for HTML elements. Keyed by a stable name.
// Use data-i18n="key" on the element; data-i18n-html="key" if the value contains HTML.
const I18N = {
  en: {
    'tag.loveDynamics.primary': 'LOVE DYNAMICS',
    'tag.loveDynamics.sub': '恋愛力学',
    'tag.personality.primary': 'PERSONALITY ANALYSIS',
    'tag.personality.sub': '性格振動分析',
    'tag.version': 'v3.7.2',
    'hero.title.line1': 'STROGATZ',
    'hero.title.line2': 'ORACLE',
    'hero.kanji': '恋愛振動占い',
    'hero.spiral.label': 'LOVE DYNAMICS PHASE PORTRAIT',
    'hero.spiral.sub': '恋愛力学位相図 // STROGATZ MODEL',
    'hero.desc': 'Based on Dr. Steven Strogatz\'s coupled oscillator theory, discover your <strong>Love Oscillation Type</strong> and unlock the mathematical secrets of romantic compatibility.',
    'hero.btn.begin.primary': 'BEGIN ANALYSIS',
    'hero.btn.begin.sub': '解析開始',
    'hero.btn.types.primary': 'VIEW ALL 8 TYPES',
    'hero.btn.types.sub': '全タイプ一覧',
    'quiz.tag.primary': 'NEURAL SCAN',
    'quiz.tag.sub': '心理波動解析',
    'quiz.back': '← BACK',
    'results.tag.primary': 'TYPE IDENTIFIED',
    'results.tag.sub': '波動型判定',
    'results.strengthsLabel': 'STRENGTHS',
    'results.risksLabel': 'RISKS',
    'results.spiral.label': 'YOUR LOVE SPIRAL',
    'results.spiral.sub': '恋愛螺旋',
    'results.trait.label': 'TRAIT PROFILE',
    'results.trait.sub': '特性プロファイル',
    'results.btn.compat.primary': 'CHECK COMPATIBILITY',
    'results.btn.compat.sub': '共振適合度チェック',
    'results.btn.allTypes': 'ALL TYPES',
    'results.btn.retake': 'RETAKE QUIZ',
    'param.resonance': 'RESONANCE',
    'param.coupling': 'COUPLING',
    'param.phase': 'PHASE',
    'param.resonant': 'RESONANT ↑',
    'param.damped': 'DAMPED ↓',
    'param.sync': 'SYNC ⇄',
    'param.anti': 'ANTI ⇆',
    'param.flash': 'FLASH ⚡',
    'param.wave': 'WAVE ∿',
    'compat.tag.primary': 'RESONANCE CHECK',
    'compat.tag.sub': '共振適合度',
    'compat.yourType': 'YOUR TYPE',
    'compat.partnerType': 'PARTNER TYPE',
    'compat.ic.label': 'INITIAL CONDITION',
    'compat.ic.hint': 'Click a trajectory on the phase portrait or select here',
    'compat.phase.primary': 'PHASE PORTRAIT',
    'compat.phase.sub': '位相空間 — CLICK TO SELECT',
    'compat.time.primary': 'TIME SERIES',
    'compat.time.sub': '時系列',
    'compat.conv.primary': 'LOVE CONVERGENCE',
    'compat.conv.sub': '愛の収束曲線 — DISTANCE TO ♡ OVER TIME',
    'compat.btn.back': 'BACK TO RESULTS',
    'compat.btn.retake': 'RETAKE QUIZ',
    'gallery.tag.primary': 'ALL OSCILLATOR TYPES',
    'gallery.tag.sub': '全振動型一覧',
    'gallery.title': 'THE 8 TYPES',
    'gallery.intro': 'The Strogatz Love Dynamics model classifies individuals into 8 oscillator types based on three fundamental axes of romantic wave mechanics.',
    'gallery.axis.resonance.name': 'RESONANCE',
    'gallery.axis.resonance.desc': '<b>R</b>ESONANT / <b>D</b>AMPED',
    'gallery.axis.coupling.name': 'COUPLING',
    'gallery.axis.coupling.desc': '<b>S</b>YNC / <b>A</b>NTI',
    'gallery.axis.phase.name': 'PHASE',
    'gallery.axis.phase.desc': '<b>F</b>LASH / <b>W</b>AVE',
    'gallery.preview.label': 'HOVER A TYPE',
    'gallery.preview.sub': 'タイプにカーソルを合わせる',
    'gallery.preview.placeholder': '← Select a type to see its love dynamics spiral',
    'gallery.btn.quiz.primary': 'TAKE THE QUIZ',
    'gallery.btn.quiz.sub': '診断を受ける',
    'gallery.btn.home': 'HOME',
    'canvas.equilibrium': '♡ DEEP MUTUAL LOVE',
    'canvas.equilibriumPoint': 'EQUILIBRIUM POINT',
    'canvas.aDeviation': "A'S DEVIATION →",
    'canvas.bDeviation': "↑ B'S DEVIATION",
    'canvas.stableNarr': 'CONVERGES TO ♡ — LOVE FINDS ITS NATURAL RHYTHM',
    'canvas.unstableNarr': 'DIVERGES FROM ♡ — PASSION AMPLIFIES WITHOUT LIMIT',
    'canvas.centerNarr': 'ORBITS ♡ — ETERNAL DANCE AROUND THE LOVE POINT',
    'canvas.saddleNarr': 'KNIFE-EDGE AT ♡ — ONE PATH TO LOVE, ONE TO SEPARATION',
    'canvas.distanceNote': 'DISTANCE FROM CENTER = EMOTIONAL TURBULENCE',
    'canvas.centerNote': 'CENTER = STABLE DEEP LOVE (NOT ZERO)',
    'canvas.ts.you': '— YOU X(T)',
    'canvas.ts.them': '— THEM Y(T)',
    'canvas.ts.time': 'TIME →',
    'canvas.ts.feeling': 'FEELING',
    'canvas.conv.equilibrium': '♡ EQUILIBRIUM (DISTANCE = 0)',
    'canvas.conv.eqShort': '♡ EQ',
    'canvas.conv.yAxis': 'DISTANCE TO ♡',
    'canvas.conv.trajectory': '— TRAJECTORY',
    'canvas.conv.allOthers': '— ALL OTHERS',
    'radar.intensity': 'INTENSITY',
    'radar.stability': 'STABILITY',
    'radar.empathy': 'EMPATHY',
    'radar.independence': 'INDEPENDENCE',
    'radar.speed': 'SPEED',
    'radar.depth': 'DEPTH'
  },
  ja: {
    'tag.loveDynamics.primary': '恋愛力学',
    'tag.loveDynamics.sub': 'LOVE DYNAMICS',
    'tag.personality.primary': '性格振動分析',
    'tag.personality.sub': 'PERSONALITY ANALYSIS',
    'tag.version': 'v3.7.2',
    'hero.title.line1': 'STROGATZ',
    'hero.title.line2': 'ORACLE',
    'hero.kanji': '恋愛振動占い',
    'hero.spiral.label': '恋愛力学位相図',
    'hero.spiral.sub': 'LOVE DYNAMICS PHASE PORTRAIT // STROGATZ MODEL',
    'hero.desc': 'スティーヴン・ストロガッツ博士の結合振動子理論に基づき、あなたの<strong>恋愛振動型</strong>を解き明かし、恋の相性に潜む数学的秘密を紐解きます。',
    'hero.btn.begin.primary': '解析を開始',
    'hero.btn.begin.sub': 'BEGIN ANALYSIS',
    'hero.btn.types.primary': '全8タイプを見る',
    'hero.btn.types.sub': 'VIEW ALL 8 TYPES',
    'quiz.tag.primary': '心理波動スキャン',
    'quiz.tag.sub': 'NEURAL SCAN',
    'quiz.back': '← もどる',
    'results.tag.primary': '振動型判定完了',
    'results.tag.sub': 'TYPE IDENTIFIED',
    'results.strengthsLabel': '強み',
    'results.risksLabel': 'リスク',
    'results.spiral.label': 'あなたの恋愛螺旋',
    'results.spiral.sub': 'YOUR LOVE SPIRAL',
    'results.trait.label': '特性プロファイル',
    'results.trait.sub': 'TRAIT PROFILE',
    'results.btn.compat.primary': '共振適合度チェック',
    'results.btn.compat.sub': 'CHECK COMPATIBILITY',
    'results.btn.allTypes': '全タイプ',
    'results.btn.retake': 'もう一度診断',
    'param.resonance': '共鳴',
    'param.coupling': '結合',
    'param.phase': '位相',
    'param.resonant': '共鳴型 ↑',
    'param.damped': '減衰型 ↓',
    'param.sync': '同期 ⇄',
    'param.anti': '反同期 ⇆',
    'param.flash': '閃光 ⚡',
    'param.wave': '波動 ∿',
    'compat.tag.primary': '共振適合度チェック',
    'compat.tag.sub': 'RESONANCE CHECK',
    'compat.yourType': 'あなたのタイプ',
    'compat.partnerType': '相手のタイプ',
    'compat.ic.label': '初期条件',
    'compat.ic.hint': '位相図の軌跡をクリックするか、ここから選択してください',
    'compat.phase.primary': '位相空間',
    'compat.phase.sub': 'PHASE PORTRAIT — クリックで選択',
    'compat.time.primary': '時系列',
    'compat.time.sub': 'TIME SERIES',
    'compat.conv.primary': '愛の収束曲線',
    'compat.conv.sub': 'LOVE CONVERGENCE — ♡までの距離の時間変化',
    'compat.btn.back': '結果に戻る',
    'compat.btn.retake': 'もう一度診断',
    'gallery.tag.primary': '全振動型一覧',
    'gallery.tag.sub': 'ALL OSCILLATOR TYPES',
    'gallery.title': '全8タイプ',
    'gallery.intro': 'ストロガッツ恋愛力学モデルは、恋愛波動力学の3つの基軸に基づき、あなたを8つの振動子タイプのいずれかに分類します。',
    'gallery.axis.resonance.name': '共鳴',
    'gallery.axis.resonance.desc': '<b>R</b>共鳴型 / <b>D</b>減衰型',
    'gallery.axis.coupling.name': '結合',
    'gallery.axis.coupling.desc': '<b>S</b>同期 / <b>A</b>反同期',
    'gallery.axis.phase.name': '位相',
    'gallery.axis.phase.desc': '<b>F</b>閃光 / <b>W</b>波動',
    'gallery.preview.label': 'タイプを選択',
    'gallery.preview.sub': 'HOVER A TYPE',
    'gallery.preview.placeholder': '← タイプを選ぶと恋愛力学螺旋が表示されます',
    'gallery.btn.quiz.primary': '診断を受ける',
    'gallery.btn.quiz.sub': 'TAKE THE QUIZ',
    'gallery.btn.home': 'ホーム',
    'canvas.equilibrium': '♡ 相思相愛の深み',
    'canvas.equilibriumPoint': '平衡点',
    'canvas.aDeviation': 'Aの逸脱 →',
    'canvas.bDeviation': '↑ Bの逸脱',
    'canvas.stableNarr': '♡へ収束 — 愛が自然なリズムを見出す',
    'canvas.unstableNarr': '♡から発散 — 情熱は限りなく増幅する',
    'canvas.centerNarr': '♡を周回 — 愛の点をめぐる永遠の舞',
    'canvas.saddleNarr': '♡の刃の上 — 一方は愛へ、他方は別離へ',
    'canvas.distanceNote': '中心からの距離 = 感情の乱れ',
    'canvas.centerNote': '中心 = 安定した深い愛（ゼロではない）',
    'canvas.ts.you': '— あなた X(T)',
    'canvas.ts.them': '— 相手 Y(T)',
    'canvas.ts.time': '時間 →',
    'canvas.ts.feeling': '感情',
    'canvas.conv.equilibrium': '♡ 平衡（距離 = 0）',
    'canvas.conv.eqShort': '♡ EQ',
    'canvas.conv.yAxis': '♡までの距離',
    'canvas.conv.trajectory': '— 軌跡',
    'canvas.conv.allOthers': '— その他',
    'radar.intensity': '激しさ',
    'radar.stability': '安定性',
    'radar.empathy': '共感',
    'radar.independence': '独立',
    'radar.speed': '速さ',
    'radar.depth': '深さ'
  }
};

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

// Apply current language to all [data-i18n] and [data-i18n-html] elements in the DOM.
// Also updates document root lang attribute.
function applyLang() {
  document.documentElement.lang = currentLang;
  document.body && document.body.setAttribute('data-lang', currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });
  // Update lang toggle button state
  document.querySelectorAll('.lang-toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  // Re-render dynamic content that depends on lang
  reRenderForLang();
}

// Called after a language switch — re-renders any JS-injected content currently visible.
function reRenderForLang() {
  // Quiz question (if quiz is active)
  if (typeof QUESTIONS !== 'undefined' && document.getElementById('quiz') && document.getElementById('quiz').classList.contains('active')) {
    if (typeof renderQuestion === 'function' && currentQuestion < QUESTIONS.length) renderQuestion();
  }
  // Results page
  if (userType && document.getElementById('results')) {
    renderResultText(userType);
  }
  // Compatibility page
  if (userType && partnerType && document.getElementById('compat-results') &&
      document.getElementById('compat-results').style.display !== 'none') {
    renderCompatText();
  }
  // Gallery cards
  if (document.getElementById('types-grid') && document.getElementById('types-grid').children.length > 0) {
    renderTypesGallery();
  }
  // Gallery spiral preview
  if (currentGalleryType) {
    const gt = currentGalleryType;
    currentGalleryType = null; // force re-render
    drawGallerySpiral(gt);
  }
}

function setLang(l) {
  if (l !== 'ja' && l !== 'en') return;
  currentLang = l;
  try { localStorage.setItem('strogatz-lang', l); } catch (_) {}
  applyLang();
}

// ===== TYPE DEFINITIONS =====
const TYPES = {
  NOVA: {
    name: 'NOVA',
    code: 'RSF',
    icon: '✦',
    color: '#FF0D1A',
    tagline: 'Explosive resonance — a supernova of passion',
    jaTagline: '爆発的共鳴 — 情熱の超新星',
    jaName: '新星',
    axes: { resonance: 'R', coupling: 'S', phase: 'F' },
    params: { a: 0.8, b: 0.5 },
    traits: { intensity: 0.95, stability: 0.2, empathy: 0.8, independence: 0.3, speed: 0.9, depth: 0.5 },
    description: 'You are a NOVA — the most explosive oscillator type. Your feelings self-amplify rapidly, spiraling ever further from equilibrium. Each emotional cycle grows larger than the last — passion that cannot be contained. Your eigenvalue is strongly positive (λ > 0), meaning deviations from the love point amplify exponentially. In the phase portrait, your trajectory spirals outward: not less love, but love too intense to settle.',
    jaDescription: 'あなたはNOVA — 最も爆発的な振動型。感情は急速に自己増幅し、平衡から螺旋を描いてどこまでも遠ざかる。サイクルごとに波は大きくなる — 抑えきれない情熱。固有値は強く正（λ > 0）で、恋愛平衡点からの逸脱は指数関数的に拡大する。位相図では、あなたの軌跡は外へと螺旋を描く：愛が少ないのではなく、静まり返ることのできない激情。',
    strengths: 'Passionate, magnetic, deeply present, emotionally generous',
    jaStrengths: '情熱的、磁力的、深く今に生きる、感情的に寛大',
    risks: 'Burnout, overwhelming partners, intensity addiction',
    jaRisks: '燃え尽き、相手を圧倒、激情への依存'
  },
  PULSAR: {
    name: 'PULSAR',
    code: 'RSW',
    icon: '◉',
    color: '#3601FB',
    tagline: 'Deep rhythmic devotion — a steady cosmic heartbeat',
    jaTagline: '深い律動の献身 — 宇宙の安定した鼓動',
    jaName: 'パルサー',
    axes: { resonance: 'R', coupling: 'S', phase: 'W' },
    params: { a: 0.6, b: 0.3 },
    traits: { intensity: 0.7, stability: 0.5, empathy: 0.85, independence: 0.3, speed: 0.3, depth: 0.95 },
    description: 'You are a PULSAR — a deep, rhythmic oscillator locked in eternal balance. Like a pulsar star emitting steady beams of energy, your love is a reliable signal that neither fades nor overwhelms. Your feelings orbit the love equilibrium in perfect rhythm — never fully settling, never losing control. Your bond is an endless heartbeat: constant, dependable, forever.',
    jaDescription: 'あなたはPULSAR — 永遠の均衡に閉じ込められた深い律動振動子。安定した光線を放つパルサー星のように、あなたの愛は消えもせず圧倒もしない、信頼できる信号。感情は完璧なリズムで恋愛平衡点を周回する — 完全には落ち着かず、決して制御を失わない。あなたの絆は終わりなき鼓動：一定で、頼れて、永遠に。',
    strengths: 'Devoted, profound, emotionally rich, patient',
    jaStrengths: '献身的、深遠、感情的に豊か、忍耐強い',
    risks: 'Over-attachment, slow to recognize incompatibility, possessive depth',
    jaRisks: '過度の執着、相性の悪さに気づきにくい、深い所有欲'
  },
  QUASAR: {
    name: 'QUASAR',
    code: 'RAF',
    icon: '⊗',
    color: '#FF5500',
    tagline: 'Electric tension — thriving in opposition',
    jaTagline: '電気的緊張 — 対立の中で輝く',
    jaName: '準星',
    axes: { resonance: 'R', coupling: 'A', phase: 'F' },
    params: { a: 0.8, b: -0.5 },
    traits: { intensity: 0.9, stability: 0.25, empathy: 0.4, independence: 0.95, speed: 0.85, depth: 0.6 },
    description: 'You are a QUASAR — the most dynamically charged type. Your feelings amplify internally but you instinctively push against your partner\'s energy, creating electric tension and thrilling opposition. Like a quasar\'s relativistic jets, you channel enormous energy in unexpected directions. You fall hard but you fight the fall, creating the most dramatic love stories.',
    jaDescription: 'あなたはQUASAR — 最も力動的に帯電した型。感情は内側で増幅するが、本能的にパートナーのエネルギーに逆らい、電気的緊張とスリリングな対立を生む。クェーサーの相対論的ジェットのように、巨大なエネルギーを予期せぬ方向に放つ。深く落ちるが、その落下と闘う — 最もドラマチックな恋物語を紡ぐ。',
    strengths: 'Exciting, challenging, growth-provoking, never boring',
    jaStrengths: '刺激的、挑戦的、成長を促す、退屈させない',
    risks: 'Conflict addiction, emotional whiplash, push-pull exhaustion',
    jaRisks: '対立への依存、感情の急変、押し引きによる消耗'
  },
  NEBULA: {
    name: 'NEBULA',
    code: 'RAW',
    icon: '☁',
    color: '#EA027E',
    tagline: 'Mysterious depths — a slow-burning cosmic enigma',
    jaTagline: '神秘の深淵 — ゆっくり燃える宇宙の謎',
    jaName: '星雲',
    axes: { resonance: 'R', coupling: 'A', phase: 'W' },
    params: { a: 0.6, b: -0.3 },
    traits: { intensity: 0.6, stability: 0.4, empathy: 0.35, independence: 0.9, speed: 0.2, depth: 0.9 },
    description: 'You are a NEBULA — vast, mysterious, and locked in eternal opposition. Your feelings cycle through vast internal landscapes while you maintain a contrarian distance from your partner\'s direct influence. Like a nebula suspended between gravity and radiation, your love exists in permanent creative tension — never collapsing, never dispersing. You are the eternal contradiction that generates beauty.',
    jaDescription: 'あなたはNEBULA — 広大で、神秘的、永遠の対立に留まる。感情は広大な内的景観を巡りながら、パートナーの直接的影響には逆張りの距離を保つ。重力と放射の間に漂う星雲のように、あなたの愛は永続する創造的緊張の中に存在する — 崩壊せず、散逸もしない。あなたは美を生む永遠の矛盾。',
    strengths: 'Mysterious, creatively inspiring, emotionally independent, transformative',
    jaStrengths: '神秘的、創造的に触発する、感情的に独立、変革的',
    risks: 'Emotional unavailability, confusing partners, hidden intensity eruptions',
    jaRisks: '感情的に不在、相手を混乱させる、隠れた激情の噴出'
  },
  PHOTON: {
    name: 'PHOTON',
    code: 'DSF',
    icon: '◇',
    color: '#01FFFF',
    tagline: 'Quick empathic spark — brilliant but fleeting',
    jaTagline: '素早き共感の閃光 — 輝けど儚い',
    jaName: '光子',
    axes: { resonance: 'D', coupling: 'S', phase: 'F' },
    params: { a: -0.6, b: 0.5 },
    traits: { intensity: 0.6, stability: 0.6, empathy: 0.95, independence: 0.4, speed: 0.95, depth: 0.3 },
    description: 'You are a PHOTON — fast, bright, and empathically responsive. Your feelings cycle in quick, balanced orbits around the love equilibrium — never fully settling but never fading either. Like a photon in perpetual motion, you need constant exchange to sustain the rhythm. You synchronize instantly with your partner\'s energy, maintaining an eternal dance of give and receive.',
    jaDescription: 'あなたはPHOTON — 速く、明るく、共感的に応答する。感情は恋愛平衡点の周囲を素早く均衡のとれた軌道で巡る — 完全には落ち着かないが、消えもしない。永遠運動を続ける光子のように、リズムを保つには絶え間ない交流が必要。パートナーのエネルギーと瞬時に同期し、与えと受け取りの永遠の舞を続ける。',
    strengths: 'Empathic, responsive, adaptable, emotionally agile',
    jaStrengths: '共感的、応答的、適応的、感情的に機敏',
    risks: 'Emotional dependency, losing self in partner, fickleness without input',
    jaRisks: '感情的依存、相手に自己を失う、刺激が無いと心変わり'
  },
  AURORA: {
    name: 'AURORA',
    code: 'DSW',
    icon: '≋',
    color: '#C0FC04',
    tagline: 'Gentle harmonizer — soft waves of steady light',
    jaTagline: '穏やかな調和者 — 安らぎの光の波',
    jaName: 'オーロラ',
    axes: { resonance: 'D', coupling: 'S', phase: 'W' },
    params: { a: -0.8, b: 0.3 },
    traits: { intensity: 0.3, stability: 0.95, empathy: 0.8, independence: 0.5, speed: 0.2, depth: 0.7 },
    description: 'You are an AURORA — gentle, harmonious, and deeply stabilizing. Your strong self-damping (λ < 0) means every emotional deviation spirals back toward the love equilibrium. In the phase portrait, your trajectory converges inward: not shrinking love, but love finding its deepest, most stable form. Like the aurora borealis — born from turbulence, settling into luminous calm.',
    jaDescription: 'あなたはAURORA — 穏やかで、調和的で、深く安定化する。強い自己減衰（λ < 0）により、感情の揺らぎはすべて恋愛平衡点へと螺旋を描いて戻る。位相図では軌跡は内へ収束する：愛が縮むのではなく、愛が最も深く安定した形を見出している。オーロラのように — 乱流から生まれ、輝く静けさへ落ち着く。',
    strengths: 'Stabilizing, calming, harmonious, emotionally mature',
    jaStrengths: '安定させる、落ち着かせる、調和的、感情的に成熟',
    risks: 'Emotional suppression, over-accommodation, lack of passion',
    jaRisks: '感情の抑圧、過度の迎合、情熱の欠如'
  },
  PHANTOM: {
    name: 'PHANTOM',
    code: 'DAF',
    icon: '△',
    color: '#3601FB',
    tagline: 'Elusive enigma — fast to retreat, impossible to forget',
    jaTagline: '捉えどころなき謎 — 素早く退き、忘れ難い',
    jaName: 'ファントム',
    axes: { resonance: 'D', coupling: 'A', phase: 'F' },
    params: { a: -0.6, b: -0.5 },
    traits: { intensity: 0.4, stability: 0.5, empathy: 0.2, independence: 0.95, speed: 0.8, depth: 0.5 },
    description: 'You are a PHANTOM — the most elusive oscillator type. Your feelings cycle in a perpetual dance of retreat and return, orbiting the love equilibrium but never landing on it. Like a phantom particle that exists only in equations, you are felt more than seen. Your love operates in negative space — an eternal orbit of absence and presence that neither decays nor settles.',
    jaDescription: 'あなたはPHANTOM — 最も捉えどころのない振動型。感情は撤退と帰還の永久の舞を続け、恋愛平衡点を周回するが決してそこに着地しない。方程式の中にしか存在しない幻の粒子のように、あなたは見られるよりも感じられる。あなたの愛は負の空間で動く — 減衰も収束もしない、不在と存在の永遠の軌道。',
    strengths: 'Intriguing, self-sufficient, creates longing, emotionally self-aware',
    jaStrengths: '興味を引く、自己完結、憧れを生む、感情的に自覚的',
    risks: 'Emotional avoidance, partner frustration, isolation',
    jaRisks: '感情の回避、相手の苛立ち、孤立'
  },
  SINGULARITY: {
    name: 'SINGULARITY',
    code: 'DAW',
    icon: '◎',
    color: '#EA027E',
    tagline: 'Gravitational mystery — a slow deep pull into the unknown',
    jaTagline: '重力の謎 — 未知へのゆっくりとした深い引力',
    jaName: '特異点',
    axes: { resonance: 'D', coupling: 'A', phase: 'W' },
    params: { a: -0.8, b: -0.3 },
    traits: { intensity: 0.3, stability: 0.7, empathy: 0.15, independence: 1.0, speed: 0.15, depth: 1.0 },
    description: 'You are a SINGULARITY — the deepest, most gravitational type. Your feelings dampen strongly and you oppose external emotional influence, yet like a black hole, your sheer depth creates an inexorable pull. Love near a Singularity is a one-way trip: slow, inevitable, and world-altering. Those who get close enough discover infinite depth beyond the event horizon.',
    jaDescription: 'あなたはSINGULARITY — 最も深く、最も重力的な型。感情は強く減衰し、外からの感情的影響に抗う — が、ブラックホールのように、純然たる深さが抗えぬ引力を生む。特異点の近くの愛は一方通行：ゆっくりで、不可避で、世界を変える。十分近づいた者は、事象の地平線の向こうに無限の深みを見出す。',
    strengths: 'Profoundly deep, utterly unique, transformative, self-contained',
    jaStrengths: '深遠、比類なき独自性、変革的、自己完結',
    risks: 'Extreme emotional unavailability, intimidating depth, absolute isolation',
    jaRisks: '極端な感情的不在、威圧する深さ、絶対的孤立'
  }
};

// ===== QUIZ =====
const QUESTIONS = [
  // Resonance (R vs D) — questions 0-3
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: When you begin to develop feelings for someone, what happens internally?',
    jaText: '波動スキャン α：誰かに恋心を抱き始めたとき、内側では何が起こる？',
    options: [
      { text: 'My feelings snowball — each thought amplifies the next, building to a crescendo', jaText: '感情が雪だるま式に膨らむ — 一つ一つの思考が次を増幅し、頂点へと高まる', value: 1 },
      { text: 'The initial spark fades unless something external keeps reigniting it', jaText: '最初の火花は外からの再点火がなければ消えてしまう', value: -1 }
    ]
  },
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: After a relationship ends, your emotional residue typically...',
    jaText: '波動スキャン α：関係が終わった後、感情の残滓はたいてい…',
    options: [
      { text: 'Intensifies with distance — I idealize and feel more as time passes', jaText: '距離とともに強まる — 時間が経つほど理想化され、より強く感じる', value: 1 },
      { text: 'Gradually dissipates — like a signal losing power over distance', jaText: '徐々に拡散する — 距離とともに力を失う信号のように', value: -1 }
    ]
  },
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: When separated from someone you love for a long period...',
    jaText: '波動スキャン α：愛する人と長期間離れると…',
    options: [
      { text: 'Absence amplifies everything — longing feeds on itself', jaText: '不在がすべてを増幅する — 恋しさは自らを糧にする', value: 1 },
      { text: 'The emotional charge slowly drains — I need presence to maintain it', jaText: '感情の電荷は徐々に尽きる — 維持には相手の存在が必要', value: -1 }
    ]
  },
  {
    axis: 'resonance',
    text: 'WAVE SCAN α: Your internal emotional system is best described as...',
    jaText: '波動スキャン α：あなたの内的感情システムを最もよく表すのは…',
    options: [
      { text: 'A feedback loop — emotions compound and escalate on their own', jaText: 'フィードバックループ — 感情は自ら複利で増大する', value: 1 },
      { text: 'A cooling system — emotions naturally regulate back to baseline', jaText: '冷却システム — 感情は自然に基準点へ戻る', value: -1 }
    ]
  },
  // Coupling (S vs A) — questions 4-7
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: When someone shows clear romantic interest in you...',
    jaText: '結合スキャン β：誰かが明らかに恋愛的関心を示してきたら…',
    options: [
      { text: 'I feel drawn toward them — their energy is magnetic and warm', jaText: '惹き寄せられる — そのエネルギーは磁力的で温かい', value: 1 },
      { text: 'I instinctively pull back — too much interest triggers my shields', jaText: '本能的に退く — 強すぎる関心はシールドを起動させる', value: -1 }
    ]
  },
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: The relationships that excite you most involve...',
    jaText: '結合スキャン β：あなたが最も心躍る関係とは…',
    options: [
      { text: 'Harmony and resonance — being perfectly in sync, finishing each other\'s thoughts', jaText: '調和と共鳴 — 完璧に同期し、互いの思考を補い合う', value: 1 },
      { text: 'Push and pull — the electricity of opposing forces creating sparks', jaText: '押し引き — 対立する力が火花を生む電気', value: -1 }
    ]
  },
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: When your partner is experiencing intense emotions...',
    jaText: '結合スキャン β：パートナーが激しい感情を抱いているとき…',
    options: [
      { text: 'I absorb and mirror their state — we oscillate together', jaText: 'その状態を吸収し鏡映する — 共に振動する', value: 1 },
      { text: 'I naturally counterbalance — providing the opposite of what they project', jaText: '自然に対抗バランスを取る — 相手が投げるものと逆を返す', value: -1 }
    ]
  },
  {
    axis: 'coupling',
    text: 'COUPLING SCAN β: Your ideal partner dynamic is one where...',
    jaText: '結合スキャン β：理想のパートナー関係とは…',
    options: [
      { text: 'We amplify each other\'s best frequencies — resonance creates beauty', jaText: '互いの最良の周波数を増幅し合う — 共鳴が美を生む', value: 1 },
      { text: 'We challenge each other\'s assumptions — friction creates growth', jaText: '互いの前提を問い合う — 摩擦が成長を生む', value: -1 }
    ]
  },
  // Phase (F vs W) — questions 8-11
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: Your typical pattern of falling in love...',
    jaText: '位相スキャン ω：あなたの恋の落ち方の典型は…',
    options: [
      { text: 'Fast ignition — I know almost immediately if the chemistry is real', jaText: '急速な着火 — 化学反応が本物かほぼ即座に分かる', value: 1 },
      { text: 'Slow combustion — real attraction builds over weeks or months', jaText: 'ゆっくりした燃焼 — 本物の惹かれは数週間・数か月かけて育つ', value: -1 }
    ]
  },
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: When conflict arises in a relationship, you tend to...',
    jaText: '位相スキャン ω：関係に葛藤が生じたとき、あなたは…',
    options: [
      { text: 'React immediately — emotions spike and I address it in the moment', jaText: '即座に反応 — 感情が急上昇し、その場で対処する', value: 1 },
      { text: 'Process slowly — I need time and space to understand what I feel', jaText: 'ゆっくり処理 — 自分の感情を理解するには時間と空間が必要', value: -1 }
    ]
  },
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: Your emotional cycles are best described as...',
    jaText: '位相スキャン ω：あなたの感情サイクルを最もよく表すのは…',
    options: [
      { text: 'High frequency — rapid oscillations, moods shift quickly and often', jaText: '高周波 — 急速な振動、気分が素早く頻繁に変わる', value: 1 },
      { text: 'Low frequency — long wavelengths, emotional states persist for weeks', jaText: '低周波 — 長い波長、感情の状態が数週間続く', value: -1 }
    ]
  },
  {
    axis: 'phase',
    text: 'PHASE SCAN ω: On a first date, your instinct tells you...',
    jaText: '位相スキャン ω：初デートで、直感が教えてくれるのは…',
    options: [
      { text: 'Everything — within minutes I have a strong sense of compatibility', jaText: 'すべて — 数分で強い相性感を得る', value: 1 },
      { text: 'Very little — the real signal emerges only after many interactions', jaText: 'ほとんど何も — 本物の信号は多くのやり取りの後にしか現れない', value: -1 }
    ]
  }
];

const ANALYSIS_LOGS = {
  en: [
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
  ],
  ja: [
    '> ストロガッツ恋愛力学エンジン v3.7.2 を初期化中…',
    '> 結合振動子フレームワークを読み込み中…',
    '> 神経反応ベクトルを解析中…',
    '> 自己結合係数 α を算出中…',
    '> パートナー結合係数 β を算出中…',
    '> 位相速度 ω を分析中…',
    '> 特性方程式 det(M - λI) = 0 を求解中…',
    '> 固有値分解を実行中…',
    '> 振動子型多様体へのマッピング中…',
    '> ストロガッツ相性マトリクスと照合中…',
    '> 位相図を生成中…',
    '> 振動型判定完了。結果を描画中…'
  ]
};

// ===== COMPATIBILITY DYNAMICS =====
const DYNAMICS_LABELS = {
  stable_node: {
    name: 'CONVERGENT BOND',
    jaName: '収束結合',
    color: '#C0FC04',
    emoji: '🟢',
    reading: 'Your dynamics converge to the love equilibrium — a relationship that naturally settles into deep, lasting harmony. The eigenvalues are real and negative (λ < 0), meaning every emotional perturbation decays back toward mutual love. This is not love shrinking — it is love finding its truest, most stable depth. Like two instruments tuning to the same perfect note.',
    jaReading: 'あなた方の力学は恋愛平衡点へと収束する — 深く持続する調和に自然と落ち着く関係。固有値は実で負（λ < 0）であり、感情の揺らぎはすべて相互の愛へと減衰していく。これは愛が縮むのではなく、最も真実で安定した深みへと至る愛。同じ完璧な音程に調律された二つの楽器のように。'
  },
  stable_spiral: {
    name: 'HARMONIC DANCE',
    jaName: '調和螺旋',
    color: '#3601FB',
    emoji: '🟣',
    reading: 'Your dynamics form an inward spiral toward the love equilibrium — you oscillate between closeness and distance, but each cycle brings you closer to deep mutual love. The complex eigenvalues have negative real parts (Re(λ) < 0), meaning your push-pull dance gradually converges. This is not love diminishing — it is turbulence settling into the deepest harmony.',
    jaReading: 'あなた方の力学は恋愛平衡点へ内向きの螺旋を描く — 近さと距離の間を揺れながら、各サイクルごとに深い相互の愛へ近づいていく。複素固有値の実部は負（Re(λ) < 0）であり、押し引きの舞は徐々に収束する。これは愛が弱まるのではなく、乱流が最も深い調和へと鎮まる姿。'
  },
  center: {
    name: 'ETERNAL ORBIT',
    jaName: '永遠軌道',
    color: '#01FFFF',
    emoji: '🔵',
    reading: 'Your dynamics form a perfect closed orbit around the love equilibrium — an eternal dance that never settles into stillness but never loses its depth. Pure imaginary eigenvalues (λ = ±bi) create this rare, mesmerizing pattern. The distance from the love point stays constant: neither converging nor diverging. You are the couple in permanent, beautiful motion.',
    jaReading: 'あなた方の力学は恋愛平衡点を巡る完璧な閉軌道を描く — 静止することはないが、深さも失わない永遠の舞。純虚数固有値（λ = ±bi）がこの稀有で魅惑的なパターンを生む。愛の点からの距離は一定：収束も発散もしない。あなた方は永久に美しく動き続けるカップル。'
  },
  unstable_spiral: {
    name: 'SUPERNOVA',
    jaName: '超新星',
    color: '#FF5500',
    emoji: '🟠',
    reading: 'Your dynamics spiral outward from the love equilibrium — each emotional cycle amplifies the last, pushing further from balance. Complex eigenvalues with positive real parts (Re(λ) > 0) create this pattern of escalating deviation. This is not more love, but love that cannot find its resting point — passion too intense to settle. Exhilarating and volatile.',
    jaReading: 'あなた方の力学は恋愛平衡点から外向きに螺旋を描く — 各感情サイクルが前を増幅し、均衡からさらに遠ざける。複素固有値の実部は正（Re(λ) > 0）で、逸脱が加速するパターンを生む。これは愛が増えるのではなく、休息点を見つけられない愛 — 静まるには激しすぎる情熱。刺激的で不安定。'
  },
  unstable_node: {
    name: 'CHAIN REACTION',
    jaName: '連鎖反応',
    color: '#FF0D1A',
    emoji: '🔴',
    reading: 'Your dynamics explode away from equilibrium — real positive eigenvalues (λ > 0) drive emotional deviation in one direction without oscillation. This is not simply more love — it is feelings accelerating past all balance. Nuclear fusion-level intensity: once initiated, the reaction is unstoppable. The most overwhelming and transformative pairing.',
    jaReading: 'あなた方の力学は均衡から爆発的に遠ざかる — 実の正固有値（λ > 0）が振動なしに感情の逸脱を一方向へ駆動する。単に愛が増えるのではなく、あらゆる均衡を超えて加速する感情。核融合級の激しさ：一度点火すれば反応は止められない。最も圧倒的で変革的なペアリング。'
  },
  saddle: {
    name: 'QUANTUM TUNNEL',
    jaName: '量子トンネル',
    color: '#C0FC04',
    emoji: '🟡',
    reading: 'Your dynamics balance on a knife-edge at the love equilibrium — a saddle point where one axis converges toward deep love while the other diverges toward separation. The eigenvalues have opposite signs (λ₁ > 0, λ₂ < 0), creating a fundamentally unstable tension. Whether you fall into deep love or apart depends entirely on the initial conditions of your meeting.',
    jaReading: 'あなた方の力学は恋愛平衡点の刃の上で拮抗する — 一軸は深い愛へ収束し、もう一軸は分離へと発散する鞍点。固有値は符号が逆（λ₁ > 0, λ₂ < 0）であり、本質的に不安定な緊張を生む。深い愛に落ちるか別れるかは、出会いの初期条件に完全に依存する。'
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
  ctx.fillText(t('canvas.equilibrium'), cx + 10, cy - 10);
  ctx.font = '400 8px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(192, 252, 4, 0.5)';
  ctx.fillText(t('canvas.equilibriumPoint'), cx + 10, cy + 2);

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
  ctx.fillText(t('canvas.distanceNote'), 6, h - 20);
  ctx.fillText(t('canvas.centerNote'), 6, h - 10);
}

function drawSpiralAxes(ctx, w, h, cx, cy, color1, color2, mode) {
  ctx.font = '800 10px "Barlow Condensed", sans-serif';

  // Horizontal axis — deviation from equilibrium, not absolute love
  ctx.fillStyle = (color1 || '#C0FC04') + '45';
  ctx.textAlign = 'right';
  ctx.fillText(t('canvas.aDeviation'), w - 6, cy - 9);
  ctx.textAlign = 'left';
  ctx.fillText('←', 6, cy - 9);

  // Vertical axis
  ctx.fillStyle = (color2 || '#EA027E') + '45';
  ctx.textAlign = 'left';
  ctx.fillText(t('canvas.bDeviation'), cx + 10, 15);

  // Narrative: what the dynamics MEAN for the relationship
  ctx.font = '700 9px "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  if (mode === 'stable') {
    ctx.fillStyle = '#C0FC04';
    ctx.fillText(t('canvas.stableNarr'), w / 2, h - 6);
  } else if (mode === 'unstable') {
    ctx.fillStyle = '#FF5500';
    ctx.fillText(t('canvas.unstableNarr'), w / 2, h - 6);
  } else if (mode === 'center') {
    ctx.fillStyle = '#01FFFF';
    ctx.fillText(t('canvas.centerNarr'), w / 2, h - 6);
  } else if (mode === 'saddle') {
    ctx.fillStyle = '#C0FC04';
    ctx.fillText(t('canvas.saddleNarr'), w / 2, h - 6);
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
  _quizOptionOrder = null;
  showSection('quiz');
  renderQuestion();
}

// Stable order per question so re-rendering on language switch keeps the same layout.
let _quizOptionOrder = null;
function _questionOrderKey() { return 'q' + currentQuestion; }

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const qText = L(q.text, q.jaText || q.text);
  document.getElementById('quiz-question').textContent = qText;
  document.getElementById('quiz-counter').textContent =
    String(currentQuestion + 1).padStart(2, '0') + ' / ' + String(QUESTIONS.length).padStart(2, '0');
  document.getElementById('progress-fill').style.width =
    ((currentQuestion) / QUESTIONS.length * 100) + '%';

  // Keep option order stable for this question (so lang swap doesn't reshuffle)
  if (!_quizOptionOrder || _quizOptionOrder.key !== _questionOrderKey()) {
    const order = q.options.map((_, i) => i).sort(() => Math.random() - 0.5);
    _quizOptionOrder = { key: _questionOrderKey(), order };
  }

  const optionsEl = document.getElementById('quiz-options');
  const ordered = _quizOptionOrder.order.map(i => q.options[i]);
  optionsEl.innerHTML = ordered.map(opt =>
    `<button class="quiz-option" onclick="answerQuestion('${q.axis}', ${opt.value})">${L(opt.text, opt.jaText || opt.text)}</button>`
  ).join('');

  // Show/hide back button
  const backBtn = document.getElementById('quiz-back-btn');
  if (backBtn) {
    backBtn.style.display = currentQuestion > 0 ? '' : 'none';
    backBtn.textContent = t('quiz.back');
  }
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

  const logs = ANALYSIS_LOGS[currentLang] || ANALYSIS_LOGS.en;
  let step = 0;
  const totalSteps = logs.length;

  function tick() {
    if (step < totalSteps) {
      const pct = Math.round(((step + 1) / totalSteps) * 100);
      percentEl.textContent = pct + '%';
      ring.style.strokeDashoffset = 565.5 * (1 - (step + 1) / totalSteps);
      logEl.innerHTML += `<div class="log-line">${logs[step]}</div>`;
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

  renderResultText(userType);

  drawRadarChart(document.getElementById('result-radar'), userType.traits, userType.color);
  drawResultSpiral(document.getElementById('result-spiral'), userType.params, userType.color);
  showSection('results');
}

// Split out so it can be re-called on language switch without re-running analysis.
function renderResultText(type) {
  document.getElementById('result-icon').textContent = type.icon;
  const nameEl = document.getElementById('result-name');
  nameEl.textContent = type.name;
  nameEl.style.color = type.color;

  document.getElementById('result-code').textContent =
    `${type.code} // ${type.jaName} // α=${type.params.a > 0 ? '+' : ''}${type.params.a} β=${type.params.b > 0 ? '+' : ''}${type.params.b}`;
  document.getElementById('result-tagline').textContent = L(type.tagline, type.jaTagline || type.tagline);

  // Params — label/value swap with language
  const paramLabel = (key) => t('param.' + key);
  const resonanceVal = type.axes.resonance === 'R' ? t('param.resonant') : t('param.damped');
  const couplingVal = type.axes.coupling === 'S' ? t('param.sync') : t('param.anti');
  const phaseVal = type.axes.phase === 'F' ? t('param.flash') : t('param.wave');
  document.getElementById('result-params').innerHTML = `
    <div class="param-item"><span class="param-label">${paramLabel('resonance')}</span><span class="param-value">${resonanceVal}</span></div>
    <div class="param-item"><span class="param-label">${paramLabel('coupling')}</span><span class="param-value">${couplingVal}</span></div>
    <div class="param-item"><span class="param-label">${paramLabel('phase')}</span><span class="param-value">${phaseVal}</span></div>
  `;

  const desc = L(type.description, type.jaDescription || type.description);
  const strengths = L(type.strengths, type.jaStrengths || type.strengths);
  const risks = L(type.risks, type.jaRisks || type.risks);
  document.getElementById('result-description').innerHTML =
    `<p>${desc}</p>
     <p style="margin-top:0.8rem;color:#C0FC04;font-weight:800;">${t('results.strengthsLabel')}: ${strengths}</p>
     <p style="margin-top:0.4rem;color:#FF5500;font-weight:800;">${t('results.risksLabel')}: ${risks}</p>`;
}

// ===== RADAR CHART =====
function drawRadarChart(canvas, traits, color) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.36;
  const labels = [t('radar.intensity'), t('radar.stability'), t('radar.empathy'), t('radar.independence'), t('radar.speed'), t('radar.depth')];
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
  const yt = document.getElementById('compat-your-type');
  yt.textContent = `${userType.icon} ${userType.name}`;
  yt.style.borderColor = userType.color;
  yt.style.color = userType.color;

  // Build partner grid
  const grid = document.getElementById('partner-type-grid');
  grid.innerHTML = Object.values(TYPES).map(tp =>
    `<button class="type-grid-btn" data-type="${tp.name}" onclick="selectPartner('${tp.name}')">${tp.icon}<br>${tp.name}<br><span class="type-grid-ja">${tp.jaName}</span></button>`
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
  score = Math.max(10, Math.min(99, Math.round(score + (Math.random() * 8 - 4))));

  // Store for re-render on lang switch
  window._compatAnalysis = {
    a1, b1, a2, b2, tr, det, disc, eigenStr, classification, score
  };

  renderCompatText();

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

  const dynHere = DYNAMICS_LABELS[classification];
  // Store in module-level state for click interactions
  window._compatState = {
    trajectories: sharedTrajectories,
    ics: sharedICs,
    dt: sharedDt,
    sp1, sp2,
    dynColor: dynHere.color,
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

// Render all language-sensitive text on the compatibility results panel.
// Safe to call multiple times (e.g. on language switch) once _compatAnalysis is populated.
function renderCompatText() {
  const A = window._compatAnalysis;
  if (!A) return;
  const dyn = DYNAMICS_LABELS[A.classification];
  const dynName = L(dyn.name, dyn.jaName || dyn.name);
  const dynReading = L(dyn.reading, dyn.jaReading || dyn.reading);

  // Classification badge — show both localized primary name and other-language secondary
  const classEl = document.getElementById('compat-class');
  if (classEl) {
    const primary = currentLang === 'ja' ? dyn.jaName : dyn.name;
    const secondary = currentLang === 'ja' ? dyn.name : dyn.jaName;
    classEl.innerHTML = `<span style="color:${dyn.color}">${dyn.emoji} ${primary} // ${secondary}</span>`;
  }

  // Score
  const scoreEl = document.getElementById('compat-score');
  if (scoreEl) scoreEl.textContent = A.score;
  const ring = document.getElementById('score-ring-fill');
  if (ring) {
    ring.style.stroke = dyn.color;
    ring.style.filter = `drop-shadow(0 0 6px ${dyn.color})`;
    setTimeout(() => {
      ring.style.strokeDashoffset = 440 * (1 - A.score / 100);
    }, 100);
  }

  // Equation display
  const classificationLabel = currentLang === 'ja'
    ? '分類'
    : 'CLASSIFICATION';
  const eqEl = document.getElementById('compat-equation');
  if (eqEl) {
    eqEl.innerHTML =
      `<div>SYSTEM MATRIX M = [[${A.a1}, ${A.b1}], [${A.b2}, ${A.a2}]]</div>
       <div>tr(M) = ${A.tr.toFixed(2)} &nbsp; det(M) = ${A.det.toFixed(2)} &nbsp; Δ = ${A.disc.toFixed(3)}</div>
       <div>${A.eigenStr}</div>
       <div>${classificationLabel}: <span style="color:${dyn.color}">${dynName}</span></div>`;
  }

  // Eigenvalue display
  const eigenEl = document.getElementById('compat-eigen');
  if (eigenEl) {
    const label = currentLang === 'ja' ? '固有値解析' : 'Eigenvalue analysis';
    eigenEl.innerHTML =
      `<span style="color:var(--text-dim)">${label}: ${A.eigenStr} → ${A.classification.replace('_', ' ').toUpperCase()}</span>`;
  }

  // Reading
  const readingEl = document.getElementById('compat-reading');
  if (readingEl) {
    readingEl.innerHTML =
      `<p style="color:${dyn.color};font-weight:800;font-size:0.75rem;letter-spacing:0.15em;margin-bottom:0.5rem;">${dynName}</p>
       <p>${dynReading}</p>`;
  }
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
  ctx.fillText(t('canvas.conv.equilibrium'), padL + 4, zeroY - 4);

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
  ctx.fillText(`${t('canvas.conv.trajectory')} ${selectedIdx + 1}`, padL + 4, padT + 13);
  ctx.fillStyle = (dynColor || '#C0FC04') + '50';
  ctx.fillText(t('canvas.conv.allOthers'), padL + 140, padT + 13);

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
  ctx.fillText(t('canvas.ts.time'), padL + plotW / 2, h - 5);
  ctx.save();
  ctx.translate(14, padT + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(t('canvas.conv.yAxis'), 0, 0);
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
  ctx.fillText(t('canvas.conv.eqShort'), padL + 2, zeroY - 4);

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
  ctx.fillText(t('canvas.ts.you'), padL + 6, padT + 14);
  ctx.fillStyle = color2 || '#EA027E';
  ctx.fillText(t('canvas.ts.them'), padL + 120, padT + 14);
  // Show initial condition (matches highlighted trajectory in phase portrait)
  ctx.font = '400 8px "Share Tech Mono", monospace';
  ctx.fillStyle = '#44445a';
  ctx.textAlign = 'right';
  ctx.fillText(`IC: (${traj[0].x.toFixed(1)}, ${traj[0].y.toFixed(1)})`, w - padR, padT + 14);

  // Axis labels
  ctx.font = '800 10px "Barlow Condensed", sans-serif';
  ctx.fillStyle = '#44445a';
  ctx.textAlign = 'center';
  ctx.fillText(t('canvas.ts.time'), padL + plotW / 2, h - 6);
  ctx.save();
  ctx.translate(14, padT + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(t('canvas.ts.feeling'), 0, 0);
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
  const classification = isCenter
    ? L('CENTER ORBIT', '永遠軌道 / CENTER')
    : isStable
      ? L('STABLE SPIRAL', '安定螺旋 / STABLE')
      : L('UNSTABLE SPIRAL', '不安定螺旋 / UNSTABLE');

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
  grid.innerHTML = Object.values(TYPES).map(tp => `
    <div class="type-card" data-type="${tp.name}" style="--card-color:${tp.color}"
         onmouseenter="drawGallerySpiral('${tp.name}')"
    >
      <div class="type-card-icon" style="color:${tp.color}">${tp.icon}</div>
      <div class="type-card-name" style="color:${tp.color}">${tp.name}</div>
      <div class="type-card-code">${tp.code} // ${tp.jaName}</div>
      <div class="type-card-desc">${L(tp.tagline, tp.jaTagline || tp.tagline)}</div>
      <div style="margin-top:0.5rem;font-size:0.65rem;color:var(--dim);">
        α=${tp.params.a > 0 ? '+' : ''}${tp.params.a} β=${tp.params.b > 0 ? '+' : ''}${tp.params.b}
      </div>
    </div>
  `).join('');

  // Draw initial spiral for the first type (only if no type is already selected)
  if (!currentGalleryType) drawGallerySpiral('NOVA');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Apply language BEFORE first render so static text + gallery cards come up in the right language.
  applyLang();
  // Wire up language toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  initBackground();
  initHeroSpiral();
  renderTypesGallery();
});
