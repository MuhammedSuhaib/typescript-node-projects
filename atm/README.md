# 🏧 CLI ATM Machine

A realistic Command Line Interface simulation of an Automated Teller Machine (ATM). Secure your transactions with a PIN!

## 🚀 Features
- **PIN Verification**: Secure access to your account (Default PIN: **1112**).
- **Balance Inquiry**: Check your current account balance instantly.
- **Withdrawal**:
  - **Fast Cash**: Quickly withdraw fixed amounts (1000, 2000, 5000).
  - **Normal Withdrawal**: Enter a custom amount to withdraw.
- **Deposit**: Add funds to your account with ease.
- **Error Handling**: Notifies you of insufficient balance or incorrect PIN.

## 🛠️ Technologies
- **TypeScript**: For structured and maintainable code.
- **Node.js**: The execution environment.
- **Inquirer**: For handling complex CLI interactions.
- **Chalk**: For intuitive color-coded status messages.

## 📖 How to Run
Run the project directly from the root directory using Node.js:

```bash
node atm/index.ts
```

Or using `tsx`:

```bash
pnpm dlx tsx atm/index.ts
```
## ▶️ Run Without Installation

Try it directly in your terminal — no cloning or setup needed:

```bash
npx @muhammed_suhaib/atm
```
or
```bash
pnpm dlx @muhammed_suhaib/atm
```

