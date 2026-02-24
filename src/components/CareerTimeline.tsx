import { Briefcase } from 'lucide-react';

const timeline = [
  {
    title: 'CTO – Fintech Startup',
    description: 'Built secure payment infrastructure processing major transaction volumes. Led engineering team and product development.',
  },
  {
    title: 'Director of IT',
    description: 'Enterprise infrastructure management across a large hospitality operation. Oversaw systems architecture and digital transformation.',
  },
  {
    title: 'Head of Digital Marketing',
    description: 'Led national digital campaigns and platform growth. Designed strategies reaching thousands across East Africa.',
  },
  {
    title: 'IT Coordinator – Banking Platform',
    description: 'Supported digital payments and integrations. Ensured secure, reliable systems for financial operations.',
  },
];

const CareerTimeline = () => {
  return (
    <section id="career" className="py-24">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Leadership Journey</h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="reveal relative pl-12 pb-12 last:pb-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Line */}
              {i < timeline.length - 1 && <div className="timeline-line" />}
              {/* Dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Briefcase size={16} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
