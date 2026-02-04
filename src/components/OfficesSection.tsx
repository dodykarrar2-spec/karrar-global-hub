import { MapPin, Globe, Building2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const localOffices = [
  { name: "ولاية البحر الأحمر", x: 78, y: 35 },
  { name: "الولاية الشمالية", x: 55, y: 15 },
  { name: "ولاية نهر النيل", x: 60, y: 25 },
  { name: "ولاية الجزيرة", x: 52, y: 45 },
  { name: "ولاية النيل الأزرق", x: 62, y: 55 },
  { name: "ولاية شمال كردفان", x: 35, y: 40 },
  { name: "ولاية القضارف", x: 70, y: 48 },
  { name: "ولاية كسلا", x: 75, y: 42 },
];

const internationalOffices = [
  { name: "مصر", flag: "🇪🇬", x: 52, y: 32 },
  { name: "الإمارات العربية المتحدة", flag: "🇦🇪", x: 58, y: 38 },
  { name: "سلطنة عمان", flag: "🇴🇲", x: 60, y: 40 },
  { name: "تركيا", flag: "🇹🇷", x: 48, y: 28 },
  { name: "الصين", flag: "🇨🇳", x: 78, y: 32 },
  { name: "تايلاند", flag: "🇹🇭", x: 75, y: 42 },
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
            
            {/* Stylized Sudan Map */}
            <div className="relative bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10 rounded-2xl mx-6 mb-6 p-4">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Map Background Shape */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Sudan outline (stylized) */}
                  <path
                    d="M20,10 L80,10 L85,20 L82,35 L78,50 L72,65 L60,75 L45,78 L30,75 L20,65 L15,50 L18,30 Z"
                    fill="url(#sudanGradient)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    className="drop-shadow-lg"
                  />
                  {/* Nile River stylized */}
                  <path
                    d="M55,12 Q58,30 52,45 Q48,60 55,78"
                    fill="none"
                    stroke="hsl(var(--primary)/0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="2,2"
                  />
                  <defs>
                    <linearGradient id="sudanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary)/0.15)" />
                      <stop offset="100%" stopColor="hsl(var(--primary)/0.05)" />
                    </linearGradient>
                  </defs>
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
                    <div className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/30 rounded-full animate-ping" />
                    {/* Marker */}
                    <div className="relative w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform duration-300" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-background/95 backdrop-blur-sm border rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      <span className="text-xs font-medium">{office.name}</span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-background/95" />
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
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="h-3 w-3 text-emerald-500 flex-shrink-0" />
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
                <p className="text-muted-foreground text-sm">6 دول حول العالم</p>
              </div>
            </div>
            
            {/* World Map Area */}
            <div className="relative bg-gradient-to-br from-sky-500/5 via-transparent to-sky-500/10 rounded-2xl mx-6 mb-6 p-4">
              <div className="relative aspect-[16/10] max-w-md mx-auto">
                {/* Stylized World Map Background */}
                <svg viewBox="0 0 100 62" className="w-full h-full opacity-20">
                  {/* Europe */}
                  <ellipse cx="48" cy="22" rx="8" ry="6" fill="hsl(var(--primary))" />
                  {/* Africa */}
                  <ellipse cx="50" cy="38" rx="10" ry="12" fill="hsl(var(--primary))" />
                  {/* Middle East */}
                  <ellipse cx="58" cy="30" rx="6" ry="8" fill="hsl(var(--primary))" />
                  {/* Asia */}
                  <ellipse cx="75" cy="28" rx="15" ry="14" fill="hsl(var(--primary))" />
                </svg>

                {/* Connection Lines */}
                <svg viewBox="0 0 100 62" className="absolute inset-0 w-full h-full">
                  {internationalOffices.map((office, index) => (
                    <line
                      key={index}
                      x1="50"
                      y1="38"
                      x2={office.x}
                      y2={office.y}
                      stroke="hsl(var(--primary)/0.2)"
                      strokeWidth="0.3"
                      strokeDasharray="2,2"
                    />
                  ))}
                  {/* Sudan marker (center) */}
                  <circle cx="50" cy="38" r="2" fill="hsl(var(--primary))" />
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
                    <div className="absolute inset-0 w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-sky-500/30 rounded-full animate-ping" style={{ animationDelay: `${index * 0.2}s` }} />
                    {/* Flag Marker */}
                    <div className="relative w-8 h-8 bg-white rounded-full border-2 border-sky-500 shadow-lg flex items-center justify-center text-lg group-hover:scale-125 transition-transform duration-300">
                      {office.flag}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-background/95 backdrop-blur-sm border rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      <span className="text-xs font-medium">{office.name}</span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-background/95" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Country Cards */}
            <div className="grid grid-cols-3 gap-3 px-6 pb-6">
              {internationalOffices.map((office, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-1 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
                >
                  <span className="text-2xl">{office.flag}</span>
                  <span className="text-xs font-medium truncate w-full">{office.name}</span>
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
