const db = require('../db');

module.exports = {
    listarPlantas: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM planta', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
        });
    },

    buscarId_planta: (Id_Planta) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM Planta WHERE Id_Planta = ?', [Id_Planta], (error, results)=> {
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else {
                    aceito(false);
                }

            })
        })
    },

    listarSensor: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM sensor', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
        });
    },

    listarUsuarios: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM usuario', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
        });
    },

    buscarId_Usuario: (Id_Usuario) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM usuario WHERE Id_Usuario = ?', [Id_Usuario], (error, results)=> {
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else {
                    aceito(false);
                }

            })
        })
    },

};