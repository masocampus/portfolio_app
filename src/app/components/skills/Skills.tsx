import React from 'react';

type Skill = {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design';
};

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 5, category: 'frontend' },
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'React', level: 4, category: 'frontend' },
  { name: 'Next.js', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 4, category: 'frontend' },
  { name: 'Node.js', level: 3, category: 'backend' },
  { name: 'Express', level: 3, category: 'backend' },
  { name: 'MongoDB', level: 3, category: 'backend' },
  { name: 'SQL', level: 2, category: 'backend' },
  { name: 'Git/GitHub', level: 4, category: 'tools' },
  { name: 'Figma', level: 3, category: 'design' },
];

function SkillBar({ skill }: { skill: Skill }) {
  const levelPercentage = (skill.level / 5) * 100;
  
  return (
    <div className="mb-3 sm:mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm sm:text-base font-medium">{skill.name}</span>
        <span className="text-xs sm:text-sm text-foreground/70">{skill.level}/5</span>
      </div>
      <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
        <div
          className="bg-primary h-1.5 sm:h-2 rounded-full skill-bar"
          style={{ '--skill-width': `${levelPercentage}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
}

export function Skills() {
  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const otherSkills = skills.filter((skill) => skill.category === 'tools' || skill.category === 'design');

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          <span className="text-primary">기술 스택</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted/20 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-muted">프론트엔드</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          <div className="bg-muted/20 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-muted">백엔드</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          <div className="bg-muted/20 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-muted">도구 & 기타</h3>
            {otherSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 