import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile, readFile } from 'fs';

const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlparse = url.parse(request.url ? request.url : '', true);

    var resposta;

    const params = parse(urlparse.search ? urlparse.search : '');

if(urlparse.pathname == '/new-user') {

    writeFile('users/' + params.id +'.txt', JSON.stringify(params), function(err: any) {
        if (err) throw err;
        console.log('saved');

        resposta = 'usuario cadastrado'

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(resposta);
    })
}
    
    // response.end("olá muundoooo novamente")
});
//execução
server.listen( port, () => {
    console.log(`server runing on port ${port}`)
});
