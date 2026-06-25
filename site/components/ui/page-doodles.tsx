export function AboutDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Layer 1 - Thick */}
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
        <path d="M 100,20 C 140,22 180,60 178,100 C 175,140 140,178 100,180 C 60,182 20,140 22,100 C 25,60 60,18 100,20" />
        <path d="M 100,0 L 100,40 M 100,160 L 100,200 M 0,100 L 40,100 M 160,100 L 200,100" />
      </g>
      {/* Layer 2 - Medium */}
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
        <path d="M 100,25 C 135,27 175,65 173,100 C 170,135 135,173 100,175 C 65,177 25,135 27,100 C 30,65 65,23 100,25" />
        <path d="M 98,2 L 102,42 M 98,158 L 102,198 M 2,98 L 42,102 M 158,98 L 198,102" />
      </g>
      {/* Layer 3 - Thin */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <path d="M 100,15 C 145,17 185,55 183,100 C 180,145 145,183 100,185 C 55,187 15,145 17,100 C 20,55 55,13 100,15" />
        <path d="M 102,-2 L 98,38 M 102,162 L 98,202 M -2,102 L 38,98 M 162,102 L 202,98" />
      </g>
    </svg>
  );
}

export function TeamDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Layer 1 - Thick */}
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
        <path d="M 40,20 L 120,25 C 135,25 140,40 138,60 L 135,180 C 134,195 125,200 110,198 L 30,190 C 15,188 10,175 12,160 L 20,40 C 21,25 28,20 40,20 Z" />
        <circle cx="80" cy="45" r="8" />
        <path d="M 80,30 C 70,10 90,0 100,15 C 110,30 90,40 85,35" />
      </g>
      {/* Layer 2 - Medium */}
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
        <path d="M 42,24 L 118,29 C 133,29 138,44 136,64 L 133,176 C 132,191 123,196 108,194 L 32,186 C 17,184 12,171 14,156 L 22,44 C 23,29 30,24 42,24 Z" />
        <circle cx="78" cy="43" r="6" />
        <path d="M 82,28 C 72,8 92,-2 102,13 C 112,28 92,38 87,33" />
      </g>
      {/* Layer 3 - Thin */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <path d="M 38,16 L 122,21 C 137,21 142,36 140,56 L 137,184 C 136,199 127,204 112,202 L 28,194 C 13,192 8,179 10,164 L 18,36 C 19,21 26,16 38,16 Z" />
        <circle cx="82" cy="47" r="10" />
        <path d="M 78,32 C 68,12 88,2 98,17 C 108,32 88,42 83,37" />
      </g>
    </svg>
  );
}

export function AlumniDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Layer 1 */}
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
        <path d="M 20,100 C 22,50 55,20 100,22 C 150,25 180,55 178,100 C 175,150 145,180 100,178 C 50,175 18,145 20,100 Z" />
        <path d="M 50,60 L 150,140 M 60,50 L 140,150 M 80,40 L 130,160 M 40,80 L 160,130" />
      </g>
      {/* Layer 2 */}
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
        <path d="M 24,102 C 26,52 59,24 102,26 C 148,29 176,59 174,102 C 171,148 141,176 102,174 C 52,171 22,141 24,102 Z" />
        <path d="M 48,62 L 148,142 M 62,48 L 142,148 M 78,42 L 128,158 M 42,78 L 158,128" />
      </g>
      {/* Layer 3 */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <path d="M 16,98 C 18,48 51,16 98,18 C 152,21 184,51 182,98 C 179,152 149,184 98,182 C 48,179 14,149 16,98 Z" />
        <path d="M 52,58 L 152,138 M 58,52 L 138,152 M 82,38 L 132,162 M 38,82 L 162,132" />
      </g>
    </svg>
  );
}

export function ReportDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Layer 1 */}
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
        <path d="M 100,20 L 180,160 L 20,170 Z" />
        <path d="M 100,60 L 98,120" />
        <circle cx="97" cy="140" r="2" />
      </g>
      {/* Layer 2 */}
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
        <path d="M 102,24 L 178,158 L 24,168 Z" />
        <path d="M 102,62 L 100,118" />
        <circle cx="99" cy="138" r="2" />
      </g>
      {/* Layer 3 */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <path d="M 98,16 L 182,162 L 16,172 Z" />
        <path d="M 98,58 L 96,122" />
        <circle cx="95" cy="142" r="2" />
      </g>
    </svg>
  );
}
