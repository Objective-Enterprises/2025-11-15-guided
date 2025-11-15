import { items } from "../../lib/food"
import { FoodItem } from "../../types"
import Image from "next/image"
import { GetServerSideProps } from "next"
import Link from "next/link"

export default function MenuPage (props: {
  items: FoodItem[]
}) {
  const cards = props.items.map(item => {
    const url = `/menu/${item.id}`
    return (
      <Link href={url}>
        <div key={item.id} className='menu-item'>
          <div>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <Image
              alt={item.name}
              src={item.image}
              width={300}
              height={200}
            />
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div className='container'>
      <h1>Menu</h1>
      {cards}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const response = await fetch('food.com/items')
  console.log('items', items)
  return {
    props: {
      items
    }
  }
}