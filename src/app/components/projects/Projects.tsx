type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: 'project1',
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 Tailwind CSS를 사용하여 구현한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 모던한 UI/UX를 제공합니다.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 'project2',
    title: '할 일 관리 앱',
    description: '사용자가 할 일을 추가, 편집, 완료 처리할 수 있는 웹 애플리케이션입니다. 사용자 인증과 할 일 목록 필터링 기능을 포함합니다.',
    technologies: ['React', 'Redux', 'Firebase', 'CSS Modules'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 'project3',
    title: '쇼핑몰 웹사이트',
    description: '온라인 쇼핑몰 웹사이트로, 제품 목록, 장바구니, 결제 시스템 등의 기능을 제공합니다. RESTful API와 상태 관리 라이브러리를 활용했습니다.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
  },
];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
      <div className="p-5 sm:p-6 flex-grow">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm sm:text-base text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors touch-target flex items-center justify-center"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors touch-target flex items-center justify-center"
              aria-label={`Live demo for ${project.title}`}
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          <span className="text-primary">프로젝트</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 