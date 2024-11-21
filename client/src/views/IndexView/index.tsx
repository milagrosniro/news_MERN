import { useEffect, useMemo } from "react";
import NewCard from "../../components/NewCard";
import { UseAppStore } from "../../stores/useAppStore";

const IndexView = () => {
  const {news, getNews, archiveNew} = UseAppStore();
 
  const hasNews = useMemo(()=> news && news.length,[news])

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <>
    <h1 className=" text-6xl font-extrabold text-red-500 uppercase">News</h1>
    {
      hasNews ? 
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
      {news.map(n => <NewCard key={n._id} _new={n} titleButton={'Archived'} onclickButton={()=>archiveNew} />)}
      </div> : 
      <p className=" my-10 text-center text-2xl">No news</p>
    }
    </>
  )
}

export default IndexView