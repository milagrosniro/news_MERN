import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import Spinner from "./components/Header/Spinner";
import { Layout } from "./components/layout";
import { IArchivedNew, INew } from "./stores/newSlice/newSlice.types";
import { UseAppStore } from "./stores/useAppStore";
import ArchivedView from "./views/ArchivedView";
import IndexView from "./views/IndexView";

const socket = io('http://localhost:4000')
console.log(socket)

export type NewsUpload = {
  data: INew[] | [],
  type: 'news'
}

export type ArchivedNewsUpload = {
  data: IArchivedNew[] | [],
  type: 'news'
}

export interface INewsSocket {
  data: INew[] | IArchivedNew[]
}

export const App = () => {
  const {uploadedNews, news} = UseAppStore()
  console.log(news)

  useEffect(()=>{

    socket.on('connect', ()=>{
      console.log('Connected with SOCKETIO')
    })
 
  socket.on('news-updated', (newNews: INewsSocket)=> {
    console.log('newsss', newNews)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
     uploadedNews(newNews.data as INew[]) 
  })
  //  return () => {socket.disconnect()}
  },[uploadedNews])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <IndexView />
              </Suspense>
            }
            index
          />

          <Route
            path="/archived"
            element={
              <Suspense fallback={<Spinner />}>
                <ArchivedView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
