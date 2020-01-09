import React, { useEffect, useState } from 'react'
import GenericCard from './genericCard'
import getRandomArray from '../../utils/getRandomArray'

export default () => {
  const [repos, setRepos] = useState([]);
  const numberElements = 5;

  let json = require('../../data/portfolio/colors.json'); 
  let map;
  let array = getRandomArray(numberElements);
  let colors;

  // This a hook that substitutes componentDidMount and componentDidUpdate,
  // it is ideal to http requests
  useEffect(() => {

    // It reads from the session storage the key repos
    const data = sessionStorage.getItem("repos");
    let myRepos;

    if (data) {
        myRepos = JSON.parse(data);

        return setRepos(myRepos);
    }

    async function fectchRepos() {
        const response = await fetch("https://api.github.com/users/hgodinez89/repos");
        myRepos = await response.json();

        // It creates the repos key in the session storage
        // this only lives while the browser is open, when
        // this closes the repos key is destroyed
        sessionStorage.setItem("repos", JSON.stringify(myRepos));
    
        setRepos(myRepos)
    }

    fectchRepos();
    
  }, []);

  return (
    repos.map((repo) => {

        if (repo.name !== 'hgodinez89.github.io'){
            map = new Map(Object.entries(json))
    
            if (array.length === 0) {
                array = getRandomArray(numberElements)
            }
            
            colors = map.get(`color_${array[0]}`)
    
            // Delete the first element
            array.shift();

            return <GenericCard repo={repo} colors={colors} key={repo.id} />
        } else {
            return ''
        }
    })
  )
}
