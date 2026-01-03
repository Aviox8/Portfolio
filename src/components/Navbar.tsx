import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Research", href: "/research" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-sm font-bold tracking-tight text-slate-900 sm:hidden hover:text-blue-600 transition-colors">
            GY
          </Link>
          <Link href="/" className="text-sm font-bold tracking-tight text-slate-900 hidden sm:block hover:text-blue-600 transition-colors">
            Gaurav Yadav
          </Link>
          <div className="flex gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
