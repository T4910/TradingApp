'use client'
import NavBar from '../(components)/NavBar'
import Footer from '../(components)/Footer'
import SideBar from '../(components)/sideBar'
import {useSession, signOut} from 'next-auth/react'
import { createContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { redirect } from 'next/dist/server/api-utils'

// TODO: Prevent users from going back to prohibited pages
// TODO: Make loading signs for the loading components
// TODO: Prevent entry into dashboard page without authentication
// DONE: Make user id availabe to all components and sub-pages by using react context hook
// DONE: change NavBar and Footer when authenticated...
// TODO: Put a sidebar

export const IDContext = createContext(null) 

export default function page() {
  // TODO: get session on server side   NOT POSSIBLE
  let {data} = useSession()

  let [ID, setID] = useState(data?.user.id)
  useEffect(() => setID(data?.user.id), [data?.user.id])

  return (
    <div>
      <NavBar auth={true} />
      <div className='grid place-items-center h-[100dvh] w-screen'>
        <div>
          <p className='font-bold text-5xl mb-4'>Coming soon!</p>
          <p className='text-center'>Please log out <button onClick={async () =>{ await signOut(); redirect('/')}} 
                    className='font-bold text-primary underline underline-offset-1'>log out</button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}


{/* <IDContext.Provider value={ID}>
<div>
  <NavBar auth={true} />
  <SideBar/>
  <div>this is the dashboard</div>
  <Footer />
</div>
</IDContext.Provider> */}

let data = [
  {
    "id": "japan",
    "color": "hsl(101, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 185
      },
      {
        "x": "helicopter",
        "y": 103
      },
      {
        "x": "boat",
        "y": 198
      },
      {
        "x": "train",
        "y": 1
      },
      {
        "x": "subway",
        "y": 141
      },
      {
        "x": "bus",
        "y": 43
      },
      {
        "x": "car",
        "y": 125
      },
      {
        "x": "moto",
        "y": 70
      },
      {
        "x": "bicycle",
        "y": 167
      },
      {
        "x": "horse",
        "y": 261
      },
      {
        "x": "skateboard",
        "y": 107
      },
      {
        "x": "others",
        "y": 187
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(222, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 238
      },
      {
        "x": "helicopter",
        "y": 69
      },
      {
        "x": "boat",
        "y": 70
      },
      {
        "x": "train",
        "y": 281
      },
      {
        "x": "subway",
        "y": 5
      },
      {
        "x": "bus",
        "y": 69
      },
      {
        "x": "car",
        "y": 176
      },
      {
        "x": "moto",
        "y": 14
      },
      {
        "x": "bicycle",
        "y": 73
      },
      {
        "x": "horse",
        "y": 22
      },
      {
        "x": "skateboard",
        "y": 67
      },
      {
        "x": "others",
        "y": 275
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(175, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 7
      },
      {
        "x": "helicopter",
        "y": 209
      },
      {
        "x": "boat",
        "y": 204
      },
      {
        "x": "train",
        "y": 106
      },
      {
        "x": "subway",
        "y": 31
      },
      {
        "x": "bus",
        "y": 91
      },
      {
        "x": "car",
        "y": 39
      },
      {
        "x": "moto",
        "y": 202
      },
      {
        "x": "bicycle",
        "y": 221
      },
      {
        "x": "horse",
        "y": 109
      },
      {
        "x": "skateboard",
        "y": 200
      },
      {
        "x": "others",
        "y": 40
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(204, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 31
      },
      {
        "x": "helicopter",
        "y": 258
      },
      {
        "x": "boat",
        "y": 284
      },
      {
        "x": "train",
        "y": 275
      },
      {
        "x": "subway",
        "y": 280
      },
      {
        "x": "bus",
        "y": 289
      },
      {
        "x": "car",
        "y": 10
      },
      {
        "x": "moto",
        "y": 16
      },
      {
        "x": "bicycle",
        "y": 63
      },
      {
        "x": "horse",
        "y": 108
      },
      {
        "x": "skateboard",
        "y": 113
      },
      {
        "x": "others",
        "y": 167
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(208, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 198
      },
      {
        "x": "helicopter",
        "y": 46
      },
      {
        "x": "boat",
        "y": 176
      },
      {
        "x": "train",
        "y": 159
      },
      {
        "x": "subway",
        "y": 68
      },
      {
        "x": "bus",
        "y": 190
      },
      {
        "x": "car",
        "y": 198
      },
      {
        "x": "moto",
        "y": 197
      },
      {
        "x": "bicycle",
        "y": 42
      },
      {
        "x": "horse",
        "y": 266
      },
      {
        "x": "skateboard",
        "y": 168
      },
      {
        "x": "others",
        "y": 220
      }
    ]
  }
]

