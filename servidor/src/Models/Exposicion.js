'use strict'
const pool = require('../database');

module.exports = function() {

    async function listUser(datos) {
        let sql = `SELECT u.id_user, u.usuarios , u.nombre , u.apellido, u.telefono, r.roles
        FROM usuarios u, roles r
        WHERE u.id_rol = r.id_rol;`;
        return await pool.query(sql,datos)

    }
   async function crearUser(datos) {
        await pool.query('INSERT INTO usuarios set?', [datos]);
    } 
    


    async function ElimiUser(datos) {
        let sql="DELETE FROM usuarios where id_user=?";
        return await pool.query(sql,datos)
    }


    async function ModifiUser(datos) {
       let sql = `UPDATE usuarios set usuarios= ?,
                                    nombre= ?,
                                    apellido= ?,
                                    telefono= ?,
                                    id_rol= ?
                                    where id_user=?`;
       return  await pool.query(sql,datos)
    }
    return {
        listUser,
        crearUser,
        ElimiUser,
        ModifiUser
        

    }



}