import React, { useState } from 'react';
import { X, Server, Database, Lock, ShieldCheck, CheckCircle2, Code2, Layers, Cpu, ArrowRight } from './IconosPersonalizados';
import { LISTA_PROYECTOS } from '../datos/datosPortafolio';

/**
 * Modal interactivo para inspeccionar la Arquitectura Backend en Capas (Spring Boot + PostgreSQL)
 */

interface ModalArquitecturaBackendProps {
  estaAbierto: boolean;
  alCerrar: () => void;
  proyectoTitulo?: string;
  proyectoId?: string;
}

export const ModalArquitecturaBackend: React.FC<ModalArquitecturaBackendProps> = ({
  estaAbierto,
  alCerrar,
  proyectoTitulo = "Gestión de Usuarios Full-Stack",
  proyectoId = "proyecto-usuarios"
}) => {
  const proyectoSeleccionado = LISTA_PROYECTOS.find((proyecto) => proyecto.id === proyectoId);
  const repositorioUrl = proyectoSeleccionado?.enlaceRepositorio;
  const [capaActiva, setCapaActiva] = useState<'controlador' | 'seguridad' | 'servicio' | 'repositorio' | 'basedatos'>('controlador');

  if (!estaAbierto) return null;

  const capasArquitectura = [
    {
      id: 'controlador',
      nombre: '1. Controlador REST',
      subtitulo: 'Endpoints y Enrutamiento',
      archivo: 'ControladorUsuarioREST.java',
      icono: Server,
      descripcion: 'Expone endpoints RESTful semánticos (/api/v1/usuarios), valida DTOs de entrada y delega al servicio.',
      codigo: `@RestController
@RequestMapping("/api/v1/usuarios")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ControladorUsuarioREST {

    private final IServicioUsuario servicioUsuario;

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'OPERADOR')")
    public ResponseEntity<List<UsuarioRespuestaDTO>> listarTodos() {
        List<UsuarioRespuestaDTO> usuarios = servicioUsuario.obtenerTodosLosUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UsuarioRespuestaDTO> crearUsuario(@Valid @RequestBody UsuarioRegistroDTO dto) {
        UsuarioRespuestaDTO nuevoUsuario = servicioUsuario.registrarNuevoUsuario(dto);
        return new ResponseEntity<>(nuevoUsuario, HttpStatus.CREATED);
    }
}`
    },
    {
      id: 'seguridad',
      nombre: '2. Filtro Seguridad JWT',
      subtitulo: 'Spring Security y Tokens',
      archivo: 'FiltroAutenticacionJWT.java',
      icono: Lock,
      descripcion: 'Interpreta cabeceras Authorization Bearer, valida firma criptográfica y establece el contexto de seguridad.',
      codigo: `@Component
@RequiredArgsConstructor
public class FiltroAutenticacionJWT extends OncePerRequestFilter {

    private final ProveedorTokenJWT proveedorToken;
    private final UserDetailsService servicioDetallesUsuario;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        final String cabeceraAutorizacion = request.getHeader("Authorization");
        
        if (cabeceraAutorizacion != null && cabeceraAutorizacion.startsWith("Bearer ")) {
            String token = cabeceraAutorizacion.substring(7);
            if (proveedorToken.esTokenValido(token)) {
                String nombreUsuario = proveedorToken.extraerNombreUsuario(token);
                UserDetails usuario = servicioDetallesUsuario.loadUserByUsername(nombreUsuario);
                
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        usuario, null, usuario.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        filterChain.doFilter(request, response);
    }
}`
    },
    {
      id: 'servicio',
      nombre: '3. Lógica de Servicio',
      subtitulo: 'Reglas de Negocio',
      archivo: 'ServicioUsuarioImpl.java',
      icono: Cpu,
      descripcion: 'Aplica reglas de negocio, verifica unicidad de correo, cifra contraseñas con BCrypt y mapea entidades a DTOs.',
      codigo: `@Service
@RequiredArgsConstructor
@Transactional
public class ServicioUsuarioImpl implements IServicioUsuario {

    private final IRepositorioUsuario repositorioUsuario;
    private final PasswordEncoder codificadorClaves;
    private final IMapeadorUsuario mapeador;

    @Override
    public UsuarioRespuestaDTO registrarNuevoUsuario(UsuarioRegistroDTO registroDTO) {
        if (repositorioUsuario.existsByCorreoElectronico(registroDTO.getCorreoElectronico())) {
            throw new RecursoDuplicadoExcepcion("El correo ya se encuentra registrado");
        }

        UsuarioEntidad entidad = mapeador.aEntidad(registroDTO);
        entidad.setClaveCifrada(codificadorClaves.encode(registroDTO.getClavePlana()));
        entidad.setEstado(EstadoUsuario.ACTIVO);

        UsuarioEntidad guardado = repositorioUsuario.save(entidad);
        return mapeador.aRespuestaDTO(guardado);
    }
}`
    },
    {
      id: 'repositorio',
      nombre: '4. Repositorio JPA',
      subtitulo: 'Spring Data y Consultas',
      archivo: 'IRepositorioUsuario.java',
      icono: Database,
      descripcion: 'Define contratos de acceso a datos con Spring Data JPA, derivando consultas SQL optimizadas con tiempos <200ms.',
      codigo: `@Repository
public interface IRepositorioUsuario extends JpaRepository<UsuarioEntidad, Long> {

    Optional<UsuarioEntidad> findByCorreoElectronico(String correoElectronico);

    boolean existsByCorreoElectronico(String correoElectronico);

    @Query("SELECT u FROM UsuarioEntidad u JOIN FETCH u.roles WHERE u.estado = 'ACTIVO'")
    List<UsuarioEntidad> buscarTodosActivosConRoles();
}`
    },
    {
      id: 'basedatos',
      nombre: '5. Base de Datos',
      subtitulo: 'PostgreSQL Relacional',
      archivo: 'schema.sql e índices',
      icono: Database,
      descripcion: 'Motor relacional PostgreSQL con integridad referencial, índices B-Tree en campos clave y transacciones ACID.',
      codigo: `-- Esquema Relacional PostgreSQL
CREATE TABLE usuarios (
    id_usuario BIGSERIAL PRIMARY KEY,
    nombre_completo VARCHAR(120) NOT NULL,
    correo_electronico VARCHAR(150) UNIQUE NOT NULL,
    clave_cifrada VARCHAR(255) NOT NULL,
    estado VARCHAR(20) DEFAULT 'ACTIVO',
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_usuario_correo ON usuarios(correo_electronico);
CREATE INDEX idx_usuario_estado ON usuarios(estado);`
    }
  ];

  const capaSeleccionada = capasArquitectura.find((c) => c.id === capaActiva)!;

  return (
    <div
      id="modal-arquitectura-backend-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#261C14]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={alCerrar}
    >
      <div
        id="modal-arquitectura-backend-contenido"
        className="relative w-full max-w-4xl bg-[#F9F6F0] rounded-lg border border-[#261C14]/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#261C14]/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#261C14]">
                Arquitectura Backend en Capas
              </h3>
              <p className="text-xs text-[#261C14]/60 font-mono">
                {proyectoTitulo} • Java 21, Spring Boot 3 y 4, Spring Security y PostgreSQL
              </p>
            </div>
          </div>
          <button
            onClick={alCerrar}
            className="p-1.5 rounded-sm text-[#261C14]/60 hover:text-[#261C14] hover:bg-[#261C14]/5 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Navegación entre Capas */}
        <div className="px-6 py-3 bg-[#F9F6F0] border-b border-[#261C14]/10 overflow-x-auto flex items-center gap-2">
          {capasArquitectura.map((capa) => {
            const Icono = capa.icono;
            const esActivo = capaActiva === capa.id;
            return (
              <button
                key={capa.id}
                onClick={() => setCapaActiva(capa.id as any)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  esActivo
                    ? 'bg-[#261C14] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F3ECE2] text-[#261C14] border border-[#261C14]/10'
                }`}
              >
                <Icono className={`w-3.5 h-3.5 ${esActivo ? 'text-[#D27D2D]' : 'text-[#261C14]/60'}`} />
                <span>{capa.nombre}</span>
              </button>
            );
          })}
        </div>

        {/* Cuerpo con Explicación y Código */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <div className="rounded-xl border border-[#E5DACB] bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#D27D2D]">Demo del proyecto real</p>
                <p className="mt-1 text-sm text-[#261C14]/75">
                  Repositorio GitHub del proyecto real seleccionado.
                </p>
              </div>
              <a href={repositorioUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold text-[#D27D2D] hover:underline">
                Abrir proyecto
              </a>
            </div>
            <div className="mt-4 rounded-lg border border-[#E5DACB] bg-[#F9F6F0] p-5">
              <p className="text-xs font-mono break-all text-[#261C14]/70">{repositorioUrl}</p>
              <p className="mt-3 text-sm text-[#261C14]/75">
                GitHub no permite incrustar el repositorio dentro de un iframe; abrilo para ver el código y la documentación.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-[#E5DACB] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#F8EDE3] text-[#D27D2D] text-[11px] font-mono font-semibold">
                  {capaSeleccionada.subtitulo}
                </span>
                <span className="text-xs font-mono text-[#96867B]">{capaSeleccionada.archivo}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#261C14] mt-1.5 font-medium">
                {capaSeleccionada.descripcion}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Cobertura JUnit 80%</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#68574B]">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#D27D2D]" />
                Código fuente Java / SQL
              </span>
              <span className="text-[11px] text-[#96867B]">Arquitectura Desacoplada</span>
            </div>
            <pre className="p-4 rounded-xl bg-[#261C14] text-[#F9F6F0] text-xs font-mono overflow-x-auto leading-relaxed border border-[#E5DACB]/20">
              {capaSeleccionada.codigo}
            </pre>
          </div>

        </div>

        {/* Pie del Modal */}
        <div className="px-6 py-3 bg-white border-t border-[#E5DACB] flex items-center justify-between text-xs font-mono text-[#68574B]">
          <span>Garantía de rendimiento: &lt; 200 ms en consultas CRUD</span>
          <button
            onClick={alCerrar}
            className="px-4 py-1.5 bg-[#261C14] text-white hover:bg-[#D27D2D] rounded-lg transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
