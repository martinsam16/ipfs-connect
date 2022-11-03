import fs from "fs";
import client from "./client.js";

let CID_FILE;

// Save file to IPFS
const save = async (path) => {
    const file = fs.readFileSync(path);
    const result = await client.add(file);
    console.log(result);
    CID_FILE = result.cid.toString();
};

// Read a file from IPFS
const read = async (hash) => {
    const chunks = [];
    for await (const chunk of client.cat(hash)) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks);
};

await save(fs.realpathSync("./mi-texto.txt"));

await read(CID_FILE).then((data) => { 
    if (data.length > 0) {
        //fs.writeFileSync("test.pdf", Buffer.from(data));
        console.log(data.toString());
    } else {
        console.log("No content");
    }
});

