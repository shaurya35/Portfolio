// src/pages/index.tsx
import { useEffect, useState } from 'react';
import SnakeGame from '../components/SnakeGame';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth <= 1024) setIsMobile(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    setLoading(false);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    !loading && (
      <main id="hello">
        <div className="css-blurry-gradient-blue"></div>
        <div className="css-blurry-gradient-green"></div>
        <section className="hero">
          <div className="head">
            <span>Hi all, I am</span>
            <h1>Your Name</h1>
            <h2>Your Role</h2>
          </div>
          <div id="info">
            <span className="action">// complete the game to continue</span>
            <p className="code">
              <span className="identifier">const</span>
              <span className="variable-name">githubLink</span>
              <span className="operator">=</span>
              <a href="https://github.com/your-github-username" className="string">
                "https://github.com/your-github-username"
              </a>
            </p>
          </div>
        </section>
        {!isMobile && <SnakeGame />}
      </main>
    )
  );
};

export default Home;
