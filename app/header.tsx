'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from "@/@public/profile.png"

export function Header() {
  return (
    <header className="mb-8 flex items-center gap-4 justify-start">
      <Image
        src={Avatar}
        alt="Avatar"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Deep Goyal
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
