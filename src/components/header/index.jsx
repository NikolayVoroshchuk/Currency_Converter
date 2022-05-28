import useDefaultCurrency from '../../hooks/useDefaultCurrency';
import cls from './index.module.scss';

const Header = () => {
  const { usdState, eurState } = useDefaultCurrency();
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={cls.header}>
      <div className={cls.titleHeader}>
        <h2>Exchange currency rate for {currentDate}</h2>
      </div>
      <div className={cls.usd}>
        <h2>USD: {usdState}</h2>
      </div>
      <div className={cls.eur}>
        <h2>EUR: {eurState}</h2>
      </div>
    </div>
  );
};

export default Header;
