export const cardComponents = (product) => {
    return(
        `<div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[300px]">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-[300px]">
          <img
            src = ${product?.image || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAAPFBMVEX///+rq6unp6fMzMykpKTp6enx8fHU1NS0tLS6urr6+vqwsLDHx8fPz8/w8PD19fXa2trh4eHl5eXAwMAzrysnAAADpklEQVR4nO2c2ZKDIBAAE6KJmsPr//91c69yKKREHav7dctl6YVhGJTdDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZqE5LMU1XbrvVupELUe9dO9t5PsFyZfuvY1FjWRL994GRnQeRs5NOj+rNpIVCzSMER2M6GBEByM6GNHBiI4cI+mhbdtLE12SFCO3XKnH36ryJnLDQoxU/xm2usZtWIaRWu1nUyLCSNnfh6moE0eEkYvqK4lavpBgpNA368ktYsMSjKSJbqSK2LAEI7VuRB0iNizBSGUYuURsWIIRc4zEXH8lGDkacSTm6YEEI7tMX2zKiA2LMFL185HAMJJWdcj2UIQRfZCEDJEyT5JkH7BcyzBSnrujJORY9r0BSPzXaxlGHv/pz5TJQoQUn4Mw5T1KhBi5x5LseUadnYJKRlcVPLLEGNkVt7qq0rASWtOZa7nno3KM/EB5/mGF2rSRvLdqe+Z1WzZy0Moq6ujz1IaNNJoQz1CyXSO9IPIeJD5ZyXaN6KXIJx6hZLNGKpuQ/Xl8A7BVI6nNx+MAbPTJjRopjAKCdyjZqJHWOmeeSsay+W0asQcRv1CySSM3t4/7IGmHH96ikW8JwKHkNPj0Fo3o2bvBYCiRayRt84u1a/WYkOHfK9bISam92lvW0qOZvRvzZqgwINXI+5zP0rd8dIgMHxwLNdI4+zYaRF643y6QaaT4nxlaxtXo538O3LJlGmk7fetlXKW9/ybuUCLSSC8l7WZchTt7N5S4QolEI1pK2sm4Tt5C7mPLEUoEGjH3tZ++OUoAjkHiKAwINGIWx86vHxTjmUhPib0wIM+IZV/7DpOhn/bZjyvEGbHOjGffQoLIG1thQJoRV3HsFhZEXqjWolyaEUdKqvLyl89hbYUBYUbcKWlYVP1i7p5lGfFOSb05G9JlGfHZ14ZhZiWijFwnF2IJJZKM1NP7eKCFEkFGLEfbk5D1sxJBRvz3tWFohQE5Rk6etaAflPQKA2KMpJFGyJNuYUCKkdJ1tD0JXfVSjFjfj5mMbigRYmToaHsSJf+FARlGftjXhvJ9j1GEEef7MdOhvu8xijASN4i8lXy+dJNgxPhOLw7vL80FGDnO4uN7FCbAyGx3xb0KA+s3cpntysnkGUpWb6Q8zcjjP7B6I7ODEZ1VGznfjrNzW7WRfbIA6zayFBjRWeWtxhU3X+vUi92Ofoh9CR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA2+AN7/TZH3Ls1kQAAAABJRU5ErkJggg=="}
            alt="card-image" class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${product?.title || "untitled product"}
            </p>
            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
             $${product?.price || "unknown"}
            </p>
          </div>
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
           ${product?.description || "unavaible"}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button">
            Add to Cart
          </button>
        </div>
      </div>`
    )
}