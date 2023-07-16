export default function Slider() {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://neilpatel.com/wp-content/uploads/2019/09/tablet-em-teclado-de-laptop-com-mini-cesta-de-comp-1.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="data:image/png;base64,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"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pKitmFthOyr89SBMwhaJVUAQNpU9R672cQ&usqp=CAU"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pKitmFthOyr89SBMwhaJVUAQNpU9R672cQ&usqp=CAU"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-5.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
