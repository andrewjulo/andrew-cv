import andrewPhoto from '@/assets/andrew-photo.png';
import { ArrowRight, Download, Mail } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '20+', label: 'Digital Products' },
  { value: '$M+', label: 'Transactions Processed' },
  { value: '5+', label: 'Countries Impacted' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="hero-glow top-1/4 -left-40 animate-glow-pulse" />
      <div className="hero-glow bottom-1/4 right-[-200px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Software Engineer · Kampala, Uganda
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Engineering the{' '}
              <span className="gradient-text-accent">Digital Infrastructure</span>{' '}
              of Africa
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Software engineer, fintech architect, and product builder creating platforms used across East Africa.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all glow-sm">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all border border-border">
                <Mail size={16} /> Contact Me
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                <Download size={16} /> Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-border/50 glow-sm">
                <img
                  src={andrewPhoto}
                  alt="Andrew Angulo - Software Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 glow-sm">
                <div className="text-xs text-muted-foreground">Currently building</div>
                <div className="text-sm font-semibold text-foreground">Fintech & AI Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
