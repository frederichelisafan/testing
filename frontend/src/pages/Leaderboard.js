const Leaderboard = () => {
  return (
    <div className="grow">
      <p className="mt-40 text-[#443091] mb-3 text-3xl font-bold font-inter">
        Leaderboard!
      </p>
      {/* Peringkat 2 */}
      <svg
        className="absolute"
        width="400"
        height="400"
        viewBox="0 0 374 557"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="76" cy="291" r="266" fill="#AD8FEF" fillOpacity="0.15" />
        <circle cx="108" cy="266" r="266" fill="#AD8FEF" fillOpacity="0.15" />
      </svg>

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 place-items-center font-inter">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative sm:mb-3 md:mb-0">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <svg
              className="absolute left-0"
              width="40"
              height="42"
              viewBox="0 0 40 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="-2.5" cy="-0.5" r="42.5" fill="#991A85" />
              <path
                d="M12.4432 23L14.3523 11.3636H15.9432L14.0341 23H12.4432ZM7.19886 20L7.46591 18.4091H16.4205L16.1534 20H7.19886ZM8.35227 23L10.2614 11.3636H11.8523L9.94318 23H8.35227ZM7.875 15.9545L8.13636 14.3636H17.0909L16.8295 15.9545H7.875ZM18.331 23V21.4773L22.3707 17.517C22.7571 17.1269 23.0791 16.7803 23.3366 16.4773C23.5942 16.1742 23.7874 15.8807 23.9162 15.5966C24.045 15.3125 24.1094 15.0095 24.1094 14.6875C24.1094 14.3201 24.026 14.0057 23.8594 13.7443C23.6927 13.4792 23.4635 13.2746 23.1719 13.1307C22.8802 12.9867 22.5488 12.9148 22.1776 12.9148C21.795 12.9148 21.4598 12.9943 21.1719 13.1534C20.884 13.3087 20.6605 13.5303 20.5014 13.8182C20.3461 14.1061 20.2685 14.4489 20.2685 14.8466H18.2628C18.2628 14.108 18.4313 13.4659 18.7685 12.9205C19.1056 12.375 19.5696 11.9527 20.1605 11.6534C20.7552 11.3542 21.437 11.2045 22.206 11.2045C22.9863 11.2045 23.6719 11.3504 24.2628 11.642C24.8537 11.9337 25.312 12.3333 25.6378 12.8409C25.9673 13.3485 26.1321 13.928 26.1321 14.5795C26.1321 15.0152 26.0488 15.4432 25.8821 15.8636C25.7154 16.2841 25.4219 16.75 25.0014 17.2614C24.5848 17.7727 23.9995 18.392 23.2457 19.1193L21.2401 21.1591V21.2386H26.3082V23H18.331Z"
                fill="white"
              />
            </svg>

            <svg
              className="absolute right-0"
              width="60"
              height="60"
              viewBox="0 0 71 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="71" r="71" fill="#C7C7C7" />
            </svg>
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Gabriel Martua
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              gabriel.martua@gmail.com
            </span>
            <div className="flex mt-4 text-center">
              <p className="text-xl w-36 font-bold">
                4750 <br />
                <span className="font-normal">Points</span>
              </p>
            </div>
          </div>
        </div>
        {/* Peringkat 1 */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative sm:mb-3 md:mb-0">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <svg
              className="absolute left-0"
              width="40"
              height="42"
              viewBox="0 0 40 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="-2.5" cy="-0.5" r="42.5" fill="#991A85" />
              <path
                d="M12.4432 23L14.3523 11.3636H15.9432L14.0341 23H12.4432ZM7.19886 20L7.46591 18.4091H16.4205L16.1534 20H7.19886ZM8.35227 23L10.2614 11.3636H11.8523L9.94318 23H8.35227ZM7.875 15.9545L8.13636 14.3636H17.0909L16.8295 15.9545H7.875ZM23.0639 11.3636V23H20.956V13.4148H20.8878L18.1662 15.1534V13.2216L21.0582 11.3636H23.0639Z"
                fill="white"
              />
            </svg>

            <svg
              className="absolute right-0"
              width="60"
              height="60"
              viewBox="0 0 71 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="71" r="71" fill="#FFD600" />
            </svg>
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Frederich Elisafan
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              frederich.elisafan@gmail.com
            </span>
            <div className="flex mt-4 text-center">
              <p className="text-xl w-36 font-bold">
                4750 <br /> <span className="font-normal">Points</span>
              </p>
            </div>
          </div>
        </div>
        {/* Peringkat 3 */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative sm:mb-3 md:mb-0">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <svg
              className="absolute left-0"
              width="40"
              height="42"
              viewBox="0 0 40 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="-2.5" cy="-0.5" r="42.5" fill="#991A85" />
              <path
                d="M12.4432 23L14.3523 11.3636H15.9432L14.0341 23H12.4432ZM7.19886 20L7.46591 18.4091H16.4205L16.1534 20H7.19886ZM8.35227 23L10.2614 11.3636H11.8523L9.94318 23H8.35227ZM7.875 15.9545L8.13636 14.3636H17.0909L16.8295 15.9545H7.875ZM22.5071 23.1591C21.6889 23.1591 20.9616 23.0189 20.3253 22.7386C19.6927 22.4583 19.1927 22.0682 18.8253 21.5682C18.4579 21.0682 18.2628 20.4905 18.2401 19.8352H20.3764C20.3954 20.1496 20.4995 20.4242 20.6889 20.6591C20.8783 20.8902 21.1302 21.0701 21.4446 21.1989C21.759 21.3277 22.1113 21.392 22.5014 21.392C22.9181 21.392 23.2874 21.3201 23.6094 21.1761C23.9313 21.0284 24.1832 20.8239 24.3651 20.5625C24.5469 20.3011 24.6359 20 24.6321 19.6591C24.6359 19.3068 24.545 18.9962 24.3594 18.7273C24.1738 18.4583 23.9048 18.2481 23.5526 18.0966C23.2041 17.9451 22.7836 17.8693 22.2912 17.8693H21.2628V16.2443H22.2912C22.6965 16.2443 23.0507 16.1742 23.3537 16.0341C23.6605 15.8939 23.901 15.697 24.0753 15.4432C24.2495 15.1856 24.3348 14.8883 24.331 14.5511C24.3348 14.2216 24.2609 13.9356 24.1094 13.6932C23.9616 13.447 23.7514 13.2557 23.4787 13.1193C23.2098 12.983 22.8935 12.9148 22.5298 12.9148C22.1738 12.9148 21.8442 12.9792 21.5412 13.108C21.2382 13.2367 20.9938 13.4205 20.8082 13.6591C20.6226 13.8939 20.5241 14.1742 20.5128 14.5H18.4844C18.4995 13.8485 18.687 13.2765 19.0469 12.7841C19.4105 12.2879 19.8954 11.9015 20.5014 11.625C21.1075 11.3447 21.7874 11.2045 22.5412 11.2045C23.3177 11.2045 23.992 11.3504 24.5639 11.642C25.1397 11.9299 25.5848 12.3182 25.8991 12.8068C26.2135 13.2955 26.3707 13.8352 26.3707 14.4261C26.3745 15.0814 26.1813 15.6307 25.7912 16.0739C25.4048 16.517 24.8973 16.8068 24.2685 16.9432V17.0341C25.0866 17.1477 25.7135 17.4508 26.1491 17.9432C26.5885 18.4318 26.8063 19.0398 26.8026 19.767C26.8026 20.4186 26.617 21.0019 26.2457 21.517C25.8783 22.0284 25.3707 22.4299 24.723 22.7216C24.0791 23.0133 23.3404 23.1591 22.5071 23.1591Z"
                fill="white"
              />
            </svg>

            <svg
              className="absolute right-0"
              width="60"
              height="60"
              viewBox="0 0 71 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="71" r="71" fill="#76453B" />
            </svg>
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Marcelino Ryan
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              marcelino.ryan@gmail.com
            </span>
            <div className="flex mt-4 text-center">
              <p className="text-xl w-36 font-bold">
                4750 <br /> <span className="font-normal">Points</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Peringkat 4 dan seterusnya */}
      <div className="grid lg:grid-cols-6 place-items-center border-b-4 md:grid-cols-1 sm:grid-cols-1 mt-20 font-inter">
        <p className="text-xl font-bold">#4</p>
        <img
          className="w-12 h-12 mb-3 mt-3 rounded-full shadow-lg"
          src=""
          alt=""
        />
        <p className="text-md font-bold">Benedictus Chrisvaldo</p>
        <p className="text-xs text-gray-500">benedictus.chrisvaldo@gmail.com</p>

        <p className="text-sm font-bold">
          4750 <br /> <span className="font-normal">Points</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-6 place-items-center border-b-4 md:grid-cols-1 sm:grid-cols-1 font-inter">
        <p className="text-xl font-bold">#5</p>
        <img
          className="w-12 h-12 mb-3 mt-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt=""
        />
        <p className="text-md font-bold">Benedictus Chrisvaldo</p>
        <p className="text-xs text-gray-500">benedictus.chrisvaldo@gmail.com</p>

        <p className="text-sm font-bold">
          4750 <br /> <span className="font-normal">Points</span>
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
