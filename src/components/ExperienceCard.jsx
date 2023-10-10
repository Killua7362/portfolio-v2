import {VerticalTimelineElement } from 'react-vertical-timeline-component'
const ExperienceCard = ({experience})=>{
    return(
      <VerticalTimelineElement
      contentStyle={{
        background:'#0685ba',
        color:'#fff',
        padding:0,
        border:2,
        borderColor:'black',
        borderRadius:0,
        outline:'2px solid black'
      }}
      contentArrowStyle={{borderRight:"7px solid black"}}
      iconStyle={{background:experience.iconBg,outline:'2px double black'}}
      >
        <div className='py-4 px-6 flex flex-col'>
          <div className='text-black text-base pb-4'>
            {experience.date}
          </div>
          <h3 className='text-[2.5rem] font-bold text-gray-100'>
            Machine learning engineer
          </h3>
          <p className='pt-0 text-2xl font-semibold text-gray-300'>
            Unify IVY lmtd
          </p>
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