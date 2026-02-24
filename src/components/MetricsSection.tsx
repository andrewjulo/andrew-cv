import { useCountUp } from '@/hooks/useCountUp';

const metrics = [
  { end: 10, suffix: '+', label: 'Years Experience' },
  { end: 20, suffix: '+', label: 'Platforms Built' },
  { end: 5, suffix: 'M+', label: 'Transactions Supported' },
  { end: 5, suffix: '+', label: 'Countries Impacted' },
];

const MetricItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 1500);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
};

const MetricsSection = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="reveal glass-card p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <MetricItem key={m.label} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
