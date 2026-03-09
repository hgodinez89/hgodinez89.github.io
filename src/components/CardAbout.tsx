import React, { useState } from 'react';

interface Props {
  idImg: string;
  idCheckbox: string;
  height: string;
  width: string;
}

export default function CardAbout({ height, width }: Props) {
  const [isNight, setIsNight] = useState(false);

  return (
    <div>
      <img
        style={{ height, width }}
        src={isNight ? '/imgs/profileNight.jpg' : '/imgs/profileDay.jpg'}
        alt="Hanzel Godinez"
      />
      <div className="flex items-center justify-end px-4 py-3">
        {/* Sun icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="16" height="16">
          <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z" />
        </svg>
        <label className="switch mx-1">
          <input
            type="checkbox"
            checked={isNight}
            onChange={() => setIsNight(!isNight)}
          />
          <span className="slider round" />
        </label>
        {/* Moon icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path d="M9.57 3.38a8 8 0 0 0 10.4 10.4 1 1 0 0 1 1.31 1.3 10 10 0 1 1-13-13 1 1 0 0 1 1.3 1.3zM7.1 5.04A8 8 0 1 0 18.3 16.27 10 10 0 0 1 7.08 5.04z" />
        </svg>
      </div>
    </div>
  );
}
