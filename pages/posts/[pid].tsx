import { Stack } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <Stack textAlign={'center'}>
      <p>
        <strong>404 Not Found</strong>  |  Página `{pid}` não encontrada.</p>
      <Link href='/'>Voltar para <strong>Página Inicial</strong></Link>
    </Stack>
  )
}

export default Post