interface Project {
  title: string;
  link: string;
  image: string;
  description: string[];
  technologies: string[];
}

interface ProjectsLanguageContent {
  title: string;
  projects: Project[];
}

interface ProjectsContent {
  en: ProjectsLanguageContent;
  es: ProjectsLanguageContent;
}

export const projectsContent: ProjectsContent = {
  en: {
    title: 'Projects',
    projects: [
      {
        title: 'Simple Wallet Connection & Balance Display',
        link: 'www.project1.com',
        image: '/simple_wallet.webp',
        description: [
          "Connect to user's wallet (using wagmi's useConnect hook).",
          'Display connected wallet address.',
          'Fetch and display native token balance (e.g., ETH on Ethereum, or the native token of a test network you choose).',
          'Fetch and display balances of a few popular ERC-20 tokens.',
        ],
        technologies: ['React', 'viem/wagmi', 'MetaMask'],
      },
      {
        title: 'Basic NFT Viewer',
        link: 'https://nft-market-place-swart.vercel.app/',
        image: '/nft_viewer.webp',
        description: [
          'Connect wallet',
          'User inputs an NFT contract address and token ID.',
          'Fetch NFT metadata (image, name, description) using viem/wagmi functions (e.g., readContract for ERC-721 or ERC-1155 contracts).',
          'Display the NFT image and metadata.',
        ],
        technologies: ['React', 'viem/wagmi', 'Web3 wallet', 'NFT contract'],
      },
      {
        title: 'Simple Token Transfer UI',
        link: 'https://nft-market-place-swart.vercel.app/',
        image: '/basic_transfer.webp',
        description: [
          'Connect wallet',
          'User inputs recipient address and token amount.',
          'Allow user to select an ERC-20 token from a dropdown (you can pre-populate a list of test tokens).',
          "Use wagmi's usePrepareContractWrite and useContractWrite hooks (or similar viem functions if you want to go more low-level) to prepare and send a token transfer transaction.",
          'Display transaction status (pending, success, failure).',
        ],
        technologies: [
          'React',
          'viem/wagmi',
          'Web3 wallet',
          'ERC-20 token contract',
        ],
      },
    ],
  },
  es: {
    title: 'Proyectos',
    projects: [
      {
        title: 'Conexión de billetera y visualización de saldo',
        link: 'www.project1.com',
        image: '/simple_wallet.webp',
        description: [
          'Conecta a la billetera del usuario (utilizando el hook useConnect de wagmi).',
          'Muestra la dirección de la billetera conectada.',
          'Obtiene y muestra el saldo de la moneda base (por ejemplo, ETH en Ethereum, o el token nativo de una red de prueba que elijas).',
          'Obtiene y muestra los saldos de algunos de los tokens ERC-20 más populares.',
        ],
        technologies: ['React', 'viem/wagmi', 'MetaMask'],
      },
      {
        title: 'Visualizador básico de NFT',
        link: 'www.project2.com',
        image: '/nft_viewer.webp',
        description: [
          'Conecta la billetera',
          'El usuario ingresa una dirección de contrato de NFT y un ID de token.',
          'Obtiene los metadatos del NFT (imagen, nombre, descripción) utilizando funciones de viem/wagmi (por ejemplo, readContract para contratos ERC-721 o ERC-1155).',
          'Muestra la imagen y los metadatos del NFT.',
        ],
        technologies: ['React', 'viem/wagmi', 'Web3 wallet', 'NFT contract'],
      },
      {
        title: 'Interfaz de transferencia de tokens básica',
        link: 'www.project3.com',
        image: '/basic_transfer.webp',
        description: [
          'Conecta la billetera',
          'El usuario ingresa una dirección de destinatario y una cantidad de tokens.',
          'Permite al usuario seleccionar un token ERC-20 de un menú desplegable (puedes pre-cargar una lista de tokens de prueba).',
          'Utiliza los hooks usePrepareContractWrite y useContractWrite de wagmi (o funciones viem similares si quieres ir más bajo nivel) para preparar y enviar una transacción de transferencia de tokens.',
          'Muestra el estado de la transacción (pendiente, éxito, fallo).',
        ],
        technologies: [
          'React',
          'viem/wagmi',
          'Web3 wallet',
          'ERC-20 token contract',
        ],
      },
    ],
  },
};
