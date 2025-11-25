import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that follows best practices and modern standards.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Tackling real-world challenges with creative solutions and innovative thinking.",
  },
  {
    icon: Rocket,
    title: "User Experience",
    description: "Building seamless, intuitive interfaces that users love to interact with.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I'm a passionate Full-Stack JavaScript Developer with 1 year of hands-on experience 
            building modern, fast, and scalable web applications. I specialize in creating clean user 
            interfaces, efficient backend APIs, and end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-mono text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
