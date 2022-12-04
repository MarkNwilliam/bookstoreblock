import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  export const addressState = atom({
    key: 'addressState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  export const CoverState = atom({
    key: 'CoverState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  export const BookState = atom({
    key: 'BookState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
export   const contractState = atom({
    key: 'contractState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });


 export const idState = atom({
    key: 'idState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  export const AssetCount = atom({
    key: 'AssetCount', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

  export const TransactionCount = atom({
    key: 'TransactionCount', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

  export const Asset = atom({
    key: 'Asset', // unique ID (with respect to other atoms/selectors)
    default: [], 
  });

  export const QuantityState = atom({
    key: 'QuantityState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

  export const PriceState = atom({
    key: 'PriceState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });