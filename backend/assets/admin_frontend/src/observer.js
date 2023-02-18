export class Observer {

    #handler = {};

    Subscribe(label,handler){
        
        const main = this.#handler[label];
        if(label in this.#handler){
            this.#handler[label] = (data)=>{
                main.call(data,data);
                handler.call(data,data);
            }
            return;
        }

        if(typeof label !== "string" && typeof handler !== "function"){
            throw new Error("Observer error: Subscribe must have a label and a handler function");
            return;
        }
        this.#handler[label] = handler;
    }

    Has(label){
        return label in this.#handler;
    }

    Unsubscribe(label){
        delete this.#handler[label];
    }

    Emit(label,data){
        if(label in this.#handler) this.#handler[label](data);
    }

}