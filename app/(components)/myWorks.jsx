import Link from 'next/link'
import DownloadCV from './myCV'
import Github from './myGitAcc'
import WorkLinks from './myOtherProjects'

export default function myWorks() {
  return (
    <div>
        <h3>Works</h3>
        <WorkLinks />
        <div className='flex'>
            <DownloadCV />
            <Github />
        </div>
    </div>
  )
}
