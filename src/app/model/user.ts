export class User {
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    password: string;
    username: string;

    constructor(userId: string, firstName: string, lastName: string, email: string, password: string, username: string, dateOfBirth: Date) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.username = username;
        this.dateOfBirth = dateOfBirth;
    }
}

