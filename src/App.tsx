import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Navbar from "./components/navBar/NavBar";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
     <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
//Este é um exemplo de um componente React chamado App que é o componente raiz do aplicativo. Ele usa o React Router DOM para criar rotas para diferentes páginas em nosso aplicativo, e também usa um contexto chamado UserContext, que foi definido em outro lugar do aplicativo.
