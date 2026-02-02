import { useHistory } from "react-router-dom";

const Contact = (props) => {
    const history = useHistory();  
    const redirectToAbout=() => {
        // props.history.push("/about");
    history.push("/about");
    }

    return (
        <div>
        <h1>Contact Us</h1>   
     <button className='btn btn-primary' onClick={() => redirectToAbout()}>Go To About Us</button>
        </div>
    )
}

export default Contact