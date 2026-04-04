// Importa do createCarrossel
import { createCarrossel } from "./createCarrossel.js";

//export for main
export function initCarrossel() {
  const lista = document.querySelector(".lista__imagens");
  const btnLeft = document.querySelector(".left");
  const btnRight = document.querySelector(".right");
  const contador = document.querySelector(".controls span");

  if(!lista) return;

  // cria os itens
  createCarrossel(lista);
  
  // pega os itens depois de criar
    const itens = lista.querySelectorAll("li");

  let index = 0;
  const total = itens.length;

  //largura de cada item + gap
  const itemWidth = 206; //pq 200px + 6px gap

  function atualizarCarrossel() {
    lista.style.transform = `translateX(-${index * itemWidth}px)`;
    //atualizar número(01, 02 ...)
    contador.textContent = String(index + 1).padStart(2, "0");
  }

  atualizarCarrossel();

  //botão direito
  btnRight.addEventListener("click", () => {
    if (index < total - 1) {
      index++;
      atualizarCarrossel();
    }
  });

  //botão esquerdo
  btnLeft.addEventListener("click", () => {
    if (index > 0) {
      index--;
      atualizarCarrossel();
    }
  });
}
