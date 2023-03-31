import image from "./images/profiles/me.jpg";
import ngn from "./images/flags/ngn.png";
import usd from "./images/flags/usd.png";
import gtb from "./images/banks/gtb.png";

const data={
    User:{
        UserID: "user-h1ILAYQnc43ZfxZmru152N8Ao",
        FullName: {
          FirstName: "Abraham",
          MiddleName: "Demilade",
          LastName: "Adetugboboh"
        },
        BankName: "Access Bank",
        AccountNumber: "1434282925",
        Image:image
    },
    Recipients:[
      {
        RecipientIdentifier: "rec-rePLDXV7kQJIKsh603K9GLIgvq",
        FullName: {
          FirstName: "Atiku",
          MiddleName: "Bola",
          LastName: "Osibanjo"
        },
        Country: "NG",
        Currency: "NGN",
        CountryIcon:ngn,
        TotalTransfers:10000.00,
        LastFourDigits: "3364",
        AccountNumber: "35354466600",
        BankName: "Polaris Bank",
        BankType:"Savings",
        Address: {
          StreetAddress: "11 adesoye St,",
          SecondStreetAddress: "",
          City: "Lagos",
          Country: "NG",
          StateOrTerritory: "Lagos",
          Zipcode: "110021",
          LGA: "Eti-osa"
        }
      },
      {
        RecipientIdentifier: "rec-rePLDXV7kQJIKdd73K9GLIgvq",
        FullName: {
          FirstName: "Peter",
          MiddleName: "Amhed",
          LastName: "Adams"
        },
        Country: "US",
        Currency: "USD",
        CountryIcon:usd,
        LastFourDigits: "5477",
        AccountNumber: "43894594444",
        BankName: "Evolve Bank & Trust",
        RoutingNumber:"22222222",
        BankType:"Checkings",
        TotalTransfers:800.00,
        Address: {
          StreetAddress: "111 Mason St,",
          SecondStreetAddress: "",
          City: "San Francisco",
          Country: "USA",
          StateOrTerritory: "San Franscisco",
          Zipcode: "94105",
          LGA: "CA"
        }
      }
    ],
    Accounts:[
      {
        VirtualAccountIdentifier: "vir-2KuK0njcwzdAo5TW955E3qwUbP",
        Icon:ngn,
        LastFourDigits:"1234",
        Currency:"NGN",
        Country: "NG",
        Balance: {
            Time: null,
            Money: 0.00,
            Currency: "NGN"
          },
        Active:true,
        BankName:"Access Bank",AccountName:"Abraham Adetugboboh",AccountNumber:"98765431234",BankType:"Savings"},
      {
        VirtualAccountIdentifier: "vir-2KuK0njcwrwtBweW955E3qwUbP",
        Icon:usd,
        LastFourDigits:"4567",
        Currency:"USD",
        Country: "US",
        Balance:{
            Time: null,
            Money: 0.00,
            Currency: "USD"
          },
        Active:true,
        BankName:"Evolve Bank & Trust",AccountName:"Abraham Adetugboboh",AccountNumber:"98765434567",BankType:"Checking",RoutingNumber:"111111111",BankAddress:"111 Mason St, San Francisco, CA, 94105,USA" }
    ],
    LinkedAccounts:[
      {
        LinkedAccountIdentifier: "lnk-acct-UUtAngJ84ydGtDELvBt3RKuZXKKiSRW",
        Description: "",
        Icon:gtb,
        Country: "NG",
        BankName:"Evolve Bank & Trust",
        Balance: {
          Time: 0,
          Money: 0.00,
          Currency: "NGN"
        },
        Currency: "NGN",
        LastFourDigits: "4949",
        Active:true,
        Date:"28 Aug, 2022"
      }
      ],Payments:[
      {
        TransactionDetail: {
          PaymentMade: {
            TransactionDomain: "LOCAL",
            Sender: {
              UserID: "user-NRU9kqPchoLw3tYAEH5bDvg8j",
              FullName: {
                FirstName: "Odeku",
                MiddleName: "James",
                LastName: "Patrick"
              },
              BankName: "Access Bank",
              AccountNumber: "1434282925"
            },
            Recipient: {
              RecipientIdentifier: "rec-WXkVCHLHQtnwKwjyJjUVV3YFuo",
              FullName: {
                FirstName: "Abraham",
                MiddleName: "Demilade",
                LastName: "Adetugboboh"
              },
              Country: "NG",
              Address: {
                StreetAddress: "",
                SecondStreetAddress: "",
                City: "",
                Country: "Nigeria",
                StateOrTerritory: "",
                Zipcode: "",
                LGA: ""
              },
              BankName: "Zenith Bank",
              RoutingNumber: "",
              AccountNumber: ""
            },
            Amount: 1000,
            Fee: 10,
            Description: "Top-up from GTBank",
            Currency:"NGN",
            Image:gtb
          }
        },
        TransactonState: "PENDING",
        TransactionIdentifier: "tra-YptqO8uxHu6qe5WubSHpapsuNp",
        Date: "28 Aug, 2022 03:37:00 PDT",
        TransactionType: "RECIEVE_PAYMENT"
      }
    ]

}


export default data;
