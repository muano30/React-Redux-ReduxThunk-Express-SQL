const bcrypt = require("bcrypt");
const saltRounds = 10;



const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword
    }
    catch (error) {
        console.log(error)
    }
}
const comparePassword = async (password, databasePassword) => {
    try {
        const isPasswordCorrect = await bcrypt.compare(password, databasePassword)
        return isPasswordCorrect
        
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    hashPassword, comparePassword
}