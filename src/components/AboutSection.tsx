'use client';

import SectionHeader from './texts/SectionHeader';
import SectionSubHeader from './texts/SectionSubHeader';
import SkillCard from './cards/SkillCard';
import ExperienceCard from './cards/ExperienceCard';
import ProfileImage from './common/ProfileImage';
import { aboutContent } from '@/constants/about';
import { useLanguage } from '@/providers/LanguageProvider';

export default function AboutSection() {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <section id="about" className="min-h-screen p-8 sm:p-20">
      <SectionHeader title={content.title} />
      <div className="max-w-3xl space-y-8">
        <section className="flex flex-col md:flex-row md:items-start md:gap-8">
          <ProfileImage />
          <div>
            <SectionSubHeader title={content.introduction.title} />
            <p className="text-gray-600 dark:text-gray-300">
              {content.introduction.description}
            </p>
          </div>
        </section>

        <section>
          <SectionSubHeader title={content.skillsSection.title} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {content.skillsSection.skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title={content.experienceSection.title} />
          <div className="space-y-6">
            {content.experienceSection.experience.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
