export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-12 mx-auto w-full max-w-4xl">
      
      <div className="w-full p-8 md:p-12 border-2 border-foreground/10 bg-foreground/5 rounded-xl shadow-sm text-left">
        <div className="space-y-8">
          
          <p className="text-2xl sm:text-3xl md:text-4xl text-foreground font-medium leading-relaxed">
            <span className="text-foreground/30 mr-3 select-none">&gt;</span>
            The cybersecurity society of Amity International School, Sector 46, Gurugram.
          </p>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 leading-relaxed">
            <span className="text-foreground/30 mr-3 select-none">&gt;</span>
            Awareness, hands-on training, and incident response — run by students, for students.<span className="animate-pulse ml-2 font-black">_</span>
          </p>
          
        </div>
      </div>
      
    </div>
  );
}
