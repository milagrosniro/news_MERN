import { useEffect, useMemo } from "react";
import NewCard from "../../components/NewCard";
import { UseAppStore } from "../../stores/useAppStore";

const ArchivedView = () => {
  const {archivedNews, getArchivedNews, archiveNew} = UseAppStore();
  const hasArchivedNews = useMemo(()=>archivedNews.length,[archivedNews])

  useEffect(()=>{
    getArchivedNews()
  },[])

  return (
    <>
    <h1 className=" text-6xl font-extrabold text-red-500 uppercase">Archived News</h1>
    {
      hasArchivedNews ? 
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
      {archivedNews.map(n => <NewCard key={n._id} _new={n} titleButton={'Unarchive'} onclickButton={()=>archiveNew}
      />)}
      </div> : 
      <p className=" my-10 text-center text-2xl">No news</p>
    }
    </>
  )
}

export default ArchivedView