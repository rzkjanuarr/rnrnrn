class UserDTO {
  constructor(rawUser) {
    // Identity
    this.id = rawUser.login.uuid;
    this.username = rawUser.login.username;
    this.gender = rawUser.gender;
    this.nationality = rawUser.nat;

    // Name
    this.title = rawUser.name.title;
    this.firstName = rawUser.name.first;
    this.lastName = rawUser.name.last;
    this.fullName = `${rawUser.name.first} ${rawUser.name.last}`;

    // Contact
    this.email = rawUser.email;
    this.phone = rawUser.phone;
    this.cell = rawUser.cell;

    // Location
    this.street = `${rawUser.location.street.name} No. ${rawUser.location.street.number}`;
    this.city = rawUser.location.city;
    this.state = rawUser.location.state;
    this.country = rawUser.location.country;
    this.postcode = rawUser.location.postcode;
    this.latitude = rawUser.location.coordinates.latitude;
    this.longitude = rawUser.location.coordinates.longitude;
    this.timezoneOffset = rawUser.location.timezone.offset;

    // Date of Birth
    this.birthDate = rawUser.dob.date;
    this.age = rawUser.dob.age;

    // Registered
    this.registeredDate = rawUser.registered.date;
    this.memberSince = rawUser.registered.age; // udah berapa tahun jadi member

    // Picture
    this.avatarThumbnail = rawUser.picture.thumbnail;
    this.avatarMedium = rawUser.picture.medium;
    this.avatarLarge = rawUser.picture.large;
  }

  static fromJson(rawUser) {
    return new UserDTO(rawUser);
  }
}

export default UserDTO;
