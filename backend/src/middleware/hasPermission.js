const { Permission } = require('../models/permission');
const { PermissionRole } = require('../models/permissionRole');
const { Role } = require('../models/role');

function hasPermission(permissions) {
  return async (req, res, next) => {
    try {
      const userId = req.payload.id;

      const roles = await Role.findAll({
        where: {
          userId: userId,
        },
        attributes: [],
        include: [
          {
            model: Permission,
            as: 'permissions',
            attributes: ['description'],
            through: { model: PermissionRole, attributes: [] },
          },
        ],
      });

      const userPermissions = roles.reduce((permissionsArray, role) => {
        return permissionsArray.concat(
          role.permissions.map((permission) => permission.description)
        );
      }, []);

      const hasRequiredPermission = userPermissions.some((permission) =>
        permissions.includes(permission)
      );

      if (!hasRequiredPermission) {
        return res.status(401).send({
          message: 'Você não tem autorização para acessar este recurso.'
        })
      }

      next();
    } catch (error) {
      return response.status(500).send({
        message: 'Autenticação Falhou',
        cause: error.message,
      });
    }
  };
}

module.exports = { hasPermission };
