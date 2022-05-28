export const makeConvertation = (amountTo, amountFrom, exchangeRate) => {
  let toAmount, fromAmount;
  if (amountTo) {
    fromAmount = amountFrom;
    toAmount = Number(amountFrom * exchangeRate).toFixed(2);
  } else {
    toAmount = amountFrom;
    fromAmount = Number(amountFrom / exchangeRate).toFixed(2);
  }

  return { toAmount, fromAmount };
}