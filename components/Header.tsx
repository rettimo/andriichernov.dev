import Link from 'next/link'
import { useTranslation } from '@/utils/translations'
import { LocaleSwitcher } from './LocaleSwitcher'

export const Header = () => {
  const translations = useTranslation()

  return (
    <header className="py-5 dark:bg-purple-dark text-purple-900 dark:text-white">
      <div className="container max-w-2xl mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-2xl">
            <Link href="/">{translations.name}</Link>
          </h3>
          <div className="flex items-center">
            <Link className="font-medium underline" href="/about">
              {translations.about}
            </Link>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
