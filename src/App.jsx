import { useState, useEffect, useRef, useCallback } from 'react';
import Scene3D from './components/Scene3D';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';

// Slides
import CoverSlide from './slides/CoverSlide';
import IntroSlide from './slides/IntroSlide';
import ResponseSlide from './slides/ResponseSlide';
import ParadigmSlide from './slides/ParadigmSlide';
import PushSlide from './slides/PushSlide';
import BullwhipSlide from './slides/BullwhipSlide';
import PullSlide from './slides/PullSlide';
import PullChallengesSlide from './slides/PullChallengesSlide';
import DecouplingSlide from './slides/DecouplingSlide';
import ComparisonSlide from './slides/ComparisonSlide';
import HybridSlide from './slides/HybridSlide';
import StrategySelectionSlide from './slides/StrategySelectionSlide';
import CasesSlide from './slides/CasesSlide';
import ConclusionSlide from './slides/ConclusionSlide';

const slideTitles = [
  'Início',
  'Introdução',
  'Capacidade de Resposta',
  'Paradigma de Operações',
  'Modelo Empurrado (Push)',
  'Desafios & Efeito Chicote',
  'Modelo Puxado (Pull)',
  'Desafios & Requisitos Pull',
  'Ponto de Desacoplamento',
  'Push vs Pull',
  'Modelo Híbrido',
  'Diretrizes de Seleção',
  'Estudo de Casos',
  'Considerações Finais'
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const totalSlides = slideTitles.length;

  const touchStart = useRef({ x: 0, y: 0 });
  const wheelTimeout = useRef(null);

  // ========== LOADER ==========
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
      setLoadProgress(progress);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // ========== NAVIGATION ==========
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  // ========== EVENT BINDINGS (KEYBOARD, WHEEL, SWIPE) ==========
  useEffect(() => {
    if (loading) return;

    // 1. Keyboard
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
      }
    };

    // 2. Touch Swipe
    const handleTouchStart = (e) => {
      touchStart.current = {
        x: e.changedTouches[0].screenX,
        y: e.changedTouches[0].screenY
      };
    };

    const handleTouchEnd = (e) => {
      const diffX = e.changedTouches[0].screenX - touchStart.current.x;
      const diffY = e.changedTouches[0].screenY - touchStart.current.y;

      // Detect horizontal swipe
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    // 3. Wheel Scroll
    const handleWheel = (e) => {
      if (wheelTimeout.current) return;
      
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 800); // Debounce to prevent skipping multiple slides

      if (e.deltaY > 30) {
        nextSlide();
      } else if (e.deltaY < -30) {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
        wheelTimeout.current = null;
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [goToSlide, loading, nextSlide, prevSlide, totalSlides]);

  // ========== RENDER ==========
  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div id="loader">
          <div className="loader-content">
            <div className="loader-logo">
              <div className="hexagon-spinner">
                <div className="hex hex1" />
                <div className="hex hex2" />
                <div className="hex hex3" />
              </div>
            </div>
            <h2 className="loader-title">LOGÍSTICA & CADEIA DE SUPRIMENTOS</h2>
            <div className="loader-bar">
              <div className="loader-progress" style={{ width: `${loadProgress}%` }} />
            </div>
            <p className="loader-text">Inicializando React + 3D Canvas...</p>
          </div>
        </div>
      )}

      {/* 3D Canvas Background */}
      <Scene3D currentSlide={currentSlide} />

      {/* Navigation */}
      {!loading && (
        <Navigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onGoToSlide={goToSlide}
          onPrev={prevSlide}
          onNext={nextSlide}
          slideTitles={slideTitles}
        />
      )}

      {/* Progress Bar */}
      {!loading && <ProgressBar current={currentSlide} total={totalSlides} />}

      {/* Slides Container */}
      {!loading && (
        <main id="slides-container">
          <section className={`slide ${currentSlide === 0 ? 'active' : ''}`} style={{ visibility: currentSlide === 0 ? 'visible' : 'hidden' }}>
            <CoverSlide isActive={currentSlide === 0} onNext={nextSlide} />
          </section>
          
          <section className={`slide ${currentSlide === 1 ? 'active' : ''}`} style={{ visibility: currentSlide === 1 ? 'visible' : 'hidden' }}>
            <IntroSlide isActive={currentSlide === 1} />
          </section>

          <section className={`slide ${currentSlide === 2 ? 'active' : ''}`} style={{ visibility: currentSlide === 2 ? 'visible' : 'hidden' }}>
            <ResponseSlide isActive={currentSlide === 2} />
          </section>

          <section className={`slide ${currentSlide === 3 ? 'active' : ''}`} style={{ visibility: currentSlide === 3 ? 'visible' : 'hidden' }}>
            <ParadigmSlide isActive={currentSlide === 3} />
          </section>

          <section className={`slide ${currentSlide === 4 ? 'active' : ''}`} style={{ visibility: currentSlide === 4 ? 'visible' : 'hidden' }}>
            <PushSlide isActive={currentSlide === 4} />
          </section>

          <section className={`slide ${currentSlide === 5 ? 'active' : ''}`} style={{ visibility: currentSlide === 5 ? 'visible' : 'hidden' }}>
            <BullwhipSlide isActive={currentSlide === 5} />
          </section>

          <section className={`slide ${currentSlide === 6 ? 'active' : ''}`} style={{ visibility: currentSlide === 6 ? 'visible' : 'hidden' }}>
            <PullSlide isActive={currentSlide === 6} />
          </section>

          <section className={`slide ${currentSlide === 7 ? 'active' : ''}`} style={{ visibility: currentSlide === 7 ? 'visible' : 'hidden' }}>
            <PullChallengesSlide isActive={currentSlide === 7} />
          </section>

          <section className={`slide ${currentSlide === 8 ? 'active' : ''}`} style={{ visibility: currentSlide === 8 ? 'visible' : 'hidden' }}>
            <DecouplingSlide isActive={currentSlide === 8} />
          </section>

          <section className={`slide ${currentSlide === 9 ? 'active' : ''}`} style={{ visibility: currentSlide === 9 ? 'visible' : 'hidden' }}>
            <ComparisonSlide isActive={currentSlide === 9} />
          </section>

          <section className={`slide ${currentSlide === 10 ? 'active' : ''}`} style={{ visibility: currentSlide === 10 ? 'visible' : 'hidden' }}>
            <HybridSlide isActive={currentSlide === 10} />
          </section>

          <section className={`slide ${currentSlide === 11 ? 'active' : ''}`} style={{ visibility: currentSlide === 11 ? 'visible' : 'hidden' }}>
            <StrategySelectionSlide isActive={currentSlide === 11} />
          </section>

          <section className={`slide ${currentSlide === 12 ? 'active' : ''}`} style={{ visibility: currentSlide === 12 ? 'visible' : 'hidden' }}>
            <CasesSlide isActive={currentSlide === 12} />
          </section>

          <section className={`slide ${currentSlide === 13 ? 'active' : ''}`} style={{ visibility: currentSlide === 13 ? 'visible' : 'hidden' }}>
            <ConclusionSlide isActive={currentSlide === 13} />
          </section>
        </main>
      )}

      {/* Hints */}
      {!loading && (
        <>
          <div className="keyboard-hint visible" style={{ opacity: currentSlide === 0 ? 0.8 : 0 }}>
            <span>Use <kbd>←</kbd> <kbd>→</kbd> ou <kbd>Espaço</kbd> para navegar</span>
          </div>
          <div className="touch-hint" style={{ opacity: currentSlide === 0 ? 0.8 : 0 }}>
            <div className="swipe-icon">👆</div>
            <span>Deslize para navegar</span>
          </div>
        </>
      )}
    </>
  );
}
