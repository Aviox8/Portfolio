import { motion } from 'framer-motion';
import { AnimatedSkillSVG } from './AnimatedSkillSVG';
import { Card } from './ui/card';
import { AnimatedNumber } from './ui/animated-number';
import { Code2, Server, Wrench, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'primary',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/Tailwind', level: 85 },
      { name: 'Three.js', level: 60 },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'secondary',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'WebRTC', level: 70 },
      { name: 'API Integration', level: 80 },
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'primary',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Vercel', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux/Parrot OS', level: 65 },
    ]
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'secondary',
    skills: [
      { name: 'Network Security', level: 70 },
      { name: 'Ethical Hacking', level: 60 },
      { name: 'OSINT', level: 65 },
    ]
  }
];

export function SkillsGrid() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider font-mono text-primary mb-3">
          Crafted, Not Copied
        </div>
        <div className="flex flex-col items-center justify-center">
          <AnimatedSkillSVG />
          <h2 className="gradient-text inline-block" style={{ fontSize: '3rem', fontWeight: 700 }}>
            My Tech Toolbox
          </h2>
        </div>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          The frameworks, languages, and tools powering my projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass h-full p-6 hover:border-primary/50 transition-all group focus-within:border-primary/50">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      category.color === 'primary'
                        ? 'bg-primary/10 border border-primary/20'
                        : 'bg-secondary/10 border border-secondary/20'
                    } group-hover:scale-110 transition-transform`}
                    aria-hidden="true"
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        category.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}
                    />
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>{category.title}</h3>
                </div>

                <ul className="space-y-3" role="list">
                  {category.skills.map((skill: any, skillIndex: number) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          category.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                        }`}
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground font-mono">
                            <AnimatedNumber value={skill.level} suffix="%" />
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 rounded bg-white/10 overflow-hidden">
                          <motion.div
                            className={`${
                              category.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                            } h-1.5`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * skillIndex }}
                          />
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card className="glass p-8 text-center">
          <h3 className="mb-6">Always Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Constantly exploring new technologies and methodologies to stay at the forefront of web development and cybersecurity
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'GraphQL', 'Docker', 'AWS', 'Blockchain', 'AI/ML'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full bg-muted/50 border border-white/10 text-sm font-mono hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
