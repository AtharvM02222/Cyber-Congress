export default function Report() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 w-full text-left">
        Report
      </h1>
      <div className="w-full max-w-3xl aspect-[3/4] sm:aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-inner border border-neutral-200 dark:border-neutral-800 flex justify-center">
        <iframe
          src=""
          width="100%"
          height="100%"
          className="border-none bg-transparent"
          title="Report Form"
        >
          Loading form...
        </iframe>
      </div>
    </div>
  );
}
