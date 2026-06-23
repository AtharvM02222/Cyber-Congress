export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-12 mx-auto w-full max-w-4xl">
      
      {/* Terminal Window */}
      <div className="w-full rounded-xl overflow-hidden border border-neutral-800 bg-black/95 shadow-2xl backdrop-blur-md">
        
        {/* Terminal Header Bar */}
        <div className="bg-neutral-900 px-4 py-3 flex items-center border-b border-neutral-800 relative">
          <div className="flex space-x-2 z-10">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xs tracking-widest text-neutral-500 pointer-events-none">
            root@cyber-congress: ~/about
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 sm:p-10 text-left text-green-500 space-y-8">
          
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl text-neutral-400">
              <span className="text-green-500 mr-2">➜</span> 
              <span className="text-blue-400">~</span> 
              <span className="text-white ml-2">cat about.txt</span>
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-green-400">
              The cybersecurity society of Amity International School, Sector 46, Gurugram.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-green-600/80 leading-relaxed">
              Awareness, hands-on training, and incident response — run by students, for students.
            </p>
          </div>

          <div className="pt-4 text-xl sm:text-2xl text-neutral-400 flex items-center">
            <span className="text-green-500 mr-2">➜</span> 
            <span className="text-blue-400">~</span> 
            <span className="animate-pulse ml-2 w-3 h-6 bg-green-500 inline-block"></span>
          </div>

        </div>
      </div>
      
    </div>
  );
}
