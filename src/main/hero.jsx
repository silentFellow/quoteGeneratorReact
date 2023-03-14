import React,{ useState,useEffect,useLayoutEffect } from 'react'
import './hero.css'

let Hero = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const url = import.meta.env.VITE_URL
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_HOST
    }
  };

  let quoteFunc = () => {
    fetch(url, options)
      .then(response => response.json())
      .then(json => {
        setQuote(json.content)
        setAuthor(json.originator.name)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    quoteFunc();
  },[]);

  useLayoutEffect(() => {
    setQuote('Loading........., Please Wait !!!');
    setAuthor('Loading');
  },[]);

  return (
    <div className="main">
      <div className="quote">
        <div className="Aquote">
          <h3>{quote}</h3>
        </div>
        <div className="author">
          <h3>- {author}</h3>
        </div>
      </div>
      <button
        onClick={() => {
          quoteFunc();
        }}
      >
        Generate Random
      </button>
    </div>
  )
}

export default Hero;