import React,{ useState,useEffect,useLayoutEffect } from 'react'
import './hero.css'

let Hero = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const url = 'https://quotes15.p.rapidapi.com/quotes/random/'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ea120b2e29mshe5038ad3cf5946cp11f980jsn5f3ad2522c3f',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
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