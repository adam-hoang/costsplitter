import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getGroupList(){
    return this._http.get('/z/allGroups');
  }
  getGroup(id){
    return this._http.get('/z/group/' + id);
  }
  getUser(id){
    return this._http.get('/z/user/' + id);
  }
  getSingleEvent(id){
    return this._http.get('/z/event/' + id);
  }
  addUser(id, data){
    return this._http.post('/z/newUser/' + id, data);
  }
  addEvent(id, data){
    return this._http.post('/z/newEvent/' + id, data);
  }
  addPart(id, data){
    return this._http.post('/z/newPart/' + id, data);
  }
  deletePart(id, data){
    return this._http.post('/z/deletePart/' + id, data);
  }
  addGroup(data){
    return this._http.post('/z/newGroup/', data);
  }
  deleteGroup(id){
    return this._http.delete('/z/deleteGroup/' + id);
  }
  deleteEvent(id, groupObject){
    return this._http.post('/z/deleteEvent/' + id, groupObject);
  }
  deleteUser(id, groupObject){
    return this._http.post('/z/deleteUser/' + id, groupObject);
  }
  updateGroup(id, data){
    return this._http.post('/z/group/' + id, data);
  }
  updateEvent(id, data){
    return this._http.post('/z/event/' + id, data);
  }
  updateGroupAfterUpdatingEvent(id, data){
    return this._http.post('/z/updateGroupEvent/' + id, data);
  }
  updateUser(id, data){
    return this._http.post('/z/user/' + id, data);
  }
  prettyDate(str){
    var monthADict = {
      "01" : "January",
      "02" : "February",
      "03" : "March",
      "04" : "April",
      "05" : "May",
      "06" : "June",
      "07" : "July",
      "08" : "August",
      "09" : "September",
      "10" : "October",
      "11" : "November",
      "12" : "December",
    }
    var returnedString = ""
    var day = ""
    if(str[8] == "0"){
      day = str.substring(9);
    } else {
      day = str.substring(8);
    }
    returnedString += monthADict[str.substring(5,7)] + " " + day + ", " + str.substring(0,4);
    return returnedString;
  }
}