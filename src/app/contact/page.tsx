import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      name: "Email",
      value: "gauravramyadav@gmail.com",
      href: "mailto:gauravramyadav@gmail.com",
      icon: Mail,
      color: "bg-rose-100 dark:bg-rose-900/30",
      accentColor: "text-rose-600 dark:text-rose-400",
      description: "Drop me an email"
    },
    {
      name: "GitHub",
      value: "@archduke1337",
      href: "https://github.com/archduke1337",
      icon: Github,
      color: "bg-slate-100 dark:bg-slate-800",
      accentColor: "text-slate-700 dark:text-slate-300",
      description: "Check my repositories"
    },
    {
      name: "LinkedIn",
      value: "@gurvv",
      href: "https://www.linkedin.com/in/gurvv/",
      icon: Linkedin,
      color: "bg-blue-100 dark:bg-blue-900/30",
      accentColor: "text-blue-600 dark:text-blue-400",
      description: "Let's connect professionally"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <section id="contact" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-900/30">
                <Send size={24} className="text-rose-600 dark:text-rose-400" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-apple-900 dark:text-white">Contact</h1>
            </div>
            <p className="text-lg sm:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              Let's connect and explore opportunities, ideas, and collaborations together.
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 animate-slide-up animate-delay-200">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.name !== "Email" ? "_blank" : undefined}
                  rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="apple-card-elevated group hover:shadow-elevation-3 transition-smooth hover:translate-y-[-2px] flex flex-col"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`p-4 rounded-xl w-fit mb-4 ${contact.color} group-hover:scale-110 transition-smooth`}>
                    <Icon size={28} className={contact.accentColor} />
                  </div>
                  <h3 className="font-bold text-apple-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-smooth">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-apple-500 dark:text-apple-400 mb-3">{contact.description}</p>
                  <p className="text-xs text-apple-600 dark:text-apple-300 font-medium mt-auto">{contact.value}</p>
                </a>
              );
            })}
          </div>
          
          {/* CTA Card */}
          <div className="apple-card-elevated p-8 text-center animate-slide-up animate-delay-300 border-2 border-blue-600 border-opacity-20 dark:border-opacity-30">
            <p className="text-apple-700 dark:text-apple-200 leading-relaxed text-lg font-medium mb-6">
              I'm always excited about discussing new projects, exploring creative ideas, and collaborating on meaningful work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:gauravramyadav@gmail.com"
                className="apple-btn-primary inline-flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/gurvv/"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
