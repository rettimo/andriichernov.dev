import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'

export const LocaleSwitcher = () => {
  const { asPath, locale, push } = useRouter()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    push(asPath, undefined, { locale: e.target.value })
  }

  return (
    <div className="ml-5">
      <select
        value={locale}
        onChange={handleChange}
        className="bg-transparent cursor-pointer py-2 text-sm"
      >
        <option className="bg-white text-black" value="en-US">
          EN
        </option>
        <option className="bg-white text-black" value="uk-UA">
          Укр
        </option>
      </select>
    </div>
  )
}
