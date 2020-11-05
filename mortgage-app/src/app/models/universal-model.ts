import { ThrowStmt } from '@angular/compiler';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { NumberValueAccessor } from '@angular/forms';
import { PropertyType } from './property-enum';
import { Provinces } from './province-enum';

export class UniversalModel{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    anualIncome: number;
    propertyType: PropertyType;
    nrOfBaths: number;
    desiredProvince: Provinces;
    desiredCity: string;
    desiredStreet: string;
    desiredStreetNumber: string;
    postalCode: string

    constructor(id: string, firstName: string, lastName: string, email: string, password: string, phoneNumber: string, annualIncome: number, propertyType: PropertyType,
        nrOfBaths: number, desiredProvince: Provinces, desiredCiy: string, desiredStreet: string, desiredStreetNumber: string, postalCode: string){
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.phoneNumber = phoneNumber;
            this.anualIncome = annualIncome;
            this.propertyType = propertyType;
            this.nrOfBaths = nrOfBaths;
            this.desiredProvince = desiredProvince;
            this.desiredCity = desiredCiy;
            this.desiredStreet = desiredStreet;
            this.desiredStreetNumber = desiredStreetNumber;
            this.postalCode = postalCode;
    }

    get getId(): string{
        return this.id;
    }

    get getFirstName(): string{
        return this.firstName
    }

    get getLastName(): string{
        return this.lastName
    }

    get getEmail(): string{
        return this.email;
    }

    get getPassword(): string{
        return this.password;
    }

    get getPhoneNumber(): string{
        return this.phoneNumber;
    }

    get getAnnualIncome(): number{
        return this.anualIncome;
    }

    get getPropertyType(): PropertyType{
        return this.propertyType;
    }

    get getNrOfBaths(): number{
        return this.nrOfBaths;
    }

    get getDesiredProvince(): Provinces{
        return this.desiredProvince
    }

    get getDesiredCity(): string{
        return this.getDesiredCity;
    }

    get getDesiredStreet(): string{
        return this.desiredStreet;
    }

    get getDesiredStreetNumber(): string{
        return this.desiredStreetNumber
    }

    get getPostalCode(): string{
        return this.postalCode;
    }
}