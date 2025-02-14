'use client';

import SectionHeader from './texts/SectionHeader';
import SectionSubHeader from './texts/SectionSubHeader';
import SkillCard from './cards/SkillCard';
import ExperienceCard from './cards/ExperienceCard';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'web3',
    skills: ['Solidity', 'Ethereum EVM', 'Viem/Wagmi', 'Ethers.js'],
  },
  { title: 'backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { title: 'tools', skills: ['Git', 'Docker', 'AWS', 'CI/CD'] },
];

const experienceData = [
  {
    title: 'Web3 Frontend Developer - Nym Technologies SA',
    period: 'Mar 2022 - Present',
    description:
      "Contributing to the improvement of NYM's existing frontend applications (wallet, explorer, WASM tools), optimising user experience and accessibility. Independently developing new websites, ensuring seamless access to NYM's strong network-level privacy benefits.",
  },
  {
    title: 'Frontend Developer - Gaming Innovation Group',
    period: 'Apr 2018 - Mar 2022',
    description:
      'Led frontend development across multiple casino platforms using Vue.js, Preact, and Web Components. Key projects included HardRock Casino, Mr. Green Casino, and development of the Wand Framework. Focused on performance, scalability, and user experience.',
  },
  {
    title: 'Frontend Developer Intern - Adalab',
    period: 'Oct 2017 - Mar 2018',
    description:
      'Participated in high-intensity Frontend program, collaborating on multiple web development projects using agile methodologies. Worked on both internal and external organization projects, developing strong collaborative skills.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen p-8 sm:p-20">
      <SectionHeader title="About Me" />
      <div className="max-w-3xl space-y-8">
        <section className="flex flex-col md:flex-row md:items-start md:gap-8">
          <motion.div
            className="relative mb-6 h-48 w-48 flex-shrink-0 md:mb-0"
            initial={{ opacity: 0.6, scale: 0.5 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient p-1">
              <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-black">
                <Image
                  src="/gala-profile.jpeg"
                  alt="Gala's profile picture"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <div>
            <SectionSubHeader title="Introduction" />
            <p className="text-gray-600 dark:text-gray-300">
              A civil engineer turned frontend developer with over 7 years of
              experience, currently specializing in Web3 development. With
              hands-on experience in integrating Web3 technologies like CosmWasm
              and expanding expertise in viem and wagmi, I build seamless
              decentralized applications. Passionate about privacy and
              decentralization, I am always eager to explore innovative
              solutions and contribute to the future of Web3.
            </p>
          </div>
        </section>

        <section>
          <SectionSubHeader title="Skills" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {skillsData.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Experience" />
          <div className="space-y-6">
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
