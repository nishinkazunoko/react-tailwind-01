import './App.css'
function App() {

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container mx-auto flex justify-between p-5 flex-col items-center md:flex-row '>
        <a href="#" className='font-medium text-gray-900 text-xl ml-3 md:mb-0 mb-4'>
          <span>ShinCode</span>
        </a>
        <nav className='space-x-5 text-base'>
          <a href="#home" className='hover:text-blue-400 duration-300 transition-all'>HOME</a>
          <a href="#about" className='hover:text-blue-400 duration-300 transition-all'>About</a>
          <a href="#skills" className='hover:text-blue-400 duration-300 transition-all'>Skills</a>
          <a href="#blog" className='hover:text-blue-400 duration-300 transition-all'>Blog</a>
        </nav>
      </div>

    </header>
    <section className='text-gray-700' id='home'>
      <div className='
      container mx-auto 
      py-20 px-5 
      flex flex-col md:flex-row 
      items-center
      '>
        <div className='
          md:w-1/2 
          flex-grow 
          mb-16 md:mb-0
          lg:pr-24 md:pr-16
          text-center md:text-left
        '>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
            Hi<br/>
            I'm ShinCode<br/>
            Web Developer
          </h1>
          <p className='mb-8 leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dignissimos atque voluptate blanditiis necessitatibus reiciendis tenetur amet? Repudiandae, cupiditate illum.</p>
          <button className='
            text-white text-lg 
            py-2 px-6 
            border-0 rounded 
            bg-green-500 
            hover:bg-green-600 duration-300
          '>
            Contact
            </button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/icon2.jpg" alt="" />
        </div>
      </div>
    </section>

    <section id='about' className='text-gray-700 border-t border-gray-100'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sint? Earum modi quidem dolor adipisci minus, neque molestias iusto explicabo aperiam alias. Nostrum sunt cumque, deserunt qui vitae fugit molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis vel sunt assumenda velit iure, aperiam, dolore aliquid perferendis numquam cumque, quae officiis esse ab laborum dolores quo natus. Quas recusandae dolore modi corporis aliquam similique repellendus necessitatibus molestias ullam aut adipisci incidunt, unde, reprehenderit quod iure tenetur possimus omnis minus fugit eveniet atque, laudantium praesentium.</p>
        </div>
        {/* カードのdivタグ */}
        <div className='flex flex-wrap'>

        {/* カード */}
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className="flex items-center mb-3 gap-2">
                <div className='bg-green-500 text-white rounded-full p-1'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat provident, cupiditate distinctio explicabo quas perferendis dignissimos mollitia adipisci molestiae unde non aut omnis tempora praesentium nesciunt ex velit? Blanditiis.
                </p>
                <a href="#" className='flex mt-3 text-green-500 items-center hover:opacity-70 group transition-all duration-300'>もっと見る
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='group-hover:translate-x-2 transition-all duration-300'>
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
                </a>
              </div>

            </div>
          </div>
        {/* カード */}
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className="flex items-center mb-3 gap-2">
                <div className='bg-green-500 text-white rounded-full p-1'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat provident, cupiditate distinctio explicabo quas perferendis dignissimos mollitia adipisci molestiae unde non aut omnis tempora praesentium nesciunt ex velit? Blanditiis.
                </p>
                <a href="#" className='flex mt-3 text-green-500 items-center hover:opacity-70 group transition-all duration-300'>もっと見る
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='group-hover:translate-x-2 transition-all duration-300'>
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
                </a>
              </div>

            </div>
          </div>

        {/* カード */}
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className="flex items-center mb-3 gap-2">
                <div className='bg-green-500 text-white rounded-full p-1'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat provident, cupiditate distinctio explicabo quas perferendis dignissimos mollitia adipisci molestiae unde non aut omnis tempora praesentium nesciunt ex velit? Blanditiis.
                </p>
                <a href="#" className='flex mt-3 text-green-500 items-center hover:opacity-70 group transition-all duration-300'>もっと見る
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='group-hover:translate-x-2 transition-all duration-300'>
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
                </a>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>

    <section id='skills' className='text-gray-700 border-t border-gray-100'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {/* left side */}
        <div className='mb-10 lg:mb-0 lg:w-1/2 flex justify-center'>
          <img src="./img/pc.jpg" alt=""  className='rounded'/>
        </div>

        {/* right side */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10'>My Skills</h1>
          <div className='w-full'>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
            </div>
          </div>

          <div className='w-full'>
            <h2>CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
            </div>
          </div>

          <div className='w-full'>
            <h2>javascript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"50%"}}>50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default App
