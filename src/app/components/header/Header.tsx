'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky-header py-3 sm:py-4 px-4 sm:px-6 md:px-12 ${isScrolled ? 'bg-background/95 shadow-sm' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-heading text-xl sm:text-2xl font-bold text-primary">
          Portfolio
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="#home" className="font-medium text-foreground hover:text-primary transition-colors py-2">
            홈
          </Link>
          <Link href="#about" className="font-medium text-foreground hover:text-primary transition-colors py-2">
            소개
          </Link>
          <Link href="#projects" className="font-medium text-foreground hover:text-primary transition-colors py-2">
            프로젝트
          </Link>
          <Link href="#skills" className="font-medium text-foreground hover:text-primary transition-colors py-2">
            기술
          </Link>
          <Link href="#contact" className="font-medium text-foreground hover:text-primary transition-colors py-2">
            연락처
          </Link>
        </nav>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button
          className="md:hidden text-foreground focus:outline-none touch-target flex items-center justify-center p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <nav className="md:hidden container mx-auto py-3 bg-background/95 border-t border-muted/30 mt-3 animate-fade-in">
          <div className="flex flex-col space-y-1">
            <Link
              href="#home"
              className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-md touch-target"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              홈
            </Link>
            <Link
              href="#about"
              className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-md touch-target"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              소개
            </Link>
            <Link
              href="#projects"
              className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-md touch-target"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              프로젝트
            </Link>
            <Link
              href="#skills"
              className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-md touch-target"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              기술
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-md touch-target"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              연락처
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
} 