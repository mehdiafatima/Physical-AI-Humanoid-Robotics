import React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.css';
import ChatbotWidget from "@site/src/components/ChatbotWidget";

const chapters = [
  {
    title: "Introduction",
    description: "Get an overview of Physical AI and Humanoid Robotics, understanding the concepts and scope of this exciting field."
  },
  {
    title: "Setup Guides",
    description: "Step-by-step instructions to set up your development environment, tools, and simulation platforms for hands-on learning."
  },
  {
    title: "Module 1: ROS 2",
    description: "Learn how to use Robot Operating System 2 (ROS 2) for controlling robots, managing nodes, and building robotic applications."
  },
  {
    title: "Module 2: Digital Twin",
    description: "Explore Digital Twin simulations to model physical robots and test AI algorithms safely before deploying in real environments."
  },
  {
    title: "Module 3: NVIDIA Isaac",
    description: "Dive into NVIDIA Isaac SDK for AI-powered robotics simulation, perception, and motion planning."
  },
  {
    title: "Module 4: VLA & Humanoid Robotics",
    description: "Understand Vision-Language Agents (VLA) integration with humanoid robots for intelligent behavior and real-world interaction."
  },
  {
    title: "References",
    description: "Find curated resources, papers, and documentation to deepen your understanding and continue exploring."
  },
];

const FirstPage: React.FC = () => {
  return (
    <motion.div
      className={styles['book-first-page-grid']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={styles['book-chapters-grid']}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className={styles.mainHeading}>
          This book guides you through the world of Physical AI & Humanoid Robotics.
        </h1>
        <h2 className={styles.subHeading}>
          Explore practical AI applications, simulations, and understand how intelligent systems interact with the real world.
        </h2>

        <div className={styles.chapterGrid}>
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              className={styles.chapterCard}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.5)" }}
            >
              <strong className={styles.chapterTitle}>{chapter.title}</strong>
              <p className={styles.chapterDescription}>{chapter.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional content below chapters */}
        <motion.div
          className={styles.additionalContent}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className={styles.sectionHeading}>What You'll Learn in This Book</h2>
          <ul>
            <li>Hands-on AI applications in real-world robotics.</li>
            <li>How to integrate humanoid robots with intelligent systems.</li>
            <li>Simulating robots safely using Digital Twin technology.</li>
            <li>Using ROS 2 and NVIDIA Isaac for robotics control and simulation.</li>
            <li>Understanding the role of Vision-Language Agents (VLA) in humanoid robotics.</li>
            <li>Accessing curated references and resources for deeper learning.</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
    
  );
};

export default FirstPage;
