import React, {useState} from 'react';


export const AppContext = React.createContext();

export default function AppProvider({children}){
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const CONFIG = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGEwMGRlOWJiYjIzZjE0MzRiMDFmZDIzMGVkNTRhZSIsInN1YiI6IjYzYzUyMGI3YTY3MjU0MDBjMTAxZTM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ddSiK0y-nLflChqkhrxdZ16t2TWECWyflZjhYotigDg'
        }
    };
    const [page,setPage] = useState(2);
    const [datafilm,setDataFilm] = useState([]);
    const [history,setHistory] = useState(()=>{
        const check = localStorage.getItem('history')
        if(check!==''){
            const JobsLocalStorage = JSON.parse(localStorage.getItem('history'))
            return JobsLocalStorage ?? []
        }else{
            localStorage.removeItem('history')
            return []
        }
    });


    return (<AppContext.Provider
        value={{
            BASE_URL,
            CONFIG,
            page,
            setPage,
            datafilm,
            setDataFilm,
            history,
            setHistory
        }}
    >
        {children}
    </AppContext.Provider>)

}
