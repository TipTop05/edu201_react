import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";

{/* Это будем разносить в разные файлы

function ContactUs(){
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}

function AboutUs(){
    return (
        <div className="container my-5">
            <h1>О нас</h1>
        </div>
    )
}

function MainPage(){
    return (
        <div className="container my-5">
            <h1>Главная страница</h1>
        </div>
    )
}

*/}

function App() {
    return (
        <div className="container">
            {/* Одностраничная SPA навигация */}
            <BrowserRouter>
                <Menu/>    {/* Подключаем компонент Меню */}
                <Route exact path="/" render={()=><PostList/>} />
                <Route path="/about" render={()=><h1>О нас</h1>}/>
                <Route path="/contact-us" render={()=><h1>Контакты</h1>}/>
                <Route path="/post" render={()=><Post/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;

