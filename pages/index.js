import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [wows, setWows] = useState([
    {
      'Num': 0,
      'title': "Intro",
      'description': "Kyu beta ji? Laga hoga ki m nahi banaunga? Ye lo!"
    },
    {
      'Num': 1,
      'title': "Dancing",
      'description': "Itna to pakka h ki aap best dancer hoge jisse ajtak mne baat ki h. Anjali se to boht hi accha dance karte hoge."
    },
    {
      'Num': 2,
      'title': "Singing",
      'description': "Aapki awaz se lagta h ki boht hi badhiya or surili singer hoge"
    },
    {
      'Num': 3,
      'title': "Choti Height",
      'description': "Khali height k basis pe hi aap mera dil le sakte ho"
    },
    {
      'Num': 4,
      'title': "Bade Nails",
      'description': "Aap to jaan hi gye hoge abtak mujhe nails se kitni obsession h"
    },
    {
      'Num': 5,
      'title': "Straighforward",
      'description': "No description needed!"
    },
    {
      'Num': 6,
      'title': "Rangeen Mijaz",
      'description': "Again, No description needed!"
    },
    {
      'Num': 7,
      'title': "Guitar",
      'description': "Band banaye kya ek?"
    },
    {
      'Num': 8,
      'title': "Topper",
      'description': "Itni sab cheezo k baad bhi topper, abhi to ptani kitne records todne h aapko"
    },
    {
      'Num': 9,
      'title': "Itne saare songs sun rakkhe h",
      'description': "Kaise bhai?????"
    },
    {
      'Num': 10,
      'title': "Law ki knowledge",
      'description': "Lawyer banjao, khulke crimes kar paunga fir m!!"
    },
    {
      'Num': 11,
      'title': "Unique Name",
      'description': "I love your name!"
    },
    {
      'Num': 12,
      'title': "Not egoistic",
      'description': "Mere saath to ni ho"
    },
    {
      'Num': 13,
      'title': "Knows the subtle art of not giving a fuck",
      'description': "Mujhe bhi sikhado?"
    },
    {
      'Num': 14,
      'title': "Childish",
      'description': "Aapke saath reh rehke meri overthinking gayab hone lagi h"
    },
    {
      'Num': 15,
      'title': "Prankster",
      'description': "Kisi din mujhe heart attack mat la dena"
    },
    {
      'Num': 16,
      'title': "Perfectionist",
      'description': "Again, No description needed!"
    },
    {
      'Num': 17,
      'title': "Talks fast",
      'description': "Mere ears distract hote rehte h, aapse 4-5 baar baat karu to ek jagah concentrate karpaunga"
    },
    {
      'Num': 18,
      'title': "Adventurous",
      'description': "Adventurous life ahead!"
    },
    {
      'Num': 19,
      'title': "Dangerous",
      'description': "I wanna live dangerously"
    },
    {
      'Num': 20,
      'title': "Swimming",
      'description': "Mujhe bhi seekhni h yaar"
    },
    {
      'Num': 21,
      'title': "Lambe baal",
      'description': "Nails k baad mere second fav baal hi to h"
    },
    {
      'Num': 22,
      'title': "Lefty",
      'description': "Sach btau to mne ajtak kisi lefty se itni baate ni ki"
    },
    {
      'Num': 23,
      'title': "Religious bhi ho",
      'description': "Ye hona bhi jaruri h"
    },
    {
      'Num': 24,
      'title': "You can make me go blank",
      'description': "Itni power ajtak mne di ni h kisiko, JEE chem section k alawa"
    },
    {
      'Num': 25,
      'title': "10 languages",
      'description': "Basic convo to kar hi sakte ho"
    },
    {
      'Num': 26,
      'title': "Programmer",
      'description': "Bhale hi basics ate ho but jadatar logo se to acchi hi karlete hoge"
    },
    {
      'Num': 27,
      'title': "Random harkate bhi karte ho",
      'description': "Yaad h na raat ko 2 baje gaaliyaan di mujhe?"
    },
    {
      'Num': 28,
      'title': "You're the besttttttttt"
    }
  ])
  const [currWow, setCurrWow] = useState(0)
  return (
    <div className={styles.container}>
      <Head>
        <title>WOW Anoushka!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Me everytime I talk to you = <span className={styles.red}>  ^0^ </span>
        </h1>
        <div onClick={()=>{
          let tmp=currWow
          setCurrWow(tmp+1)
        }} className={styles.card}>
          <span>

            <h1>{wows[currWow].Num + ". " + wows[currWow].title} &rarr;</h1>
            <p>{wows[currWow].description}</p>
          </span>
          <button>Click for next</button>
        </div>
      </main>
    </div>
  )
}
