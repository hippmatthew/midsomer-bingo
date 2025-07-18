import { createSignal } from 'solid-js'

export default function BingoSquare({ text: string }) {
  const [clicked, set_clicked] = createSignal(false)
  const [css_class, set_css_class] = createSignal('bingo-square')

  const toggle = () => {
    set_clicked(!clicked())

    if (clicked())
      set_css_class('bingo-square clicked')
    else
      set_css_class('bingo-square')
  }

  return (
    <>
      <button class={css_class()}>{text}</button>
      <style>
        {`
          .bingo-square {
            background: #ffffbe6;
            border: 2px solid #ccc;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            font-size: 0.9rem;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
            transition: background 250ms ease
          }

          .clicked {
            background: #ccccbe6
            transition: background 250ms ease
          }
        `}
      </style>
    </>
  )
}