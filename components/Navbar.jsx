import ReactIcon from "../images/react-icon-small.png"

export default function Navbar() {
    return(
        <div className="navBar">
            <img className="reactIcon" src={ReactIcon} alt="React Icon"/>
            <h2 className="navHeader">ReactFacts</h2>
            <h3 className="navTitle">React Course - Project 1</h3>
        </div>
    )
}