import {loggermsg} from './logger.service'
import { Injectable } from '@angular/core'

@Injectable()
export class userservices {
    // enrollthis(tittle:string){
    //     alert(`this message from ${tittle}`)
    // }
    constructor(private logg:loggermsg){}
    user=[
        {name:'charan',status:'Active'},
        {name :'krishna',status:'In Active'}
    ]
    addUser(name:string, status:string){
        this.user.push({name:name,status:status});
        this.logg.logMessage(name=name,status=status)
    }
}