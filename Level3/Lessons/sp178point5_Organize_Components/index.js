import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import reportWebVitals from "reportWebVitals"


function Page() {
    return (
        <div>
           <Header />
           <MainContent />
           <Footer />
        </div>
    );
}

reportWebVitals();
ReactDOM.createRoot(document.getElementById("root")).render