class NodoBusqueda {
    constructor(keyword,urlCache){
        this.keyword = keyword;
        this.urlCache = urlCache;
        this.visitas = 1;
        this.izquierdo = null;
        this.derecho =
    }
}

class MotorIndexacionBST{
    constructor(){
        this.raiz = null;
    }
}

    //indexar nueva consulta en el historial
        indexa(keyword,urlCache){
            const nuevoNodo = new NodoBusqueda(keyword,urlCache);
            if(this.raiz == null){
                this.raiz = nuevoNodo;
                return;
            }
            let actual = this.raiz;
            while(true){
                if(keyword === actual.keyword){
                    actual.visitas++;
                    return;
                } else if(keyword < actual.keyword){
                    if(actual.izquierdo === null){
                        actual.izquierdo = nuevoNodo;
                        return;
                    }
                    actual = actual.izquierdo;
                }else{
                    if(actual.derecho == null){
                        actual.derecho = nuevoNodo;
                        return;
                    }
                }
            }
        }