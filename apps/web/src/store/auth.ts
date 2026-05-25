import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: async (email: string, password: string) => {
        // Simulated login - replace with actual API call
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          role: 'user'
        };
        set({
          isAuthenticated: true,
          user: mockUser,
          token: 'mock-jwt-token'
        });
      },
      logout: () => {
        set({
          isAuthenticated: false,
          user: null,
          token: null
        });
      }
    }),
    {
      name: 'quantum-auth-storage'
    }
  )
);