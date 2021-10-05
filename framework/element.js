const div = (strings, ...args) => console.log(strings, args);

const firstName = "Jae";
const lastName = "Park";

div`Hello ${firstName} ${lastName} !`;