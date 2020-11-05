import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GenericService{

    insertIntoField(fieldName: string, value: any){
        const fs = require('test');
        const path = './test.json';
        try{
            if(fs.existsSync(path)){
                console.log("exist");
            }else{
                console.log("dsnt exist");
            }
        }catch(err){
            console.error(err);
        }
    }

}