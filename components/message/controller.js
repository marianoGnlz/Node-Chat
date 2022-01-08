const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('[messageController] No hay usuario o mensaje');
            return reject('Datos incorrectos');
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        };
        store.addMessage(fullMessage);

        return resolve(fullMessage);
    })
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.getMessages());
    });
}

module.exports = {
    addMessage,
    getMessages
}