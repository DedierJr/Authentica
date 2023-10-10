export class Cachorro {
    public id : string;
    public nome : string;
    public sexo: string;
    public datanascimento: string;
    public raca : string;
    
    constructor(obj?: Partial<Cachorro>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.raca = obj.raca
            this.sexo = obj.sexo
            this.datanascimento = obj.datanascimento
         }
    }

    toFirestore() {
        const cachorro =  {
                    id : this.id,
                    nome : this.nome,
                    raca : this.raca,
                    sexo : this.sexo,
                    datanascimento : this.datanascimento
         }
         return cachorro
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "nome": "${this.nome}",
            "raca": "${this.raca}",
            "sexo": "${this.sexo}",
            "datanascimento": "${this.datanascimento}"  
        }`
        return Objeto
    }
};