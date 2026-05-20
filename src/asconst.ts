const userRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  User: "USER",
} as const;

const canEdit = (role: (typeof userRoles)[keyof typeof userRoles]) => {
  if (role === userRoles.Admin || role === userRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

console.log(canEdit(userRoles.Admin));
