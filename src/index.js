import { PoolContract, RequestType } from '@blend-capital/blend-sdk';
import { Keypair, TransactionBuilder, Networks, BASE_FEE, rpc, xdr, nativeToScVal, Contract } from 'stellar-sdk';

// Attach to window so it’s available globally
window.BlendSdk = { PoolContract, RequestType };
window.StellarSdk = { Keypair, TransactionBuilder, Networks, BASE_FEE, rpc, xdr, nativeToScVal, Contract };
