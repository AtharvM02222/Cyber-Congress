const FacebookIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const TwitterIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Events() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col bg-[var(--color-bg)] overflow-hidden">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 w-full h-full border-t border-b border-[var(--color-border-dim)]">
        
        {/* Column 1 */}
        <div className="col-span-1 border-r border-[var(--color-border-dim)] p-8 flex flex-col relative min-h-[600px]">
          <h2 className="text-2xl font-black tracking-widest mb-24 z-10">CYBER CON</h2>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 whitespace-nowrap z-20 pointer-events-none">
            <div className="relative inline-block">
              <h1 className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter text-[var(--foreground)] mix-blend-multiply">
                18 OCT
              </h1>
              {/* Hand-drawn circle using accent color */}
              <svg className="absolute -inset-8 md:-inset-12 w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] h-[calc(100%+4rem)] md:h-[calc(100%+6rem)] text-[var(--color-accent)] -z-10" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40,75 C 40,10 360,10 360,75 C 360,140 40,140 40,75 Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="opacity-90"/>
                <path d="M 35,70 C 45,15 355,15 365,80 C 355,135 45,135 35,70 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-60"/>
                <path d="M 45,80 C 35,25 345,5 355,70 C 365,125 55,145 45,80 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40"/>
              </svg>
            </div>
          </div>

          <div className="mt-auto pt-24 relative z-10">
             <h3 className="text-3xl md:text-4xl font-bold max-w-[250px] leading-tight">
               The Cyber Security Symposium
             </h3>
             <div className="relative w-64 h-6 mt-2">
               <svg className="absolute inset-0 w-full h-full text-[var(--color-accent)]" viewBox="0 0 200 20" preserveAspectRatio="none" fill="none">
                  <path d="M 0,10 Q 100,20 200,5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90"/>
                  <path d="M 0,12 Q 100,22 200,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50"/>
               </svg>
             </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 border-r border-[var(--color-border-dim)] p-8 flex flex-col gap-6 font-semibold z-10 hidden md:flex">
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Schedule</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Program</a>
        </div>

        {/* Column 3 */}
        <div className="col-span-1 border-r border-[var(--color-border-dim)] p-8 flex flex-col gap-6 font-semibold z-10 hidden md:flex">
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">About</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Speakers</a>
        </div>

        {/* Column 4 */}
        <div className="col-span-1 p-8 flex flex-col relative z-10 bg-[var(--color-bg)]">
          {/* Abstract top right shape */}
          <svg className="absolute -top-16 -right-16 w-80 h-80 text-[var(--color-accent)] opacity-90 pointer-events-none hidden md:block" viewBox="0 0 200 200" fill="none">
             <path d="M 120,-20 Q 80,80 150,120 T 100,220" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M 150,-40 Q 110,60 180,100 T 130,200" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M 180,-60 Q 140,40 210,80 T 160,180" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="flex flex-col gap-6 font-semibold relative z-10 mb-24">
            <a href="#" className="text-[var(--color-accent)] hover:opacity-80 transition-opacity">Tickets</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Contacts</a>
          </div>

          <div className="mt-auto flex flex-col gap-10 relative z-10">
            <div className="text-lg">
              <p className="font-bold">Amity International School,</p>
              <p className="font-bold">Sector 46, Gurugram</p>
            </div>

            <div>
              <p className="text-sm font-bold mb-4 uppercase tracking-widest">follow us</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><FacebookIcon size={24} /></a>
                <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><InstagramIcon size={24} /></a>
                <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><TwitterIcon size={24} /></a>
                <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><LinkedinIcon size={24} /></a>
              </div>
            </div>

            <p className="text-xl font-medium leading-relaxed max-w-sm mt-4">
              Cyber Congress is the premier cybersecurity society dedicated to adopting the tactics of ethical hacking & digital culture in a program of curated events and competitions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
