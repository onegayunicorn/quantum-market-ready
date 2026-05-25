interface QuantumGateProps {
  gate: {
    id: string;
    name: string;
    symbol: string;
    description: string;
  };
  onClick: () => void;
}

export function QuantumGate({ gate, onClick }: QuantumGateProps) {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all text-left group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center mb-2 group-hover:bg-primary-500/30">
        <span className="font-mono font-bold">{gate.symbol}</span>
      </div>
      <p className="font-semibold text-sm">{gate.name}</p>
      <p className="text-xs text-white/50 mt-1">{gate.description}</p>
    </button>
  );
}