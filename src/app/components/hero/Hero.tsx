import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-3/5 mb-10 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            안녕하세요, <br className="md:hidden" />
            <span className="text-primary inline-block mt-1 md:mt-0">Masocampus</span>입니다
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 text-foreground/80 leading-relaxed">
            혁신적인 웹 솔루션을 통해 비즈니스 문제를 해결하는 풀스택 개발자입니다.
            프론트엔드와 백엔드 기술을 모두 활용하여 사용자 중심의 웹 애플리케이션을 구축합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <Link
              href="#projects"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 px-6 sm:px-8 py-3 rounded-md font-bold transition-colors touch-target"
            >
              프로젝트 보기
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 px-6 sm:px-8 py-3 rounded-md font-bold transition-colors mt-3 sm:mt-0 touch-target"
            >
              연락하기
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:w-2/5">
          <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary/40">
              Portfolio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 