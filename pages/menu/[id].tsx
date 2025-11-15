import { GetServerSidePropsContext } from "next"
import { items } from "../../lib/food"
import { FoodItem } from "../../types"
import Image from "next/image"
import Link from "next/link"

export default function DetailsPage (props: {
  item: FoodItem
}) {
  const joined = props.item.ingredients.join(', ')
  return (
    <div className='dish-details-container'>
      <h1>{props.item.name} (${props.item.price})</h1>
      <div className='dish-image'>
        <Image
          alt={props.item.name}
          src={props.item.image}
          height={300}
          width={600}
        />
      </div>
      <p>{joined}</p>
      <Link href='/menu'>Menu</Link>
    </div>
  )
}

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const item = items.find(item => item.id === context.params?.id)
  return {
    props: {
      item
    }
  }
}