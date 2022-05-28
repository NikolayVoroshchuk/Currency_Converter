import React from 'react';
import cls from './index.module.scss';

const CurrencyField = ({
  value,
  handleAmountChange,
  defaultCurrency,
  handleDefaultCurrency,
  currencyList,
  title,
}) => {
  return (
    <div className={cls.input}>
      <h3 className={cls.title}>{title}</h3>
      <input
        className={cls.input}
        type="number"
        value={value}
        onChange={handleAmountChange}
      />
      <select
        name="currency"
        id="currency"
        value={defaultCurrency}
        onChange={handleDefaultCurrency}
      >
        {currencyList.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyField;
