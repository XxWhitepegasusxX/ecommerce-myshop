import { create } from 'zustand'

type Item = {
  name: string,
  price: number,
  image: string
}

type CartItem = Item & {
  quantity: number
}

interface CartState {
  items: CartItem[]
  add: (item: Item) => void
  remove: (item: Item) => void
  increaseQuantity: (itemName: string) => void
  decreaseQuantity: (itemName: string) => void
}

const useCartStore = create<CartState>()((set) => ({
  items: [],
  add: (item) => set((state) => {
    const existingItem = state.items.find(i => i.name === item.name);
    if (existingItem) {
      return { items: state.items.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i) };
    }
    return { items: [...state.items, { ...item, quantity: 1 }] };
  }),
  remove: (item) => set((state) => ({ items: state.items.filter(i => i.name !== item.name) })),
  increaseQuantity: (itemName) => set((state) => ({
    items: state.items.map(item => item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item)
  })),
  decreaseQuantity: (itemName) => set((state) => {
    const updatedItems = state.items.map(item => item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item);
    return { items: updatedItems.filter(item => item.quantity > 0) };
  }),
}))

export default useCartStore