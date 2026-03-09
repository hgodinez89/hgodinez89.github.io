import React, { useEffect, useState } from 'react';
import GenericCard from './GenericCard';
import getRandomArray from '../utils/getRandomArray';
import colors from '../data/portfolio/colors.json';

interface Repo {
  id: number;
  name: string;
  description: string;
  homepage: string;
  html_url: string;
}

const NUMBER_OF_CARDS = 5;

export default function CardPortfolio() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const cached = sessionStorage.getItem('repos');
    if (cached) {
      setRepos(JSON.parse(cached));
      return;
    }

    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/hgodinez89/repos');
      const data: Repo[] = await response.json();
      sessionStorage.setItem('repos', JSON.stringify(data));
      setRepos(data);
    }

    fetchRepos();
  }, []);

  const colorMap = new Map(Object.entries(colors));
  const colorKeys = getRandomArray(NUMBER_OF_CARDS);
  let keyIdx = 0;

  return (
    <>
      {repos.map((repo) => {
        if (repo.name === 'hgodinez89.github.io') return null;
        if (!repo.description || !repo.homepage) return null;

        if (keyIdx >= colorKeys.length) {
          colorKeys.push(...getRandomArray(NUMBER_OF_CARDS));
        }

        const colorKey = `color_${colorKeys[keyIdx]}`;
        keyIdx++;
        const repoColors = (colorMap.get(colorKey) as string[]) ?? ['bg-blue-500', 'text-blue-500'];

        return <GenericCard key={repo.id} repo={repo} colors={repoColors} />;
      })}
    </>
  );
}
