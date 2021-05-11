const SERVER = 'http://localhost:4001/'

class Server_api{
    async get_levels(){
        const res = await fetch(`${SERVER}level/`);
        return res.json();
    }
}

export default Server_api;