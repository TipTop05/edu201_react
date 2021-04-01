import React from "react";
import {Link} from "react-router-dom";


{/* Мы хотим, чтобы в классе PostList образовались все функции, методы и свойства,
которые доступны доступны компонентам Reat поэтому пишем React.Component */}
{/* В React после отрисовки компонентов render, запускается метод componentDidMount */}
export class Post extends React.Component{

    componentDidMount() {
        console.log("Компонет Post отрисован");
        fetch("http://f92553mg.beget.tech/php/getPost.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
            })

    }

    render() {
            console.log("Компонет Post рисуется");
            return  <div>
                    <h3 className="text-center my-3">Название статьи</h3>
                    <p className="my-4 fs-5" align="justify">Текст статьи</p>
                    <p className="my-3 fs-6">Автор: </p>
                    <p className="my-3 fs-6">Дата добавления: </p>
                    </div>

    }
}
