import Image from 'next/image';
import Link from 'next/link';

const FramerLogoIcon = () => (
  <svg
    width="12"
    height="18"
    viewBox="0 0 12 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[10px] top-1/2 -translate-y-1/2"
    aria-hidden="true"
  >
    <path d="M0 0H12V6H6V12H12V18H0V0Z" fill="black" />
  </svg>
);

const Footer = () => {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'FAQs', href: '/faqs' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter (X)', href: '#' },
  ];

  return (
    <footer className="bg-[#0D1224] text-white font-body">
      <div className="container pt-20 pb-10">
        <div className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-12 lg:gap-x-20 gap-y-12">
            {/* Column 1: Logo, Desc, CTA */}
            <div className="flex flex-col items-start">
              <Link href="/" aria-label="Stratwell Consulting Home">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/svgs/ln32nYbqWvSJBoA7GRhGM437VII-1.svg"
                  alt="Stratwell Consulting Logo"
                  width={164}
                  height={48}
                />
              </Link>
              <p className="mt-6 text-base text-white/70 leading-[1.6] max-w-sm">
                Stratwell Consulting helps businesses streamline operations, optimize performance, and achieve measurable growth.
              </p>
              <Link href="/contact" className="mt-8 inline-block bg-white text-[#0F1828] font-medium text-base py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Column 2: Menu */}
            <div>
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">
                Menu
              </h3>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-white hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div>
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">
                Socials
              </h3>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-base text-white hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="text-base text-white">
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+15558676543" className="hover:underline">+1 (555) 867-6543</a>
                </li>
                <li>
                  <a href="mailto:contact@stratwellconsulting.com" className="hover:underline">contact@stratwellconsulting.com</a>
                </li>
                <li className="leading-[1.6]">
                  420 Stratwell Avenue, Suite 300, <br /> Boston, MA 02116, USA
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10"></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 lg:gap-x-4 pt-10">
          <p className="text-sm text-white/50 text-center lg:text-left order-3 lg:order-1">
            © 2025 Stratwell Consulting Framer Template
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/50 order-2 lg:order-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-50 select-none">|</span>
            <a href="#" className="hover:text-white transition-colors">T&C</a>
            <span className="opacity-50 select-none">|</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Built in Framer</a>
            <span className="opacity-50 select-none">|</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Created by Chernyshov</a>
          </div>

          <a 
            href="https://www.framer.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative inline-flex items-center bg-white text-black font-semibold text-[13px] py-2 pl-[32px] pr-[10px] rounded-lg min-w-max order-1 lg:order-3"
          >
            <FramerLogoIcon />
            Made in Framer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;