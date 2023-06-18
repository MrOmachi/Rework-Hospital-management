export interface IUser {
    BusinessIdentifier: string;
    BusinessName: string;
    UserState: string;
    FullName: {
      FirstName: string;
      MiddleName?: string;
      LastName: string;
    };
    StandardAttributes: {
      Birthdate: string;
      PhoneNumber: string;
      Address: {
        StreetAddress: string;
        SecondStreetAddress: string;
        City: string;
        Country: string;
        StateOrTerritory: string;
        Zipcode: string;
        LGA: string;
      };
      Email: string;
      Website: string;
    };
    UserToBusinnessMappingList: Array<{
      UserID: string;
      BusinessIdentifier: string;
    }>;
    password: string;
  }