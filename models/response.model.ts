export type ResponseHttp = {
    content: any
    status: number
}

export class ErrorRersponse {
    public content: any
    public status: number
    constructor() {
        this.content = "Error";
        this.status = 500
    }
}


export class UnauthorizedRersponse {
    public content: any
    public status: number
    constructor() {
        this.content = "Nao Autorizado";
        this.status = 401
    }
}