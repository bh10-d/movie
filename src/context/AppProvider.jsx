import React, {useState} from 'react';


export const AppContext = React.createContext();

export default function AppProvider({children}){

    const [page,setPage] = useState(1);
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
