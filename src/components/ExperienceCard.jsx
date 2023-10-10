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
        borderRadius:'7%',
        outline:'2px solid black'
      }}
      contentArrowStyle={{borderRight:"7px solid black"}}
      date="2011 - present"
      dateClassName='mx-4 text-black'
      iconStyle={{background:experience.iconBg}}
      >
        <div className='p-6 '>
          <h3 className='text-[1.6rem] font-bold text-gray-100'>
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