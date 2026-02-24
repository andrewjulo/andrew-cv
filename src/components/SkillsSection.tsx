const skillGroups = [
  {
    title: 'Engineering',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'APIs', 'Databases', 'System Architecture'],
  },
  {
    title: 'Infrastructure',
    skills: ['Networking', 'Cybersecurity', 'Cloud Systems', 'Disaster Recovery', 'DevOps'],
  },
  {
    title: 'Advanced',
    skills: ['AI Solutions', 'Fintech Platforms', 'Automation Systems', 'Digital Growth Systems'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 border-t border-border/30">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal glass-card p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
