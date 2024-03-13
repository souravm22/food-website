import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className=' bg-slate-900  h-[100px] flex justify-between'>
        <div className=' h-[200px]'>
            <img className=' object-cover h-[200px] -translate-y-11 border-r-yellow-300' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAABX1BMVEUAAAD////8/PwAAAMEBAT5+fn09PQAAwD39/cAAAXy8vLW1tbq6uosLCy0tLQAAAmPj49vb289PT3Q0NBDQ0MWFhbg4OC5ubnIyMhjY2NoaGiysrK/v7+IiIg2NjZ8fHydnZ1bW1slJSUdHR1NTU1RUVF4eHijo6MiIiKfn58XFxeLi4sxMTGUlJT/64QNBgD/6HlLRDCHe2FjUzTRunjay4eYlGKRhVbjzpI8MCDs2psuJhWEf1zGuYLVxnnOxIYaCAWRik725pWZg1EwIQC1pV94Z0AfFQCrlUhEMwomGhOonmHk2Y99cUGDdk5pZCjgyniwlmRMPxPz5oiAgE//84fJuGezp4JFPyJPSybYxJPz1YHVyWnEvnVrWCZsaE81Lw7RwppZUj3Zuls9HANvY0C1nT7x2m7tz3H/52vKrGQzHxC1pFY+LCMAABYiHwBuXTqnkjijl3aEdjiypHOWBCfUAAALi0lEQVR4nO2bi1vTWBbAz03StGnShtIntKUtFIIDLbKVQawg1qk6QtlqdxgQBh1dV5lxZ2dX//9vz7npi6fCAE39zk+hSZrEc3LuPa9cARiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYZivQDux8Q0SdxJWJjZoKa6TuCUQZXrQclwjSSF0SwSsQctxfcR9wvoOMkJ8u2acFSIKUBJifNCSXB+WULIRnI8Tgxbk+sgJnfxNZtByXCcl0jD6DYdFVG0iO9f2Ndq3pugxfSLf2lidzARFIic3NfkT84nUYEW6UjSYlDmNGOkdSwgRHpxE10BaCCulBJT5zgF0OuYgBbp6LKFrMCJEtr0/qQhfaKASXTlBgUnpjBBzck8DR4j8QAW6elJCJOeCvcw0KHzxS9yGPNVUJFu4QsmuCA2mj+Y06E4zlyuKQ3l8UMKcvELp/iodPQrkUpOdozkhcpdRMZb0Sc8sElck3pWQSyZdv1IY72TeGkxEIhd0NvQ8ClGh+0TAmUnQE/IOWAKPdnc00IrF0csNUVLMJxIl3CzKiswzhPtVxGhxOem0EZk7mG3jBT01UmdDoX6joYoXz9tCToAUTHX88chlbnK9SB3dsiLupLPnn3yCWEY2tGTXju6RI4OOXbGIg6SQIgV1pxMm5izhU/qTXS+AT34sGgxGp/sOfN1laDH0MQFhjbQv0UoUFUVy9LwLbx6Ubs4NZhcboRrMlqSPSUTaR+Iy7IuwB9s+0yQnmqPPtU5bX5YzR2Feka06mseT0ucoaQ9m7xpVUiOyfHK6By0RPF9UDQqu6dsxZjJNGaDP8VLm1ocpFPwd7/P0zhe9vkY1szM/ZsmO60RaIZ+T/+6aJb00phD4e6qnVhyrxamT5x1xQ3h6NDZGtgxPJRX0OXrpMrXJDeGqONtLw7NfUS3OCypOImj7IM1J66LR9GZxVZwUvkzvQHcmdk1XzN0KRxNWMBi0Eql8EWRCMzYidKWjoIdbku2BqmCNWEinY6BZx1LM6Wwy0a6Supg0+6wUaZiYGYzcFyAqVdRoLsr3NSGfr+dsitlU0K2XKSTolmmaCRn+gqQjzkEZFr3eVI76SEXwCdNVcUKItNujmEkGUQmskYQedbJjox2HMjueEkoQ44TPjJx9Xw9higB9WMKCUHF6CkIK+dapXIoGJxowkc51X4zHnFRYpthYZxYgNn/WPT2GKXx9HyD7ceNhd2ha6ZmuGmjYbBDzGf0WyM5rehDCXg5T6PTRq//R/ygKmjDhHHlXrMGEgtrj0C1ASB+qXrKpU3YDeQxz+KHNJHCeoZ8sdUZnz5WUhFKi3lWYXFQgMABZL0M858g+MUBEiFvtJiFWfKe6kYzQ0eNYipmR5wzD0hUcehb5Sxm5MV8xZa4pUskzOjgWDWn0RniJlRyW0h69qQjkO9uygE9P0Hsp5ZSydlSmsWMyKo6ODMmSh7gIJIrx9nTLo3GCJVktTCcmTsnHHNkfxZAosJwsidMHs9eYCvQtXCgKX3/idkxF3NUxgMbI1pT85IfEiprS7/pNXyB2TjKNSmXyNEqpHUwN2OK1y3cVtL2py4xQ2m+GNUs/4W9GZR8DfVJM5qQYNjxbAfehUcU/29u3dOG+OEPrnuhnJ6Q3Csy1d3UxJOvknD7Xr8G4aMutmVamd1gSlRqGO74pNjTLjwpuqtmZgKkzmjaa20/M9CLJCL1S9ngJ1cZSZIKai8pW8VTQNY4G/R51VLbXRKo/m0HHOj8cKjqYqcygqBFKPFHiIsbG6Gz/GVrOpJJKSR5J14qBYcnCx8mBSMeCniZCOk5T/dt7ATqWkQYMlo61VcPC56W3pOdgCcVy49wMRoQxCgYxmnUJqdJY2l1xZJ5ozoRQ65uX9jKgs8lM+lyn6sjVUzS7sNpVfFhNuPoFnVMKiiQ9l6GYiVnKM/GXj7LNcDfpjLnGpZw8LOPkEWU0+WiGxIg0FaNkP13JYDKWpfAxMeOYQaHoWA4G02dVSx5br3AeGvoSPZlL0cBMJEduZcx2uxTH6YjMQE8djGeVk55ENqGkWnqvF6yY+fEz3zChQ6KR7cFXbGcwiQoFOpqRbzGT2ekvuBEqiceHw9dI0iJgRkpOOu3kszOFL743JVejDNUSQE3+/6ELFe+k4VCtxZWZm1I8lpOedbJGq+Nkn2B4himBgV6Pfe17F8oPhqgJLtFkAaUX4GssM0pVsTNsNiRQRyV3vuDyuxJOQ8X77xJPhVZ4Zb4U6eg/Uglz1POvEs+A+mq+0hk+Rx6K0BhV8jcr1pUiFxVb+TNeF064y6JS88M4DV1Ibofetilm7sR4LeblOjfhrpEbVhUl36XdTM5K5SPFidBkaCI2lg2b7sFgeDjawudBTiQ+l+hk4j65UqGbludkU3ioLdgllE1ZlI4rilt/CD0Rjnh4VdTFkXaaL2SdZDKZSaaz4zG3pz+kgYJhGG9hgF+1bRUM4/hx0PzQf9Du2/P7VUNV8Rj+gHojgl4WVM/w+2nLsEHtyqpqqr34N/SwPaVUv33K9eRrVW+riFZQbajcWfoe+mW1VQOW7+KHv3umASv3qt29+6traw9W76/jk7G9rSEYql+Dh7VHP6x+36+igX/qd46p+Lj1pLt3v/H0x2eVjc0G2PaxEe45cHxulf8O8HQJ1KMTr/kcjg7N5/t9Owu1Bur2Y+3diUnsOTT7RW0Z7JXWBrqQP1Blvx/tYmjGQrmBX9u2H1AVA8cz3P8HTki/a2njxU+7eC1s3XNP0TQVp7WKY8J7Cvthu4nir9zHTRueoMBoOhqQi62V6s8LOFB33BN3V6Dfqg0ctbZf3amt4MEVug+ygI/J8NrU1GCl/AmkT/XDztraEnqU3aW7L5/B1h7sLwFU7zZ/Afj1YGnpFWpYXX75s3thvUlGtCvlHXXh5culBVitVPbvvcJA4zUVAR7ffg0UEvx2tbYFv76BH2oNeLAI9bf1Fn6zVv9nq1ot366TDXc3V9+1veraR7S6Co1yFeqr663FJ+V/1Rof7+BA99pI1eD5e5Aew4Y6Gu1dA1bRao13sH+4h9q8a8HnJuweNnFUavD5w2uw5Wh9VvtkkIrb+1CprW+08JTDh9D8iKd5TUU//PaB3KqKbmLvEdhP1+gDA8by4eHvGCi293+rVeBTuUJxxFip1+4syOsq5UUKqDutZajvfWw14NHhGqyjh/JeCEElPrT95Er5AGD/zr/LBxgw6o/fH36GPxZa289fo8Z7lCOQ+f7TXJXXPSrj4zGg2QR4/3YDPVL98E84KKPfgdOSoEFiY9z/gZ78n7/slHehWl5+89MLo1reanz47x788QLNZxvre3XK5NTFV7ZdqUkzordBfruNyqEJ8TYfcLw/fA9P/rfuNRU148m9p/j5em8NpxdstJ6t4GjbaBkf93bLv8PT2xQct28/lMnq/TXUbVNe10T38+fd5guMNy0c2PDxNt4FZ2395QCVOR0cbJXNjYOHtWYVnm/W0ZnCxr2N2gH8sgTNh43a2+aLxubb8mO0k4qOZXut9Vhe19qub979JMN+ffPg8d1mDe35pra9+SP4v/BP3jiYtVWXH9x5tI4q7CzvUJ5awQ9YfAM7q6sVWF79XIFXCxQMDNh9tFyVQxa2vm/IlAAdFWx9/vwO4uRqd7aegOdCP6roimTbsgWFiTftY+bq9qps95dK9jbkEQowbrcKszbwt7NwA2+goov1ZN1hGKSkihmOHz2rX5aQuEGVsqEacpO+MvAvFk6avzcO8YDMi1S5QTew8cdzWblbtKOWWOBjLCejkYi4jQZVVfcEgwp8egiq2qm35HMh5dT2J97BkOm6R3sAUk6j3dxQ2wf6Cv6TdX3nUOcb+TRUrzcAGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhvmn+DwTo8hxLwntEAAAAAElFTkSuQmCC' alt='logo'/>
        </div>
        <div className=' text-yellow-300 text-xl flex justify-start gap-10 items-center font-medium px-2'>
          <div className=' border-b-2  border-yellow-300'>
          <Link to="/">HOME</Link></div>
          <div className=' border-b-2 border-yellow-300'>
          <Link to="/About">ABOUT US</Link>
          
          </div>
          <div className=' border-b-2 border-yellow-300'><Link to="/Categories">CATEGORIES</Link></div>
          <div className=' border-b-2 border-yellow-300'>
          <Link to="/Why">
          WHY CHOOSE COOKER'S DEN</Link></div>

        </div>



    </div>
  )
}

export default Header