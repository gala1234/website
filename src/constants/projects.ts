export const projectsContent = {
  en: {
    title: 'Projects',
    projects: [
      {
        title: 'Simple Wallet Connection & Balance Display',
        description: [
          "Connect to user's wallet (using wagmi's useConnect hook)",
          'Display connected wallet address.',
          'Fetch and display native token balance (e.g., ETH on Ethereum, or the native token of a test network you choose)',
          'Fetch and display balances of a few popular ERC-20 tokens.',
        ],
      },
    ],
  },
  es: {
    title: 'Proyectos',
    projects: [
      {
        title: 'Conexión de billetera y visualización de saldo',
        description: [
          'Conecta a la billetera del usuario (utilizando el hook useConnect de wagmi)',
          'Muestra la dirección de la billetera conectada.',
          'Obtiene y muestra el saldo de la moneda base (por ejemplo, ETH en Ethereum, o el token nativo de una red de prueba que elijas)',
          'Obtiene y muestra los saldos de algunos de los tokens ERC-20 más populares.',
        ],
      },
    ],
  },
  technologies: ['React', 'viem (under the hood via wagmi)', 'MetaMask'],
};
