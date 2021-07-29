import React from "react";

export default function AddInBag({ id, option }){ 
    const add = () => {
        try {
            let checkbox = true;
            let data = JSON.parse(localStorage.getItem('basket'));
            data.forEach(item => {
                if((item.id === id) && (item.option === option)) {
                    item.quantity = String(Number(item.quantity) + 1);
                    localStorage.setItem('basket', JSON.stringify(data));
                    checkbox = false;
                }
            });
            if(checkbox) {
                let quantity = 1;
                data.push({ id, option, quantity});
                localStorage.setItem('basket', JSON.stringify(data));
            }
        } catch{
            let data = [];
            let quantity = 1;
            data.push({ id, option, quantity }) && localStorage.setItem('basket', JSON.stringify(data));
        }; 
    };
    return(
        <button onClick={add}>Добавить в корзину</button>
    );
};