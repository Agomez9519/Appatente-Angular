export interface Wiki {
    query:{
        search:ArticlesI[]
    }
}


export interface ArticlesI {
    ns:number;
    title:string;
    pageid:number;
    size:number;
    wordcount:number;
    snippet:string;
    timestamp:string;
}
