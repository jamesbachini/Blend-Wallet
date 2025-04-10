# Blend Web Wallet

A web based wallet which can be used to generate addresses and deposit/withdraw funds to Blend

Full tutorial at: [https://jamesbachini.com/building-on-blend/](https://jamesbachini.com/building-on-blend/)

A lightweight web-based wallet for interacting with the [Blend](https://www.blend.capital/) overcollateralized lending protocol on Stellar Soroban. This wallet allows users to:

- Generate Stellar keypairs
- View on-chain token balances via contract simulation
- Deposit and withdraw funds to/from Blend liquidity pools

Blend enables users to earn yield on deposited assets while remaining fully overcollateralized through smart contracts.

---

## Features

- 🔐 **Stellar Wallet Generation** – Create new Stellar addresses using the Stellar SDK
- 🔍 **Contract Queries** – View token balances by querying Soroban smart contracts directly
- 📥 **Deposits & Withdrawals** – Use the Blend SDK to submit collateral supply and withdrawal requests
- 💡 **Testnet Support** – Fund wallets with [Friendbot](https://laboratory.stellar.org/#account-creator?network=test) for testing

---

## Getting Started

This project uses Webpack to bundle dependencies. To build the project:

```bash
npm install
npx webpack
npx http-server .
```

---

## Technologies Used

- [Stellar SDK](https://github.com/stellar/js-stellar-sdk)
- [Blend SDK](https://www.npmjs.com/package/@blend-capital/blend-sdk)
- [Soroban RPC](https://soroban.stellar.org/docs/reference/rpc/)
- Webpack for JS bundling

---

## Security Notice

This is an experimental implementation for testnet development and educational use. Do not use this wallet with real funds or production accounts. Secrets and private keys are handled client-side — **do not store or transmit them insecurely.**

---

## Resources

- 🔗 [Blend Capital](https://www.blend.capital/)
- 📘 [Blend SDK Docs](https://www.npmjs.com/package/@blend-capital/blend-sdk)
- 🛰 [Stellar Developer Docs](https://developers.stellar.org/)
- 🔐 [Passkey Auth on Stellar](https://kalepail.com/blockchain/the-passkey-powered-future-of-web3)

---

## License

MIT License
