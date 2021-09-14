import TodoWrapper from "../../components/Todo_Wrapper/Todo_Wrapper";
import './Home.css'
import Img from '../../images/bg-desktop-dark.jpg'

export default function Home(){
    return(
        <>
        <div className="todo-home">
            <div className="banner-wrapper">
                <img className="banner-img" src={Img} alt="bg" />
            </div>
            <TodoWrapper/>
            <div className="bg-default">
            
            </div>
        </div>
        </>
    )
}