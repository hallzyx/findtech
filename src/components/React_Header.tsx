import React from 'react'

const elementos=[
    {
        name:"Productos",
        path:"#"
    },
    {
        name:"Sobre nosotros",
        path:"#"
    },
    {
        name:"Soporte tecnico",
        path:"#"
    }    
]


export const React_Header = () => {
  return (
    <header className='py-7 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
            <img src="profile.png" className='h-8' alt="logo"/>
            <nav>
                <ul className='flex gap-12'>
                    {elementos.map((item)=>{
                        return(
                            <li key={item.name} className='font-link text-xl'><a className='text-[#a97f97] hover:text-[#d4976d] transition-all' href={item.path}>{item.name}</a></li>         
                        )
                        
                    })}
                    {/* <li>
                        <button>
                            Mas Opciones
                        </button>
                    </li> */}
                </ul>
            </nav>
        </div>
    </header>
  )
}
