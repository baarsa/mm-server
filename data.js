
const currencies = [
    { id: 1, name: 'RUB', symbol: '₽' },
    { id: 2, name: 'USD', symbol: '$' },
    { id: 3, name: 'EUR', symbol: '€' },
    { id: 4, name: 'AMD', symbol: '֏' },
];

const moneyItems = [
    { id: 1, name: 'Bank', amount: 1000, currencyId: 2 },
    { id: 2, name: 'Home', amount: 15000, currencyId: 3 },
    { id: 3, name: 'a secret place', amount: 4200, currencyId: 4 },
];

let moneyItemsId = 4;

module.exports = { currencies, moneyItems, moneyItemsId };