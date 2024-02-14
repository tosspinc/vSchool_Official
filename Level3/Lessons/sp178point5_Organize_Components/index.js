import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"

function Page() {
    return (
        <div>
           <Header />
           <MainContent />
           <Footer />
        </div>
    )
}

ReactDom.render(<Page />, document.getElementById("root"))