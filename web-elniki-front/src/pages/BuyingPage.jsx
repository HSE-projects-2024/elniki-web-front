import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from "../components/CreditCardForm";
import { NavLink } from 'react-router-dom';
import '../order.css';

export const BuyingPage = () => {

    return (
        <div>
            <h1>Оплата</h1>
            <form onSubmit={e => e.preventDefault()} className="custom-class">
                <label> 
                    <div className="container mt-5">
                        <div className="title">Введите данные банковской карты</div>
                        <CreditCardForm />
                    </div>
                </label>            
                <label>
                  <div className='info'>
                    <p>Билетная касса горнолыжного склона:</p>
                    <p>Открыта круглый год</p>
                    <p>Пн–Вс: 7:30–21:30</p>
                  </div>
                </label>
            </form>
        </div>
    );
}