export * from './quantum';
export * from './api';

export interface MarketData {
  symbol: string;
  price: number;
  change24h: number;
  volume: number;
  timestamp: string;
}

export interface Portfolio {
  id: string;
  userId: string;
  positions: Position[];
  totalValue: number;
  pnl: number;
}

export interface Position {
  symbol: string;
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  pnl: number;
}