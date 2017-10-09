const ID_INIT = 0
const ID_END = 2
const QUANT_PASS_INIT = 2;
const QUANT_PASS_END = 4;
const TEMP_INIT = 4;
const TEMP_END = 6;
const SOUND_INIT = 6;
const SOUND_END = 8;
const VEL_INIT = 8;
const VEL_END = 10;

var test = {
    "_id": {
        "$oid": "59d6732eb070ac0012167590"
    },
    "device": "2459D1",
    "data": "0312345678",
    "__v": 0
};

test["id_bus"] = test["data"].slice(ID_INIT,ID_END);
console.log(JSON.stringify(test));
console.log("ID: "+test["data"].slice(ID_INIT,ID_END));
console.log("Pass: "+test["data"].slice(QUANT_PASS_INIT,QUANT_PASS_END));
console.log("Media: "+test["data"].slice(4,6));
console.log("Intensidade: "+test["data"].slice(6,8));
console.log("Velocidade: " + test["data"].slice(8,10));

test['id_bus'] = test["data"].slice(ID_INIT,ID_END);
console.log(JSON.stringify(test));
/*
ID_ONIBUS,
qtd_passageirosAtual, 
media_temperatura, 
IntensidadeRuido, 
Velocidade
*/