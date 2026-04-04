// Importar imagens do CarrosselData
import {images} from "./carrosselData.js";

// Exportar
export function createCarrossel(lista){
    if(!lista) return;

    images.forEach((img) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="#" class="item">
                <img src="${img.src}" alt="${img.alt}" class="imagem">
            </a>
        `;

        lista.appendChild(li);
    })
}