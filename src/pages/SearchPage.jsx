import React from 'react'
import { VideoList } from '../components'
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const { query } = useParams();
    console.log("in search page")
  return (
    <div>
      <VideoList query={query} />
    </div>
  )
}

export default SearchPage
