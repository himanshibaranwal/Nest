export class Connect {
 
    name: string;
    email: string;
    //Both the passwords are in a single object
    
     
    // gender: string;
    // terms: boolean;
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}