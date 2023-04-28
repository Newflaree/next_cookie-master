import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Typography } from '@mui/material'
import { MainLayout } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <Typography variant='h2'>HomePage</Typography>
    </MainLayout>
  )
}
