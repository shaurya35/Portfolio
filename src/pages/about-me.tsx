// src/pages/about-me.tsx
import { useState, useEffect } from 'react';
import CommentedText from '../components/CommentedText';

interface Section {
  title: string;
  icon: string;
  info: Record<string, Folder>;
}

interface Folder {
  title: string;
  description: string;
}

const AboutMe: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('personal-info');
  const [folder, setFolder] = useState<string>('bio');
  const [loading, setLoading] = useState<boolean>(true);

  const config = {
    dev: {
      about: {
        sections: {
          'personal-info': {
            title: 'Personal Info',
            icon: '/icons/info-personal.svg',
            info: {
              bio: {
                title: 'Bio',
                description: 'This is the bio content...',
              },
              // More folders...
            },
          },
          // More sections...
        } as Record<string, Section>,
      },
      contacts: {
        direct: {
          title: 'Contact Me Directly',
          sources: {
            email: 'email@example.com',
            phone: '123-456-7890',
          },
        },
        // More contacts...
      },
    },
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const focusCurrentSection = (section: Section) => {
    setCurrentSection(section.title);
    setFolder(Object.keys(section.info)[0]);
  };

  const focusCurrentFolder = (folder: Folder) => {
    setFolder(folder.title);
    setCurrentSection(
      Object.keys(config.dev.about.sections).find((section) =>
        config.dev.about.sections[section].info[folder.title]
      ) || currentSection
    );
  };

  return (
    <main id="about-me" className="page">
      {!loading && (
        <>
          <div id="mobile-page-title">
            <h2>_about-me</h2>
          </div>
          <div id="page-menu" className="w-full flex">
            <div id="sections">
              {Object.entries(config.dev.about.sections).map(([sectionTitle, section]) => (
                <div
                  key={sectionTitle}
                  id={`section-icon-${section.title}`}
                  className={`section-icon ${currentSection === section.title ? 'active' : ''}`}
                  onClick={() => focusCurrentSection(section)}
                >
                  <img src={section.icon} alt={`${section.title}-section`} />
                </div>
              ))}
            </div>
            <div id="section-content" className="w-full h-full">
              <div id="section-content-title" className="flex items-center">
                <img
                  id="section-arrow-menu"
                  src="/icons/arrow.svg"
                  alt=""
                  className="section-arrow mx-3 open"
                />
                <p className="font-fira_regular text-white text-sm">
                  {config.dev.about.sections[currentSection].title}
                </p>
              </div>
              <div id="folders">
                {Object.entries(config.dev.about.sections[currentSection].info).map(
                  ([folderTitle, folder]) => (
                    <div
                      key={folderTitle}
                      className={`folder ${folder.title === folderTitle ? 'active' : ''}`}
                      onClick={() => focusCurrentFolder(folder)}
                    >
                      <img src={`/icons/folder.svg`} alt="" className="mr-3" />
                      <p>{folderTitle}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="content flex">
            <div id="commented-text" className="ml-5 mr-10 overflow-scroll">
              <CommentedText text={config.dev.about.sections[currentSection].info[folder].description} />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default AboutMe;
