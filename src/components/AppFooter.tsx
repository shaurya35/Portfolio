// src/components/AppFooter.tsx
import Link from 'next/link';

const AppFooter: React.FC = () => {
  const config = {
    dev: {
      contacts: {
        social: {
          twitter: { url: 'https://twitter.com/', user: 'yourusername' },
          facebook: { url: 'https://facebook.com/', user: 'yourusername' },
          github: { url: 'https://github.com/', user: 'yourusername' },
        },
      },
    },
  };

  return (
    <footer className="flex md:justify-between border-top text-menu-text font-fira_retina">
      <div className="w-full flex justify-between md:justify-start">
        <span id="social-title" className="h-full flex justify-center items-center border-right px-5">
          find me in:
        </span>
        <div id="social-icons" className="flex">
          <Link href={`${config.dev.contacts.social.twitter.url}${config.dev.contacts.social.twitter.user}`} target="_blank">
            <img src="/icons/social/twitter.svg" />
          </Link>
          <Link href={`${config.dev.contacts.social.facebook.url}${config.dev.contacts.social.facebook.user}`} target="_blank">
            <img src="/icons/social/facebook.svg" />
          </Link>
          <Link href={`${config.dev.contacts.social.github.url}${config.dev.contacts.social.github.user}`} target="_blank">
            <img src="/icons/social/github.svg" />
          </Link>
        </div>
      </div>
      <Link href={`${config.dev.contacts.social.github.url}${config.dev.contacts.social.github.user}`} target="_blank" className="hidden md:flex items-center px-5 border-left">
        @{config.dev.contacts.social.github.user}
        <img src="/icons/social/github.svg" />
      </Link>
    </footer>
  );
};

export default AppFooter;
