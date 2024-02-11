import express from 'express';
import { YourConnectorClass } from "../DataBase/Connector.js";

const app = express();

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Qawsedrf12345',
  database: 'hookah_time',
};

const connector = new YourConnectorClass(dbConfig);

app.get('/tobaccoBrands', async (req, res) => {
    try {
        const rows = await connector.tobaccoBrands();
        res.json(rows);
    } catch (error) {
        console.error('Error in API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/tobaccoFlavorsAdalya', async (req, res) => {
  try {
      const rows = await connector.tobaccoFlavorsAdalya();
      res.json(rows);
  } catch (error) {
      console.error('Error in API:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/tobaccoFlavorsAfzal', async (req, res) => {
  try {
      const rows = await connector.tobaccoFlavorsAdalya();
      res.json(rows);
  } catch (error) {
      console.error('Error in API:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
