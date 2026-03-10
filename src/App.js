import MyRoutes from "./MyRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      <Footer />
      <a
        href="https://wa.me/919449879100"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#1ebe5d] transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl" />
      </a>
    </div>
  );
}

export default App;
