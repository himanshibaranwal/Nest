export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
  
  
    }
          isAuthenticated(): boolean{
        if (localStorage.getItem("currentUser")) {
          return true;
        }
        else{
          return false;
        }
      }
  
      canActivate(): boolean {
        if (!this.isAuthenticated()) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      }
  }