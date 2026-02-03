import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  end: number;
  suffix?: string;
  label: string;
  iconColor: string;
  glowColor: string;
}

const StatItem = ({ icon: Icon, end, suffix = "", label, iconColor, glowColor }: StatItemProps) => {
  const { count, ref } = useCounterAnimation({ end, duration: 2500 });

  return (
    <div 
      ref={ref}
      className="group relative flex flex-col items-center justify-center p-6 text-center"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 ${glowColor} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 -z-10`} />
      
      {/* Icon with animated ring */}
      <div className="relative mb-4">
        <div className={`absolute inset-0 ${iconColor.replace('text-', 'bg-')}/20 rounded-full blur-xl scale-150 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className={`relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
      </div>
      
      {/* Counter with gradient text */}
      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {count.toLocaleString('ar-EG')}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-white/90 mr-1">{suffix}</span>
      </div>
      
      {/* Label */}
      <p className="text-white/80 font-medium text-sm md:text-base">{label}</p>
      
      {/* Decorative underline */}
      <div className={`w-0 h-0.5 ${iconColor.replace('text-', 'bg-')} mt-3 group-hover:w-16 transition-all duration-500 rounded-full`} />
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      end: 7,
      suffix: "+",
      label: "سنوات من الخبرة",
      iconColor: "text-emerald-400",
      glowColor: "bg-emerald-500/30",
    },
    {
      icon: Globe,
      end: 25,
      suffix: "+",
      label: "دولة نصدر إليها",
      iconColor: "text-sky-400",
      glowColor: "bg-sky-500/30",
    },
    {
      icon: Users,
      end: 500,
      suffix: "+",
      label: "عميل راضٍ",
      iconColor: "text-amber-400",
      glowColor: "bg-amber-500/30",
    },
    {
      icon: Award,
      end: 1000,
      suffix: "+",
      label: "صفقة ناجحة",
      iconColor: "text-rose-400",
      glowColor: "bg-rose-500/30",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/2 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Diagonal lines decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12" />
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-12" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
        
        {/* Bottom decorative border */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-white/30"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
