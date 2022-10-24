import create from 'zustand';

export const useState = create((set) => {
  return {
    age: 0,
    updateState: (key, value) => set((state) => ({ ...state, [key]: value })),
  };
});
