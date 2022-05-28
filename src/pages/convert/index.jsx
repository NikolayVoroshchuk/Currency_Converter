import React from 'react';
import MainLayout from '../../layout/mainLayout';
import { makeConvertation } from '../../helpers/convertation';
import useCurrencyData from '../../hooks/useCurrencyData';
import CurrencyFields from '../../components/currencyFields';
import cls from './index.module.scss';

const Convert = () => {
  const {
    currencyList,
    exchangeRate,
    amountFrom,
    amountTo,
    defaultCurrencyFrom,
    defaultCurrencyTo,
    handleAmountChange,
    handleDefaultCurrencyFrom,
    handleDefaultCurrencyTo
  } = useCurrencyData();
  
  const { toAmount, fromAmount } = makeConvertation(
    amountTo,
    amountFrom,
    exchangeRate
  );

  return (
    <MainLayout>
      <div className={cls.convert}>
        <h1>Convert</h1>
        <div className={cls.wrapper}>
          <CurrencyFields
            title={'From'}
            value={fromAmount}
            defaultCurrency={defaultCurrencyFrom}
            handleAmountChange={(e) => handleAmountChange(e, true)}
            handleDefaultCurrency={handleDefaultCurrencyFrom}
            currencyList={currencyList}
          />
          <CurrencyFields
            title={'To'}
            value={toAmount}
            defaultCurrency={defaultCurrencyTo}
            handleAmountChange={(e) => handleAmountChange(e, false)}
            handleDefaultCurrency={handleDefaultCurrencyTo}
            currencyList={currencyList}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Convert;
