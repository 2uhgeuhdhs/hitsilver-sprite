import { useRouteError, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-light text-tiffany-blue mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Страница не найдена</h2>
        <p className="text-gray-600 mb-8">
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-tiffany-blue text-white hover:bg-tiffany-blue-dark">
            <Link to="/">На главную</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 