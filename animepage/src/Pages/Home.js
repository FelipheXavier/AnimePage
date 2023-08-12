import React, { useEffect, useState } from 'react'
import { ButtonController } from '../components/ButtonController'
import { Link } from 'react-router-dom'

export const Home = () => {
    const [AnimeList,setAnimeList] = useState([])
    const [Page,setPage] = useState(2)
    const getAnime = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
        
        
        setAnimeList(data.data)
    }
    useEffect(()=>{
        getAnime(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${Page}`)
    },[Page])
  return (
    <div className='container'>
      {AnimeList.map((anime)=>(
        <div className='animeCard'>
            <Link to={`anime/${anime.mal_id}`} key={anime.mal_id} className='animeList'>
                <img src={anime['images']['jpg']['image_url']} alt={anime.title} />
            </Link>
        </div>
      ))}
      <div className='btnDiv'>{Page !== 1 ? (<ButtonController Page={Page}
       setPage={setPage}/>) : (<button onClick={()=>setPage(Page + 1)}>Next Page</button>)}</div>
    </div>
  )
}


