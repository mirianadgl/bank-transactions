# bank-transactions 🏦

This project is an API to manage and consult bank transactions.

## 🚀 Technologies

- Node.js
- TypeScript
- Express

## ⚙️ Installation and Use

```bash
# Clone the repository
git clone git@github.com:mirianadgl/bank-transactions.git

# Enter the folder
cd bank-transactions

# Install dependencies
npm install

# Run the project in development mode
npm run project
```

## 📌 Endpoints

### POST /reset

reset state data before starting testes

### GET /balance

Returns the current account balance  
`GET /balance?account_id={id}`

### POST /event

Create an event account

Event deposit  
`POST /event {"type":"deposit", "destination":"300", "amount":10}`

Event withdraw  
`POST /event {"type":"withdraw", "origin":"300", "amount":5}`

Event transfer  
`POST /event {"type":"transfer", "origin":"100", "amount":5, "destination":"300"}`
