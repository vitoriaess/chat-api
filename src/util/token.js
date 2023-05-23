const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key)=>{
    try{
        const decoded = jwt.decode(token);
        if(decoded && decoded.id == id){
            const verificado = jwt.verify(token, key);
            if(verificado){
                return true;
            }
        }
        return false;
    } catch(err){
        console.log(err);
        return false;
    }
};

const setToken = async (id, key) => {
    console.log(id);
    if(id){
        return jwt.sign({id}, key, {expiresIn: 28800});
    }
    return false;
};

module.exports = {
    checktoken,
    setToken
};

