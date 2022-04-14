const fsPromises = require('fs').promises;

/* Subir elemento */
upFile = async (File) => {
    const { path, name, file } = File;

    try{
        //Validar si el directorio existe
        let directory = await fsPromises.stat(path);

        if(directory.isDirectory == true){
            //Subir el documento
            await fsPromises.appendFile(path + '/' + name, file, 'binary');
            return { status: true, message: path + '/' + name };
        }
        else{
            //Si no existe el directorio, crearlo. . .
            await fsPromises.mkdir(path,{ recursive: true });
            return await this.upFile(File);
        }
    }
    catch(error){
        console.log(error);
    }
};

/* Leer elemento */
readFile = async (File) => {
    const { path, name } = File;

    try{
        const Controller = new AbortController();
        const { signal } = Controller;
        const fileRead = fsPromises.readFile(path + '/' + name, { signal }); 

        //
        Controller.abort();

        return fileRead;
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { upFile, readFile };