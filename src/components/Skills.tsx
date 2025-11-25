import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "ReactJS", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "NodeJS", icon: "🟢", color: "from-green-500 to-emerald-500" },
  { name: "ExpressJS", icon: "🚂", color: "from-gray-500 to-gray-700" },
  { name: "JavaScript", icon: "🟦", color: "from-yellow-500 to-amber-500" },
  { name: "TailwindCSS", icon: "🎨", color: "from-cyan-400 to-blue-600" },
  { name: "MySQL", icon: "🗄", color: "from-blue-600 to-indigo-600" },
  { name: "MongoDB", icon: "🗄", color: "from-green-600 to-teal-600" },
  { name: "JWT Auth", icon: "🔐", color: "from-purple-500 to-pink-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to build modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer">
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
