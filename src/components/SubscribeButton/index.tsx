import { useSession, signIn } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
    priceId: string;
}



export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession();
    

    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return
        }

        try {
            const response =  await api.post('/subscribe')
            console.log('primeiro')

            const { sessionId } = response.data
             console.log('2')
            
             const stripe = await getStripeJs()
              console.log('3')

            await stripe.redirectToCheckout({sessionId})
             console.log('4')
             
        } catch (err) {
            alert(err.message);
        }
        
    }
    
    return (
        <button 
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubscribe}
        > 
        Subscribe Now
        </button>
    )
}