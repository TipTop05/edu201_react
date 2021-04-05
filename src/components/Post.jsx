import React from "react";

export class Post extends React.Component{
    constructor(props) { // запускается 1
        super(props);
        this.state = {
            title : "",
            text : "",
            author : "",
            date_added : "",
        }
    }

    componentDidMount() { // запускается 3
        console.log("Компонет Post отрисован");
        const formData = new FormData();
        {/* formData.append("id",window.location.pathname.split('/')[2]); первоначально было так, а ниже сделали через пропсы */}
        formData.append("id",this.props.match.params.id);
        fetch("http://f92553mg.beget.tech/php/getPost.php", {
            method: "POST",
            body: formData
        }) .then(response=>response.json())
            .then(result=>{

                const date = new Date(result.date_added);
                let day =  date.getDate();
                let month = date.getMonth()+1;
                const year = date.getFullYear();
                if (day<10) day = ("0"+day);
                if(month<10) month = "0"+month;
                const date_added_new = year + "." + month + "." + day + " | " + date.getHours() + ":" + date.getMinutes();
                console.log(date_added_new);

                console.log(result);
                this.setState({
                    title : result.title,
                    text : result.text,
                    author : result.author,
                    date_added : date_added_new,
                })
            })
    }

    render() { // запускается 2
            console.log("Компонет Post рисуется");
        return  <div>
            <h3 className="text-center my-3">{this.state.title}</h3>
            <p className="my-4 fs-5" align="justify">{this.state.text}</p>
            <p className="my-3 fs-6">Автор: {this.state.author}</p>
            <p className="my-3 fs-6">Дата добавления: {this.state.date_added} </p>
        </div>

    }
}
