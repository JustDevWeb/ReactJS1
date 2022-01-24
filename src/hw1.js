import './hw1.scss';




function Message(props){
    return (
        <div className ="wrap-body">
            <main>
                <h3 className={props.name}>{props.text}</h3>
                <div className={"img-wrap"}>
                    <img alt={"Frankenstein"}/>
                </div>
            </main>
        </div>
    )
}

export default Message;
