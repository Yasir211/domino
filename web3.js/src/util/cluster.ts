const endpoint = {
  http: {
    devnet: 'http://api.devnet.dominochain.com',
    testnet: 'http://api.testnet.dominochain.com',
    'mainnet-beta': 'http://api.mainnet-beta.dominochain.com',
  },
  https: {
    devnet: 'https://api.devnet.dominochain.com',
    testnet: 'https://api.testnet.dominochain.com',
    'mainnet-beta': 'https://api.mainnet-beta.dominochain.com',
  },
};

export type Cluster = 'devnet' | 'testnet' | 'mainnet-beta';

/**
 * Retrieves the RPC API URL for the specified cluster
 */
export function clusterApiUrl(cluster?: Cluster, tls?: boolean): string {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['devnet'];
  }

  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}
