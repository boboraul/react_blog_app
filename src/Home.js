import React from 'react' 
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">
        {isLoading && <p className='statusMsg'>Content is loading ...</p>}
        {!isLoading && fetchError && <p className='statusMsg' style={{ color: 'red' }}>{fetchError} (could not connect with json-server)</p>}
        {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : 
        <p style={{ marginTop: "2rem" }}>
              No posts to display.
        </p>)}
    </main>
  )
}

export default Home