import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
import {AddPost} from "./components/AddPost";
import {Reg} from "./components/Reg";

function App() {
    return (
        <div className="container">
            {/* Одностраничная SPA навигация */}
            <BrowserRouter>
                <Menu/>    {/* Подключаем компонент Меню */}
                <Route exact path="/" render={()=><PostList/>} />
                <Route path="/addPost" render={()=><AddPost/>}/>
                <Route path="/post/:id" render={(props)=><Post {...props}/>}/>
                <Route path="/reg" render={()=><Reg/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;

