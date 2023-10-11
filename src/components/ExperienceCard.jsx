import {VerticalTimelineElement } from 'react-vertical-timeline-component'
const ExperienceCard = ({experience})=>{
    return(
      <VerticalTimelineElement
      contentStyle={{
        background:'#0b0c0d',
        padding:0,
        border:2,
        borderColor:'black',
      }}
      contentArrowStyle={{borderRight:"7px solid black"}}
      iconStyle={{background:experience.iconBg,outline:'2px double black'}}
      >
        <div className='py-4 px-6 flex flex-col text-text'>
          <div className=' text-base pb-1 text-text/60'>
            {experience.date}
          </div>
          <h3 className='text-[2.0rem] lg:text-[2.5rem] font-bold mr-8 lg:mr-0'>
            Machine learning engineer
          </h3>
          <div className='text-lg pt-2 text-[#7872B8]'>
            Unify ivy
          </div>
          <ul className='list-disc pl-8 pt-2 '>
            {experience.points.map((point,index)=>{
              return <li className='text-lg tracking-wider'>{point}</li>
            })}
          </ul>
        </div>
      </VerticalTimelineElement>
    )
  } 
export default ExperienceCard;