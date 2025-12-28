/* mappedTypes/012.ts mappedTypes/008.ts */

type Entity = {
  id: number;
  name: string;
  isActive: boolean;
  email: string;
};

type EntityEditable<T> = { 
    [K in keyof T]:T[K] extends string?{editable:true,value:string}:{editable:false,value:T[K]}
}

type resultado12 = EntityEditable<Entity>