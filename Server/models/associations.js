// associations.js
import  Municipios from '../models/municipios.js';
import  Administradores from '../models/administradores.js';
import  Usuarios from '../models/usuarios.js';
import  Empresas from '../models/empresas.js';
import  Reservas from '../models/reservas.js';
import  Servicios from '../models/servicios.js';
import  Categorias from '../models/categorias.js';
import  ControlUsuarios from '../models/control_usuarios.js'
import  DescripcionReserva from '../models/descripcion_reserva.js';
import  Fechas from '../models/fechas.js';
import  SolicitudEmpresa from '../models/solicitud_empresa.js';
import AdministradorSolicitud from '../models/administrador_solicitud.js';
import ControlEmpresas from './control_empresas.js';
// Asociaciones

//HasMany se utiliza en el modelo 1 osea que un municipio tiene muchos administradores
//hay otra opcion para hacer la relacion 1:m pero es con belongsTo utilizandolo en el muchos osea quedaria Administradores.belongsTo(Municipios,{})
Municipios.hasMany(Administradores, { foreignKey: 'COD_municipios', as: 'administradores' });
Municipios.hasMany(Usuarios, { foreignKey: 'COD_municipios', as: 'usuarios_municipio' });
Municipios.hasMany(Empresas, { foreignKey: 'COD_municipios', as: 'empresas' });
Municipios.hasMany(SolicitudEmpresa, { foreignKey:'COD_municipios', as: 'solicitud_empresa'})

//relacion muchos a muchos que tiene una tabla intermedia llamada ControlUsuarios
// es necesarios que las dos tablas tengan un belongsToMany
//es una buena práctica definir las asociaciones en ambos modelos para mejorar la claridad y la legibilidad del código.
Administradores.belongsToMany(Usuarios, { through: ControlUsuarios, foreignKey: 'COD_administrador' });
Usuarios.belongsToMany(Administradores, { through: ControlUsuarios, foreignKey: 'COD_usuarios' });

//relacion muchos a muchos que tiene una tabla intermedia llamada ControlEmpresas
Administradores.belongsToMany(Empresas, {through: ControlEmpresas, foreignKey: 'COD_administrador'});
Empresas.belongsToMany(Administradores,{through: ControlEmpresas, foreignKey: 'NIT_empresa'})

Usuarios.hasMany(Reservas, { foreignKey: 'COD_usuarios', as: 'reservas' });
//relacion muchos a muchos
Reservas.belongsToMany(Servicios, { through: DescripcionReserva, foreignKey: 'COD_reservas', as: 'reservas' });
Servicios.belongsToMany(Reservas,{through: DescripcionReserva, foreignKey: 'ID_servicios', as:'servicios'})

//relacion muchos a muchos
SolicitudEmpresa.belongsToMany(Administradores,{through: AdministradorSolicitud, foreignKey:'NIT_empresa_solicitante', as:'solicitud_empresa'})
Administradores.belongsToMany(SolicitudEmpresa,{through: AdministradorSolicitud, foreignKey:'COD_administradores', as:'administradores_solicitud'})


Categorias.hasMany(Servicios, { foreignKey: 'COD_categorias', as: 'servicios' });
Empresas.hasMany(Servicios, { foreignKey: 'NIT_empresas', as: 'servicios' });
Servicios.hasMany(Fechas, { foreignKey: 'ID_servicios', as: 'fechas' });

export {
  Municipios,
  Administradores,
  Usuarios,
  Empresas,
  Reservas,
  Servicios,
  Categorias,
  ControlUsuarios,
  ControlEmpresas,
  DescripcionReserva,
  Fechas,
  SolicitudEmpresa,
  AdministradorSolicitud
};
