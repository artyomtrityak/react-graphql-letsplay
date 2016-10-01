declare module "GlobalStub" {
  // Global stub
}

declare module "react-router" {
  declare var exports: any;
}

declare module "rxjs/Rx" {
  declare var exports: any;
}

declare module "jquery" {
  declare var exports: any;
}

declare module "lodash" {
  declare var exports: any;
}

declare var ReactComponent: typeof React$Component;

declare var ReactElement: typeof React$Element;

type rx$SubscribtionT = {
  unsubscribe(): void;
}

type rx$ObservableT = {
  subscribe(
    onNext: ?(value: any) => mixed,
    onError: ?(error: any) => mixed,
    onCompleted: ?() => mixed,
  ): rx$SubscribtionT;
}

type gq$PayloadT = {
  query: string,
  varibales?: Object
};
    