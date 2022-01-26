import React, { useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useBombStats from '../../hooks/useBombStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { Bomb as bombTesting, BShare as bShareTesting } from '../../bomb-finance/deployments/deployments.testing.json';
import { Bomb as bombProd, BShare as bShareProd } from '../../bomb-finance/deployments/deployments.mainnet.json';
import { roundAndFormatNumber } from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';
import { Alert } from '@material-ui/lab';

import { makeStyles } from '@material-ui/core/styles';
import useBombFinance from '../../hooks/useBombFinance';
import { ReactComponent as IconTelegram } from '../../assets/img/telegram.svg';

import BombImage from '../../assets/img/cream.png';

import HomeImage from '../../assets/img/background.jpg';
import { Bold } from 'react-feather';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

// const BackgroundImage = createGlobalStyle`
//   body {
//     background-color: grey;
//     background-size: cover !important;
//   }
// `;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      // marginTop: '10px'
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const bombFtmLpStats = useLpStatsBTC('CREAM-MIM-LP');
  const bShareFtmLpStats = useLpStats('CSHARE-AVAX-LP');
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();

  let bomb;
  let bShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    bomb = bombTesting;
    bShare = bShareTesting;
  } else {
    bomb = bombProd;
    bShare = bShareProd;
  }

  const buyBombAddress = 'https://traderjoexyz.com/#/trade';
  const buyBShareAddress = 'https://traderjoexyz.com/#/trade';
  const bombLPStats = useMemo(() => (bombFtmLpStats ? bombFtmLpStats : null), [bombFtmLpStats]);
  const bshareLPStats = useMemo(() => (bShareFtmLpStats ? bShareFtmLpStats : null), [bShareFtmLpStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const bombLpZap = useZap({ depositTokenName: 'BOMB-BTCB-LP' });
  const bshareLpZap = useZap({ depositTokenName: 'BSHARE-BNB-LP' });

  const [onPresentBombZap, onDissmissBombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBombZap();
      }}
      tokenName={'BOMB-BTCB-LP'}
    />,
  );

  const [onPresentBshareZap, onDissmissBshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBshareZap();
      }}
      tokenName={'BSHARE-BNB-LP'}
    />,
  );

  return (
    <Page>
      <BackgroundImage />
      <Grid container spacing={3}>
        {/* Logo */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}
        >
          <img src={BombImage} style={{ maxHeight: '240px' }} />
        </Grid>
        {/* Explanation text */}
        <Grid item xs={12} sm={8}>
          <Paper>
            <Box p={4} style={{ textAlign: 'center' }}>
              <h2>Welcome to IceCream Finance</h2>
              <p style={{ fontSize: '17px' }}>
               <b>$CREAM A next-generation algo stable to cure your sweet-tooth on the Avalanche Network</b>
                
                
              </p>
              <p style={{ fontSize: '17px' }}>
              Our inspiration for starting this protocol came from two simple words INTEGRITY and TRANSPARENCY. Starting off as investors ourselves we noticed that DeFi as a whole, 
              is moving in the wrong direction. Many projects end up either rugging or failing because many dont realize that DeFi's success is built with a strong community. 
              We plan to stand side by side with our investors through thick and thin and deliver the sweetest protocol to #AVAX.
                {/* Stake your BOMB-BTC LP in the Farm to earn BSHARE rewards. Then stake your earned BSHARE in the
                Boardroom to earn more BOMB! */}
              </p>
              <p>
                Join our{' '}
                <a
                  href="https://t.me/icecreamfinance"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#89CFF0' }}
                >
                  Telegram
                </a>{' '} or {' '}
                
                <a
                  href="https://discord.gg/icecream"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#89CFF0' }}
                >
                  Discord
                </a>{' '}
                to find out more!
                </p>
                <p style={{ fontSize: '18px' }}>
                  Our KYC is now complete by Assured DeFi, check out our {' '}
                <a
                  href="https://www.assuredefi.io/projects/icecream-finance/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#89CFF0' }}
                >
                  NFT
                </a>{' '}
                for more details!
                </p>
                

            </Box>
          </Paper>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} justify="center" style={{ margin: '12px', display: 'flex' }}>

           <Alert variant="filled" severity="info"> 
              Please read our <a link="_blank" href="https://icecreamfinancial.gitbook.io/icecream-finance/">documentation</a> for more info before purchasing CREAM or CSHARE tokens!.
            </Alert>

          </Grid>
        </Grid>

        {/* TVL */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center">
              <h2>Total Value Locked</h2>
              
              <CountUp style={{ fontSize: '30px' }} end={TVL} separator="," prefix="$" />
            </CardContent>
          </Card>
        </Grid>

        {/* Wallet */}
        <Grid item xs={12} sm={8}>
          <Card style={{ height: '100%' }}>
            <CardContent align="center" style={{ marginTop: '2.5%' }}>
              {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
              <Button href="#" className="shinyButton" style={{ margin: '10px' }}>
                Stake Now
              </Button>
              <Button href="/farm" className="shinyButton" style={{ margin: '10px' }}>
                Farm Now
              </Button>
              <Button
                target="_blank"
                href={buyBombAddress}
                style={{ margin: '10px' }}
                className={'shinyButton ' + classes.button}
              >
                Buy CREAM
              </Button>
              <Button
                target="_blank"
                href={buyBShareAddress}
                className={'shinyButton ' + classes.button}
                style={{ marginLeft: '10px' }}
              >
                Buy CSHARE
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* CREAM or BOMB */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
              <Box mt={2}>
              <h2 style={{ marginBottom: '10px' }}>CREAM</h2>
              </Box>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('BOMB');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px', border: 'transparent', color: 'white' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(0%)' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BOMB" />
                </CardIcon>
              </Box>
              <span style={{ fontSize: '25px' }}>
              Current Price
              </span>
              <Box>             
               <span style={{ fontSize: '30px', alignContent: 'flex-start' }}>
                  ${bombPriceInDollars ? bombPriceInDollars : '-.--'} USD
                </span>
              </Box>
              <span style={{ fontSize: '15px' }}>
                Circulating Supply: {bombCirculatingSupply} <br />
                Total Supply: {bombTotalSupply} 
              </span>
            </CardContent>
          </Card>
        </Grid>

        {/* CSHARE /BSHARE */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
            <Box mt={2}>
              <h2 style={{ marginBottom: '10px' }}>CSHARE</h2>
              </Box>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('BSHARE');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px', border: 'transparent', color: 'white' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(0%)' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BSHARE" />
                </CardIcon>
              </Box>
              <span style={{ fontSize: '25px' }}>
              Current Price
              </span>
              <Box>
                <span style={{ fontSize: '30px', alignContent:'flex-start' }}>
                  ${bSharePriceInDollars ? bSharePriceInDollars : '-.--'} USD
                </span>
              </Box>
             <span style={{ fontSize: '15px' }}>
                Circulating Supply: {roundAndFormatNumber(bShareCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(bShareTotalSupply, 2)}
            </span>
            </CardContent>
          </Card>
        </Grid>

        {/* CBOND */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
            <Box mt={2}>
              <h2 style={{ marginBottom: '10px' }}>CBOND</h2>
              </Box>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('BBOND');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px', border: 'transparent', color: 'white' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(0%)' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BBOND" />
                </CardIcon>
              </Box>
              <span style={{ fontSize: '25px' }}>
              Current Price
              </span>
              <Box>
                <span style={{ fontSize: '30px', alignContent: 'flex-start' }}>
                 $ {tBondPriceInDollars ? tBondPriceInDollars : '-.--'} USD
                </span>
              </Box>
              <span style={{ fontSize: '15px' }}>
                Circulating Supply: {roundAndFormatNumber(tBondCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(tBondTotalSupply, 2)}
            </span>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
            <Box mt={2}>
              <h2 style={{ marginBottom: '10px' }}>CREAM-AVAX LP</h2>
              </Box>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BOMB-BTCB-LP" />
                </CardIcon>
              </Box>
              <Box mt={2}>
               {/*<Button disabled onClick={onPresentBombZap} className="shinyButtonDisabledSecondary">
                  Zap In
            </Button>*/}
              </Box>
              <span style={{ fontSize: '25px' }}>
              Current Price
              </span>
              <Box>
              <span style={{ fontSize: '30px', alignContent: 'flex-start' }}>
              ${bombLPStats?.priceOfOne ? bombLPStats.priceOfOne : '-.--'} USD
              </span>
              </Box>
              <span style={{ fontSize: '15px' }}>
                Liquidity: ${bombLPStats?.totalLiquidity ? roundAndFormatNumber(bombLPStats.totalLiquidity, 2) : '-.--'}{' '}
                <br />
                Total Supply: {bombLPStats?.totalSupply ? roundAndFormatNumber(bombLPStats.totalSupply, 2) : '-.--'}
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
            <Box mt={2}>
              <h2 style={{ marginBottom: '10px' }}>CSHARE-AVAX LP</h2>
              </Box>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BSHARE-BNB-LP" style="width:105px;" />
                </CardIcon>
              </Box>
              <Box mt={2}>
                {/*<Button onClick={onPresentBshareZap} className="shinyButtonSecondary">
                  Zap In
            </Button>*/}
              </Box>
              <span style={{ fontSize: '25px' }}>
              Current Price
              </span>
              <Box>
              <span style={{ fontSize: '30px', alignContent: 'flex-start' }}>
              ${bshareLPStats?.priceOfOne ? bshareLPStats.priceOfOne : '-.--'} USD
              </span>
              </Box>
              <span style={{ fontSize: '15px' }}>
                Liquidity: $
                {bshareLPStats?.totalLiquidity ? roundAndFormatNumber(bshareLPStats.totalLiquidity, 2) : '-.--'}
                <br />
                Total Supply: {bshareLPStats?.totalSupply ? roundAndFormatNumber(bshareLPStats.totalSupply, 2) : '-.--'}
              </span>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
