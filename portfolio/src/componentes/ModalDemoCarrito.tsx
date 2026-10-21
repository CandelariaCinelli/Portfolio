import React from 'react';
import { ShoppingCart, X, ExternalLink } from './IconosPersonalizados';
import { LISTA_PROYECTOS } from '../datos/datosPortafolio';

interface ModalDemoCarritoProps {
  estaAbierto: boolean;
  alCerrar: () => void;
}

export const ModalDemoCarrito: React.FC<ModalDemoCarritoProps> = ({ estaAbierto, alCerrar }) => {
  if (!estaAbierto) return null;

  const proyectoCarrito = LISTA_PROYECTOS.find((proyecto) => proyecto.id === 'proyecto-carrito');
  const demoCarritoUrl = proyectoCarrito?.enlaceRepositorio;

  return (
    <div
      id="modal-demo-carrito-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#261C14]/70 backdrop-blur-sm"
      onClick={alCerrar}
    >
      <div
        id="modal-demo-carrito-contenido"
        className="relative w-full max-w-5xl bg-[#F9F6F0] rounded-lg border border-[#261C14]/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#261C14]/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#261C14]">Repositorio real de cart-app</h3>
              <p className="text-xs text-[#261C14]/60 font-mono">
                Proyecto de carrito de compras publicado en GitHub
              </p>
            </div>
          </div>
          <button onClick={alCerrar} className="p-1.5 text-[#261C14]/60 hover:text-[#261C14]" aria-label="Cerrar modal">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">
          <div className="flex items-center justify-between gap-3 mb-4">
            <p className="text-sm text-[#261C14]/75">
              Repositorio GitHub del proyecto real de carrito de compras.
            </p>
            <a href={demoCarritoUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1 text-xs font-mono font-bold text-[#D27D2D] hover:underline">
              Abrir proyecto <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="rounded-lg border border-[#E5DACB] bg-white p-5">
            <p className="text-xs font-mono break-all text-[#261C14]/70">{demoCarritoUrl}</p>
            <p className="mt-3 text-sm text-[#261C14]/75">
              GitHub no permite incrustar el repositorio dentro de un iframe; abrilo para ver el código y la documentación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
