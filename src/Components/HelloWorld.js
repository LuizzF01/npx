import Rindo from "./Imagens/rindo.psd"
import Rindoo from "./Imagens/rindoo.png"
import festa from "./Imagens/festa.avif"
import baila from "./Imagens/baila.png"
import './HelloWorld.module.css'

function HelloWorld () {

    return (
        <div>
            <div classname="container"><h1> Hello, World!!</h1>
            <img src={Rindo} alt="Icone chorando de rir " title="Icone Chorando de rir "/>
        <p>Clique no emoji para exibir o nome dele!</p>
            <img src={Rindoo} alt="Icone rindo " title=" Icone Sorrindo"/>

            <img src={festa} alt="Icone de festa " title="Icone de festa "/>

            <img src={baila} alt="Icone menina dançando " title="Icone menina dançando"  />

            </div>
        </div>
    )
}

export default HelloWorld