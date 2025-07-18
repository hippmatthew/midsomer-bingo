import { createSignal, onMount } from 'solid-js'

import BingoSquare from './BingoSquare'
import list from '../assets/list.json'

export default function BingoBoard() {
  const [items, set_items] = createSignal<string[]>([])

  onMount(() => {
    let res: string[] = list.items.sort(() => Math.random() - 0.5).slice(0, 25)
    res[12] = 'free'
    set_items(res)
  })

  return (
    <>
      <div class='bingo-board'>
        {items().map(item => <BingoSquare text={item} />)}
      </div>
      <style>
        {`
          .bingo-board {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
            max-width: 800px;
            margin: 2rem auto;
          }
        `}
      </style>
    </>
  )
}
