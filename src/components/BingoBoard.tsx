import { createSignal, onMount } from 'solid-js'

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
        {items().map(item => <button class='bingo-square'>{item}</button>)}
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

          .cell {
            background: #ffffbe6;
            border: 2px solid #ccc;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            font-size: 0.9rem;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
          }
        `}
      </style>
    </>
  )
}
