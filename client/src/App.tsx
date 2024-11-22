import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import Spinner from "./components/Header/Spinner";
import { Layout } from "./components/layout";
import { ARCHIVE, NEWS } from "./constants";
import { IArchivedNew, INew } from "./stores/newSlice/newSlice.types";
import { UseAppStore } from "./stores/useAppStore";
import ArchivedView from "./views/ArchivedView";
import IndexView from "./views/IndexView";

const BASE_URL = import.meta.env.VITE_URL 
const socket = io(BASE_URL)

export type NewsUpload = {
  dataNews: INew[] | [],
  type: typeof NEWS
}

export type ArchivedNewsUpload = {
  dataNews: IArchivedNew[] | [],
  type: typeof ARCHIVE
}

export interface INewsSocketParam {
data: ArchivedNewsUpload | NewsUpload
}

export interface INewsSocket {
  data: INew[] | IArchivedNew[]
}

export const App = () => {
  const {uploadedNews, uploadedArchivedNews} = UseAppStore()

  useEffect(()=>{

    socket.on('connect', ()=>{
      console.log('Connected with SOCKETIO')
    })
 
    socket.on('news-updated', (newNews: ArchivedNewsUpload | NewsUpload )=> {

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
     newNews.type === NEWS ? uploadedNews(newNews.dataNews) : uploadedArchivedNews(newNews.dataNews)
  })
  
  },[uploadedNews, uploadedArchivedNews])
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
