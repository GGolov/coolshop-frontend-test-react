import { ChangeEvent, FormEvent, useState } from 'react'

import { Term } from './Interfaces'
import { Operator } from './Types'

function App(): JSX.Element {
  const [newTerm, setNewTerm] = useState<Term>({
    id: 4,
    operator: '+',
    number: 0,
    disabled: false,
  })
  const [terms, setTerms] = useState<Term[]>([
    {
      id: 1,
      operator: '+',
      number: 100,
      disabled: false,
    },
    {
      id: 2,
      operator: '+',
      number: 30,
      disabled: false,
    },
    {
      id: 3,
      operator: '-',
      number: 7,
      disabled: false,
    },
  ])

  function addTerm(term: Term): void {
    setTerms([
      ...terms,
      {
        id: terms.length + 1,
        operator: newTerm.operator,
        number: newTerm.number,
        disabled: false,
      },
    ])
  }

  function deleteTerm(id: number): void {
    setTerms(terms.filter(term => term.id !== id))
  }

  function switchDisabledStateTerm(id: number): void {
    const updatedTerms = terms.map(term => {
      if (term.id === id) {
        term.disabled = !term.disabled
      }

      return term
    })

    setTerms(updatedTerms)
  }

  function changeTermOperator(id: number): void {
    const updatedTerms = terms.map(term => {
      if (term.id === id) {
        term.operator = term.operator === '+' ? '-' : '+'
      }

      return term
    })

    setTerms(updatedTerms)
  }

  function changeTermNumber(e: FormEvent<HTMLInputElement>, id: number): void {
    const updatedTerms = terms.map(term => {
      if (term.id === id) {
        term.number = Number(e.target.value)
      }

      return term
    })

    setTerms(updatedTerms)
  }

  function changeNewTermOperator(event: ChangeEvent<HTMLSelectElement>): void {
    setNewTerm({
      ...newTerm,
      operator: event.target.value as Operator,
    })
  }

  function changeNewTermNumber(event: ChangeEvent<HTMLInputElement>): void {
    setNewTerm({
      ...newTerm,
      number: Number(event.target.value),
    })
  }

  return (
    <div className='text-cool-white'>
      <header className='py-2'>
        <div className='max-w-7xl mx-auto px-8'>
          <h1 className='font-bold text-4xl text-center'>Coolshop React Test</h1>
        </div>
      </header>
      <main className='py-4'>
        <div className='max-w-lg mx-auto flex flex-col gap-8'>
          <ul className='flex flex-col gap-2'>
            {terms.map(term =>
            <li key={term.id} className='flex gap-2'>
              <select className='bg-cool-white bg-opacity-0' onChange={() => changeTermOperator(term.id)}>
                <option value='+' selected={term.operator === '+'} className='text-cool-dark'>+</option>
                <option value='-' selected={term.operator === '-'} className='text-cool-dark'>-</option>
              </select>
              <input
                type='number'
                className='p-1 bg-cool-white bg-opacity-0 border-b-cool-white border-b'
                value={term.number}
                onInput={(e) => changeTermNumber(e, term.id)}
              />
              <button
                className='cursor-pointer p-2 border-2 border-cool-mid-blue rounded-full bg-cool-blue font-semibold'
                onClick={() => deleteTerm(term.id)}
              >
                DELETE
              </button>
              <button
                className='cursor-pointer p-2 border-2 border-cool-mid-blue rounded-full bg-cool-blue font-semibold'
                onClick={() => switchDisabledStateTerm(term.id)}
              >
                {term.disabled ? 'ENABLE' : 'DISABLE'}
              </button>
            </li>
            )}

            <li className='flex gap-2'>
              <select className='bg-cool-white bg-opacity-0' value={newTerm.operator} onChange={changeNewTermOperator}>
                <option value='+' className='text-cool-dark'>+</option>
                <option value='-' className='text-cool-dark'>-</option>
              </select>
              <input
                type='text'
                value={newTerm.number}
                onChange={changeNewTermNumber}
                className='p-1 bg-cool-white bg-opacity-0 border-b-cool-white border-b'
              />
              <button
                className='cursor-pointer p-2 border-2 border-cool-mid-blue rounded-full bg-cool-blue font-semibold disabled:bg-cool-gray-dark disabled:text-cool-gray'
                onClick={addTerm}
                disabled={isNaN(newTerm.number)}
              >
                ADD
              </button>
            </li>
          </ul>
        <span className='font-bold text-4xl'>Result: {terms.reduce((acc, curr) => {return acc + (curr.disabled ? 0 : Number(curr.operator + curr.number))}, 0)}</span>
        </div>
      </main>
    </div>
  )
}

export default App
