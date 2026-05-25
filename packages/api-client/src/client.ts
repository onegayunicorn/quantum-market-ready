import axios, { AxiosInstance, AxiosError } from 'axios';

export interface QuantumClientOptions {
  baseURL: string;
  apiKey?: string;
  timeout?: number;
}

export class QuantumAPIClient {
  private client: AxiosInstance;

  constructor(options: QuantumClientOptions) {
    this.client = axios.create({
      baseURL: options.baseURL,
      timeout: options.timeout || 30000,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': options.apiKey || '',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error.message);
        return Promise.reject(error);
      }
    );
  }

  // Quantum Engine Operations
  async getStatus(): Promise<any> {
    const response = await this.client.get('/health');
    return response.data;
  }

  async createState(qubits: number): Promise<any> {
    const response = await this.client.post('/v1/quantum/state', { qubits });
    return response.data;
  }

  async applyGate(stateId: string, gateName: string, targetQubit: number): Promise<any> {
    const response = await this.client.post(`/v1/quantum/state/${stateId}/gate`, {
      gate: gateName,
      target: targetQubit,
    });
    return response.data;
  }

  async measureState(stateId: string): Promise<any> {
    const response = await this.client.post(`/v1/quantum/state/${stateId}/measure`);
    return response.data;
  }

  async getCoherenceMetrics(stateId: string): Promise<any> {
    const response = await this.client.get(`/v1/quantum/state/${stateId}/metrics`);
    return response.data;
  }

  // Circuit Operations
  async listCircuits(): Promise<any[]> {
    const response = await this.client.get('/v1/circuits');
    return response.data;
  }

  async getCircuit(circuitId: string): Promise<any> {
    const response = await this.client.get(`/v1/circuits/${circuitId}`);
    return response.data;
  }

  async executeCircuit(circuitId: string, params?: any): Promise<any> {
    const response = await this.client.post(`/v1/circuits/${circuitId}/execute`, params);
    return response.data;
  }

  // WebSocket for real-time updates
  createWebSocketConnection(onMessage: (data: any) => void): WebSocket {
    const ws = new WebSocket(this.client.defaults.baseURL?.replace('http', 'ws') + '/ws');
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    return ws;
  }
}

export const createQuantumClient = (options: QuantumClientOptions): QuantumAPIClient => {
  return new QuantumAPIClient(options);
};