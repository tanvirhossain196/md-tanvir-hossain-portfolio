type Weight = "bold" | "normal" | "light";

export default function SectionWatermark({
  text,
  position,
  weight,
  fontFamily,
  googleFontImport,
}: {
  text: string;
  /** Tailwind position classes, e.g. "-top-6 -right-16". Defaults to the
   *  original top-6 right-[2vw] placement used everywhere else. */
  position?: string;
  /** Font weight override. Leave unset to keep the original look
   *  (Skills/Certificates etc). Pass "light" or "normal" to de-bold it. */
  weight?: Weight;
  /** CSS font-family value, e.g. "'Fraunces', serif". When set, this
   *  replaces the default font-display class entirely. */
  fontFamily?: string;
  /** Google Fonts CSS2 query param to self-import when fontFamily is a
   *  web font, e.g. "Fraunces:ital,wght@1,300;1,600". Only needed once
   *  per font per page — safe to repeat, browsers dedupe identical
   *  @import URLs. */
  googleFontImport?: string;
}) {
  const weightClass =
    weight === "light"
      ? "font-light"
      : weight === "normal"
        ? "font-normal"
        : "";

  return (
    <>
      {googleFontImport && (
        <style>{`@import url('https://fonts.googleapis.com/css2?family=${googleFontImport}&display=swap');`}</style>
      )}
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute ${
          position ?? "top-6 right-[2vw]"
        } ${fontFamily ? "" : "font-display"} italic ${weightClass} text-[clamp(60px,9vw,140px)] text-paper/[0.035] leading-none whitespace-nowrap`}
        style={fontFamily ? { fontFamily } : undefined}
      >
        {text}
      </span>
    </>
  );
}
