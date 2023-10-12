import dotenv from "dotenv"

class Configuration {
    static port;
    static conn;
}

export function configEnvironments() {
    dotenv.config();
    Configuration.port = process.env.PORT;
    Configuration.conn = process.env.CONN;
}

export default Configuration;