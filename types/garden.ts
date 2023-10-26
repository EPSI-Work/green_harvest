import type { Member } from "./member";

export class Garden {
    id: number;
    name: string;
    creationDate: Date;
    numberOfMembers: number;
    image: string;
    members: Member[];
    credits: number;
    areaInSquareMeters: number;
    postalAddress: string;
    city: string;

    constructor(
        id: number,
        name: string,
        creationDate: Date,
        image: string,
        members: Member[],
        credits: number,
        areaInSquareMeters: number,
        postalAddress: string,
        city: string
    ) {
        this.id = id;
        this.name = name;
        this.creationDate = creationDate;
        this.members = members;
        this.image = image;
        this.numberOfMembers = this.members.length; // Calculé automatiquement en fonction de la liste des membres
        this.credits = credits;
        this.areaInSquareMeters = areaInSquareMeters;
        this.postalAddress = postalAddress;
        this.city = city;
    }
}