import {
  Secp256k1Program,
  StakeProgram,
  SystemProgram,
  VOTE_PROGRAM_ID
} from "@solana/web3.js";

export interface SignatureInformation {
  signatureType?: SIGNATURE_TYPE,
  signature?: string,
  label?: string,
  value?: string,
  path: string
}

export enum SIGNATURE_TYPE {
  ACCOUNT = "ACCOUNT",
  BLOCK = "BLOCK",
  PROGRAM = "PROGRAM",
  TOKEN = "TOKEN",
  TRANSACTION = "TRANSACTION"
}

export enum PROGRAM_NAME {
  // Native
  CONFIG = "Config Program",
  STAKE = "Stake Program",
  SYSTEM = "System Program",
  VOTE = "Vote Program",
  SECP256K1 = "Secp256k1 Program",

  // SPL
  ASSOCIATED_TOKEN = "Associated Token Program",
  FEATURE_PROPOSAL = "Feature Proposal Program",
  LENDING = "Lending Program",
  MEMO = "Memo Program",
  MEMO_2 = "Memo Program v2",
  SWAP = "Swap Program",
  TOKEN = "Token Program",

  // Other
  WORMHOLE = "Wormhole",
  BONFIDA_POOL = "Bonfida Pool Program",
  BREAK_SOLANA = "Break Solana Program",
  RAYDIUM_LIQUIDITY_1 = "Raydium Liquidity Pool Program v1",
  RAYDIUM_LIQUIDITY_2 = "Raydium Liquidity Pool Program v2",
  RAYDIUM_STAKING = "Raydium Staking Program",
  SERUM_1 = "Serum Program v1",
  SERUM_2 = "Serum Program v2",
  SERUM_3 = "Serum Program v3",

}

export const PROGRAM_NAME_BY_ID = {
  // native built-ins
  Config1111111111111111111111111111111111111: PROGRAM_NAME.CONFIG,
  [StakeProgram.programId.toBase58()]: PROGRAM_NAME.STAKE,
  [SystemProgram.programId.toBase58()]: PROGRAM_NAME.SYSTEM,
  [VOTE_PROGRAM_ID.toBase58()]: PROGRAM_NAME.VOTE,
  [Secp256k1Program.programId.toBase58()]: PROGRAM_NAME.SECP256K1,

  // spl
  ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL: PROGRAM_NAME.ASSOCIATED_TOKEN,
  Feat1YXHhH6t1juaWF74WLcfv4XoNocjXA6sPWHNgAse: PROGRAM_NAME.FEATURE_PROPOSAL,
  Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo: PROGRAM_NAME.MEMO,
  MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr: PROGRAM_NAME.MEMO_2,
  SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8: PROGRAM_NAME.SWAP,
  TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: PROGRAM_NAME.TOKEN,
  LendZqTs7gn5CTSJU1jWKhKuVpjJGom45nnwPb2AMTi: PROGRAM_NAME.LENDING,

  // other
  WormT3McKhFJ2RkiGpdw9GKvNCrB2aB54gb2uV9MfQC: PROGRAM_NAME.WORMHOLE,
  WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6: PROGRAM_NAME.BONFIDA_POOL,
  BrEAK7zGZ6dM71zUDACDqJnekihmwF15noTddWTsknjC: PROGRAM_NAME.BREAK_SOLANA,
  RVKd61ztZW9GUwhRbbLoYVRE5Xf1B2tVscKqwZqXgEr: PROGRAM_NAME.RAYDIUM_LIQUIDITY_1,
  "27haf8L6oxUeXrHrgEgsexjSY5hbVUWEmvv9Nyxg8vQv": PROGRAM_NAME.RAYDIUM_LIQUIDITY_2,
  EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q: PROGRAM_NAME.RAYDIUM_STAKING,
  BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg: PROGRAM_NAME.SERUM_1,
  EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o: PROGRAM_NAME.SERUM_2,
  "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin": PROGRAM_NAME.SERUM_3,
}