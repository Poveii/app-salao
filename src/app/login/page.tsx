import Image from 'next/image'
import bannerLogo from '@/app/assets/bannerLogo.jpg'
import { UserAuthForm } from './components/UserAuthForm'

export default function Login() {
  return (
    <div className="flex w-[640px] flex-col items-center">
      <Image src={bannerLogo} alt="Logo da Barbearia" priority={true} />

      <UserAuthForm />
    </div>
  )
}
