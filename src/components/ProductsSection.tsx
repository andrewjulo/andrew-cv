import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Product {
  name: string;
  url: string;
  description: string;
  tags: string[];
  highlights: string[];
  category: string;
}

const products: Product[] = [
  {
    name: 'BizzyBuddy Docs',
    url: 'https://www.bizzybuddydocs.com/',
    description: 'A powerful document automation platform. Generate invoices, receipts, quotations, contracts, and financial documents with instant PDF generation, digital signatures, and multi-currency support.',
    tags: ['React', 'PDF Generation', 'SaaS'],
    highlights: ['Instant PDF generation', 'Digital signatures', 'Multi-currency'],
    category: 'SaaS',
  },
  {
    name: 'Airtime2Kash',
    url: 'https://www.airtime2kash.com/',
    description: 'A fintech platform converting airtime to cash — solving a uniquely African financial challenge with secure, instant transactions.',
    tags: ['Fintech', 'Mobile Money', 'Payments'],
    highlights: ['Airtime conversion', 'Instant payout', 'Mobile-first'],
    category: 'Fintech',
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
    description: 'A platform making internet access affordable through community clusters. Bridging Africa\'s digital divide with investor-backed connectivity hubs.',
    tags: ['Infrastructure', 'Community', 'Connectivity'],
    highlights: ['Community clusters', 'Lower internet costs', 'Digital inclusion'],
    category: 'Infrastructure',
  },
  {
    name: 'ViralEdge AI',
    url: 'https://viraledge.vercel.app/',
    description: 'AI-driven social media growth platform with competitor research, AI-generated posts, and marketing automation.',
    tags: ['AI', 'Marketing', 'Automation'],
    highlights: ['AI content generation', 'Competitor analysis', 'Growth tools'],
    category: 'AI',
  },
  {
    name: 'Media Surgeon',
    url: 'https://www.themediasurgeon.com/',
    description: 'A custom blog and publishing engine powering a professional news platform with performance-optimized, SEO-ready architecture.',
    tags: ['Publishing', 'CMS', 'SEO'],
    highlights: ['Scalable publishing', 'SEO optimized', 'Content workflows'],
    category: 'Platform',
  },
  {
    name: 'Tubit Logistics',
    url: 'https://www.tubitusa.com/',
    description: 'Delivery and shipment tracking platform designed for Ugandan businesses. Logistics coordination and delivery optimization.',
    tags: ['Logistics', 'Tracking', 'B2B'],
    highlights: ['Shipment tracking', 'Delivery optimization', 'Business tools'],
    category: 'Platform',
  },
  {
    name: 'Assistant Kenya',
    url: 'https://assistant-app-mu.vercel.app/',
    description: 'A marketplace platform connecting service providers with customers across Kenya. Service discovery, booking, and marketplace structure.',
    tags: ['Marketplace', 'Services', 'Kenya'],
    highlights: ['Service discovery', 'Booking system', 'User profiles'],
    category: 'Platform',
  },
  {
    name: 'Find My Lost Phone',
    url: 'https://find-my-lost-phone-six.vercel.app/',
    description: 'A device recovery and tracking system helping users locate lost phones with security notifications and device management.',
    tags: ['Security', 'Tracking', 'Mobile'],
    highlights: ['Device tracking', 'Security alerts', 'Device management'],
    category: 'Platform',
  },
  {
    name: 'Auto Parts Hub',
    url: 'https://auto-parts-hub-ten.vercel.app/',
    description: 'Online marketplace for buying and selling vehicle parts with product listings, eCommerce infrastructure, and vendor management.',
    tags: ['eCommerce', 'Automotive', 'Marketplace'],
    highlights: ['Product listings', 'Vendor management', 'eCommerce'],
    category: 'Platform',
  },
];

const categories = ['All', 'Fintech', 'AI', 'SaaS', 'Platform', 'Infrastructure'];

const ProductsSection = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <section id="products" className="py-24">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Featured Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Products I've Built</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of platforms, tools, and products designed to solve real problems across African markets.
          </p>
        </div>

        {/* Filter */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product, i) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass-card-hover group p-6 flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Web Platforms */}
        <div className="reveal mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Web Platforms Built</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Corporate Games Uganda', url: 'https://www.corporategamesug.com/' },
              { name: 'MICE Uganda', url: 'https://miceuganda.com/' },
            ].map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover px-6 py-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {site.name}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
