import { useRouter } from "next/router"
const CoffeeItem = () => {
    const router = useRouter();
    const { coffeeId } = router.query;
    return <h2>
        {coffeeId}
    </h2>
}
export default CoffeeItem;