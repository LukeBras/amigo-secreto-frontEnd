'use client'

import { escapeCpf } from "@/app/utils/escapeCpf";

import { useState } from "react";


type Props = {
    onSearchButton:(cpf:string)=>void;
    loading:boolean;
}

export  const SearchForm = ({onSearchButton,loading}:Props)=>{
    const [cpfInput,setCpfInput] = useState('');
    return(
        <div>
            <p className="mb-3">Qual o seu CPF?</p>
            <input
                type="text"
                inputMode="numeric"
                placeholder="Digite seu CPF"
                className="w-full outline-none rounded-lg  p-3 bg-white text-black text-center text-3xl disabled:opacity-50"
                autoFocus
                value={cpfInput}
                onChange={e=>setCpfInput(escapeCpf(e.target.value) )}
                disabled={loading}
             
             />

            <button 
            onClick={()=>onSearchButton(cpfInput)}
            disabled={loading}
            className="w-full p-3 mt-3 border-b-4 border-blue-600 rounded-md bg-blue-800 text-3xl text-white active:border-0 disabled:opacity-50">
                {loading ? 'Buscando...':'Entrar'}
            </button>
        </div>
    )
}