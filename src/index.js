import { PoolContract, RequestType } from '@blend-capital/blend-sdk';
import { Keypair, TransactionBuilder, Networks, BASE_FEE, rpc, xdr, nativeToScVal, scValToNative, Contract } from 'stellar-sdk';
window.BlendSdk = { PoolContract, RequestType };
window.StellarSdk = { Keypair, TransactionBuilder, Networks, BASE_FEE, rpc, xdr, nativeToScVal, scValToNative, Contract };
