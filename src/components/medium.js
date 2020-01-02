import React, { useState, useEffect } from 'react';
import Posts from './posts'

export default () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const data = sessionStorage.getItem('posts');

        if (data) {
            setPosts(JSON.parse(data));
        }

        let myPosts;

        async function getMediumPosts() {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz");
            myPosts = await response.json();

            sessionStorage.setItem('posts', JSON.stringify(myPosts.items));

            setPosts(myPosts.items);
        }

        getMediumPosts();

    }, []);

    return (
        <div className='max-w-4xl mx-auto'>            
          <header className='mt-20 mb-8 text-center'>
            <h2 className='text-3xl font-bold text-center'>Mis posts en Medium</h2>
          </header>
          <ul className='medium-list'>
            {posts.map(post => {
               return <Posts data={post} key={post.guid} />
             })}
          </ul>
        </div>
    );
}