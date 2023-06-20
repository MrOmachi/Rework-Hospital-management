import { AtmCard,  Authenticator,  OpenAccount, WorldCurrency, verifiedUser } from "../../Image";

export const CardArr = [
  {
    id: 1,
    img: verifiedUser,
    title: `Setup Transaction PIN`,
    body: ` Transaction PIN is a 4 digit PIN used to
    authorize any transfers you make on
    Cleva. Set it up now to ensure that all of
    your transactions are safe and secure.`,
    button: `Skip for now`,
  },
  {
    id: 2,
    img: Authenticator,
    title: `Setup two-factor authentication`,
    body: ` By enabling two-factor authentication,
    you'll be able to keep your account safe
    and protect against unauthorized access.`,
    button: `Skip for now`,
  },
];

export const DarkCard = [  
  {
    id: 1,
    title: `Link your existing USD
    bank account and
      transfer to Nigeria`,
    img: WorldCurrency
  },
  {
    id: 2,
    title: `Open a USD bank account`,
    img: AtmCard,
    button:  `COMING SOON`
  },
  {
    id: 3,
    title: `Open an NGN bank account`,
    img: OpenAccount,
    button:  `COMING SOON`
  }
]