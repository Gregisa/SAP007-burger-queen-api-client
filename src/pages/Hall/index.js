import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts, createOrder } from "../../services/orders";
import { errorCode } from "../../services/errors";
import { MainHeader } from "../../components/Header";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/Button";
import { MenuCard } from "../../components/MenuCard";
import { OrderCard } from "../../components/OrderCard";
import { Footer } from "../../components/Footer";
import "./style.css";

export function Hall() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ client: "", table: "" });
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [error, setError] = useState("");
  console.log(error);

  const allProducts = (option) => {
    getProducts()
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          data.filter((item) => {
            return item.type === option;
          })
        );
      });
  };

  useEffect(() => {
    allProducts("breakfast");
  }, []);

  const handleInfo = (e) => {
    e.preventDefault();
    return setInfo(() => {
      const clientInfos = { ...info };
      clientInfos[e.target.name] = e.target.value;
      console.log(clientInfos);
      return clientInfos;
    });
  };

  const handleProduct = (product) => {
    const newOrder = order;
    const listedProducts = newOrder.find((item) => {
      return item.id === product.id;
    });
    if (listedProducts) {
      listedProducts.qtd += 1;
    } else {
      const newList = {
        id: product.id,
        name: product.name,
        price: product.price,
        flavor: product.flavor,
        complement: product.complement,
        qtd: 1,
      };
      newOrder.push(newList);
    }
    setOrder([...newOrder]);
  };

  const finalOrder = () => {
    const orderList = () => {
      const openTable = {
        client: info.client,
        table: info.table,
        products: order.map((item) => {
          const infosOrder = {
            id: item.id,
            name: item.name,
            price: item.price,
            flavor: item.flavor,
            complement: item.complement,
            qtd: 1,
          };
          return infosOrder;
        }),
      };
      return openTable;
    };

    const orderResume = orderList();
    createOrder(orderResume)
      .then(() => {
        navigate("/kitchen");
      })
      .catch((error) => {
        setError(errorCode(error));
      });
  };

  const handleDeleteItem = (item) => {
    const productInList = order.find((element) => element.id === item.id);
    if (productInList) {
      if (productInList.qtd === 1) {
        order.splice(
          order.findIndex((element) => element.id === item.id),
          1
        );
        productInList.qtd = 0;
      }
      if (productInList.qtd > 1) {
        productInList.qtd -= 1;
      }
    }
    setOrder([...order]);
  };

  const totalValue = () => {
    const wholeAmount = [];
    for (let i = 0; i < order.length; i++) {
      const sum = order[i].qtd * order[i].price;
      wholeAmount.push(sum);
    }
    const initialValue = 0;
    const wholeInitial = wholeAmount.reduce(
      (value, currentValue) => value + currentValue,
      initialValue
    );
    return wholeInitial;
  };

  function handleAllOrders() {
    localStorage.removeItem("token");
    navigate("/allorders");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <MainHeader />
      <nav className="nav-btns">
        <SubmitButton
          children="Café"
          onClick={() => allProducts("breakfast")}
        />
        <SubmitButton
          children="Dia Todo"
          onClick={() => allProducts("all-day")}
        />
        <SubmitButton children="Pedidos" onClick={handleAllOrders} />
        <SubmitButton children="Sair" onClick={handleLogout} />
      </nav>
      <div className="menuorder-containers">
        <section className="products-section">
          {products.map((item) => {
            return (
              <MenuCard
                key={item.id}
                product={item}
                onClick={() => handleProduct(item)}
              />
            );
          })}
        </section>
        <section className="order-section">
          <Input
            inputPlaceholder="Nome do Cliente"
            inputType="text"
            inputName="client"
            inputValue={info.client}
            inputOnChange={handleInfo}
          />
          <Input
            inputPlaceholder="Mesa"
            inputType="text"
            inputName="table"
            inputValue={info.table}
            inputOnChange={handleInfo}
          />
          {order.map((item) => {
            return (
              <OrderCard
                key={item.id}
                product={item}
                onClickRemove={() => handleDeleteItem(item)}
              />
            );
          })}
          <p className="total-value"> TOTAL: R${totalValue().toFixed(2)}</p>
          <SubmitButton
            children="Fazer pedido"
            id="confirm"
            onClick={finalOrder}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
