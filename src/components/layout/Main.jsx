import Alert from "../ui/Alert";


export default function Main() {
    return <main>
        <div className="upper-main">

            <div className="container">

                <div className="content">
                    --&gt; Content goes here &lt;--
                </div>
            </div>
        </div>
        <Alert type="danger">
            lista di errori
            <ul className="discs">
                <li>errore 1: text err</li>
            </ul>
        </Alert>
        <div className="lower-main">
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#"><img src="../src/assets/img/buy-comics-digital-comics.png" alt="digital comics" />DIGITAL COMICS</a></li>
                        <li><a href="#"><img src="../src/assets/img/buy-comics-merchandise.png" alt="merchandise" />DC MERCHANDISE</a></li>
                        <li><a href="#"><img src="../src/assets/img/buy-comics-subscriptions.png" alt="subscriptions" />SUBSCRIPTION</a></li>
                        <li><a href="#"><img src="../src/assets/img/buy-comics-shop-locator.png" alt="shop locator" />COMIC SHOP LOCATOR</a></li>
                        <li><a href="#"><img src="../src/assets/img/buy-dc-power-visa.svg" alt="power visa" />DC POWER VISA</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
}