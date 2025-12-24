import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Users, Heart } from "lucide-react";
import { achievements } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={28} />,
  award: <Award size={28} />,
  users: <Users size={28} />,
  heart: <Heart size={28} />,
};

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group p-6 rounded-2xl glass hover-lift text-center"
    >
      <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
        {iconMap[achievement.icon]}
      </div>
      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
        {achievement.title}
      </h3>
      <p className="text-sm text-muted-foreground">{achievement.description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cyber-line" />
      <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-glow blur-3xl opacity-20" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Achievements & Leadership</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
