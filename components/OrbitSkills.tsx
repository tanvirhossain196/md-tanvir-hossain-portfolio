import {
  SiCplusplus,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiDaisyui,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiCss,
  SiGithub,
  SiHtml5,
  SiPhp,
  SiMysql,
  SiGit,
  SiFirebase,
  SiArduino,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Radio } from "lucide-react";
import type { IconType } from "react-icons";

type Skill = {
  label: string;
  Icon: IconType | typeof Radio | null;
  iconColor: string;
  barColor: string;
};

// Full skill list. Split below into:
//   ringOuter -> 12 items (outer, bigger circle)
//   ringInner -> 8 items  (inner, smaller circle)
const allSkills: Skill[] = [
  {
    label: "C++",
    Icon: SiCplusplus,
    iconColor: "#659AD2",
    barColor: "#3B82F6",
  },
  { label: "C#", Icon: null, iconColor: "#A855F7", barColor: "#A855F7" },
  {
    label: "Tailwind",
    Icon: SiTailwindcss,
    iconColor: "#38BDF8",
    barColor: "#38BDF8",
  },
  {
    label: "Next.js",
    Icon: SiNextdotjs,
    iconColor: "#FFFFFF",
    barColor: "#3B82F6",
  },
  {
    label: "Python",
    Icon: SiPython,
    iconColor: "#3776AB",
    barColor: "#3B82F6",
  },
  {
    label: "DaisyUI",
    Icon: SiDaisyui,
    iconColor: "#22D3AA",
    barColor: "#22C55E",
  },
  {
    label: "Bootstrap",
    Icon: SiBootstrap,
    iconColor: "#8A4FFF",
    barColor: "#A855F7",
  },
  {
    label: "JS",
    Icon: SiJavascript,
    iconColor: "#F7DF1E",
    barColor: "#EAB308",
  },
  {
    label: "Node.js",
    Icon: SiNodedotjs,
    iconColor: "#6CC24A",
    barColor: "#22C55E",
  },
  { label: "RF", Icon: Radio, iconColor: "#D4D4D8", barColor: "#D4D4D8" },
  { label: "Figma", Icon: SiFigma, iconColor: "#F24E1E", barColor: "#EF4444" },
  { label: "CSS", Icon: SiCss, iconColor: "#3B82F6", barColor: "#3B82F6" },
  {
    label: "GitHub",
    Icon: SiGithub,
    iconColor: "#E5E7EB",
    barColor: "#D4D4D8",
  },
  { label: "HTML", Icon: SiHtml5, iconColor: "#E85D2F", barColor: "#EF4444" },
  { label: "Java", Icon: FaJava, iconColor: "#EA6B0C", barColor: "#EF4444" },
  { label: "PHP", Icon: SiPhp, iconColor: "#8892BF", barColor: "#A855F7" },
  { label: "MySQL", Icon: SiMysql, iconColor: "#4479A1", barColor: "#3B82F6" },
  { label: "Git", Icon: SiGit, iconColor: "#F05032", barColor: "#EF4444" },
  {
    label: "Firebase",
    Icon: SiFirebase,
    iconColor: "#FFA000",
    barColor: "#F59E0B",
  },
  {
    label: "Arduino",
    Icon: SiArduino,
    iconColor: "#00979D",
    barColor: "#F59E0B",
  },
];

// Outer ring: 12 skills
const ringOuter = [
  allSkills[0], // C++
  allSkills[1], // C#
  allSkills[2], // Tailwind
  allSkills[5], // DaisyUI
  allSkills[6], // Bootstrap
  allSkills[7], // JS
  allSkills[10], // Figma
  allSkills[11], // CSS
  allSkills[12], // GitHub
  allSkills[15], // PHP
  allSkills[16], // MySQL
  allSkills[17], // Git
];

// Inner ring: 8 skills
const ringInner = [
  allSkills[3], // Next.js
  allSkills[4], // Python
  allSkills[8], // Node.js
  allSkills[9], // RF
  allSkills[13], // HTML
  allSkills[14], // Java
  allSkills[18], // Firebase
  allSkills[19], // Arduino
];

// ---------------------------------------------------------------------
// RESPONSIVE STRATEGY (fully fluid, no breakpoint "steps")
// ---------------------------------------------------------------------
// Everything below used to be computed in *fixed pixels* against a
// hard-coded 580x580 stage, then patched with a stack of scale-*
// breakpoints. That caused visible jumps/overlaps at "in-between"
// widths (the orbit and the grid columns snapped at different points).
//
// Now the container itself is the source of truth:
//   - Its size lives in ONE CSS custom property, --orbit-size, set once
//     via a continuous formula (min()/clamp()) — no stepped breakpoints,
//     so there is nothing to "jump" between.
//   - Every ring, icon, bar, and the center emblem below is sized as
//     calc(var(--orbit-size) * ratio) or positioned as a PERCENTAGE of
//     that same container — so the whole orbit rescales as one rigid,
//     similar shape at literally every pixel width, from a small phone
//     up to a 4K monitor, and the two rings' icons can never drift close
//     enough to touch/overlap each other while spinning.
//
// RADIUS_PCT = radius (as a fraction of the container's size) each ring
// sits at. Restored to the original 580px design values (235 outer /
// 150 inner) — the tighter, original gap between the two rings — so it
// matches the very first look, and since both are still expressed as a
// % of --orbit-size, that same gap ratio holds at every screen size.
const OUTER_RADIUS_PCT = 235 / 580; // ≈ 0.4052
const INNER_RADIUS_PCT = 150 / 580; // ≈ 0.2586

// Same duration for both rings so their rotation speed matches exactly.
const DURATION = 20;

// ---------------------------------------------------------------------
// COLLISION-SAFE SIZING
// ---------------------------------------------------------------------
// Chip diameter — slightly reduced from 84/580 back down a touch (78/580)
// so the small icon chips aren't too large relative to the rings. Still
// derived from --orbit-size, so it scales fluidly at every screen size.
const CHIP_RATIO = 78 / 580; // ≈ 0.1345 — icon chip diameter
const BAR_RATIO = 36 / 580; // ≈ 0.0621 — little connector line above chip
const CENTER_CHIP_RATIO = 96 / 580; // ≈ 0.1655 — center "</>" emblem

const chipSize = `calc(var(--orbit-size) * ${CHIP_RATIO})`;
const barSize = `calc(var(--orbit-size) * ${BAR_RATIO})`;
const centerChipSize = `calc(var(--orbit-size) * ${CENTER_CHIP_RATIO})`;

// Circle bg: a clearer, more standard blend between the panel color and the
// section/page bg color (theme("colors.paper") token).
const CHIP_BG =
  "color-mix(in srgb, theme(colors.panelsolid) 55%, theme(colors.paper) 45%)";

function Ring({
  skills,
  radiusPct,
  reverse = false,
}: {
  skills: Skill[];
  radiusPct: number;
  reverse?: boolean;
}) {
  const total = skills.length;

  // Outer ring spins one way, inner ring spins the opposite way.
  // The icon wrapper always spins with the *opposite* animation of its
  // parent ring, so the net rotation on each icon is always zero
  // (icons stay upright no matter which direction their ring turns).
  const ringAnim = reverse ? "orbit-ccw" : "orbit-cw";
  const iconAnim = reverse ? "orbit-cw" : "orbit-ccw";

  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `${ringAnim} ${DURATION}s linear infinite`,
      }}
    >
      {skills.map((skill, i) => {
        const angle = (360 / total) * i - 90;
        const rad = (angle * Math.PI) / 180;

        // Position expressed as a PERCENTAGE of the (square) container,
        // not a fixed pixel offset — this is what makes it fluid.
        const xPct = radiusPct * 100 * Math.cos(rad);
        const yPct = radiusPct * 100 * Math.sin(rad);

        const Icon = skill.Icon;

        return (
          <div
            key={skill.label}
            className="absolute"
            style={{
              left: `calc(50% + ${xPct}%)`,
              top: `calc(50% + ${yPct}%)`,
            }}
          >
            {/* Static centering only — kept on its own div so the rotation
                animation below never overwrites this transform. */}
            <div
              className="absolute"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="flex flex-col items-center gap-1.5"
                style={{
                  animation: `${iconAnim} ${DURATION}s linear infinite`,
                }}
              >
                <span
                  className="block rounded-full"
                  style={{
                    height: 2,
                    width: barSize,
                    backgroundColor: skill.barColor,
                  }}
                />

                <div
                  className="rounded-full border border-line/90 flex flex-col items-center justify-center gap-0.5 shadow-[0_10px_28px_-8px_rgba(0,0,0,.6),inset_0_1px_0_rgba(255,255,255,.04)] transition-transform duration-300 hover:scale-105"
                  style={{
                    width: chipSize,
                    height: chipSize,
                    backgroundColor: CHIP_BG,
                  }}
                >
                  {Icon ? (
                    <Icon
                      className="shrink-0"
                      style={{ width: "32%", height: "32%" }}
                      color={skill.iconColor}
                    />
                  ) : (
                    <span
                      style={{
                        color: skill.iconColor,
                        fontSize: `max(11px, calc(var(--orbit-size) * ${(
                          CHIP_RATIO * 0.32
                        ).toFixed(5)}))`,
                      }}
                    >
                      #
                    </span>
                  )}

                  <span
                    className="font-mono uppercase tracking-wide text-paperdim whitespace-nowrap leading-none"
                    style={{
                      fontSize: "max(7px, calc(var(--orbit-size) * 0.0155))",
                    }}
                  >
                    {skill.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function OrbitSkills() {
  return (
    // Square, fully fluid container — one continuous formula, no
    // breakpoint steps. clamp(340px, 82vw, 460px) on small screens
    // (340px floor keeps chips legible even on narrow phones) growing
    // up to clamp(320px, 30vw, 580px) once the 3-column hero grid kicks
    // in at lg. Both formulas meet at the same `lg` breakpoint the
    // HomeSection grid uses, so nothing ever jumps or overlaps in
    // between.
    <div
      className="relative mx-auto shrink-0
        [--orbit-size:clamp(340px,82vw,460px)]
        lg:[--orbit-size:clamp(360px,34vw,580px)]"
      style={{
        width: "var(--orbit-size)",
        height: "var(--orbit-size)",
      }}
    >
      {/* Self-contained keyframes: guarantees both directions always work,
          independent of any global/Tailwind "spin" keyframe that may get
          purged if the animate-spin class isn't literally used anywhere. */}
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Outer Orbit — sized as a % of the square container */}
      <div
        className="absolute rounded-full border border-dashed border-line/80"
        style={{
          width: `${OUTER_RADIUS_PCT * 200}%`,
          height: `${OUTER_RADIUS_PCT * 200}%`,
          left: `${50 - OUTER_RADIUS_PCT * 100}%`,
          top: `${50 - OUTER_RADIUS_PCT * 100}%`,
        }}
      />

      {/* Inner Orbit */}
      <div
        className="absolute rounded-full border border-dashed border-line/70"
        style={{
          width: `${INNER_RADIUS_PCT * 200}%`,
          height: `${INNER_RADIUS_PCT * 200}%`,
          left: `${50 - INNER_RADIUS_PCT * 100}%`,
          top: `${50 - INNER_RADIUS_PCT * 100}%`,
        }}
      />

      {/* Outer ring rotates clockwise — 12 skills */}
      <Ring skills={ringOuter} radiusPct={OUTER_RADIUS_PCT} />

      {/* Inner ring rotates counter-clockwise (opposite direction, same speed) — 8 skills */}
      <Ring skills={ringInner} radiusPct={INNER_RADIUS_PCT} reverse />

      {/* Center icon stays fixed — it's outside both animated rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative rounded-full border border-[#64FFDA]/40 flex items-center justify-center text-[#64FFDA] shadow-[0_0_50px_rgba(100,255,218,0.25)]"
          style={{
            width: centerChipSize,
            height: centerChipSize,
            fontSize: `max(14px, calc(var(--orbit-size) * ${(
              CENTER_CHIP_RATIO * 0.28
            ).toFixed(5)}))`,
            backgroundColor: CHIP_BG,
          }}
        >
          {"</>"}
        </div>
      </div>
    </div>
  );
}
