import { useState, useEffect } from 'react';
import { useHttp } from '../services/http.hook';
import { baseApiUrl } from '../helpers/variables';

const useCurrencyData = () => {
  const { request } = useHttp();

  const [currencyList, setCurrencyList] = useState([]);
  const [defaultCurrencyFrom, setDefaultCurrencyFrom] = useState();
  const [defaultCurrencyTo, setDefaultCurrencyTo] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(true);

  useEffect(() => {
    (async () => {
      const { conversion_rates = 0, base_code = '' } = await request(
        `${baseApiUrl}/latest/USD`
      );

      setCurrencyList(Object.keys(conversion_rates));
      setDefaultCurrencyFrom(base_code);
      setExchangeRate(Object.values(parseFloat(conversion_rates)));
      setDefaultCurrencyTo('UAH');
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    (async () => {
      if (defaultCurrencyFrom && defaultCurrencyTo) {
        const { conversion_rate = 0 } = await request(
          `${baseApiUrl}/pair/${defaultCurrencyFrom}/${defaultCurrencyTo}`
        );

        setExchangeRate(conversion_rate);
      }
    })();
    // eslint-disable-next-line
  }, [defaultCurrencyFrom, defaultCurrencyTo]);

  const handleAmountChange = (e, value) => {
    setAmountFrom(e.target.value);
    setAmountTo(value);
  };

  const handleDefaultCurrencyFrom = ({ target: { value } }) => {
    setDefaultCurrencyFrom(value);
  };

  const handleDefaultCurrencyTo = ({ target: { value } }) => {
    setDefaultCurrencyTo(value);
  };

  return {
    currencyList,
    exchangeRate,
    amountFrom,
    amountTo,
    defaultCurrencyFrom,
    defaultCurrencyTo,
    handleAmountChange,
    handleDefaultCurrencyFrom,
    handleDefaultCurrencyTo,
  };
};

export default useCurrencyData;
