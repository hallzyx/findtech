import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const elements=[
    {
        name:"Roberto Cisneros, Jefe de Logística",
        cita:"Gracias a este sistema automatizado, hemos podido reducir el tiempo que dedicamos al inventario en un 50%. Ahora podemos enfocarnos en hacer crecer el negocio en lugar de preocuparnos por errores en el control de productos.",
        avatar:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
    },
    {
        name:"Álvaro Machado, Gerente de Negocio",
        cita:"Ahora podemos controlar nuestro inventario con precisión y evitar pérdidas de productos gracias a la automatización.",
        avatar:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg?size=626&ext=jpg"
    },
    {
        name:"Flavio Castro, Administrador de Almacén",
        cita:"Este sistema ha transformado la manera en que gestionamos nuestro inventario, reduciendo los errores y mejorando nuestra eficiencia.",
        avatar:"https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?size=626&ext=jpg"
    }
]


export const Slider_Test = () => {




  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        autoplay={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper my-16 container mx-auto"
        
      >
        
            {elements.map((item)=>{
                return(
                    <SwiperSlide key={item.name}>       
                        <div className='h-96 flex flex-col justify-center items-center gap-7'>
                            <p className='font-h2 text-2xl w-1/2 text-center text-[#a97f97]'>"{item.cita}"</p>
                            <div className='flex flex-col items-center gap-2'>
                                <img src={item.avatar} className='rounded-full w-24' />
                                <p className='font-capitulos'>{item.name}</p>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                )
            })}
        
        
      </Swiper>
    </>
  )
}
