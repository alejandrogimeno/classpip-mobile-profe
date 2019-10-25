import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { ResponseContentType, Http} from '@angular/http';

import {  Alumno, Grupo,Profesor, Juego, Punto, Insignia, AlumnoJuegoDePuntos,
  Equipo, EquipoJuegoDePuntos, Coleccion,
  AlumnoJuegoDeColeccion, EquipoJuegoDeColeccion, Cromo, HistorialPuntosAlumno, HistorialPuntosEquipo,
  Album, AlbumEquipo } from '../../clases/index';


/*
  Generated class for the PeticionesApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeticionesApiProvider {


  private APIUrlProfesores = 'http://localhost:3000/api/Profesores';
  private APIUrlGrupos = 'http://localhost:3000/api/Grupos';
  private APIUrlMatriculas = 'http://localhost:3000/api/Matriculas';
  private APIRUrlJuegoDePuntos = 'http://localhost:3000/api/JuegosDePuntos';
  private APIUrlAlumnoJuegoDePuntos = 'http://localhost:3000/api/AlumnoJuegosDePuntos';
  private APIUrlLogoEquipo = 'http://localhost:3000/api/imagenes/LogosEquipos/download/';
  private APIUrlEquipos = 'http://localhost:3000/api/Equipos';
  private APIUrlLogosEquipos = 'http://localhost:3000/api/imagenes/LogosEquipos';
  private APIUrlPuntosJuego = 'http://localhost:3000/api/AsignacionPuntosJuego';
  private APIUrlImagenNivel = 'http://localhost:3000/api/imagenes/imagenNivel';
  private APIURLImagenInsignia = 'http://localhost:3000/api/imagenes/ImagenInsignia';

  private APIUrlAlumnoJuegoPuntos = 'http://localhost:3000/api/AlumnoJuegosDePuntos';
  private APIUrlEquipoJuegoPuntos = 'http://localhost:3000/api/EquiposJuegosDePuntos';

  private APIUrlAlumnoJuegoDeColeccion = 'http://localhost:3000/api/AlumnosJuegoDeColeccion';
  private APIUrlEquipoJuegoDeColeccion = 'http://localhost:3000/api/EquiposJuegoDeColeccion';


  private APIUrlColecciones = 'http://localhost:3000/api/Colecciones';
  private APIUrlImagenColeccion = 'http://localhost:3000/api/imagenes/ImagenColeccion';
  private APIUrlImagenCromo = 'http://localhost:3000/api/imagenes/ImagenCromo';
  private APIUrlHistorialPuntosAlumno = 'http://localhost:3000/api/HistorialesPuntosAlumno';


  private APIUrlEquiposJuegoDePuntos = 'http://localhost:3000/api/EquiposJuegosDePuntos';
  private APIUrlHistorialPuntosEquipo = 'http://localhost:3000/api/HistorialesPuntosEquipo';


  private APIRUrlJuegoDeColeccion = 'http://localhost:3000/api/JuegosDeColeccion';
  private APIRUrlColecciones = 'http://localhost:3000/api/Colecciones';
  private APIRUrlAlbum = 'http://localhost:3000/api/Albumes';
  private APIRUrlAlbumEquipo = 'http://localhost:3000/api/albumsEquipo';


  constructor(public http: HttpClient, private httpImagenes: Http) {

  }


// FUNCIÓN TEMPORAL DE AUTENTIFICAR (PARA SIMPLIFICAR AHORA)
   public DameProfesor(nombre: string, apellido: string): Observable<Profesor> {
    console.log('Entro a mostrar a ' + nombre + ' ' + apellido);
    return this.http.get<Profesor>(this.APIUrlProfesores + '?filter[where][Nombre]=' + nombre + '&filter[where][Apellido]=' + apellido);
  }

  // NOS DEVUELVE UN ARRAY CON LOS GRUPOS DEL PROFESOR
  public DameGruposProfesor(profesorId: number): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.APIUrlProfesores + '/' + profesorId + '/grupos');
  }

  // NOS DEVUELVE LOS ALUMNOS DEL GRUPO CUYO IDENTIFICADOR PASAMOS COMO PARÁMETRO
  public DameAlumnosGrupo(grupoId: number): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.APIUrlGrupos + '/' + grupoId + '/alumnos');
  }

//    // OBTENEMOS LA MATRICULA DE UN ALUMNO EN UN GRUPO NUEVO
//    public DameMatriculasGrupo(grupoId: number): Observable<Matricula[]> {
//     return this.http.get<Matricula[]>(this.APIUrlMatriculas + '?filter[where][grupoId]=' + grupoId);
//   }


//   // BORRAMOS LA MATRICULA DEL ALUMNO EN EL GRUPO
//   public BorraMatricula(matriculaId: number): Observable<any> {
//     return this.http.delete<any>(this.APIUrlMatriculas + '/' + matriculaId);
//   }

//   public BorraGrupo(profesorId: number, grupoId: number): Observable<any> {
//     return this.http.delete<any>(this.APIUrlProfesores + '/' + profesorId + '/grupos/' + grupoId);
//   }

  // DEVUELVE LOS JUEGOS DE PUNTOS DEL GRUPO QUE PASAMOS COMO PARÁMETRO
  public DameJuegoDePuntosGrupo(grupoId: number): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.APIUrlGrupos + '/' + grupoId + '/juegoDePuntos');
  }

  // OBTENEMOS LOS JUEGO DE COLECCIÓN DEL GRUPO
  public DameJuegoDeColeccionGrupo(grupoId: number): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.APIUrlGrupos + '/' + grupoId + '/juegoDeColeccions');
  }

  // OBTENEMOS LOS JUEGO DE COMPETICIÓN DEL GRUPO
  public DameJuegoDeCompeticionGrupo(grupoId: number): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.APIUrlGrupos + '/' + grupoId + '/juegoDeCompeticions');
  }

//   // OBTENEMOS LOS PUNTOS QUE FORMAN PARTE DEL JUEGO DE PUNTOS
//   public DamePuntosJuegoDePuntos(juegoDePuntosId: number): Observable<Punto[]> {
//     return this.http.get<Punto[]>(this.APIRUrlJuegoDePuntos + '/' + juegoDePuntosId + '/puntos');
//   }

//    // OBTENEMOS LOS NIVELES QUE FORMAN PARTE DEL JUEGO DE PUNTOS
//    public DameNivelesJuegoDePuntos(juegoDePuntosId: number): Observable<Nivel[]> {
//     return this.http.get<Nivel[]>(this.APIRUrlJuegoDePuntos + '/' + juegoDePuntosId + '/nivels');
//   }

//   // OBTENEMOS LOS ALUMNOS QUE FORMAN PARTE DEL JUEGO DE PUNTOS
//     public DameAlumnosJuegoDePuntos(juegoDePuntosId: number): Observable<Alumno[]> {
//     console.log('Voy a por los alumnos');
//     return this.http.get<Alumno[]>(this.APIRUrlJuegoDePuntos + '/' + juegoDePuntosId + '/alumnos');
//   }

//   // OBTENEMOS LA INSCRIPCIÓN ESPECÍFICA DE UN ALUMNO CONCRETO EN UN JUEGO DE PUNTOS CONCRETO.
//   public DameInscripcionAlumnoJuegoDePuntos(alumnoId: number, juegoDePuntosId: number): Observable<AlumnoJuegoDePuntos> {
//     return this.http.get<AlumnoJuegoDePuntos>(this.APIUrlAlumnoJuegoDePuntos + '?filter[where][alumnoId]=' + alumnoId
//     + '&filter[where][juegoDePuntosId]=' + juegoDePuntosId);
//   }

//   // NOS DEVUELVE LAS INCRIPCIONES DE TODOS LOS ALUMNOS DE UN JUEGO DE PUNTOS
//   public DameInscripcionesAlumnoJuegoDePuntos(juegoDePuntosId: number): Observable<AlumnoJuegoDePuntos[]> {
//     return this.http.get<AlumnoJuegoDePuntos[]>(this.APIUrlAlumnoJuegoDePuntos + '?filter[where][juegoDePuntosId]=' + juegoDePuntosId);
//   }

//   // PERMITE CREAR UN GRUPO AL PROFESOR. DEVOLVEMOS UN OBSERVABLE GRUPO PARA SABER EL IDENTIFICADOR DEL GRUPO QUE ACABAMOS
//   // DE CREAR POR SI DECIDIMOS TIRAR UN PASO HACIA ATRÁS EN EL MOMENTO DE CREAR Y MODIFICAR EL NOMBRE O LA DESCRIPCIÓN
//   public CreaGrupo(grupo: Grupo, profesorId: number): Observable<Grupo> {
//     return this.http.post<Grupo>(this.APIUrlProfesores + '/' + profesorId + '/grupos', grupo);
//   }
// // CUANDO EDITAMOS UN GRUPO LE PASAMOS EL NUEVO MODELO DEL GRUPO, EL IDENTIFICADOR DEL PROFESOR Y EL GRUPO EN CONCRETO
//   // QUE QUEREMOS EDITAR
//   public ModificaGrupo(grupo: Grupo, profesorId: number, grupoId: number): Observable<Grupo> {
//     return this.http.put<Grupo>(this.APIUrlProfesores + '/' + profesorId + '/grupos/' + grupoId, grupo);
//   }

//    // BUSCA SI HAY ALGUN ALUMNO EN LA BASE DE DATOS CON ESE NOMBRE Y APELLIDOS
//    public DameAlumnoConcreto(alumno: Alumno, ProfesorId: number): Observable<Alumno> {
//     console.log('Entro a buscar a ' + alumno.Nombre + ' ' + alumno.PrimerApellido + ' ' + alumno.SegundoApellido );
//     return this.http.get<Alumno>(this.APIUrlProfesores + '/' + ProfesorId + '/alumnos?filter[where][Nombre]=' + alumno.Nombre +
//     '&filter[where][PrimerApellido]=' + alumno.PrimerApellido + '&filter[where][SegundoApellido]=' + alumno.SegundoApellido);
//   }

//   // MATRICULAMOS A UN ALUMNO EN UN GRUPO NUEVO
//   public MatriculaAlumnoEnGrupo(matricula: Matricula): Observable<Matricula> {
//     return this.http.post<Matricula>(this.APIUrlMatriculas, matricula);
//   }

//   // ASIGNAR ALUMNOS A UN PROFESOR
//   public AsignaAlumnoAlProfesor(alumno: Alumno, profesorId: number): Observable<Alumno> {
//     return this.http.post<Alumno>(this.APIUrlProfesores + '/' + profesorId + '/alumnos', alumno);
//   }

//   // OBTENEMOS LA MATRICULA CONCRETA DE UN ALUMNO EN UN GRUPO
//   public DameMatriculaAlumno(alumnoId: number, grupoId: number): Observable<Matricula> {
//     return this.http.get<Matricula>(this.APIUrlMatriculas + '?filter[where][grupoId]=' + grupoId + '&filter[where][alumnoId]=' + alumnoId);
//   }


  // OBTENEMOS LOS EQUIPOS DEL GRUPO
  public DameEquiposDelGrupo(grupoId: number): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.APIUrlGrupos + '/' + grupoId + '/equipos');
  }

  // Logo de un equipo
  public DameLogoEquipo (logo: any): Observable<any> {
    return this.httpImagenes.get('http://localhost:3000/api/imagenes/LogosEquipos/download/' + logo,
      { responseType: ResponseContentType.Blob })
  }

  public DameLogoInsignia (logo: any): Observable<any> {
  // Busca en la base de datos la imágen con el nombre registrado en equipo.FotoEquipo y la recupera
    return this.httpImagenes.get('http://localhost:3000/api/imagenes/ImagenInsignia/download/' + logo,
      { responseType: ResponseContentType.Blob })
  }

  public DameImagenColeccion (imagen: any): Observable<any> {
// Busca en la base de datos la imágen con el nombre registrado en equipo.FotoEquipo y la recupera
    return this.httpImagenes.get('http://localhost:3000/api/imagenes/ImagenColeccion/download/' + imagen,
      { responseType: ResponseContentType.Blob })
  }

//   // public DameLogoEquipo(FotoEquipo: string): Observable<any> {
//   //   return this.http.get(this.APIUrlLogoEquipo + FotoEquipo,
//   //      { responseType: ResponseContentType.ArrayBuffer });
//   // }

//   // OBTENEMOS LOS ALUMNOS QUE PERTENECEN A UN EQUIPO
//   public DameAlumnosEquipo(equipoId: number): Observable<Alumno[]> {
//     return this.http.get<Alumno[]>(this.APIUrlEquipos + '/' + equipoId + '/alumnos');
//   }

//   // ELIMINAMOS UN EQUIPO EN CONCRETO DEL GRUPO
//   public BorraEquipoDelGrupo(equipo: Equipo): Observable<any> {
//     return this.http.delete<any>(this.APIUrlGrupos + '/' + equipo.grupoId + '/equipos/' + equipo.id);
//   }

//   // DEVUELVE UN ARRAY CON LAS ASIGNACIONES DE UN EQUIPO CONCRETO
//   public DameAsignacionesDelEquipo(equipo: Equipo): Observable<AsignacionEquipo[]> {
//     console.log('Entro a buscar' );
//     return this.http.get<AsignacionEquipo[]>(this.APIUrlGrupos + '/' + equipo.grupoId + '/asignacionEquipos?filter[where][equipoId]='
//      + equipo.id);
//   }

//   // BUSCA Y ELIMINA A UN ALUMNO DE UN EQUIPO (BORRA ASIGNACIONEQUIPO)
//   public BorraAlumnoEquipo(asignacionEquipo: AsignacionEquipo): Observable<any> {
//     return this.http.delete<any>(this.APIUrlGrupos + '/' + asignacionEquipo.grupoId + '/asignacionEquipos/'
//     + asignacionEquipo.id);
//   }

//   // CREAMOS UN NUEVO EQUIPO DENTRO DEL GRUPO
//   public CreaEquipo(equipo: Equipo, grupoId: number): Observable<Equipo> {
//     return this.http.post<Equipo>(this.APIUrlGrupos + '/' + grupoId + '/equipos', equipo);
//   }
//   // PONEMOS UN LOGO AL EQUIPO
//   public PonLogoEquipo(formData: FormData): Observable<any> {
//     return this.http.post<any>(this.APIUrlLogosEquipos + '/upload', formData);
//   }


//   // SE USA PARA EDITAR UN EQUIPO
//   public ModificaEquipo(equipo: Equipo, grupoId: number, equipoId: number): Observable<Equipo> {
//     return this.http.put<Equipo>(this.APIUrlGrupos + '/' + grupoId + '/equipos/' + equipoId, equipo);
//   }

//   // RECUPERAMOS LAS ASIGNACIONES (COMO LA INSCRIPCIÓN DEL ALUMNO AL EQUIPO) DE UN GRUPO DETERMINADO
//   public DameAsignacionesEquipoDelGrupo(grupoId: number): Observable<AsignacionEquipo[]> {
//     return this.http.get<AsignacionEquipo[]>(this.APIUrlGrupos + '/' + grupoId + '/asignacionEquipos');
//   }

//   // DEVUELVE LA ASIGNACIÓN CONCRETA DE UN ALUMNO EN UN EQUIPO
//   public DameAsignacionEquipoAlumno(alumnoId: number, equipoId: number, grupoId: number): Observable<AsignacionEquipo> {
//     return this.http.get<AsignacionEquipo>(this.APIUrlGrupos + '/' + grupoId + '/asignacionEquipos?filter[where][equipoId]=' + equipoId +
//     '&filter[where][alumnoId]=' + alumnoId);
//   }

//   // EDITA UNA ASIGNACIÓN DE UN ALUMNO EN UN EQUIPO. SE PUEDE UTILIZAR PARA MOVER ALUMNOS DE EQUIPO.
//   public ModificaAsignacionEquipoAlumno(asignacionEquipo: AsignacionEquipo, grupoId: number, asignacionEquipoId: number):
//   Observable<AsignacionEquipo> {
//     return this.http.put<AsignacionEquipo>(this.APIUrlGrupos + '/' + grupoId + '/asignacionEquipos/' +
//     asignacionEquipoId, asignacionEquipo);
//   }


//   // ASIGNAR ALUMNO A UN EQUIPO
//   public PonAlumnoEquipo(asignacionEquipos: AsignacionEquipo, grupoId: number): Observable<AsignacionEquipo> {
//     return this.http.post<AsignacionEquipo>(this.APIUrlGrupos + '/' + grupoId + '/asignacionEquipos', asignacionEquipos);
//   }

//   // CREA UN NUEVO JUEGO DE PUNTOS
//   public CreaJuegoDePuntos(juego: Juego, grupoId: number): Observable<Juego> {
//     return this.http.post<Juego>(this.APIUrlGrupos + '/' + grupoId + '/juegoDePuntos', juego);
//   }

//   // CREAMOS UN NUEVO JUEGO DE COLECCIÓN EN EL GRUPO
//   public CreaJuegoDeColeccion(juego: Juego, grupoId: number): Observable<Juego> {
//     return this.http.post<Juego>(this.APIUrlGrupos + '/' + grupoId + '/juegoDeColeccions', juego);
//   }



  // DEVUELVE LOS TIPOS DE PUNTOS CREADOS POR EL PROFESOR
  public DameTiposDePuntos(profesorId: number): Observable<Punto[]> {
    return this.http.get<Punto[]>(this.APIUrlProfesores + '/' + profesorId + '/puntos');
  }

//   // SELECCIONAMOS LOS PUNTOS QUE FORMARÁN PARTE DEL JUEGO
//   public AsignaPuntoJuego(asignacionPuntoJuego: AsignacionPuntosJuego) {
//     return this.http.post<AsignacionPuntosJuego>(this.APIUrlPuntosJuego, asignacionPuntoJuego);
//   }


//   // CREAMOS NIVELES PARA UN JUEGO DE PUNTOS DETERMINADO
//   public CreaNivel(nivel: Nivel, juegoDePuntosId: number) {
//     return this.http.post<Nivel>(this.APIRUrlJuegoDePuntos + '/' + juegoDePuntosId + '/nivels', nivel);
//   }


//   // ASIGNAMOS FOTOS A UN NIVEL (ES OPCIONAL)
//   public PonImagenNivel(formData: FormData): Observable<any> {
//     return this.http.post<any>(this.APIUrlImagenNivel + '/upload', formData);
//   }


//   // INSCRIBIMOS A LOS ALUMNOS AL JUEGO DE PUNTOS
//   public InscribeAlumnoJuegoDePuntos(alumnoJuegoDePuntos: AlumnoJuegoDePuntos) {
//     return this.http.post<AlumnoJuegoDePuntos>(this.APIUrlAlumnoJuegoPuntos, alumnoJuegoDePuntos);
//   }


//   // INSCRIBIMOS A LOS EQUIPOS AL JUEGO DE PUNTOS
//   public InscribeEquipoJuegoDePuntos(equipoJuegoDePuntos: EquipoJuegoDePuntos) {
//     return this.http.post<EquipoJuegoDePuntos>(this.APIUrlEquipoJuegoPuntos, equipoJuegoDePuntos);
//   }

  // OBTENEMOS UN ARRAY CON LAS COLECCIONES DEL PROFESOR
  public DameColeccionesDelProfesor(profesorId: number): Observable<Coleccion[]> {
    return this.http.get<Coleccion[]>(this.APIUrlProfesores + '/' + profesorId + '/coleccions');
  }





//   // EDITAMOS UN JUEGO DE COLECCIÓN. EL JUEGO YA FUE CREADO. AHORA LO COMPLETAMOS ASIGNANDOLE
//   // LA COLECCION (POR ESO ES UN PUT)
//   public CompletaJuegoDeColeccion(juego: Juego, grupoId: number, juegoId: number): Observable<Juego> {
//     return this.http.put<Juego>(this.APIUrlGrupos + '/' + grupoId + '/juegoDeColeccions/' + juegoId, juego);
//   }

//   // INSCRIBIMOS AL ALUMNO EN EL JUEGO DE COLECCIÓN
//   public InscribeAlumnoJuegoDeColeccion(alumnoJuegoDeColeccion: AlumnoJuegoDeColeccion) {
//     return this.http.post<AlumnoJuegoDeColeccion>(this.APIUrlAlumnoJuegoDeColeccion, alumnoJuegoDeColeccion);
//   }

//   // INCRIBIMOS AL EQUIPO EN EL JUEGO DE COLECCIÓN
//   public InscribeEquipoJuegoDeColeccion(equipoJuegoDeColeccion: EquipoJuegoDeColeccion) {
//     return this.http.post<EquipoJuegoDeColeccion>(this.APIUrlEquipoJuegoDeColeccion, equipoJuegoDeColeccion);
//   }

//   // OBTENEMOS UN ARRAY DE CROMOS DE LA COLECCIÓN
//   public DameCromosColeccion(coleccionId: number): Observable<Cromo[]> {
//     return this.http.get<Cromo[]>(this.APIUrlColecciones + '/' + coleccionId + '/cromos');
//   }



//   // ELIMINAMOS LA COLECCIÓN CUYO IDENTIFICADOR PASAMOS COMO PARÁMETRO
//   public BorraColeccion(coleccionId: number, profesorId: number): Observable<any> {
//     return this.http.delete<any>(this.APIUrlProfesores + '/' + profesorId + '/coleccions/' + coleccionId);
//   }


//   // ELIMINAMOS UN CROMO DETERMINADO DE UNA COLECCIÓN CONCRETA
//   public BorrarCromo(cromoId: number, coleccionId: number): Observable<any> {
//     return this.http.delete<any>(this.APIUrlColecciones + '/' + coleccionId + '/cromos/' + cromoId);
//   }

//    // SE USA PARA EDITAR LA COLECCIÓN DEL PROFESOR. AMBOS IDENTIFICADORES LOS PASAMOS COMO PARÁMETRO
//    public ModificaColeccion(coleccion: Coleccion, profesorId: number, coleccionId: number): Observable<Coleccion> {
//     return this.http.put<Coleccion>(this.APIUrlProfesores + '/' + profesorId + '/coleccions/' + coleccionId, coleccion);
//   }


//   // PONE UNA IMÁGEN A LA COLECCIÓN
//   public PonImagenColeccion(formData: FormData): Observable<any> {
//     return this.http.post<any>(this.APIUrlImagenColeccion + '/upload', formData);
//   }

//    // EDITAMOS UN CROMO EN CONCRETO DE UNA COLECCIÓN DETERMINADA
//   public ModificaCromoColeccion(cromo: Cromo, coleccionId: number, cromoId: number): Observable<Cromo> {
//     return this.http.put<Cromo>(this.APIUrlColecciones + '/' + coleccionId + '/cromos/' + cromoId, cromo);
//   }

//   // PONEMOS UNA IMAGEN AL CROMO
//   public PonImagenCromo(formData: FormData): Observable<any> {
//     return this.http.post<any>(this.APIUrlImagenCromo + '/upload', formData);
//   }

//   // HACE UN POST DE UNA NUEVA COLECCIÓN AL PROFESOR
//   public CreaColeccion(coleccion: Coleccion, profesorId: number): Observable<Coleccion> {
//     return this.http.post<Coleccion>(this.APIUrlProfesores + '/' + profesorId + '/coleccions', coleccion);
//   }

//   // AGREGAMOS UN NUEVO CROMO A UNA COLECCIÓN DETERMINADA
//   public PonCromoColeccion(cromo: Cromo, coleccionId: number): Observable<Cromo> {
//     return this.http.post<Cromo>(this.APIUrlColecciones + '/' + coleccionId + '/cromos', cromo);
//   }
//   // ELIMINAMOS UNA ASIGNACIÓN DE PUNTO A UN ALUMNO
//   public BorrarPuntosAlumno(historialPuntosAlumnoId: number): Observable<HistorialPuntosAlumno[]> {
//     return this.http.delete<HistorialPuntosAlumno[]>(this.APIUrlHistorialPuntosAlumno + '/' + historialPuntosAlumnoId);
//   }

//   // EDITAMOS LA INSCRIPCIÓN DEL ALUMNO EN EL JUEGO DE PUNTOS PARA PONER PUNTOS, YA QUE ÉSTA INCRIPCIÓN TAMBIÉN CONTIENE LOS PUNTOS TOTALES
//   public PonPuntosJuegoDePuntos( alumnoJuegoDePuntos: AlumnoJuegoDePuntos, alumnoJuegoDePuntosId: number): Observable<AlumnoJuegoDePuntos> {
//     // tslint:disable-next-line:max-line-length
//     return this.http.put<AlumnoJuegoDePuntos>(this.APIUrlAlumnoJuegoDePuntos + '/' + alumnoJuegoDePuntosId, alumnoJuegoDePuntos);
//   }

//   // OBTENEMOS EL HISTORIAL TOTAL DE PUNTOS DEL ALUMNO
//   public DameHistorialPuntosAlumno(alumnoJuegoDePuntosId: number): Observable<HistorialPuntosAlumno[]> {
//     return this.http.get<HistorialPuntosAlumno[]>(this.APIUrlHistorialPuntosAlumno + '?filter[where][alumnoJuegoDePuntosId]='
//      + alumnoJuegoDePuntosId);
//   }

//   // OBTENEMOS EL HISTORIAL DE UN ALUMNO POR TIPO DE PUNTO
//   public DameHistorialDeUnPunto(alumnoJuegoDePuntosId: number, puntoId: number): Observable<HistorialPuntosAlumno[]> {
//     return this.http.get<HistorialPuntosAlumno[]>(this.APIUrlHistorialPuntosAlumno + '?filter[where][alumnoJuegoDePuntosId]='
//      + alumnoJuegoDePuntosId + '&filter[where][puntoId]=' + puntoId);
//   }


//   // OBTENEMOS LOS EQUIPOS QUE FORMAN PARTE DEL JUEGO DE PUNTOS
//   public DameEquiposJuegoDePuntos(juegoDePuntosId: number): Observable<Equipo[]> {
//     return this.http.get<Equipo[]>(this.APIRUrlJuegoDePuntos + '/' + juegoDePuntosId + '/equipos');
//   }


//   // NOS DEVUELVE LAS INCRIPCIONES DE TODOS LOS EQUIPOS DE UN JUEGO DE PUNTOS
//   public DameInscripcionesEquipoJuegoDePuntos(juegoDePuntosId: number): Observable<EquipoJuegoDePuntos[]> {
//     return this.http.get<EquipoJuegoDePuntos[]>(this.APIUrlEquiposJuegoDePuntos + '?filter[where][juegoDePuntosId]=' + juegoDePuntosId);
//   }


//   // OBTENEMOS EL HISTORIAL DE UN EQUIPO POR TIPO DE PUNTO
//   public DameHistorialDeUnPuntoEquipo(equipoJuegoDePuntosId: number, puntoId: number): Observable<HistorialPuntosEquipo[]> {
//     return this.http.get<HistorialPuntosEquipo[]>(this.APIUrlHistorialPuntosEquipo + '?filter[where][equipoJuegoDePuntosId]='
//      + equipoJuegoDePuntosId + '&filter[where][puntoId]=' + puntoId);
//   }


//   // OBTENEMOS EL HISTORIAL TOTAL DE PUNTOS DEL EQUIPO
//   public DameHistorialPuntosEquipo(equipoJuegoDePuntosId: number): Observable<HistorialPuntosEquipo[]> {
//     return this.http.get<HistorialPuntosEquipo[]>(this.APIUrlHistorialPuntosEquipo + '?filter[where][equipoJuegoDePuntosId]='
//      + equipoJuegoDePuntosId);
//   }

//   // CAMBIA EL ESTADO DEL JUEGO DE COLECCIÓN DE ACTIVO A INACTIVO O VICEVERSA
//   public CambiaEstadoJuegoDePuntos(juegoDePuntos: Juego, juegoDePuntosId: number, grupoId: number): Observable<Juego> {
//     return this.http.put<Juego>(this.APIUrlGrupos + '/' + grupoId + '/juegoDePuntos/' + juegoDePuntosId, juegoDePuntos);
//   }

//   // REGISTRAMOS LA FECHA EN QUE DAMOS UN PUNTO A UN ALUMNO, SU VALOR, EL TIPO DE PUNTO
//   public PonHistorialPuntosAlumno(historial: HistorialPuntosAlumno): Observable<HistorialPuntosAlumno> {
//     return this.http.post<HistorialPuntosAlumno>(this. APIUrlHistorialPuntosAlumno, historial);
//   }

//   // EDITAMOS LA INSCRIPCIÓN DEL EQUIPO EN EL JUEGO DE PUNTOS PARA PONER PUNTOS, YA QUE ÉSTA INCRIPCIÓN TAMBIÉN CONTIENE LOS PUNTOS TOTALES
//   // tslint:disable-next-line:max-line-length
//   public PonPuntosEquiposJuegoDePuntos( equipoJuegoDePuntos: EquipoJuegoDePuntos, equipoJuegoDePuntosId: number): Observable<EquipoJuegoDePuntos> {
//     // tslint:disable-next-line:max-line-length
//     return this.http.put<EquipoJuegoDePuntos>(this.APIUrlEquiposJuegoDePuntos + '/' + equipoJuegoDePuntosId, equipoJuegoDePuntos);
//   }


//   // REGISTRAMOS LA FECHA EN QUE DAMOS UN PUNTO A UN EQUIPO, SU VALOR, EL TIPO DE PUNTO
//   public PonHistorialPuntosEquipo(historial: HistorialPuntosEquipo): Observable<HistorialPuntosEquipo> {
//     return this.http.post<HistorialPuntosEquipo>(this. APIUrlHistorialPuntosEquipo, historial);
//   }

//    // ELIMINAMOS UNA ASIGNACIÓN DE PUNTO A UN EQUIPO
//    public BorraPuntosEquipo(historialPuntosEquipoId: number): Observable<HistorialPuntosEquipo[]> {
//     return this.http.delete<HistorialPuntosEquipo[]>(this.APIUrlHistorialPuntosEquipo + '/' + historialPuntosEquipoId);
//   }

//   // ELIMINA EL JUEGO DE PUNTOS QUE PASAMOS COMO PARÁMETRO
//   public BorraJuegoDePuntos(juegoDePuntosId: number, grupoId: number): Observable<Juego> {
//     return this.http.delete<Juego>(this.APIUrlGrupos + '/' + grupoId + '/juegoDePuntos/' + juegoDePuntosId);
//   }


//   // DEVUELVE LOS ALUMNOS QUE FORMAN PARTE DE UN JUEGO DE COLECCIÓN DETERMINADO
//   public DameAlumnosJuegoDeColeccion(juegoDeColeccionId: number): Observable<Alumno[]> {
//     console.log('Voy a por los alumnos');
//     return this.http.get<Alumno[]>(this.APIRUrlJuegoDeColeccion + '/' + juegoDeColeccionId + '/alumnos');
//   }

//    // DEVUELVE UN ARRAY CON LAS INCRIPCIONES DE LOS ALUMNOS A UN JUEGO DE COLECCIÓN DETERMINADO
//    public DameInscripcionesAlumnoJuegoDeColeccion(juegoDeColeccionId: number): Observable<AlumnoJuegoDeColeccion[]> {
//     return this.http.get<AlumnoJuegoDeColeccion[]>(this.APIUrlAlumnoJuegoDeColeccion + '?filter[where][juegoDeColeccionId]='
//     + juegoDeColeccionId);
//   }


//   // DEVUELVE LOS EQUIPOS QUE FORMAN PARTE DE UN JUEGO DE COLECCIÓN DETERMINADO
//   public DameEquiposJuegoDeColeccion(juegoDeColeccionId: number): Observable<Equipo[]> {
//     return this.http.get<Equipo[]>(this.APIRUrlJuegoDeColeccion + '/' + juegoDeColeccionId + '/equipos');
//   }

//   // DEVUELVE UN ARRAY CON LAS INCRIPCIONES DE LOS EQUIPOS A UN JUEGO DE COLECCIÓN DETERMINADO
//   public DameInscripcionesEquipoJuegoDeColeccion(juegoDeColeccionId: number): Observable<EquipoJuegoDeColeccion[]> {
//     return this.http.get<EquipoJuegoDeColeccion[]>(this.APIUrlEquipoJuegoDeColeccion + '?filter[where][juegoDeColeccionId]='
//     + juegoDeColeccionId);
//   }


//   // OBTENEMOS LA COLECCIÓN CUYO IDENTIFICADOR PASAMOS COMO PARÁMETRO
//   public DameColeccion(coleccionId: number): Observable<Coleccion> {
//     return this.http.get<Coleccion>(this.APIRUrlColecciones + '/' + coleccionId);
//   }
//  // CAMBIA EL ESTADO DEL JUEGO DE COLECCIÓN DE ACTIVO A INACTIVO O VICEVERSA
//   public CambiaEstadoJuegoDeColeccion(juegoDeColeccion: Juego, juegoDeColeccionId: number, grupoId: number): Observable<Juego> {
//     return this.http.put<Juego>(this.APIUrlGrupos + '/' + grupoId + '/juegoDeColeccions/' + juegoDeColeccionId, juegoDeColeccion);
//   }


//   // ASIGNAMOS UN NUEVO CROMO PARA EL ÁLBUM DEL ALUMNO
//   public AsignarCromoAlumno(album: Album) {
//     return this.http.post<Album>(this.APIRUrlAlbum, album);
//   }

//    // ASIGNAMOS UN NUEVO CROMO PARA EL ÁLBUM DEL EQUIPO
//    public AsignarCromoEquipo(album: AlbumEquipo) {
//     return this.http.post<AlbumEquipo>(this.APIRUrlAlbumEquipo, album);
//   }

//   // NOS DEVUELVE LOS CROMOS QUE TIENE UN ALUMNO CONCRETO EN UN JUEGO DE COLECCIÓN CONCRETO, YA QUE EL ALUMNOJUEGODECOLECCIÓN RELACIONA
//   // EL ID DEL ALUMNO Y EL ID DEL JUEGO DE COLECCIÓN
//   public DameCromosAlumno(alumnoJuegoDeColeccionId: number): Observable<Cromo[]> {
//     return this.http.get<Cromo[]>(this.APIUrlAlumnoJuegoDeColeccion + '/' + alumnoJuegoDeColeccionId + '/cromos');
//   }

//   // NOS DEVUELVE LOS CROMOS QUE TIENE UN EQUIPO CONCRETO EN UN JUEGO DE COLECCIÓN CONCRETO
//   public DameCromosEquipo(equipoJuegoDeColeccionId: number): Observable<Cromo[]> {
//     return this.http.get<Cromo[]>(this.APIUrlEquipoJuegoDeColeccion + '/' + equipoJuegoDeColeccionId + '/cromos');
//   }

//   // ELIMINA EL JUEGO DE COLECCIÓN QUE PASAMOS COMO PARÁMETRO
//   public BorraJuegoDeColeccion(juegoDeColeccionId: number, grupoId: number): Observable<Juego> {
//     return this.http.delete<Juego>(this.APIUrlGrupos + '/' + grupoId + '/juegoDeColeccions/' + juegoDeColeccionId);
//   }

//   // PARA CREAR UN PUNTO NUEVO DEL PROFESOR
//   public CreaTipoDePunto(punto: Punto, profesorId: number): Observable<Punto> {
//     return this.http.post<Punto>(this.APIUrlProfesores + '/' + profesorId + '/puntos', punto);
//   }

//   // PARA EDITAR UN PUNTO DEL PROFESOR
//   public ModificaTipoDePunto(punto: Punto, profesorId: number, puntoId: number): Observable<Punto> {
//     return this.http.put<Punto>(this.APIUrlProfesores + '/' + profesorId + '/puntos/' + puntoId, punto);
//   }

//   // PARA BORRAR UN PUNTO DEL PROFESOR
//   public BorraTipoDePunto(puntoId: number, profesorId: number): Observable<any> {
//     return this.http.delete<any>(this.APIUrlProfesores + '/' + profesorId + '/puntos/' + puntoId);
//   }

//   // PARA CREAR UNA INSIGNIA NUEVO DEL PROFESOR
//   public CreaInsignia(insignia: Insignia, profesorId: number): Observable<Insignia> {
//     return this.http.post<Insignia>(this.APIUrlProfesores + '/' + profesorId + '/insignia', insignia);
//   }

//   // PARA EDITAR UNA INSIGNIA DEL PROFESOR
//   public ModificaInsignia(insignia: Insignia, profesorId: number, insigniaId: number): Observable<Insignia> {
//     return this.http.put<Insignia>(this.APIUrlProfesores + '/' + profesorId + '/insignia/' + insigniaId, insignia);
//   }

//   // PARA BORRAR UNA INSIGNIA DEL PROFESOR
//   public BorraInsignia(insigniaId: number, profesorId: number): Observable<any> {
//     return this.http.delete<any>(this.APIUrlProfesores + '/' + profesorId + '/insignia/' + insigniaId);
//   }

//   // PARA PONER UNA IMAGEN A UNA INSIGNIA
//   public PonImagenInsignia(formData: FormData): Observable<any> {
//     return this.http.post<any>(this.APIURLImagenInsignia + '/upload', formData);
//   }

//   // // DEVUELVE LOS PUNTOS CREADOS POR EL PROFESOR
//   // public DameTiposDePuntos(profesorId: number): Observable<Punto[]> {
//   //   return this.http.get<Punto[]>(this.APIUrlProfesores + '/' + profesorId + '/puntos');
//   // }

  // DEVUELVE LAS INSIGNIAS CREADAS POR EL PROFESOR
  public DameInsignias(profesorId: number): Observable<Insignia[]> {
    return this.http.get<Insignia[]>(this.APIUrlProfesores + '/' + profesorId + '/insignia');
  }

//   // DEVUELVE LA IMAGEN CORRESPONDIENTE A CADA INSIGNIA
//   public DameImagenInsignia(ImagenInsignia: string): Observable<any> {
//     return this.http.get<any>(this.APIURLImagenInsignia + '/download/' + ImagenInsignia);
//   }


}
