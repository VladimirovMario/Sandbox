const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const hasMatchingRole = req.roles.some((role) =>
      allowedRoles.includes(role),
    );

    if (!hasMatchingRole) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
  };
};

module.exports = verifyRoles;
