// src/components/AppHeader.tsx
import Link from 'next/link';

const AppHeader: React.FC = () => {
  const config = {
    dev: {
      logo_name: 'YourLogo',
    },
  };

  return (
    <header id="navbar" className="w-full hidden lg:flex flex-col">
      <nav className="w-full flex justify-between border-bot">
        <Link href="https://github.com/alexdeploy/developer-portfolio-v2" id="nav-logo">
          {config.dev.logo_name}
        </Link>
        <div className="flex">
          <Link href="/" id="nav-link">
            _hello
          </Link>
          <Link href="/about-me" id="nav-link">
            _about-me
          </Link>
          <Link href="/projects" id="nav-link">
            _projects
          </Link>
        </div>
        <Link href="/contact-me" id="nav-link-contact">
          _contact-me
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;
