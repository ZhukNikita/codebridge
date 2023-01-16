import React, {useContext, useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import Homepage from "./pages/Homepage";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import ArticlePage from "./pages/ArticlePage";

function App() {
    const {store} = useContext(Context);
    useEffect(() => {
        store.GetArticles(6)
    }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/article/:id' element={<ArticlePage/>}/>
      </Routes>
    </div>
  );
}

export default observer(App);
