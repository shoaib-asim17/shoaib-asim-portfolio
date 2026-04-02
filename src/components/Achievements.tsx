"use client";

import React from "react";
import { motion } from "framer-motion";

interface AchievementCard {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface AchievementsProps {
  achievements?: AchievementCard[];
}

const defaultAchievements: AchievementCard[] = [
  {
    id: "1",
    title: "Winner – Hack Revolution 2025",
    description:
      "Won ₹35,000 prize for building an innovative AI-driven solution within 36 hours as part of a team.",
    image: "/achievements/hack-revolution-2025.jpg",
  },
];

const Achievements: React.FC<AchievementsProps> = ({
  achievements = defaultAchievements,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="Achievements"
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Achievements
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-6">
            Recognition and milestones from my professional journey
          </p>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.15)",
              }}
              className="group relative h-full bg-dark-bg-secondary border border-glass-border rounded-xl overflow-hidden transition-all duration-300 hover:border-neon-cyan/50"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-dark-bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image Container */}
              {achievement.image && (
                <div className="relative h-56 overflow-hidden bg-dark-bg-tertiary">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              )}

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {achievement.title}
                </h3>

                <p className="text-text-secondary text-sm lg:text-base leading-relaxed flex-1">
                  {achievement.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-4 h-1 w-12 bg-neon-cyan rounded-full group-hover:w-full transition-all duration-300" />
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 pointer-events-none border-2 border-neon-cyan opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {achievements.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-secondary text-lg">
              No achievements added yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
