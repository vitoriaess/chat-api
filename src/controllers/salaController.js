const salaModel = require('../models/salaModel');

exports.get=async()=>{
    return await salaModel.listarSalas();
}

exports.get=async(req,res)=>{
    return {"status":"OK", "controller":"Sala"};
}

exports.get=()=>{
    let salaMOdel = require('../models/salaModel');
    return salaModel.listarSalas();
}