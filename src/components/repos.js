import React, { useEffect, useState } from 'react'
import Repo from './repo'

export default () => {
  const [repos, setRepos] = useState([]);
  const [reposCount, setReposCount] = useState([]);

  // This a hook that substitutes componentDidMount and componentDidUpdate,
  // it is ideal to http requests
  useEffect(() => {

    // It reads from the session storage the key repos
    const data = sessionStorage.getItem("repos");
    let myRepos;

    if (data) {
        myRepos = JSON.parse(data);

        // Update the count elements in setReposCount
        setReposCount(myRepos.length);

        // It shows only 12 elements
        myRepos = myRepos.slice(1, 13);

        return setRepos(myRepos);
    }

    async function fectchRepos() {
        const response = await fetch("https://api.github.com/users/hgodinez89/repos");
        myRepos = await response.json();

        // Update the count elements in setReposCount
        setReposCount(myRepos.length);

        // It creates the repos key in the session storage
        // this only lives while the browser is open, when
        // this closes the repos key is destroyed
        sessionStorage.setItem("repos", JSON.stringify(myRepos));

        // It shows only 12 elements
        myRepos = myRepos.slice(1, 13);
    
        setRepos(myRepos)
    }

    fectchRepos();
    
  }, []);

  return (
    <div className='max-w-4xl mx-auto mt-12'>
      <header className='text-center'>
        <h2 className='text-3xl font-bold'>Mi trabajo en OpenSource</h2>
        <p>
          Colaboración y contribucion en codigo
        </p>
      </header>
      <ul className='repos-list mt-8'>
        {repos.map((repo) => {
           // It sends the repositorie to the component repo.js
           //  Important: It also sends the repo.id this a good
           // practice because increment the performance
           return <Repo repo={repo} key={repo.id} />
         })}
      </ul>
      <div className='mt-8 text-center'>
        <a href='https://github.com/hgodinez89' className='btn' target='_blank' rel='noopener noreferrer'>Ver mas en GitHub ({reposCount})</a>
      </div>
    </div>
  )
}
