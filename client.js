import { create } from "ipfs-http-client";

/**
const INFURA_ID = "YOUR_INFURA_ID";
const INFURA_SECRET_KEY = "YOUR_INFURA_SECRET_KEY";
const auth = 'Basic ' + Buffer.from(INFURA_ID + ':' + INFURA_SECRET_KEY).toString('base64');
const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});
*/

const client = create({
    host: "127.0.0.1",
    port: 5001,
    protocol: "http",
});

export default client;
