export default function Header() {
    return <header>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="../src/assets/img/dc-logo.png" alt="Logo DC" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">CHARACTERS</a></li>
                        <li className="active"><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}