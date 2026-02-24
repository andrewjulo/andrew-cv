import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-lg font-bold tracking-tight text-foreground">
              andrew<span className="text-primary">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Building technology that powers Africa's digital economy.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#career" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Career</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:drewjulo25@gmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Andrew Angulo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
