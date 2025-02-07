import MyPokemon from "../components/MyPokemon";
import PokemonList from "../components/PokemonList";
import DexStyle from "../style/globalStyle";

function Dex() {
    return (
        <>
            <DexStyle />
            <MyPokemon />
            <PokemonList />
        </>
    );
}

export default Dex;
