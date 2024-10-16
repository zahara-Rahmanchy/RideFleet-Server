export enum EUserRole {
  SuperAdmin = "SuperAdmin",
  Admin = "Admin",
  Renter = "Renter",
  Driver = "Driver",
}

export interface IAuthUser {
  role: EUserRole;
  email: string;
  iat: number;
  exp: number;
}
