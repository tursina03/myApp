import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { DetailContactPage } from '../../pages/detail-contact/detail-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  
/*
  public people = [
    {
    
      gender: "male",
      name: {
        title: "mr",
        first: "rolf",
        last: "hegdal"
      },
      location: {
        street: "ljan terrasse 346",
        city: "vear",
        state: "rogaland",
        postcode: "3095",
        coordinates: {
          latitude: "54.8646",
          longitude: "-97.3136"
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii"
        }
      },
      email: "rolf.hegdal@example.com",
      login: {
        uuid: "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
        username: "bluefrog786",
        password: "ingrid",
        salt: "GtRFz4NE",
        md5: "5c581c5748fc8c35bd7f16eac9efbb55",
        sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
      },
      dob: {
        date: "1975-11-12T06:34:44Z",
        age: 42
      },
      registered: {
        date: "2015-11-04T22:09:36Z",
        age: 2
      },
      phone: "66976498",
      cell: "40652479",
      id: {
        name: "FN",
        value: "12117533881"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      nat: "NO"
  },

  {
    gender: "male",
    name: { title: "mr", first: "julian", last: "kohl" },
    location: {
      street: "6797 mühlenweg",
      city: "kleve",
      state: "bremen",
      postcode: 87356
    },
    email: "julian.kohl@example.com",
    login: {
      username: "browndog589",
      password: "finish",
      salt: "BclbhNDG",
      md5: "f430331b5a0172280153c45e94d36782",
      sha1: "d4e3d6f2fdb275e5df4c1c7abe821b1b03ee3fee",
      sha256: "22d4d01aee50055c2e3acf5c5786c05b645f56680e84dcd5a20fc50c89d5f547"
    },
    dob: "1946-04-17 13:40:10",
    registered: "2008-08-14 21:32:15",
    phone: "0601-9171644",
    cell: "0174-3893722",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
    },
    nat: "DE"
  },
  {
    gender: "female",
    name: { title: "mrs", first: "ilaine", last: "fogaça" },
    location: {
      street: "3406 rua josé bonifácio ",
      city: "são mateus",
      state: "tocantins",
      postcode: 84890
    },
    email: "ilaine.fogaça@example.com",
    login: {
      username: "organicrabbit558",
      password: "cromwell",
      salt: "NUykPRT7",
      md5: "132e21636041c114be257cf04f92b449",
      sha1: "2a5c32c27aeee1b69f5d5b6a790b9f0e9b06c2bc",
      sha256: "71600c8f347e191d6197679add9398bc51fcf34cd625b230f8be8c70b2f49207"
    },
    dob: "1960-06-30 10:32:10",
    registered: "2014-08-20 04:07:13",
    phone: "(20) 7947-2468",
    cell: "(19) 8711-9665",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg"
    },
    nat: "BR"
  },
  {
    gender: "female",
    name: { title: "ms", first: "florence", last: "clarke" },
    location: {
      street: "2714 maunganui road",
      city: "whanganui",
      state: "bay of plenty",
      postcode: 32413
    },
    email: "florence.clarke@example.com",
    login: {
      username: "tinyostrich898",
      password: "stokes",
      salt: "gDj8C3ba",
      md5: "70de1cde511885b92c68cda2fd6b25f7",
      sha1: "16216ddb4ff0b8baa58bf941e600f161c50a151b",
      sha256: "1a3a1c023739f29c54e6ccba58604cf85c1ebfe5d15962192628cf5482f35898"
    },
    dob: "1990-02-19 09:50:41",
    registered: "2004-04-07 05:24:08",
    phone: "(227)-014-4248",
    cell: "(332)-165-5972",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"
    },
    nat: "NZ"
  }
]
*/

  public reloadData = false;

  public people = []; //this.service.getPeople()
  public errorMesssage : string;

  constructor(public navCtrl: NavController, public service:PeopleProvider) {
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"];
      },
      (error) => console.log(error)
    )
  }
  toggleReloadData(){
    this.reloadData = !this.reloadData
  }

  doRefresh(e){
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
        e.complete()
      },
      (error) => {
        console.log(error)
        e.complete()
      }
    )
  }

  doInfinite(e){
    this.service.getPeopleFromApi()
    .subscribe(
      data => this.people.push(...data["results"]),
      err => console.log(err),
      () => e.complete()
    )
  }

  pushPerson(user){
    this.navCtrl.push(DetailContactPage,user)
  }
}
