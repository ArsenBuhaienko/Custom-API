import express from 'express';
import { YourConnectorClass } from "../DataBase/Connector.js";
import dotenv from "dotenv"

const app = express();
dotenv.config();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
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

app.post('/tobaccoBrandsCreateNew', async (req, res) => {
  try {
      const rows = await connector.tobaccoBrandsCreateNew();
      res.json(rows);
  } catch (error) {
      console.error('Error in API:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/tobaccoBrandsDelete', async (req, res) => {
  try {
      const rows = await connector.tobaccoBrandsDelete();
      res.json(rows);
  } catch (error) {
      console.error('Error in API:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
