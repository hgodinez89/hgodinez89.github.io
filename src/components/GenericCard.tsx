import React from 'react';

interface Repo {
  id: number;
  name: string;
  description: string;
  homepage: string;
  html_url: string;
}

interface Props {
  repo: Repo;
  colors: string[];
}

export default function GenericCard({ repo, colors }: Props) {
  const description = repo.description
    ? repo.description.length <= 20
      ? repo.description
      : repo.description.substring(0, 20) + '...'
    : '';

  return (
    <div
      className={`flex-shrink-0 mr-6 my-6 relative overflow-hidden ${colors[0]} rounded-lg max-w-xs shadow-lg`}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: 'scale(1.5)', opacity: '0.1' }}
      >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: 'radial-gradient(black, transparent 60%)',
            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
            opacity: '0.2',
          }}
        />
        <img className="relative w-40 h-40" src={repo.homepage} alt={repo.description ?? repo.name} />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block font-semibold text-base">{repo.name}</span>
        <div className="flex items-center mt-1">
          <span className="block text-xs opacity-75 w-5/6 -mb-1">{description}</span>
          <a
            href={repo.html_url}
            className={`block bg-white rounded ${colors[1]} text-xs font-bold px-3 py-2 leading-none flex items-center hover:bg-blue-500 hover:text-white`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
