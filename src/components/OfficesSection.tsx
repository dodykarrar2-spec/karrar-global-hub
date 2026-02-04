import { MapPin, Globe, Building2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const localOffices = [
  { name: "ولاية البحر الأحمر", x: 82, y: 25 },
  { name: "الولاية الشمالية", x: 50, y: 12 },
  { name: "ولاية نهر النيل", x: 58, y: 20 },
  { name: "ولاية الجزيرة", x: 55, y: 45 },
  { name: "ولاية النيل الأزرق", x: 65, y: 58 },
  { name: "ولاية شمال كردفان", x: 38, y: 40 },
  { name: "ولاية القضارف", x: 72, y: 42 },
  { name: "ولاية كسلا", x: 78, y: 35 },
];

const internationalOffices = [
  { name: "مصر", flag: "🇪🇬", x: 48, y: 28 },
  { name: "الإمارات", flag: "🇦🇪", x: 58, y: 42 },
  { name: "سلطنة عمان", flag: "🇴🇲", x: 62, y: 45 },
  { name: "السعودية", flag: "🇸🇦", x: 54, y: 38 },
  { name: "تركيا", flag: "🇹🇷", x: 46, y: 22 },
  { name: "الصين", flag: "🇨🇳", x: 82, y: 30 },
  { name: "تايلاند", flag: "🇹🇭", x: 78, y: 45 },
  { name: "رواندا", flag: "🇷🇼", x: 50, y: 55 },
  { name: "أوغندا", flag: "🇺🇬", x: 52, y: 52 },
  { name: "كينيا", flag: "🇰🇪", x: 56, y: 54 },
  { name: "تنزانيا", flag: "🇹🇿", x: 54, y: 58 },
];

const OfficesSection = () => {
  return (
    <section className="section-container bg-muted/30">
      <AnimatedSection animation="fade-up" className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">مكاتبنا حول العالم</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          نفخر بتواجدنا الممتد عبر الولايات السودانية والأسواق الدولية لخدمة عملائنا بكفاءة واحترافية
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Local Offices Map */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="card-elegant overflow-hidden h-full">
            <div className="flex items-center gap-3 mb-6 p-6 pb-0">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">مكاتبنا الولائية</h3>
                <p className="text-muted-foreground text-sm">8 ولايات سودانية</p>
              </div>
            </div>
            
            {/* Real Sudan Map */}
            <div className="relative bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10 rounded-2xl mx-6 mb-6 p-4">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Accurate Sudan Map Shape */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="sudanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary)/0.2)" />
                      <stop offset="50%" stopColor="hsl(var(--primary)/0.12)" />
                      <stop offset="100%" stopColor="hsl(var(--primary)/0.08)" />
                    </linearGradient>
                    <filter id="sudanShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15"/>
                    </filter>
                  </defs>
                  
                  {/* Sudan accurate outline */}
                  <path
                    d="M38,5 L42,5 L48,6 L55,5 L62,5 L68,6 L75,8 L82,12 L88,18 
                       L90,25 L88,32 L85,38 L82,42 L80,48 L78,52 L75,56 
                       L72,60 L68,65 L62,70 L55,75 L48,78 L42,80 L38,82 
                       L32,80 L28,75 L25,70 L22,65 L20,60 L18,55 L16,50 
                       L15,45 L14,40 L14,35 L15,28 L18,22 L22,16 L28,10 L33,6 Z"
                    fill="url(#sudanGradient)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.8"
                    filter="url(#sudanShadow)"
                  />
                  
                  {/* Nile River - Main Nile */}
                  <path
                    d="M52,8 Q55,15 54,22 Q52,30 50,38 Q48,45 50,52 Q52,58 55,65 Q58,72 60,78"
                    fill="none"
                    stroke="hsl(200 80% 50% / 0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  
                  {/* Blue Nile */}
                  <path
                    d="M65,55 Q62,52 58,50 Q54,48 50,50"
                    fill="none"
                    stroke="hsl(200 80% 50% / 0.35)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  
                  {/* White Nile */}
                  <path
                    d="M50,50 Q48,55 50,60 Q52,65 55,70"
                    fill="none"
                    stroke="hsl(200 80% 50% / 0.35)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  
                  {/* Red Sea Coast line */}
                  <path
                    d="M88,18 L90,25 L88,32 L85,38"
                    fill="none"
                    stroke="hsl(200 70% 55% / 0.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Office Markers */}
                {localOffices.map((office, index) => (
                  <div
                    key={index}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${office.x}%`, 
                      top: `${office.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Pulse animation */}
                    <div className="absolute inset-0 w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/40 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: `${index * 0.15}s` }} />
                    {/* Outer glow */}
                    <div className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/20 rounded-full blur-sm" />
                    {/* Marker */}
                    <div className="relative w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform duration-300" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-card/98 backdrop-blur-md border border-border/50 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 scale-90 group-hover:scale-100">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-emerald-500" />
                        <span className="text-xs font-semibold">{office.name}</span>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-[6px] border-transparent border-t-card/98" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office List */}
            <div className="grid grid-cols-2 gap-2 px-6 pb-6">
              {localOffices.map((office, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                  <span className="truncate">{office.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* International Offices Map */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="card-elegant overflow-hidden h-full">
            <div className="flex items-center gap-3 mb-6 p-6 pb-0">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-sky-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">مكاتبنا الخارجية</h3>
                <p className="text-muted-foreground text-sm">11 دولة حول العالم</p>
              </div>
            </div>
            
            {/* World Map Area */}
            <div className="relative bg-gradient-to-br from-sky-500/5 via-transparent to-sky-500/10 rounded-2xl mx-6 mb-6 p-4">
              <div className="relative aspect-[16/10] max-w-md mx-auto">
                {/* Stylized World Map Background */}
                <svg viewBox="0 0 100 62" className="w-full h-full opacity-25">
                  {/* Europe */}
                  <path d="M40,15 Q45,12 50,14 Q52,18 48,22 Q44,20 40,15" fill="hsl(var(--primary))" />
                  {/* Africa */}
                  <path d="M42,28 Q48,25 54,28 Q58,35 56,45 Q54,55 50,60 Q45,58 42,52 Q38,42 42,28" fill="hsl(var(--primary))" />
                  {/* Middle East */}
                  <path d="M52,22 Q58,20 62,24 Q64,30 60,35 Q56,32 52,28 Q50,24 52,22" fill="hsl(var(--primary))" />
                  {/* Asia */}
                  <path d="M65,18 Q75,15 85,20 Q90,30 85,40 Q78,45 70,42 Q62,35 65,25 Q65,20 65,18" fill="hsl(var(--primary))" />
                  {/* East Africa */}
                  <path d="M54,45 Q58,48 60,55 Q58,58 54,56 Q52,50 54,45" fill="hsl(var(--primary))" />
                </svg>

                {/* Connection Lines from Sudan */}
                <svg viewBox="0 0 100 62" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary)/0.4)" />
                      <stop offset="100%" stopColor="hsl(var(--primary)/0.1)" />
                    </linearGradient>
                  </defs>
                  {internationalOffices.map((office, index) => (
                    <line
                      key={index}
                      x1="50"
                      y1="38"
                      x2={office.x}
                      y2={office.y}
                      stroke="url(#lineGradient)"
                      strokeWidth="0.4"
                      strokeDasharray="3,2"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  ))}
                  {/* Sudan marker (center/origin) */}
                  <circle cx="50" cy="38" r="2.5" fill="hsl(var(--primary))" />
                  <circle cx="50" cy="38" r="4" fill="none" stroke="hsl(var(--primary)/0.3)" strokeWidth="1" />
                </svg>
                
                {/* International Office Markers */}
                {internationalOffices.map((office, index) => (
                  <div
                    key={index}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${office.x}%`, 
                      top: `${office.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Pulse animation */}
                    <div className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-sky-500/30 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: `${index * 0.2}s` }} />
                    {/* Flag Marker */}
                    <div className="relative w-7 h-7 bg-white rounded-full border-2 border-sky-500/80 shadow-lg flex items-center justify-center text-sm group-hover:scale-125 transition-transform duration-300">
                      {office.flag}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card/98 backdrop-blur-md border border-border/50 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 scale-90 group-hover:scale-100">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{office.flag}</span>
                        <span className="text-xs font-semibold">{office.name}</span>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-[6px] border-transparent border-t-card/98" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Country Cards */}
            <div className="grid grid-cols-4 gap-2 px-6 pb-6">
              {internationalOffices.map((office, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl bg-muted/50 hover:bg-muted hover:scale-105 transition-all text-center cursor-pointer"
                >
                  <span className="text-xl">{office.flag}</span>
                  <span className="text-[10px] font-medium truncate w-full">{office.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OfficesSection;