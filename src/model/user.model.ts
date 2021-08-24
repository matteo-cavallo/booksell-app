export interface User {
    email:string;
    firstName:string;
    lastName:string;
    birthday?:Date;
    location?:{
        address: string;
        latitude: number;
        longitude: number;
    };
    books?: string[] //books uid
}
