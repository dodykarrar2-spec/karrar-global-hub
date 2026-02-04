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
      className="group relative flex flex-col items-center justify-center p-4 text-center"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 ${glowColor} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 -z-10`} />
      
      {/* Icon with animated ring */}
      <div className="relative mb-3">
        <div className={`absolute inset-0 ${iconColor.replace('text-', 'bg-')}/20 rounded-full blur-xl scale-150 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className={`relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
      
      {/* Counter with gradient text */}
      <div className="mb-1">
        <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          {count.toLocaleString('ar-EG')}
        </span>
        <span className="text-2xl md:text-3xl font-bold text-white/90 mr-1">{suffix}</span>
      </div>
      
      {/* Label */}
      <p className="text-white/80 font-medium text-xs md:text-sm">{label}</p>
      
      {/* Decorative underline */}
      <div className={`w-0 h-0.5 ${iconColor.replace('text-', 'bg-')} mt-2 group-hover:w-12 transition-all duration-500 rounded-full`} />
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
    <section className="relative py-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      
      {/* Left decorative elements */}
      <div className="absolute left-0 top-0 bottom-0 w-24 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-8">
          <div className="w-32 h-32 border-4 border-white/10 rounded-full" />
          <div className="absolute inset-4 border-2 border-white/15 rounded-full" />
          <div className="absolute inset-8 border border-white/10 rounded-full" />
        </div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/15 rounded-full" />
        <div className="absolute top-1/3 left-12 w-1.5 h-1.5 bg-white/25 rounded-full" />
      </div>
      
      {/* Right decorative elements */}
      <div className="absolute right-0 top-0 bottom-0 w-24 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -right-8">
          <div className="w-32 h-32 border-4 border-white/10 rounded-full" />
          <div className="absolute inset-4 border-2 border-white/15 rounded-full" />
          <div className="absolute inset-8 border border-white/10 rounded-full" />
        </div>
        <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute bottom-6 right-10 w-3 h-3 bg-white/15 rounded-full" />
        <div className="absolute top-2/3 right-14 w-1.5 h-1.5 bg-white/25 rounded-full" />
      </div>

      {/* Top edge decorative line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Bottom edge decorative line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
