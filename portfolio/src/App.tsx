/**
 * Portafolio Profesional de Candelaria Cinelli
 * Técnica en Desarrollo de Software | Especialista Full-Stack
 * Estilo Visual: Café Minimalista & Editorial Tech
 * Código e interfaz estrictamente en español
 */

import React, { useState } from 'react';
import { BarraNavegacion } from './componentes/BarraNavegacion';
import { SeccionInicio } from './componentes/SeccionInicio';
import { SeccionProyectos } from './componentes/SeccionProyectos';
import { SeccionSobreMi } from './componentes/SeccionSobreMi';
import { SeccionContacto } from './componentes/SeccionContacto';
import { PieDePagina } from './componentes/PieDePagina';
import { ModalCurriculum } from './componentes/ModalCurriculum';
import { ModalDemoCarrito } from './componentes/ModalDemoCarrito';
import { ModalArquitecturaBackend } from './componentes/ModalArquitecturaBackend';

export default function ContenedorPrincipal() {
  // Estados de control para los modales interactivos
  const [modalCVAbierto, setModalCVAbierto] = useState(false);
  const [modalDemoCarritoAbierto, setModalDemoCarritoAbierto] = useState(false);
  const [modalArquitecturaAbierto, setModalArquitecturaAbierto] = useState(false);
  const [tituloProyectoArquitectura, setTituloProyectoArquitectura] = useState<string>('Gestión de Usuarios Full-Stack');
  const [idProyectoArquitectura, setIdProyectoArquitectura] = useState<string>('proyecto-usuarios');

  // Controladores de eventos para abrir y cerrar modales
  const abrirModalCurriculum = () => {
    setModalCVAbierto(true);
  };

  const cerrarModalCurriculum = () => {
    setModalCVAbierto(false);
  };

  const abrirDemoCarrito = () => {
    setModalDemoCarritoAbierto(true);
  };

  const cerrarDemoCarrito = () => {
    setModalDemoCarritoAbierto(false);
  };

  const abrirModalArquitectura = (titulo?: string, idProyecto?: string) => {
    if (titulo) {
      setTituloProyectoArquitectura(titulo);
    }
    if (idProyecto) {
      setIdProyectoArquitectura(idProyecto);
    }
    setModalArquitecturaAbierto(true);
  };

  const cerrarModalArquitectura = () => {
    setModalArquitecturaAbierto(false);
  };

  return (
    <div id="aplicacion-portafolio" className="min-h-screen bg-[#F9F6F0] text-[#261C14] flex flex-col">
      {/* 1. Barra de Navegación Fija Arriba a la Derecha */}
      <BarraNavegacion alAbrirModalCV={abrirModalCurriculum} />

      {/* Contenido Principal con Espaciado Editorial */}
      <main className="flex-1">
        {/* 2. Sección Inicio (Hero con Fotografía Profesional y Acciones) */}
        <SeccionInicio alAbrirModalCV={abrirModalCurriculum} />

        {/* 3. Sección Proyectos (Arquitectura Full-Stack con Narrativa Inicio, Desarrollo, Desenlace) */}
        <SeccionProyectos
          alAbrirDemoCarrito={abrirDemoCarrito}
          alAbrirModalArquitectura={abrirModalArquitectura}
        />

        {/* 4. Sección Sobre Mí (Mis Valores, Herramientas Favoritas, Toque Personal y Formación) */}
        <SeccionSobreMi />

        {/* 5. Sección Contacto (Tarjeta de Contacto Minimalista y Formulario Directo) */}
        <SeccionContacto />
      </main>

      {/* 6. Pie de Página */}
      <PieDePagina alAbrirModalCV={abrirModalCurriculum} />

      {/* Modales Interactivos del Sistema */}
      
      {/* Modal Visor de Curriculum Vitae Oficial */}
      <ModalCurriculum
        estaAbierto={modalCVAbierto}
        alCerrar={cerrarModalCurriculum}
      />

      {/* Modal Simulador Interactivo de Carrito de Compras SPA */}
      <ModalDemoCarrito
        estaAbierto={modalDemoCarritoAbierto}
        alCerrar={cerrarDemoCarrito}
      />

      {/* Modal Visor de Arquitectura Backend en Capas */}
      <ModalArquitecturaBackend
        estaAbierto={modalArquitecturaAbierto}
        alCerrar={cerrarModalArquitectura}
        proyectoTitulo={tituloProyectoArquitectura}
        proyectoId={idProyectoArquitectura}
      />
    </div>
  );
}
