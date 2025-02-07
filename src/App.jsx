import { Slide, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Router from "./router/Router";
import { PokemonProvider } from "./context/PokemonProvider";

// 토스트는 루트에 위치하는 것이 좋다
const CustomedToast = styled(ToastContainer).attrs({
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
    limit: 3,
    transition: Slide,
})`
    .Toastify__toast--info {
        border: 3px solid #ee5351;
        background-color: white;
        color: #ee5351;
    }
    .Toastify__toast--error {
        background-color: #ee5351;
        color: white;
    }
`;

function App() {
    return (
        <>
            <PokemonProvider>
                <Router />
            </PokemonProvider>
            <CustomedToast />
        </>
    );
}

export default App;
