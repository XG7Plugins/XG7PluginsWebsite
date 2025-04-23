import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Permission, Role, User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = {
    name: "DaviXG7",
    email: "davisonic2010@gmail.com",

    roles: [Role.CEO, Role.ADMIN],
    permissions: [Permission.ALL],

    profileIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAADf0lEQVR4Xu3bMYpWURBE4SciaKAYGZkYmgrm7sPcXbghN2UgmAgiuADN+8ApHvRwFar5ogn6vur607k+vH1xy7vXj2/5+P7ZLXzxLH7hrotPOp7Y8UnHF8/iF+5qAQG/cFcLCPiFu1pAwC/c1QICfuGuFhDwC3e1gIBfuKsFBPzCXS0g4BfuagEBv3BXCwj4hbtaQMAv3NUCAn7hrhYQ8At3tYCAX7jrdgH/O/5EHDc4bnAtIOAGxw2uBQTc4LjBtYCAGxw3uBYQcIPjBtcCAm5w3OBaQMANjhtcCwi4wXGDawEBNzhucC0g4AbHDa4FBNzguMG1gIAbHDe4FhBwg+MG1wICbnDc4FpAwA2OG1wLCLjBcYO7XcCXz59K8GKuBSzjxVwLWMaLuRawjBdzLWAZL+ZawDJezLWAZbyYawHLeDHXApbxYq4FLOPFXAtYxou5FrCMF3MtYBkv5lrAMl7MtYBlvJhrAct4MXf9/vnjljc35+mTR7e8evn8QX3/9vWWmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBFd/FPbj6YhpEcX9zFyt3Mk4Y/WdcCgpknDU/sWkAw86ThiV0LCGaeNDyxawHBzJOGJ3YtIJh50vDErgUEM08anti1gGDmScMTuxYQzDxpeGLXAoKZJw1P7FpAMPOk4YldCwhmnjQ8sWsBwcyThid2LSCYedLwxK4FBDNPGp7YtYBg5knDE7vbBXCF4wbHf3nYxRcdEzlucC0gYCLHDa4FBEzkuMG1gICJHDe4FhAwkeMG1wICJnLc4FpAwESOG1wLCJjIcYNrAQETOW5wLSBgIscNrgUETOS4wbWAgIkcN7gWEDCR4wbXAgImctzgWkDARI4bXAsImMhxg7v4ibt+3Zw//9gw0a4WEIaJdrWAMEy0qwWEYaJdLSAME+1qAWGYaFcLCMNEu1pAGCba1QLCMNGuFhCGiXa1gDBMtKsFhGGiXS0gDBPtagFhmGhXCwjDRLtaQBgm2vXgBZRrAYe1gMNawGEt4LAWcFgLOKwFHNYCDmsBh7WAw1rAYS3gsBZwWAs4rAUc9hdFD0cqytmG9AAAAABJRU5ErkJggg==",
    about: "Sou muito legau",

    balance: 0
  };

  constructor(
    private http: HttpClient
  ) { }

  loadUser(){
    let token = localStorage.getItem("token");

    if(token){
      this.http.get<User>("/api/user").subscribe(user => {
        this.user = user;
      });
    }
  }

  isValid() {
    if (this.user == null) {
      return false
    }
    return this.http.get("http://localhost:asdsd/api/token=?");
  }
}
