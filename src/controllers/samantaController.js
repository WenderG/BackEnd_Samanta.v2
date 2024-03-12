const samantaService = require('../services/samantaService');

module.exports = {
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx PLANTA X xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    listarPlantas: async (req, res) => {
        let json = {error:'', result:[]};
        let planta = await samantaService.listarPlantas();

        for(let i in planta) {
            json.result.push({
                Id_Planta: planta[i].Id_Planta,
                Id_Usuario: planta[i].Id_Planta,
                nome: planta[i].nome,
                nome_cientifico: planta[i].nome_cientifico,
                descricao: planta[i].descricao,
                dt_criacao: planta[i].dt_criacao
            });
        };

        res.json(json);
    },

    buscarId_Planta: async(req, res) => {
        let json = {error:'', result:{}};
        let Id_Planta = req.params.Id_Planta;
        let planta = await samantaService.buscarId_planta(Id_Planta);

        if(planta) {
            json.result = planta;
        }

        res.json(json);

    },




    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx SENSOR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    listarSensor: async (req, res) => {
        let json = {error:'', result:[]};
        let sensor = await samantaService.listarSensor();

        for(let i in sensor) {
            json.result.push({
                Id_Sensor: sensor[i].Id_Sensor,
                Id_Planta: sensor[i].Id_Planta,
                Temperatura: sensor[i].Temperatura,
                Umidade: sensor[i].Umidade,
                Luminosidade: sensor[i].Luminosidade,
                dt_atualizacao: sensor[i].dt_atualizacao
            });
        };

        res.json(json);
    },




    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx USUARIOS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    listarUsuarios: async (req, res) => {
        let json = {error:'', result:[]};
        let usuario = await samantaService.listarUsuarios();

        for(let i in usuario) {
            json.result.push({
                Id_Usuario: usuario[i].Id_Usuario,
                login: usuario[i].login,
                email: usuario[i].email,
                senha: usuario[i].senha,
                dt_cadastro: usuario[i].dt_cadastro
            });
        };

        res.json(json);
    },

    buscarId_Usuario: async(req, res) => {
        let json = {error:'', result:{}};
        let Id_Usuario = req.params.Id_Usuario;
        let usuario = await samantaService.buscarUma(Id_Usuario);

        if(usuario) {
            json.result = usuario;
        }

        res.json(json);

    },


};