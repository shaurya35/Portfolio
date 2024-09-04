// src/pages/contact-me.tsx
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import FormContentCode from '../components/FormContentCode';

interface ContactSource {
  title: string;
  url: string;
  user: string;
}

interface Config {
  dev: {
    contacts: {
      direct: {
        title: string;
        sources: Record<string, string>;
      };
      find_me_also_in: {
        sources: ContactSource[];
      };
    };
  };
}

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showContacts, setShowContacts] = useState<boolean>(true);

  const config: Config = {
    dev: {
      contacts: {
        direct: {
          title: 'Contact Me Directly',
          sources: {
            email: 'email@example.com',
            phone: '123-456-7890',
          },
        },
        find_me_also_in: {
          sources: [
            { title: 'Twitter', url: 'https://twitter.com/', user: 'yourusername' },
            { title: 'GitHub', url: 'https://github.com/', user: 'yourusername' },
            // More sources...
          ],
        },
      },
    },
  };

  const toggleShowContacts = () => {
    setShowContacts((prev) => !prev);
  };

  return (
    <main id="contact-me" className="page">
      <div id="mobile-page-title">
        <h2>_contact-me</h2>
      </div>
      <div id="page-menu" className="w-full flex flex-col">
        <div id="contacts" className="submenu">
          <div className="title" onClick={toggleShowContacts}>
            <img className="arrow" src="/icons/arrow.svg" alt="toggle" />
            <h3>contacts</h3>
          </div>
          {showContacts && (
            <div id="links">
              {Object.entries(config.dev.contacts.direct.sources).map(([key, source]) => (
                <div key={key} className="link">
                  <img src={`/icons/${key}.svg`} alt={key} />
                  <a href={`mailto:${source}`}>{source}</a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div id="find-me-in" className="submenu border-top">
          <div className="title" onClick={toggleShowContacts}>
            <img className="arrow" src="/icons/arrow.svg" alt="toggle" />
            <h3>find-me-also-in</h3>
          </div>
          {showContacts && (
            <div id="links">
              {config.dev.contacts.find_me_also_in.sources.map((source) => (
                <div key={source.title} className="link">
                  <img src="/icons/link.svg" alt={source.title} />
                  <a href={`${source.url}${source.user}`} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="form-content flex">
        <div className="left w-full">
          <ContactForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
          />
        </div>
        <div className="right w-full hidden lg:flex">
          <FormContentCode name={name} email={email} message={message} />
        </div>
      </div>
    </main>
  );
};

export default ContactMe;
