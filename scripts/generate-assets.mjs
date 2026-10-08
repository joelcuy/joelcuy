import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Self-contained SVGs: no fonts to fetch, scripts to execute, or services to host.
// Both themes keep useful static artwork when motion is disabled or unsupported.
const assets = fileURLToPath(new URL('../assets/', import.meta.url));
await mkdir(assets, { recursive: true });

const themes = {
  dark: {
    bg: '#0b1220', panel: '#101d2e', surface: '#15263a', ink: '#f0f5fb',
    muted: '#a5b6cb', line: '#29425a', accent: '#5eead4', warm: '#ffb86b',
    glow: '#123c49', grid: '#20364c', shadow: '#050a12',
  },
  light: {
    bg: '#f1f5f7', panel: '#ffffff', surface: '#e6eef2', ink: '#122a3a',
    muted: '#4b6576', line: '#c7d8e0', accent: '#087f75', warm: '#a75519',
    glow: '#d5ece8', grid: '#d8e4e9', shadow: '#beced6',
  },
};

const sans = "'Segoe UI', Arial, sans-serif";
const mono = "'SFMono-Regular', Consolas, 'Liberation Mono', monospace";

function hero(c) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="480" viewBox="0 0 1200 480" role="img" aria-labelledby="title desc">
  <title id="title">Joel Cheah — Full Stack Engineer, Cloud &amp; Platform</title>
  <desc id="desc">From interfaces to infrastructure. An animated route connects React interfaces, Node.js APIs, and AWS infrastructure. Malaysia and United Kingdom.</desc>
  <defs>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="${c.grid}" stroke-width="0.6"/>
    </pattern>
    <radialGradient id="halo">
      <stop stop-color="${c.glow}" stop-opacity="0.95"/>
      <stop offset="1" stop-color="${c.bg}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="route" x1="0" x2="1">
      <stop stop-color="${c.accent}"/>
      <stop offset="1" stop-color="${c.warm}"/>
    </linearGradient>
    <clipPath id="frame"><rect x="1" y="1" width="1198" height="478" rx="24"/></clipPath>
  </defs>
  <style>
    .sans { font-family: ${sans}; }
    .mono { font-family: ${mono}; }
    .signal { animation: travel 9s linear infinite; }
    .beacon { animation: breathe 4s ease-in-out infinite; }
    .cursor { animation: blink 1.8s steps(2, end) infinite; }
    @keyframes travel { to { stroke-dashoffset: -640; } }
    @keyframes breathe { 0%, 100% { opacity: .45; } 50% { opacity: 1; } }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .signal, .beacon, .cursor { animation: none; }
    }
  </style>
  <g clip-path="url(#frame)">
    <rect width="1200" height="480" fill="${c.bg}"/>
    <rect x="620" width="580" height="480" fill="url(#grid)"/>
    <ellipse cx="956" cy="180" rx="340" ry="290" fill="url(#halo)"/>
    <path d="M620 0V480" stroke="${c.line}" stroke-dasharray="3 9" opacity=".55"/>

    <!-- Identity -->
    <rect x="48" y="40" width="111" height="28" rx="14" fill="${c.surface}" stroke="${c.line}"/>
    <circle cx="65" cy="54" r="4" fill="${c.accent}"/>
    <text class="mono" x="77" y="59" fill="${c.ink}" font-size="12" letter-spacing="1.5">JOELCUY</text>
    <text class="mono" x="48" y="110" fill="${c.muted}" font-size="13" letter-spacing="2.1">FULL STACK / CLOUD &amp; PLATFORM</text>
    <text class="sans" x="44" y="192" fill="${c.ink}" font-size="75" font-weight="750" letter-spacing="-3.5">Joel Cheah<tspan fill="${c.accent}">.</tspan></text>
    <text class="sans" x="48" y="247" fill="${c.ink}" font-size="29" font-weight="600" letter-spacing="-.7">From interfaces</text>
    <text class="sans" x="48" y="286" fill="${c.ink}" font-size="29" font-weight="600" letter-spacing="-.7">to infrastructure.</text>
    <text class="sans" x="48" y="330" fill="${c.muted}" font-size="17">Building useful products. Making operations flow.</text>
    <path d="M48 362H565" stroke="${c.line}"/>
    <text class="mono" x="48" y="395" fill="${c.accent}" font-size="13">01 / PRODUCT</text>
    <text class="mono" x="225" y="395" fill="${c.accent}" font-size="13">02 / PLATFORM</text>
    <text class="mono" x="415" y="395" fill="${c.accent}" font-size="13">03 / CLOUD</text>
    <text class="mono" x="48" y="440" fill="${c.muted}" font-size="12" letter-spacing="1">MALAYSIA ↔ UNITED KINGDOM</text>

    <!-- A small deployment console -->
    <rect x="668" y="46" width="484" height="132" rx="12" fill="${c.shadow}" opacity=".12" transform="translate(0 6)"/>
    <rect x="668" y="46" width="484" height="132" rx="12" fill="${c.panel}" stroke="${c.line}"/>
    <path d="M668 80H1152" stroke="${c.line}"/>
    <circle cx="688" cy="63" r="4" fill="${c.warm}"/>
    <circle cx="704" cy="63" r="4" fill="${c.muted}" opacity=".6"/>
    <circle cx="720" cy="63" r="4" fill="${c.accent}"/>
    <text class="mono" x="1132" y="67" text-anchor="end" fill="${c.muted}" font-size="11">joel / build.log</text>
    <text class="mono" x="690" y="107" fill="${c.muted}" font-size="13"><tspan fill="${c.accent}">$</tspan> ship --from idea --to production</text>
    <text class="mono" x="690" y="132" fill="${c.accent}" font-size="12">✓ interfaces   ✓ APIs   ✓ infrastructure</text>
    <text class="mono" x="690" y="157" fill="${c.muted}" font-size="12">one engineer, across the stack</text>
    <rect class="cursor" x="928" y="146" width="7" height="13" rx="1" fill="${c.accent}"/>

    <!-- Freight-route inspired diagram; decorative, not a deployment blueprint. -->
    <text class="mono" x="670" y="217" fill="${c.muted}" font-size="11" letter-spacing="1.8">THE WHOLE JOURNEY</text>
    <path d="M746 277H909V362H1073V277" fill="none" stroke="${c.line}" stroke-width="2" stroke-linejoin="round"/>
    <path class="signal" d="M746 277H909V362H1073V277" fill="none" stroke="url(#route)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="26 614"/>

    <g transform="translate(670 242)">
      <rect width="152" height="76" rx="12" fill="${c.panel}" stroke="${c.line}"/>
      <rect x="14" y="16" width="23" height="19" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5"/>
      <path d="M14 22H37M22 22V35" fill="none" stroke="${c.accent}" stroke-width="1.5"/>
      <text class="sans" x="48" y="30" fill="${c.ink}" font-size="15" font-weight="650">Interfaces</text>
      <text class="mono" x="14" y="57" fill="${c.muted}" font-size="11">React / TypeScript</text>
    </g>
    <g transform="translate(833 327)">
      <rect width="152" height="76" rx="12" fill="${c.panel}" stroke="${c.line}"/>
      <path d="M22 15L15 23L22 31M30 15L37 23L30 31" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text class="sans" x="48" y="29" fill="${c.ink}" font-size="15" font-weight="650">APIs &amp; data</text>
      <text class="mono" x="14" y="57" fill="${c.muted}" font-size="11">Node.js / SQL</text>
    </g>
    <g transform="translate(997 242)">
      <rect width="152" height="76" rx="12" fill="${c.panel}" stroke="${c.line}"/>
      <path d="M17 32H33A5 5 0 0 0 34 22A8 8 0 0 0 19 22A5 5 0 0 0 17 32Z" fill="none" stroke="${c.warm}" stroke-width="1.5"/>
      <text class="sans" x="48" y="30" fill="${c.ink}" font-size="15" font-weight="650">Cloud</text>
      <text class="mono" x="14" y="57" fill="${c.muted}" font-size="11">AWS / Terraform</text>
    </g>
    <circle class="beacon" cx="825" cy="277" r="4" fill="${c.accent}"/>
    <circle class="beacon" cx="989" cy="362" r="4" fill="${c.warm}"/>
    <text class="mono" x="1150" y="440" text-anchor="end" fill="${c.muted}" font-size="11" letter-spacing="1">DESIGN → BUILD → SHIP → IMPROVE</text>
  </g>
  <rect x="1" y="1" width="1198" height="478" rx="24" fill="none" stroke="${c.line}"/>
</svg>
`;
}

function rally(c) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="150" viewBox="0 0 1200 150" role="img" aria-labelledby="title desc">
  <title id="title">Enjoy the rally</title>
  <desc id="desc">Build things. Keep learning. Enjoy the rally. A table-tennis ball moves between two paddles.</desc>
  <style>
    .sans { font-family: ${sans}; }
    .mono { font-family: ${mono}; }
    .ball { animation: rally 4s ease-in-out infinite; }
    @keyframes rally {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(101px, -22px); }
      50% { transform: translate(202px, 0); }
      75% { transform: translate(101px, -22px); }
    }
    @media (prefers-reduced-motion: reduce) { .ball { animation: none; } }
  </style>
  <rect x="1" y="1" width="1198" height="148" rx="20" fill="${c.bg}" stroke="${c.line}"/>
  <text class="mono" x="40" y="42" fill="${c.accent}" font-size="11" letter-spacing="2">BEYOND THE BUILD</text>
  <text class="sans" x="40" y="80" fill="${c.ink}" font-size="25" font-weight="600" letter-spacing="-.4">Build things. Keep learning. Enjoy the rally.</text>
  <text class="mono" x="40" y="111" fill="${c.muted}" font-size="12">TABLE TENNIS / NBA / GOOD FOOD / NEW PLACES</text>
  <g transform="translate(842 0)">
    <path d="M39 108H271M155 96V117" stroke="${c.line}" stroke-width="2"/>
    <rect x="145" y="79" width="20" height="29" fill="${c.surface}"/>
    <path d="M145 80H165M145 87H165M145 94H165M145 101H165M150 80V107M157 80V107M164 80V107" stroke="${c.line}" stroke-width=".7"/>
    <g transform="translate(33 78) rotate(-18)">
      <rect x="-3" y="13" width="6" height="20" rx="3" fill="${c.muted}"/>
      <ellipse rx="14" ry="19" fill="${c.accent}"/>
      <path d="M-8 -9Q0 -15 7 -8" stroke="${c.bg}" stroke-width="1.5" fill="none" opacity=".5"/>
    </g>
    <g transform="translate(277 78) rotate(18)">
      <rect x="-3" y="13" width="6" height="20" rx="3" fill="${c.muted}"/>
      <ellipse rx="14" ry="19" fill="${c.warm}"/>
      <path d="M-8 -9Q0 -15 7 -8" stroke="${c.bg}" stroke-width="1.5" fill="none" opacity=".5"/>
    </g>
    <path d="M54 68Q155 24 256 68" fill="none" stroke="${c.line}" stroke-dasharray="2 7"/>
    <circle class="ball" cx="54" cy="68" r="5" fill="${c.ink}"/>
  </g>
</svg>
`;
}

for (const [name, theme] of Object.entries(themes)) {
  await writeFile(`${assets}hero-${name}.svg`, hero(theme));
  await writeFile(`${assets}rally-${name}.svg`, rally(theme));
}
console.log('Generated light and dark profile artwork.');
