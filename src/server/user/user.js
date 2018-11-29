export default class User {
  constructor(
    id,
    isActive,
    balance,
    age,
    name,
    company,
    email,
    phone,
    address,
    about,
    registered,
    latitude,
    longitude,
  ) {
    this.id = id;
    this.isActive = isActive;
    this.balance = balance;
    this.age = age;
    this.firstName = name.first;
    this.lastName = name.last;
    this.company = company;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.about = about;
    this.registered = registered;
    this.lat = latitude;
    this.long = longitude;
  }
}
