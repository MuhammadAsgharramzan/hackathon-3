import { Product } from "../types/product"



export const addToCart = (product : Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]') as Product[]

    const existingProductIndex = cart.findIndex(item => item._id === product._id) 

    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1
    }
    else {
        cart.push({
            ...product, inventory: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const clearCart = () => {
    localStorage.removeItem("cart"); // for clear cart items from local storage
  };



// import { Product } from "../types/product";

// const getCart = (): Product[] => {
//     try {
//         const storedCart = localStorage.getItem('cart');
//         return storedCart ? JSON.parse(storedCart) as Product[] : [];
//     } catch (error) {
//         console.error("Error parsing cart data:", error);
//         return [];
//     }
// };

// export const addToCart = (product: Product) => {
//     const cart = getCart();
//     const existingProductIndex = cart.findIndex(item => item._id === product._id);

//     if (existingProductIndex > -1) {
//         cart[existingProductIndex].inventory = (cart[existingProductIndex].inventory || 0) + 1;
//     } else {
//         cart.push({ ...product, inventory: 1 });
//     }

//     try {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     } catch (error) {
//         console.error("Error saving cart data:", error);
//     }
// };

// export const removeFromCart = (productId: string) => {
//     const cart = getCart().filter(item => item._id !== productId);
//     try {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     } catch (error) {
//         console.error("Error removing item from cart:", error);
//     }
// };

// export const updateCartQuantity = (productId: string, quantity: number) => {
//     const cart = getCart();
//     const productIndex = cart.findIndex(item => item._id === productId);

//     if (productIndex > -1) {
//         if (quantity > 0) {
//             cart[productIndex].inventory = quantity;
//         } else {
//             cart.splice(productIndex, 1);
//         }
//         try {
//             localStorage.setItem('cart', JSON.stringify(cart));
//         } catch (error) {
//             console.error("Error updating cart quantity:", error);
//         }
//     }
// };

// export const getCartItems = (): Product[] => {
//     return getCart();
// };

// export const clearCart = () => {
//     try {
//         localStorage.removeItem("cart");
//     } catch (error) {
//         console.error("Error clearing cart:", error);
//     }
// };

// import { Product } from "../types/product";

// const getCart = (): Product[] => {
//     try {
//         const storedCart = localStorage.getItem('cart');
//         const parsedCart = storedCart ? JSON.parse(storedCart) : [];
        
//         // ✅ Check if parsedCart is an array, otherwise return an empty array
//         return Array.isArray(parsedCart) ? parsedCart : [];
//     } catch (error) {
//         console.error("Error parsing cart data:", error);
//         return [];
//     }
// };

// export const addToCart = (product: Product) => {
//     const cart = getCart(); // ✅ Always ensures cart is an array
//     const existingProductIndex = cart.findIndex(item => item._id === product._id);

//     if (existingProductIndex > -1) {
//         cart[existingProductIndex].inventory = (cart[existingProductIndex].inventory || 0) + 1;
//     } else {
//         cart.push({ ...product, inventory: 1 });
//     }

//     try {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     } catch (error) {
//         console.error("Error saving cart data:", error);
//     }
// };
