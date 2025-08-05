export type RootPublicStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
};

export type RootPrivateStackParamList = {
  Loading: undefined;
  Home: undefined;
  TransactionDetails: { transactionId: string };
};

export enum Routes {
  Onboarding = 'Onboarding',
  Home = 'Home',
  Auth = 'Auth',
  TransactionDetails = 'TransactionDetails',
}
