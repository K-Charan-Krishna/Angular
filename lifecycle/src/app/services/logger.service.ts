import { Injectable } from "@angular/core"
@Injectable()
export class loggermsg{
    logMessage(name:string,status:string){
        alert(`Data Injected with name ${name} and status ${status}`)
    }
}