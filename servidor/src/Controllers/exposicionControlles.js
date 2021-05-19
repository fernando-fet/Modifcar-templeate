const Expocisiones = require('../Models/Exposicion')

async function listarUsuarios(req,res) {
    const eventos = await Expocisiones().listUser(); 
    res.status(200).json({eventos})
}


async function agregarUsuarios(req,res){
    const data = req.body;
    await Expocisiones().crearUser(data);
    res.status(200).json({
        success: 1,
        msj:"agregado con exito"
    }
    )
}

async function EliminaUsuarios(req,res){
    const data = req.params.id;
    await Expocisiones().ElimiUser(data)
    res.status(200).json({
        success: 1,
        msj:"esta eliminada"
    }
    )
}



async function ModifiUsuarios(req,res){
    const data =[ 
        req.body.usuarios,
        req.body.nombre,
        req.body.apellido,
        req.body.telefono,
        req.body.id_rol,
        req.params.id
    ]
    await Expocisiones().ModifiUser(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarUsuarios,
    agregarUsuarios,
    EliminaUsuarios,
    ModifiUsuarios
};




