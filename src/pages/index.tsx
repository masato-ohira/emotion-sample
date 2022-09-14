import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>my-app</title>
      </Head>
      <div css={styles()}>
        <div className='container'>
          <div className='buttons is-centered'>
            <div className='button'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
