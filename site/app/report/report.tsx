export default function Report() {
  return (
    <div className="page" style={{ maxWidth: "72rem" }}>
      <h1 className="page-title">Report Any Incident</h1>
      <div className="w-full max-w-3xl aspect-[3/4] sm:aspect-[4/5] bg-foreground/5 rounded-xl overflow-hidden border border-foreground/10 flex justify-center">
        <iframe
          src="https://forms.gle/gGrJbSzwdtF2AdDz7"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Report Form"
        >
          Loading form...
        </iframe>
      </div>
    </div>
  );
}
