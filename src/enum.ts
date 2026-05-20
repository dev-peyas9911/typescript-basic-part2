// type Role = "Admin" | "Editor" | "User";

enum Role {
    Admin = "Admin",
    Editor = "Editor",
    User = "User"
}

const canEdit = (role: Role) => {
    if (role === Role.Admin || role === Role.Editor) {
        return true;
    }
    else {
        return false;
    }
}

console.log(canEdit(Role.Admin))