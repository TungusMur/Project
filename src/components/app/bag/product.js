import React from "react";
import Info from "./info";

const Product = ({data}) => {
    let dataLocal = JSON.parse(localStorage.getItem('basket'));
    let state = {
        d: 0,
        s: 0
    };
    const Sss = (item) => {
        return(
            data.map(element => {
                if((item.id == element.id) && (item.option == element.option)){
                    state.s += state.s +  element.price * item.quantity;
                        return( 
                            <Info key={item.id + item.option} item={item} element={element}/>
                        );
                    }
                }
            )
        );
        
    };
    return(
        <div className="bag">
           
            {dataLocal.map(item => (Sss(item)))}

            <div className="info">
                    <p>Информация о заказе</p>
                    <p>Количество товара:</p>
                    <p>Итогова цена: {state.s} </p>
            </div>
        </div>
        );
};
export default Product;