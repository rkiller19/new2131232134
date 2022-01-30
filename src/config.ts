//import {ChainId} from '@pancakeswap/sdk';
import {Configuration} from './bomb-finance/config';
import {BankInfo} from './bomb-finance';

const configurations: {[env: string]: Configuration} = {
  // development: {
  //   chainId: 97,
  //   networkName: 'BSC Testnet',
  //   ftmscanUrl: 'https://testnet.bscscan.com/',
  //   defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  //   deployments: require('./bomb-finance/deployments/deployments.testing.json'),
  //   externalTokens: {
  //     WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
  //     FUSDT: ['0x55d398326f99059fF775485246999027B3197955', 18], // This is actually BUSD on mainnet not fusdt
  //     BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
  //     ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
  //     SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
  //     'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
  //     'BOMB-BTCB-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
  //     'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
  //   },
  //   baseLaunchDate: new Date('2021-11-21 1:00:00Z'),
  //   bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
  //   boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'),
  //   refreshInterval: 10000,
  // },
  /*development: {
    chainId: 97,
    networkName: 'Avalanche Mainnet C-Chain',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      WBNB: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      FUSDT: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18], // This is actually mim on mainnet not fusdt
      BTCB: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18], //mim
      MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      CAKE: ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-BNB-LP': ['0x781655d802670bba3c89aebaaea59d3182fd755d', 18], //mim/avax
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2022-1-13 17:00:00Z'),
    bondLaunchesAt: new Date('2020-01-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2022-1-18T00:00:00Z'),
    refreshInterval: 10000,
  },*/
  development: {
    chainId: 43114,
    networkName: 'Avalanche',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      WAVAX: ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      SUSD: ['0x0000000000000000000000000000000000000000', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      CAKE: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'wAVAX': ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18], 
      'CREAM': ['0xAE21d31a6494829a9E4B2B291F4984AAE8121757', 18],
      'CREAM-WAVAX-LP': ['0x00C87ce7188F7652d0C0940274cEC5db62f1e825', 18],
      'CSHARE-WAVAX-LP': ['0xbD61dFAd83Fc19960476abca1324FfD798234c66', 18], 
      'CSHARE': ['0x155f794b56353533E0AfBF76e1B1FC57DFAd5Bd7', 18],
      'CREAM-CSHARE-LP': ['0x0000000000000000000000000000000000000000', 18],
      'BOMB-BTCB-LP': ['0x00C87ce7188F7652d0C0940274cEC5db62f1e825', 18], //avax-cream
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
      'USDT-BNB-LP': ['0x781655d802670bba3c89aebaaea59d3182fd755d', 18], //mim avax
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
    }, 
    baseLaunchDate: new Date('2022-1-30 17:00:00Z'),
    bondLaunchesAt: new Date('2020-01-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2022-1-18T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 43114,
    networkName: 'Avalanche',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
        WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],  //wbnb
        WAVAX: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18], //wavax
        FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // busd
        BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18], //btcb
        MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18], //mim
        SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18], //idk
        SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18], //idk
        SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18], //idk
        CAKE: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18], //mim
        ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0], //zoo
        SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9], //shiba
        'USDT-BNB-LP': ['0x781655d802670bbA3c89aeBaaEa59D3182fD755D', 18], //avax/mim
        'CREAM': ['0xAE21d31a6494829a9E4B2B291F4984AAE8121757', 18], //icecream
        'CREAM-WAVAX-LP': ['0x00C87ce7188F7652d0C0940274cEC5db62f1e825', 18], //creamavax
        'CSHARE-WAVAX-LP': ['0xbD61dFAd83Fc19960476abca1324FfD798234c66', 18], //share
        'CREAM-CSHARE-LP': ['0xbD61dFAd83Fc19960476abca1324FfD798234cbb', 18], //cream sharae
        'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
        'BOMB-BTCB-LP': ['0x00C87ce7188F7652d0C0940274cEC5db62f1e825', 18], //cream avax
        'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
        'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
        'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
        'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18], //idk
    },
    baseLaunchDate: new Date('2022-01-28 17:00:00Z'),
    bondLaunchesAt: new Date('2022-01-30T17:00:00Z'),
    boardroomLaunchesAt: new Date('2022-01-31T17:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: {[contractName: string]: BankInfo} = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding BOMB
        - 2 = LP asset staking rewarding BSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  
  CreamMimRewardPool: {
    name: 'Earn CREAM with MIM',
    poolId: 0,
    sectionInUI: 0,
    contract: 'CreamMimRewardPool',
    depositTokenName: 'MIM',
    earnTokenName: 'CREAM',
    finished: false,
    sort: 3,  
    closedForStaking: true,
  },
  CreamWavaxRewardPool: {
    name: 'Earn Cream with AVAX',
    poolId: 1,
    sectionInUI: 0,
    contract: 'CreamWavaxRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'CREAM',
    finished: false,
    sort: 2,
    closedForStaking: true,
  },
  CreamWavaxLPRewardPool: {
    name: 'Earn CREAM with CREAM/AVAX LP',
    poolId: 2,
    sectionInUI: 0,
    contract: 'CreamWavaxLPRewardPool',
    depositTokenName: 'CREAM-WAVAX-LP',
    earnTokenName: 'CREAM',
    finished: false,
    sort: 1,
    closedForStaking: true,
  },

  CreamAvaxLPCshareRewardPool: {
    name: 'Earn CSHARE with CREAM/AVAX LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'CreamWavaxLPCshareRewardPool',
    depositTokenName: 'CREAM-WAVAX-LP',
    earnTokenName: 'CSHARE',
    finished: false,
    sort: 0,
    closedForStaking: false,
  },
  
  CshareAvaxLPCshareRewardPool: {
    name: 'Earn CSHARE with CSHARE/AVAX LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'CshareWavaxLPCshareRewardPool',
    depositTokenName: 'CSHARE-WAVAX-LP',
    earnTokenName: 'CSHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },

  CreamCshareLPCshareRewardPool: {
    name: 'Earn CSHARE with CREAM/CSHARE LP',
    poolId: 2,
    sectionInUI: 2,
    contract: 'CreamCshareLPCshareRewardPool',
    depositTokenName: 'CREAM-CSHARE-LP',
    earnTokenName: 'CSHARE',
    finished: false,
    sort: 2,
    closedForStaking: true,
  },
};

export default configurations[process.env.NODE_ENV || 'production'];
