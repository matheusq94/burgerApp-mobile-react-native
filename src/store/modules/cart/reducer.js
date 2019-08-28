import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += action.payload.amount;
          const formattedSubtotal = (
            draft[productIndex].amount * draft[productIndex].price
          ).toFixed(2);
          draft[productIndex].subtotal = formattedSubtotal;
        } else {
          draft.push({
            ...action.payload,
            subtotal: (action.payload.amount * action.payload.price).toFixed(2),
          });
        }
      });
    case '@cart/REMOVE_FROM_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_QUANTITY':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          if (action.payload.increment === true) {
            if (draft[productIndex].amount >= 1) {
              draft[productIndex].amount += 1;

              const formattedSubtotal = (
                draft[productIndex].amount * draft[productIndex].price
              ).toFixed(2);
              draft[productIndex].subtotal = formattedSubtotal;
            }
          } else if (draft[productIndex].amount >= 1) {
            draft[productIndex].amount -= 1;
            if (draft[productIndex].amount === 0) {
              draft[productIndex].amount = 1;
            }

            const formattedSubtotal = (
              draft[productIndex].amount * draft[productIndex].price
            ).toFixed(2);
            draft[productIndex].subtotal = formattedSubtotal;
          }
        }
      });
    default:
      return state;
  }
}
