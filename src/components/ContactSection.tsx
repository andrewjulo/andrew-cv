import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-border/30">
      <div className="section-container">
        <div className="reveal text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to discussing new projects, partnerships, and opportunities.
          </p>
        </div>

        <div className="reveal max-w-xl mx-auto">
          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Kampala, Uganda</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:drewjulo25@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                  drewjulo25@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+256709958759" className="text-foreground font-medium hover:text-primary transition-colors">
                  +256 709 958759
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border/50">
              <a
                href="mailto:drewjulo25@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail size={16} /> Send Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border border-border"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border border-border"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
