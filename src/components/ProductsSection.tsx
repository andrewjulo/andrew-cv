import { ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface Product {
  name: string;
  url: string;
  description: string;
  tags: string[];
  highlights: string[];
  category: string;
  image?: string;
}

const products: Product[] = [
  {
    name: 'AU Pay Africa',
    url: 'https://aupayafrica.com/',
    description: 'The fastest onboarding payment aggregator in Africa. Built using industry standard tech stack Go and TanStack.',
    tags: ['Fintech', 'Go', 'TanStack'],
    highlights: ['Fast onboarding', 'Payment aggregator'],
    category: 'Fintech',
    image: '/screenshots/aupayafrica.com.png'
  },
  {
    name: 'Bold Narrative',
    url: 'https://boldnarrative.tv/',
    description: 'A platform recently featured in the news for Africans, sharing powerful narratives and stories.',
    tags: ['Platform', 'Media'],
    highlights: ['Featured in news', 'African narratives'],
    category: 'Platform',
    image: '/screenshots/boldnarrative.tv.png'
  },
  {
    name: 'Back to the Source - The Nile',
    url: 'https://backtothesourcethenile.com/',
    description: 'A platform exploring the rich history and cultural narratives of the Nile.',
    tags: ['Platform', 'History'],
    highlights: ['Cultural heritage', 'African history'],
    category: 'Platform',
    image: '/screenshots/backtothesourcethenile.com.png'
  },
  {
    name: 'Pesamoni',
    url: 'https://pesamoni.com/',
    description: 'A seamless fintech solution empowering financial inclusion and secure transactions.',
    tags: ['Fintech', 'Payments'],
    highlights: ['Financial inclusion', 'Secure'],
    category: 'Fintech',
    image: '/screenshots/pesamoni.com.png'
  },
  {
    name: 'BizzyBuddy Docs',
    url: 'https://www.bizzybuddydocs.com/',
    description: 'A powerful SaaS document automation platform. Generate invoices, receipts, quotations, and contracts with instant PDF generation.',
    tags: ['React', 'SaaS', 'PDF Generation'],
    highlights: ['Instant PDF generation', 'Digital signatures'],
    category: 'SaaS',
    image: '/screenshots/bizzybuddy.com.png'
  },
  {
    name: 'Zugo Trips',
    url: 'https://zugotrips.com/',
    description: 'A comprehensive travel and trip management platform designed for seamless booking.',
    tags: ['Platform', 'Travel'],
    highlights: ['Trip planning', 'Seamless booking'],
    category: 'Platform',
    image: '/screenshots/zugotrips.com.png'
  },
  {
    name: 'Media Surgeon',
    url: 'https://www.themediasurgeon.com/',
    description: 'A custom blog and publishing engine powering a professional news platform with performance-optimized architecture.',
    tags: ['Publishing', 'CMS', 'SEO'],
    highlights: ['Scalable publishing', 'SEO optimized'],
    category: 'Platform',
    image: '/screenshots/themediasurgeon.com.png'
  },
  {
    name: 'Corporate Games Uganda',
    url: 'https://www.corporategamesug.com/',
    description: 'A platform for the ultimate corporate sports networking and team building in Uganda.',
    tags: ['Platform', 'Sports'],
    highlights: ['Corporate networking', 'Team building'],
    category: 'Platform',
    image: '/screenshots/corporategamesug.com.png'
  },
  {
    name: 'MICE Uganda',
    url: 'https://miceuganda.com/',
    description: 'Meetings, Incentives, Conferences, and Events platform for Uganda.',
    tags: ['Platform', 'Events'],
    highlights: ['Event management', 'Conferences'],
    category: 'Platform',
    image: '/screenshots/miceuganda.com.png'
  },
  {
    name: 'AU Payments',
    url: 'https://aupayments.com/',
    description: 'A robust platform serving as both a fintech solution and infrastructure provider for seamless payments.',
    tags: ['Fintech', 'Infrastructure'],
    highlights: ['Infrastructure', 'Seamless payments'],
    category: 'Infrastructure',
  },
  {
    name: 'MoneyNest SACCO',
    url: 'https://moneynestsacco.vercel.app/',
    description: 'A digital savings ecosystem enabling transparent group savings across Africa. Community finance meets modern technology.',
    tags: ['Fintech', 'Community', 'Savings'],
    highlights: ['Digital wallets', 'Group savings', 'Financial transparency'],
    category: 'Fintech',
  },
  {
    name: 'ClusterNet',
    url: 'https://cluster-chi.vercel.app/',
    description: 'A platform making internet access affordable through community clusters. Bridging Africa\'s digital divide.',
    tags: ['Infrastructure', 'Community', 'Connectivity'],
    highlights: ['Community clusters', 'Lower internet costs'],
    category: 'Infrastructure',
  },
  {
    name: 'ViralEdge AI',
    url: 'https://viraledge.vercel.app/',
    description: 'AI-driven social media growth platform with competitor research, AI-generated posts, and marketing automation.',
    tags: ['AI', 'Marketing', 'Automation'],
    highlights: ['AI content generation', 'Competitor analysis'],
    category: 'AI',
  },
  {
    name: 'Tubit Logistics',
    url: 'https://www.tubitusa.com/',
    description: 'Delivery and shipment tracking platform designed for Ugandan businesses. Logistics coordination and delivery optimization.',
    tags: ['Logistics', 'Tracking', 'B2B'],
    highlights: ['Shipment tracking', 'Delivery optimization'],
    category: 'Platform',
  },
  {
    name: 'Assistant Kenya',
    url: 'https://assistant-app-mu.vercel.app/',
    description: 'A marketplace platform connecting service providers with customers across Kenya. Service discovery and booking.',
    tags: ['Marketplace', 'Services', 'Kenya'],
    highlights: ['Service discovery', 'Booking system'],
    category: 'Platform',
  },
  {
    name: 'Find My Lost Phone',
    url: 'https://find-my-lost-phone-six.vercel.app/',
    description: 'A device recovery and tracking system helping users locate lost phones with security notifications.',
    tags: ['Security', 'Tracking', 'Mobile'],
    highlights: ['Device tracking', 'Security alerts'],
    category: 'Platform',
  },
  {
    name: 'Auto Parts Hub',
    url: 'https://auto-parts-hub-ten.vercel.app/',
    description: 'Online marketplace for buying and selling vehicle parts with product listings and vendor management.',
    tags: ['eCommerce', 'Automotive', 'Marketplace'],
    highlights: ['Product listings', 'Vendor management'],
    category: 'Platform',
  },
];

const categories = ['All', 'Fintech', 'AI', 'SaaS', 'Platform', 'Infrastructure'];

const ProductsSection = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  const featuredProducts = filtered.filter(p => p.image);
  const otherProducts = filtered.filter(p => !p.image);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Featured Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Products I've Built</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated selection of scalable platforms, powerful tools, and fintech solutions designed to solve real problems across African markets.
          </p>
        </div>

        {/* Filter */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-foreground text-background shadow-lg scale-105'
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Grid (With Images) */}
        {featuredProducts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuredProducts.map((product, i) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in zoom-in-95 fill-mode-both"
                style={{ transitionDelay: `${i * 50}ms`, animationDuration: '500ms' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 relative bg-gradient-to-b from-background to-secondary/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="bg-primary/10 p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Other Notable Projects */}
        {otherProducts.length > 0 && (
          <div className="mt-12 pt-12 border-t border-border/50 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProducts.map((product, i) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover group p-6 flex flex-col rounded-xl border border-border/50 bg-background/50 hover:bg-background transition-all duration-300 animate-in fade-in zoom-in-95 fill-mode-both"
                  style={{ transitionDelay: `${i * 50}ms`, animationDuration: '500ms' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
