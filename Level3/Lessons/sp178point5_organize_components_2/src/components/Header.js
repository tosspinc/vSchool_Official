import imageone from "../imgs/react-logo.png"

export default function Header() {
    return (
        <div>
            <header>
                <nav className="nav">
                    <img src={imageone} className="nav-logo" />

                    <ul className="nav-items">
                        <li>About Us!</li>
                        <li>Content</li>
                        <li>Pricing</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}