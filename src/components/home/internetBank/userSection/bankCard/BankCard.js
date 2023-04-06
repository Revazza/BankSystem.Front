import React, { useEffect, useState } from "react";
import styles from "./BankCard.module.scss";
import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../../../../../url";

function BankCard(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!props.iban || cards.length !== 0) {
      return;
    }

    const token = Cookies.get("token");
    axios
      .get(`${baseUrl}/User/get-account-cards?iban=${props.iban}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const cards = response.data.payload.cards;
        if (cards.length === 0) {
        }
        setCards(cards);
      })
      .catch((error) => {
        console.log(error.response.data.Message);
      });
  }, [props.iban]);

  const mockData = [];

  for (let i = 0; i < 3; i++) {
    mockData[i] = <div key={i} className={styles.mock_class}></div>;
  }

  return (
    <React.Fragment>
      {cards.length === 0 &&
        mockData.map((mock) => {
          return mock;
        })}
      {cards?.map((card) => {
        const expiresAt = new Date(card.expiresAt);
        let expiresClass = styles.display_none;
        const today = new Date();
        const warningExpire = new Date(today.setMonth(today.getMonth() + 3));
        if (warningExpire > expiresAt) {
          expiresClass = styles.expires_message;
        }
        const month = (expiresAt.getMonth() + 1).toString().padStart(2, "0");
        const formattedDate = `${month}/${expiresAt.getFullYear()}`;
        return (
          <div className={styles.container} key={card.cardNumber}>
            <div className={styles.img_wrapper}>
              <img src="./images/credit-card-small.png" />
              <div className={styles.expiration_date}>
                <p>{formattedDate}</p>
              </div>
            </div>
            <div className={styles.info_container}>
              <div className={styles.card_owner}>
                <p>{card.fullName}</p>
              </div>
              <div className={styles.card_number}>
                <p>
                  <span>Card Number:</span> {card.cardNumber}
                </p>
              </div>
              <div className={styles.card_cvv}>
                <p>
                  <span>CVV:</span> {card.cvv}
                </p>
              </div>
              <div className={expiresClass}>
                <p>expires soon</p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default BankCard;
