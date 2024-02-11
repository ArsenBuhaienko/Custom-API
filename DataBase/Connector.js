
import mysql from 'mysql2';

 class YourConnectorClass {
    connection;

    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    async connect() {
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }

    async disconnect() {
        return new Promise((resolve, reject) => {
            this.connection.end((err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }

    async tobaccoBrands() {
        try {
            await this.connect();
            const [rows] = await this.connection.promise().query("SELECT * FROM `tobacco_manufacturer` ORDER BY id ASC");
            return rows;  
        } catch (error) {
            console.error('Error:', error);
            throw error;
        } finally {
            //await this.disconnect();
        }
    }

    async tobaccoFlavorsAdalya() {
        try {
            await this.connect();
            const [rows] = await this.connection.promise().query("SELECT * FROM `tobacco_flavors`WHERE brand = 1;");
            return rows;  
        } catch (error) {
            console.error('Error:', error);
            throw error;
        } finally {
            //await this.disconnect();
        }
    }

    async tobaccoFlavorsAfzal() {
        try {
            await this.connect();
            const [rows] = await this.connection.promise().query("SELECT * FROM `tobacco_flavors`WHERE brand = 2;");
            return rows;  
        } catch (error) {
            console.error('Error:', error);
            throw error;
        } finally {
            //await this.disconnect();
        }
    }
    
}

export { YourConnectorClass };