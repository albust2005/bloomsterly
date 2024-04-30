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
import  SolicitudEmpresas from '../models/solicitud_empresa.js';
import AdministradorSolicitud from '../models/administrador_solicitud.js';
import ControlEmpresas from './control_empresas.js';
import ImagesServicios from './images_servicios.js';
import Subcategorias from './subcategorias.js';

// Asociaciones

// ultimas relaciones puestas
Subcategorias.hasMany(Servicios, { foreignKey: 'COD_subCategoria' });
Servicios.belongsTo(Subcategorias,{ foreignKey: 'COD_subCategoria' });

Categorias.hasMany(Subcategorias, { foreignKey: 'uuid_categoria' });
Subcategorias.belongsTo(Categorias,{ foreignKey: 'uuid_categoria' });

Servicios.hasMany(ImagesServicios, { foreignKey: 'ID_servicio' });
ImagesServicios.belongsTo(Servicios,{ foreignKey: 'ID_servicio' });

//HasMany se utiliza en el modelo 1 osea que un municipio tiene muchos administradores
//hay otra opcion para hacer la relacion 1:m pero es con belongsTo utilizandolo en el muchos osea quedaria Administradores.belongsTo(Municipios,{})
Municipios.hasMany(Administradores, { foreignKey: 'COD_municipios', as: 'administradores' });
Administradores.belongsTo(Municipios, { foreignKey: 'COD_municipios' });

Municipios.hasMany(Usuarios, { foreignKey: 'COD_municipios', as: 'usuarios_municipio' });
Usuarios.belongsTo(Municipios, { foreignKey: 'COD_municipios' });

Municipios.hasMany(Empresas, { foreignKey: 'COD_municipios', as: 'empresas' });
Empresas.belongsTo(Municipios, { foreignKey: 'COD_municipios' });

Municipios.hasMany(SolicitudEmpresas, { foreignKey:'COD_municipios'})
SolicitudEmpresas.belongsTo(Municipios, { foreignKey: 'COD_municipios' });
//relacion muchos a muchos que tiene una tabla intermedia llamada ControlUsuarios
// es necesarios que las dos tablas tengan un belongsToMany
//es una buena práctica definir las asociaciones en ambos modelos para mejorar la claridad y la legibilidad del código.
Administradores.belongsToMany(Usuarios, { through: ControlUsuarios, foreignKey: 'COD_administrador' });
Usuarios.belongsToMany(Administradores, { through: ControlUsuarios, foreignKey: 'COD_usuarios' });

//relacion muchos a muchos que tiene una tabla intermedia llamada ControlEmpresas
Administradores.belongsToMany(Empresas, {through: ControlEmpresas, foreignKey: 'COD_administrador'});
Empresas.belongsToMany(Administradores,{through: ControlEmpresas, foreignKey: 'NIT_empresa'})

Usuarios.hasMany(Reservas, { foreignKey: 'COD_usuarios', as: 'reservas' });
Reservas.belongsTo(Usuarios, { foreignKey: 'COD_usuarios' });

//relacion muchos a muchos
Reservas.belongsToMany(Servicios, { through: DescripcionReserva, foreignKey: 'COD_reservas', as: 'reservas' });
Servicios.belongsToMany(Reservas,{through: DescripcionReserva, foreignKey: 'ID_servicios', as:'servicios'})

//relacion muchos a muchos
SolicitudEmpresas.belongsToMany(Administradores,{through: AdministradorSolicitud, foreignKey:'NIT_empresa_solicitante', as:'solicitud_empresa'})
Administradores.belongsToMany(SolicitudEmpresas,{through: AdministradorSolicitud, foreignKey:'COD_administradores', as:'administradores_solicitud'})


Categorias.hasMany(Servicios, { foreignKey: 'COD_categorias', as: 'servicios' });
Servicios.belongsTo(Categorias, { foreignKey: 'COD_categorias' });

Empresas.hasMany(Servicios, { foreignKey: 'NIT_empresas', as: 'servicios' });
Servicios.belongsTo(Empresas, { foreignKey: 'NIT_empresas' });

Servicios.hasMany(Fechas, { foreignKey: 'ID_servicios', as: 'fechas' });
Fechas.belongsTo(Servicios, { foreignKey: 'ID_servicios' });

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
  SolicitudEmpresas,
  AdministradorSolicitud
};
