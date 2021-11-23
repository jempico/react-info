import '../styles.css'

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar_logo"> 
                <img className="logo" src="logo192.png" width="29px" alt=""/>
                <h3 className="logo_title">ReactFacts</h3>
            </div>
            <h4 className="navbar_title">React Course - Project 1</h4>
        </nav>
    )
}