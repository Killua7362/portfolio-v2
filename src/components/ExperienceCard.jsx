import {VerticalTimelineElement } from 'react-vertical-timeline-component'
const ExperienceCard = ({experience})=>{
    return(
      <VerticalTimelineElement
      contentStyle={{
        background:'#15181a',
        padding:0,
        border:2,
        borderColor:'black',
      }}
      contentArrowStyle={{borderRight:"7px solid white"}}
      iconStyle={{background:'white',outline:`3px solid ${experience.icon_outline}`}}
      icon={
        <div className='w-100 h-100 object-fill'>
          <img src={experience.img_src} className='rounded-full p-1'/>
        </div>
    }
      >
        <div className='py-4 px-6 flex flex-col text-text'>
          <div className=' text-base pb-1 text-text/60'>
            {experience.date}
          </div>
          <h3 className='text-[1.5rem] lg:text-[2.3rem] font-bold mr-8 lg:mr-0'>
            {experience.title}
          </h3>
          <div className={ `text-[1.1rem] pt-3 text-${experience.company_color}` }>
            {experience.company_name}
          </div>
          <ul className='list-disc pl-8 pt-3 '>
            {experience.points.map((point,index)=>{
              return <li className='text-[1.1rem] tracking-wider'>{point}</li>
            })}
          </ul>
        </div>
      </VerticalTimelineElement>
    )
  } 
export default ExperienceCard;