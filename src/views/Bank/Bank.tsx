import React, {useEffect} from 'react';
import styled from 'styled-components';

import {useParams} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import {makeStyles} from '@material-ui/core/styles';

import {Box, Button, Card, CardContent, Typography, Grid} from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import UnlockWallet from '../../components/UnlockWallet';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useStatsForPool from '../../hooks/useStatsForPool';
import useRedeem from '../../hooks/useRedeem';
import {Bank as BankEntity} from '../../bomb-finance';
import useBombFinance from '../../hooks/useBombFinance';
import {Alert} from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Bank: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  const date = new Date('2022-1-28 17:00:00Z');
  const classes = useStyles();
  const {bankId} = useParams();
  const bank = useBank(bankId);

  const {account} = useWallet();
  const {onRedeem} = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);

 {/* let vaultUrl: string;
  if (bank.depositTokenName.includes('BOMB')) {
    vaultUrl = 'https://www.bomb.farm/#/bsc/vault/bomb-bomb-btcb';
  } else {
    vaultUrl = 'https://www.bomb.farm/#/bsc/vault/bomb-bshare-wbnb';

  }*/}

  return account && bank ? (
    <>
      <PageHeader
        icon="🏦" 
        subtitle={`Deposit ${bank?.depositTokenName} and earn ${bank?.earnTokenName}`}
        title={bank?.name}
      />
 <Grid container spacing={3}>
          <Grid item xs={12} sm={12} justify="center" style={{ margin: '12px', display: 'flex' }}>

           <Alert variant="filled" severity="info"> 
              There is a deposit limit of 40 AVAX and 2500 MIM per pool.
            </Alert>
          </Grid>
        </Grid>
        <Box>
        <Grid container justify="center" spacing={3} style={{marginBottom: '50px'}}>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>Daily APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>TVL</Typography>
                <Typography>${statsOnPool?.TVL}</Typography>
              </CardContent>
            </Card>
          </Grid>
</Grid>
        </Box>
   
      <Box mt={5}>
        <StyledBank>
          <StyledCardsWrapper>
            <StyledCardWrapper>
              <Harvest bank={bank} />
            </StyledCardWrapper>
            <Spacer />
            <StyledCardWrapper>{<Stake bank={bank} />}</StyledCardWrapper>
          </StyledCardsWrapper>
          <Spacer size="lg" />
          {bank.depositTokenName.includes('LP') && <LPTokenHelpText bank={bank} />}
          <Spacer size="lg" />
          <div>
            <Button onClick={onRedeem} className="shinyButtonSecondary">
              Claim &amp; Withdraw
            </Button>
          </div>
          <Spacer size="lg" />
        </StyledBank>
      </Box>
    </>
  ) : !bank ? (
    <BankNotFound />
  ) : (
    <UnlockWallet />
  );
};

const LPTokenHelpText: React.FC<{bank: BankEntity}> = ({bank}) => {
  const bombFinance = useBombFinance();
  const bombAddr = 0xAE21d31a6494829a9E4B2B291F4984AAE8121757;
  const bshareAddr = 0x155f794b56353533E0AfBF76e1B1FC57DFAd5Bd7;

  let pairName: string;
  let uniswapUrl: string;
  let vaultUrl: string;
  if (bank.depositTokenName.includes('CREAM-WAVAX')) {
    pairName = 'CREAM-AVAX pair';
    uniswapUrl = 'https://traderjoexyz.com/trade?outputCurrency=0xAE21d31a6494829a9E4B2B291F4984AAE8121757#/';
    vaultUrl = '#';

  } else if(bank.depositTokenName.includes('CSHARE-WAVAX')){
    pairName = 'CSHARE-WAVAX pair';
    uniswapUrl = 'https://traderjoexyz.com/trade?outputCurrency=0x155f794b56353533E0AfBF76e1B1FC57DFAd5Bd7#/';
    vaultUrl = '#';

  }else{
    pairName = 'CREAM-CSHARE pair';
    uniswapUrl = 'https://traderjoexyz.com/pool/';
    vaultUrl = '#';
  }
  return (
    <Card>
      <CardContent>
        <StyledLink href="https://traderjoexyz.com/trade?outputCurrency=0xAE21d31a6494829a9E4B2B291F4984AAE8121757#/" target="_blank">
          <span style={{color: "#fff", textAlign: 'center'}}>Provide liquidity for CREAM-AVAX LP on Joe</span>
        </StyledLink>
      </CardContent>
    </Card>
  );
};

const BankNotFound = () => {
  return (
    <Center>
      <PageHeader icon="🏚" title="Not Found" subtitle="You've hit a bank just robbed by unicorns." />
    </Center>
  );
};

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Bank;
