import WomanImg from '../img/contact/1.png';

export default function Contact() {
  return (
    <section className='section bg-white'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full
          items-center justify-start pt-36 gap-x-8 text-center lg:text-left lg:mt-[-113px]'>
          <div className='lg:flex-1 lg:pt-24 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12 text-[22px] mt-[-10px] ml-[5px]'>
            Let's Capture Your Special Moments!!
            </p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px]
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text' placeholder='Name'></input>
                <input className='outline-none border-b border-b-primary h-[60px]
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text' placeholder='Email address'></input>

              </div>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px]
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text' placeholder='Contact'></input>
                <select
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3'
                  defaultValue='wedding'
                >
                  <option value='' disabled>Event type</option>
                  <option value='wedding'>Wedding</option>
                  <option value='pre-wedding'>Pre-Wedding</option>
                  <option value='fashion'>Fashion/Portfolio</option>
                  <option value='maternity'>Maternity/Others</option>
                  {/* Add more options as needed */}
                </select>

              </div>
              <input className='outline-none border-b border-b-primary h-[60px]
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text' placeholder='Event Details (if any)'></input>
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send Message</button>
            </form>
          </div>
          <div className='flex justify-end lg:w-1/2'>

            <img src={WomanImg} alt='' />


          </div>
        </div>
      </div>
    </section>
  )
}