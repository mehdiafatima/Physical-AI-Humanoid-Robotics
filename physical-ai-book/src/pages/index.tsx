import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Typewriter from "@site/src/components/Typewriter";

export default function Home(): ReactNode {
  return (
    <Layout title="" description="Physical AI & Humanoid Robotics Book">
      <main>
        <section className={styles.homepageBanner}>
          <div className={styles.container}>

            {/* Left Section */}
            <div className={styles.leftText}>
              <h1 className={styles.title}>
                <Typewriter text="Physical AI & Humanoid Robotics" speed={45} />
              </h1>

              <h2 className={styles.subtitle}>
                Bridging Intelligent Algorithms with Real-World Motion
              </h2>

              <p className={styles.intro}>
                Discover how AI steps out of the digital realm and into the
                physical world. Learn core concepts, explore simulations, and
                understand how intelligent systems power next-generation humanoid robots.
              </p>

              <a
                className="button button--secondary button--lg"
                href="/docs/introduction/overview"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                Start Reading →
              </a>
            </div>

            {/* Right Image */}
            <div className={styles.rightImage}>
              <img
                src="/img/robot.png"
                alt="Humanoid Robot"
                className={styles.robotImage}
              />
            </div>
          </div>
        </section>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
