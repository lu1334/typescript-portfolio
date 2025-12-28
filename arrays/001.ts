/* 🍕 Ejercicio 12: Filtrar y agrupar pedidos por categoría
 */
type Order = {
  orderId: number;
  category: "pizza" | "drink" | "dessert";
  delivered: boolean;
};

const orders: Order[] = [
  { orderId: 1, category: "pizza", delivered: true },
  { orderId: 2, category: "drink", delivered: false },
  { orderId: 3, category: "pizza", delivered: false },
  { orderId: 4, category: "dessert", delivered: true },
  { orderId: 5, category: "drink", delivered: true },
];

type GroupedDeliveredOrders = {
  [category in Order["category"]]?: Order[];
};

function agruparPorCategoria1(arr:Order[]):GroupedDeliveredOrders{

    // const filtrados = arr.filter(ped=>ped.delivered)

    // return filtrados.reduce((acc,ped)=>{
    //     const nomCatg = ped.category
    //     if(!acc[nomCatg]){
    //         acc[nomCatg]=[]
    //     }
    //     acc[nomCatg].push(ped)
    //     return acc
    // },{}as GroupedDeliveredOrders)
    const acc:GroupedDeliveredOrders = {}
    const filtrados = arr.filter(ped=>ped.delivered)
   
    filtrados.forEach(ped=>{
        const nomCatg = ped.category
        if(!acc[nomCatg]){
            acc[nomCatg]=[]
        }
         acc[nomCatg].push(ped)
    })
   return acc
}

console.log(agruparPorCategoria1(orders))