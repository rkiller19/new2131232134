import React from 'react';

//Graveyard ecosystem logos
import bombLogo from '../../assets/img/cream.png';
import tShareLogo from '../../assets/img/cshare.svg';
import bombLogoPNG from '../../assets/img/cream.svg';
import tShareLogoPNG from '../../assets/img/cshare.svg';
import tBondLogo from '../../assets/img/cbond.png';
import mimLogo from '../../assets/img/mim.png';
import wavax from '../../assets/img/wavax.png';
import creamCshare from '../../assets/img/creamcshare.png';
import bombFtmLpLogo from '../../assets/img/cream-wavax.png';
import bshareFtmLpLogo from '../../assets/img/cshare-avax.png';

import bnbLogo from '../../assets/img/bnb.png';
import btcLogo from '../../assets/img/BCTB-icon.png';

const logosBySymbol: {[title: string]: string} = {
  //Real tokens
  //=====================
  BOMB: bombLogo,
  BOMBPNG: bombLogoPNG,
  WAVAX: wavax,
  BSHAREPNG: tShareLogoPNG,
  CREAM: bombLogo,
  BSHARE: tShareLogo,
  BBOND: tBondLogo,
  WBNB: bnbLogo,
  BOO: bnbLogo,
  SHIBA: bnbLogo,
  ZOO: bnbLogo,
  CAKE: bnbLogo,
  SUSD: bnbLogo,
  SBTC: btcLogo,
  MIM: mimLogo,
  BTCB: btcLogo,
  BTC: btcLogo,
  SVL: bnbLogo,
  'BOMB-BNB-LP': bombFtmLpLogo,
  'BOMB-BTCB-LP': bombFtmLpLogo,
  'BSHARE-BNB-LP': bshareFtmLpLogo,
  'BSHARE-BNB-APELP': bshareFtmLpLogo,
  'BOMB-BTCB-APELP': bombFtmLpLogo,
  'CREAM-WAVAX-LP' : bombFtmLpLogo,
  'CREAM-CSHARE-LP': creamCshare,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({symbol}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  if(symbol === 'CREAM-WAVAX-LP' || symbol === 'CSHARE-WAVAX-LP' || symbol === 'BSHARE-BNB-LP' || symbol === 'BOMB-BTCB-LP' || symbol === 'CREAM-CSHARE-LP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={95} height={60} />;
  }else if(symbol === 'MIM' || symbol === 'WAVAX'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={65} height={65} />;
  }else{
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={55} height={68} />;
  }
    
};

export default TokenSymbol;
