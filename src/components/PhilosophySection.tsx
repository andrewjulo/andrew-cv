const PhilosophySection = () => {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="section-container">
        <div className="reveal max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why I Build</h2>
          <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Technology should unlock opportunity.{' '}
            <span className="text-foreground font-normal">
              My work focuses on building platforms that make services accessible, empower businesses, and solve real problems across African markets.
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
