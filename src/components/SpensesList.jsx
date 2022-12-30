import React from 'react';
import './styles/spensesList.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SpensesList() {
  return (
    <div className="spenses-list">
      <div>
        <ul>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Descrição</span>
            <span>R$10</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpensesList;
