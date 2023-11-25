var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
var cors = require('cors');
const bodyParser = require('body-parser');
let { moneyItems, moneyItemsId, currencies } = require('./data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/money-items', async (req, res) => {
   await new Promise((resolve) => {
      setTimeout(resolve, 1000);
   });
   res.json(moneyItems);
});
app.put('/api/money-items', (req, res) => {
   if (Math.random() < 0.3) {
      res.sendStatus(500);
      return;
   }
   moneyItems.push({
      ...req.body.moneyItem,
      id: moneyItemsId++,
   })
   res.json({ moneyItem: moneyItems[moneyItems.length - 1] });
});
app.post('/api/money-item/:id', (req, res) => {
   const index = moneyItems.findIndex(item => item.id == req.params.id);
   if (index > -1) {
      moneyItems[index] = req.body.moneyItem;
   }
   res.json({ moneyItem: moneyItems[index] });
});
app.delete('/api/money-item/:id', (req, res) => {
   const index = moneyItems.findIndex(item => item.id == req.params.id);
   if (index > -1) {
      moneyItems.splice(index, 1);
   }
   res.send();
});
app.get('/api/currencies', (req, res) => {
   res.json(currencies);
});

app.listen(port);
console.log(`listening on ${port}`);
