import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  end: number;
  suffix?: string;
  label: string;
  iconColor: string;
  bgColor: string;
  delay?: number;
}

const StatItem = ({ icon: Icon, end, suffix = "", label, iconColor, bgColor, delay = 0 }: StatItemProps) => {
  const { count, ref } = useCounterAnimation({ end, duration: 2500 });

  return (
    <div 
      ref={ref}
      className="group relative text-center p-8 rounded-3xl bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Decorative gradient background */}
      <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-tr from-secondary/20 to-transparent blur-xl" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`${bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-br').replace('/5', '/20')} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
          <Icon className={`h-10 w-10 ${iconColor}`} />
        </div>
        
        {/* Counter */}
        <div className="mb-3">
          <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {count.toLocaleString('ar-EG')}
          </span>
          <span className="text-3xl md:text-4xl font-bold text-primary mr-1">{suffix}</span>
        </div>
        
        {/* Label */}
        <p className="text-lg text-muted-foreground font-medium">{label}</p>
        
        {/* Decorative line */}
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-4 group-hover:w-24 transition-all duration-500" />
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      end: 15,
      suffix: "+",
      label: "سنوات من الخبرة",
      iconColor: "text-emerald-500",
      bgColor: "bg-gradient-to-br from-emerald-500/5 to-teal-500/5",
    },
    {
      icon: Globe,
      end: 25,
      suffix: "+",
      label: "دولة نصدر إليها",
      iconColor: "text-sky-500",
      bgColor: "bg-gradient-to-br from-sky-500/5 to-blue-500/5",
    },
    {
      icon: Users,
      end: 500,
      suffix: "+",
      label: "عميل راضٍ",
      iconColor: "text-amber-500",
      bgColor: "bg-gradient-to-br from-amber-500/5 to-orange-500/5",
    },
    {
      icon: Award,
      end: 1000,
      suffix: "+",
      label: "صفقة ناجحة",
      iconColor: "text-rose-500",
      bgColor: "bg-gradient-to-br from-rose-500/5 to-pink-500/5",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            إنجازاتنا بالأرقام
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            أرقام تتحدث عن <span className="text-primary">نجاحنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نفخر بتاريخنا الحافل بالإنجازات والشراكات الناجحة مع عملائنا حول العالم
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              {...stat}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
