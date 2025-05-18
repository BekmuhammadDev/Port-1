import React from 'react';

const App = () => {
  return (
    <>
      <header>
        <div className='flex justify-between px-10 py-5'>

          <a href="" className='text-green'>Aripov Bekmuhammad</a>

          <nav >
            <ul className='flex gap-20'>
              <li>
                <a href="">About Me</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Experence</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>

          <select id="">
            <option value="">Uz</option>
            <option value="">Ru</option>
            <option value="">En</option>
          </select>

        </div>
      </header>
      <main>
        <section>Main</section>
      </main>
      <footer>
        Footer
      </footer>

    </>
  );
};

export default App;