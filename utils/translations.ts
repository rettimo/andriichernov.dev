import { useRouter } from 'next/router'

export const translations = {
  'uk-UA': {
    name: 'Андрій Чернов',
    about: 'Про мене',
  },
  'en-US': {
    name: 'Andrii Chernov',
    about: 'About me',
  },
}

export const useTranslation = () => {
  const { locale } = useRouter()
  return translations[locale as keyof typeof translations]
}
