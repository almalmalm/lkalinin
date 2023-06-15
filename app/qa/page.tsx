'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../styles.css';

interface Language {
  id: number;
  name: string;
}

interface Languages {
  [key: string]: Language;
}

interface Skills {
  languages: Languages;
  tools: any; // Update this type based on your actual data structure for tools
}

interface QaData {
  qa: {
    skills: Skills;
    projects: any; // Update this type based on your actual data structure for projects
  };
  dev: any; // Update this type based on your actual data structure for dev
}

export default function Qa() {
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/qa')
      .then((response) => response.json())
      .then((data: QaData) => {
        const languageNames = Object.values(data.qa.skills.languages).map(
          (language) => language.name
        );
        setLanguages(languageNames);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 md:text-5xl">
        Quality Assurance page
      </h1>
      <Link href="/" className="font-bold">
        Back
      </Link>
      <h3 className="font-bold text-3xl text-center mb-4">Projects</h3>
      <div className="flex justify-center">
        <div className="font-bold text-center w-fit bg-lime-200 rounded p-2">
          <a
            href="https://github.com/almalmalm/my-expenses-tests"
            target="_blank"
          >
            Cypress Tests + CI/CD for app &quot;My Expenses&quot; + QASE report
            integration
          </a>
        </div>
      </div>
      {/* <div>
        <h3>Skills</h3>
          <div>
            {languages.map((language, index) => (
              <div key={index}>{language}</div>
            ))}
          </div>
      </div> */}
    </div>
  );
}
