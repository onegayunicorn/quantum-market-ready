import { useState, useEffect, useCallback } from 'react';
import { QuantumAPIClient } from './client';

export function useQuantumEngine(baseURL: string, apiKey?: string) {
  const [client] = useState(() => new QuantumAPIClient({ baseURL, apiKey }));
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      setLoading(true);
      const data = await client.getStatus();
      setStatus(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch status');
    } finally {
      setLoading(false);
    }
  }, [client]);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  return { client, status, loading, error, refetch: fetchStatus };
}

export function useQuantumState(client: QuantumAPIClient, initialQubits: number = 4) {
  const [stateId, setStateId] = useState<string | null>(null);
  const [coherence, setCoherence] = useState(0.99997);
  const [purity, setPurity] = useState(0.99999);
  const [loading, setLoading] = useState(false);

  const createState = async (qubits: number = initialQubits) => {
    setLoading(true);
    try {
      const result = await client.createState(qubits);
      setStateId(result.id);
      setCoherence(result.coherence);
      setPurity(result.purity);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const applyGate = async (gateName: string, targetQubit: number) => {
    if (!stateId) throw new Error('No state created');
    setLoading(true);
    try {
      const result = await client.applyGate(stateId, gateName, targetQubit);
      setCoherence(result.coherence);
      setPurity(result.purity);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const measure = async () => {
    if (!stateId) throw new Error('No state created');
    setLoading(true);
    try {
      return await client.measureState(stateId);
    } finally {
      setLoading(false);
    }
  };

  return { stateId, coherence, purity, loading, createState, applyGate, measure };
}