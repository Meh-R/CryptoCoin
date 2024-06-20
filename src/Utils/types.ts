export type AuthProps = {
  firstName: string;
  lastName: string;
  pseudo: string;
  age: number;
  city: string;
  email: string;
  password: string;
  confirmPassword?: string;
  codePromo?: string;
};

export type LogProps = {
  email: string;
  password: string;
};

export type Crypto = {
  id: string;
  name: string;
  value: number;
  image: string;
  quantity: number;
  created_at?: string;
  updated_at?: string;
};

export type User = {
  pseudo: string;
  dollarAvailables: number;
  UserHasCrypto?: CryptoUser[];
};

export type CryptoUser = {
  id: string;
  id_user: string;
  id_crypto: string;
  amount: number;
  createdAt: string;
  updated_at: string;
  Crypto: {
    id: string;
    name: string;
    value: number;
    image: string;
    quantity: number;
    created_at: string;
    updated_at: string;
  };
};

export type OffersProps = {
  id: string;
  User: {
    pseudo: string;
  };
  amount: number;
  created_at: string;
  id_user: string;
  Crypto: Crypto;
};

export type myAssetsType = {
  firstName: string;
  lastName: string;
  dollarAvailables: number;
  pseudo: string;
  age: string;
  UserHasCrypto: [
    {
      Crypto: {
        id: string;
        name: string;
        value: number;
        image: string;
        quantity: number;
        created_at: string;
        updated_at: string;
      };
      amount: number;
    }
  ];
};

export type promoType = {
  id: string;
  name: string;
  value: number;
};

export type historyType = {
  id: string;
  id_crypto: string;
  value: number;
  created_at: string;
  updated_at: string;
};
