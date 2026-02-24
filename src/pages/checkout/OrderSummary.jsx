import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate
              cartItem={cartItem}
              deliveryOptions={deliveryOptions}
            />

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} />

              <DeliveryOptions
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
