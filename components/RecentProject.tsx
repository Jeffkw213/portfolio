import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProject = () => {
    return (
        <div className='py-20'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>Recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
                {projects.map(({id, title, des,img, iconLists, link})=>(
                    <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                        <PinContainer title={title} href={link}>
                            <div>
                                <div>
                                    <img src='/bg.png' alt="bg-img"/>
                                </div>
                                <img src={img}/>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProject