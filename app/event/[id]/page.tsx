import * as api from "@/app/api/site"
import { Search } from "@/app/components/site/search"
import { redirect } from "next/navigation"


type Props = {
    params:{
        id:string
    }
}

const page = async({params}:Props)=>{

    const eventItem = await api.getEvent(parseInt(params.id));
    if(!eventItem || !eventItem.status) return redirect('/');
 

    return(
        <main className="text-center mx-auto max-w-lg p-5 ">
            <header>
                <h2 className="text-2xl text-yellow-400">Amigo secreto</h2>
                <h1  className="text-3xl mt-5 mb-2">{eventItem.title}</h1>
                <p className="text-sm mb-5">{eventItem.description}</p>
            </header>

            <Search id={eventItem.id}/>

            <footer className="mt-5 text-sm">criado por Lucas Ferreira.</footer>
        </main>
    )
}
export default page;