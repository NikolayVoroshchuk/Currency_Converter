import { useEffect, useState } from 'react';
import { baseApiUrl } from '../helpers/variables';
import { useHttp } from '../services/http.hook';

const useDefaultCurrency = () => {
  const { request } = useHttp();

  const [usdState, setUsdState] = useState();
  const [eurState, setEurState] = useState();

  useEffect(() => {
    (async () => {
      const usdData = await request(`${baseApiUrl}/pair/USD/UAH`);
      const eurData = await request(`${baseApiUrl}/pair/EUR/UAH`);

      setUsdState(usdData.conversion_rate.toFixed(2));
      setEurState(eurData.conversion_rate.toFixed(2));
    })();
    // eslint-disable-next-line
  }, []);

  return { usdState, eurState };
}

export default useDefaultCurrency