import './hw1.scss';
import pictFranck from './giphy-700.gif';



function Message(props){
    return (
        <div className ="wrap-body">
            <main>
                <h3 className={props.name}>{props.text}</h3>
                <div className={"img-wrap"}>
                    <img src={pictFranck} alt={"Frankenstein"}/>
                </div>
            </main>
        </div>
    )
}

export default Message;