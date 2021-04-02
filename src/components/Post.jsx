import React from "react";

export class Post extends React.Component{
    constructor() {
        super();
        this.state = {
            post : {}
        };
    }


    componentDidMount() {
        console.log("Компонет Post отрисован");
        const formData = new FormData();
        formData.append("id",1);
        fetch("http://f92553mg.beget.tech/php/getPost.php", {
            method: "POST",
            body: formData
        }) .then(response=>response.json())
            .then(result=>{
                this.setState({
                    post : {
                        title : result.title,
                        text : result.text,
                        author : result.author,
                        date_added : result.date_added

                    }
                })
                console.log(result);
            })
    }

    render() {
            console.log("Компонет Post рисуется");
        return  <div>
            <h3 className="text-center my-3">{this.state.post.title}</h3>
            <p className="my-4 fs-5" align="justify">{this.state.post.text}</p>
            <p className="my-3 fs-6">Автор: {this.state.post.author}</p>
            <p className="my-3 fs-6">Дата добавления: {this.state.post.date_added} </p>
        </div>

    }
}
