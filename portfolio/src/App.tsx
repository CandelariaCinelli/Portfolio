import { SeccionContacto } from './componentes/SeccionContacto';
import { SeccionIdiomas } from './componentes/SeccionIdiomas';
import { BarraNavegacion } from './componentes/BarraNavegacion';
import { SeccionProyectos } from './componentes/SeccionProyectos';
import { SeccionSobreMi } from './componentes/SeccionSobreMi';
import { SeccionStack } from './componentes/SeccionStack';

/** Compone el portafolio en el orden de lectura solicitado. */
export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#261C14]">
      <BarraNavegacion />
      <main>
        <SeccionSobreMi />
        <SeccionProyectos />
        <SeccionStack />
        <SeccionIdiomas />
        <SeccionContacto />
      </main>
      <footer className="border-t border-[#261C14]/10 px-6 py-6 text-center text-xs text-[#261C14]/60">
        © {new Date().getFullYear()} Candelaria Cinelli · Técnica en Desarrollo de Software
      </footer>
    </div>
  );
}
