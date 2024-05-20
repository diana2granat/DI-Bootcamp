function getAction(userRole) {
    switch (userRole) {
        case "admin":
            return "Access Admin platform";
        case "user":
            return "View User platform";
        case "guest":
            return "View Guest platform";
        default:
            return "Unknown Role";
    }
}
// Test the function
console.log(getAction("admin"));
console.log(getAction("user"));
console.log(getAction("guest"));
console.log(getAction("manager"));
