import Cards from './Cards';
import { getData } from './utils/api';
import { useEffect, useState } from 'react';
import { prev, next } from './utils/pagination';

export default function App() {

  //States
  const [data, setData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  //Constants to pagination
  const elementsPerPage = 3
  const lastParam = currentPage * elementsPerPage
  const firstParam = lastParam - elementsPerPage

  //fecth data 
  const fetching = async () => {
    setData(await getData())
  }
  //Load data
  useEffect(() => { fetching() }, [])

  // pagination
  const nPage = (data?.results.length / elementsPerPage)
  const elements = data?.results.slice(firstParam, lastParam)

  return (
    <main className='vh-100 d-flex flex-column justify-content-center align-items-center'>
      <Cards elements={elements} />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <button className='btn btn-success' onClick={() => prev(currentPage, setCurrentPage)}>Prev</button>
        <input type="text" value={currentPage} className='form-control mx-1 display' readOnly />
        <button className='btn btn-success' onClick={() => next(currentPage, nPage, setCurrentPage)}>Next</button>
      </div>
    </main>
  )
}