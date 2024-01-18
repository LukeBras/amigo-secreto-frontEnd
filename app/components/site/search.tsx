'use client'

import { SearchResult } from "@/app/types/SearchResult"
import { useState } from "react"
import { SearchForm } from "./SearchForm";
import * as api from "@/app/api/site"
import { SearchRevel } from "./SearchReveal";

type Props = {
    id:number
}

export const Search = ({id}:Props)=>{
    const [results,setResults] = useState<SearchResult>();
    const [loading,setLoading] = useState(false);

    const handleSearchButton = async (cpf:string)=>{


        if(!cpf) return;
        setLoading(true)
        const results = await api.searchCpf(id,cpf);
        setLoading(false)
        if(!results) return  alert('desculpe,não encontramos seu CPF.');

        setResults(results)
    }

    return(
        <section className="bg-gray-900 p-5 rounded">
                {!results && 
                 <SearchForm
                  onSearchButton={handleSearchButton}
                  loading={loading}
                    
                  />}
                {results && <SearchRevel results={results}/>}
        </section>
    )
}