import { Shield, TrendingUp, Globe, Building2 } from 'lucide-react';

const items = [
  { icon: TrendingUp, text: 'Fintech infrastructure handling major transaction volumes' },
  { icon: Building2, text: 'Enterprise IT leadership across large operations' },
  { icon: Globe, text: 'Digital platforms used by thousands across Africa' },
  { icon: Shield, text: 'National-level digital campaigns delivered' },
];

const CredibilityBanner = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="reveal flex items-start gap-3 p-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon size={18} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBanner;
