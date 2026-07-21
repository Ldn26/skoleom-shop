import { stripePromise } from "../lib/stripe";
import { BackRoute } from "../api/routes"; // adjust the path

export const checkout = async (priceId) => {
  try {
    const stripe = await stripePromise;

    const { data } = await BackRoute.post(
      "/stripe/create-checkout-session",
      {
        priceId,
      }
    );

    const { error } = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (error) {
      console.error(error);
    }
  } catch (err) {
    console.error("Checkout failed:", err);
  }
};