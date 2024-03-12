import create from 'zustand';

type Props = {};

export const useTaskStore = create((set) => ({
  title: '',
  workTime: 0,
  breakTime: 0,
  session: 0,
  setTitle: (newTitle: string) => set({ title: newTitle }),
  increaseWorkTime: (newWorkTime: number) => set({ workTime: newWorkTime + 5 }),
  decreaseWorkTime: (newWorkTime: number) => set({ workTime: newWorkTime - 5 }),
  increaseBreakTime: (newBreakTime: number) =>
    set({ breakTime: newBreakTime + 5 }),
  decreaseBreakTime: (newBreakTime: number) =>
    set({ breakTime: newBreakTime - 5 }),
  setSession: (newSession: number) => set({ session: newSession }),
}));
