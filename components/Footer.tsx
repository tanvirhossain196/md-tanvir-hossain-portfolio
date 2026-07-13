export default function Footer() {
  return (
    <footer
      className="relative z-[2] text-center px-[5vw] py-9 font-mono text-xs text-paperdim/50 border-t border-line"
      style={{
        background:
          "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      Designed &amp; Built by{" "}
      <span className="text-paperdim">Md Tanvir Hossain</span> · 2026
      <br />
      Thanks for visiting my portfolio
    </footer>
  );
}
