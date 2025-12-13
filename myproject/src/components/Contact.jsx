import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import EarthCanvas from './canvas/EarthCanvas' // Adjust path if different

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_o6w628f',
      'template_hy42mz8',
      {
        from_name: form.name,
        to_name: 'Biruk Temesgen',
        from_email: form.email,
        to_email: 'biruktml@gmail.com',
        message: form.message,
      },
      'UJGZVvHSIpnkrZGxA'
    ).then(() => {
      setLoading(false)
      alert('Thank you! I will get back to you as soon as possible.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.error(error)
      alert('Something went wrong.')
    })
  }

  return (
    <div id='contact' className='grid grid-cols-1 lg:grid-cols-2 bg-[#dafbeece] py-3 pt-32'>
      <div className='xl:mt-12 flex flex-col gap-10 container'>
        <div className='flex-[0.75] bg-slate-200 p-8 rounded-2xl'>
          <p className='text-3xl font-bold'>Get in touch</p>
          <h3 className='text-6xl font-bold'>Contact.</h3>
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Name</span>
              <input 
                type="text"
                name='name'
                value={form.name}
                required
                onChange={handleChange}
                placeholder='What is your name?'
                className='bg-white py-4 px-6 rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Email</span>
              <input 
                type="email"
                name='email'
                value={form.email}
                required
                onChange={handleChange}
                placeholder='What is your email?'
                className='bg-white py-4 px-6 rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Message</span>
              <textarea
                rows='7'
                name='message'
                value={form.message}
                required
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-white py-4 px-6 rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-white py-3 px-8 outline-none w-fit font-bold shadow-md hover:shadow-none hover:scale-95 duration-300 rounded-xl'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
      <div className='hidden lg:flex'>
        <EarthCanvas />
      </div>
    </div>
  )
}

export default Contact
